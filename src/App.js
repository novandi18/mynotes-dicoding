import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import NotFound from "./pages/NotFound";
import Notes from "./pages/Notes";
import New from "./pages/New";
import { useEffect, useMemo, useState } from "react";
import AppContext from "./contexts/AppContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { getUserLogged, putAccessToken } from "./utils/network-data";

function App() {
  const [initializing, setInitializing] = useState(true);
  const [authedUser, setAuthedUser] = useState(null);
  const [translate, setTranslate] = useState(
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "id"
  );
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "dark"
  );
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    putAccessToken("");
    setAuthedUser(null);
    if (location.pathname !== "/") navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("lang", translate);
    localStorage.setItem("mode", mode);
    triggerMode();

    const getAuthedUser = async () => {
      const { data } = await getUserLogged();
      return data;
    };

    getAuthedUser().then((data) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, [translate, authedUser, mode]);

  const toggleTranslate = () => {
    setTranslate((prev) => {
      return prev === "id" ? "en" : "id";
    });
  };

  function switchMode() {
    setMode((prev) => {
      return prev === "dark" ? "light" : "dark";
    });
  }

  const triggerMode = () => {
    const root = document.documentElement;
    root.classList.remove(mode === "light" ? "dark" : "light");
    root.classList.add(mode === "light" ? "light" : "dark");
  };

  const contextValue = useMemo(() => {
    return {
      translate,
      toggleTranslate,
      search,
      setSearch,
      mode,
      switchMode,
    };
  }, [translate, search, mode]);

  if (initializing) return null;

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
        {authedUser ? (
          <>
            <header>
              <Navbar logout={onLogout} name={authedUser.name} />
            </header>
            <main className="px-5 text-gray-300 md:px-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="archive" element={<Archive />} />
                <Route path="notes/:id" element={<Notes />} />
                <Route path="notes/new" element={<New />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </>
        ) : (
          <Routes>
            <Route path="/*" element={<SignIn authLogin={setAuthedUser} />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
