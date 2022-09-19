import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import Mode from "../components/Mode";
import Translate from "../components/Translate";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import useAlert from "../hooks/useAlert";
import { login, putAccessToken } from "../utils/network-data";
import Modal from "../components/Modal";
import { useEffect } from "react";

const SignIn = ({ authLogin }) => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const { translate } = useContext(AppContext);
  const [alert, setAlert] = useAlert();

  useEffect(() => {
    document.title = translate === "en" ? "Sign In" : "Masuk Akun";
  }, [translate]);

  const onSignIn = async (e) => {
    e.preventDefault();
    const { error, data, message } = await login({ email, password });
    if (error) {
      setAlert(true, message);
    } else {
      putAccessToken(data.accessToken);
      authLogin(data);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-10">
      <div className="mb-4 flex gap-2 rounded-full bg-gray-300 p-1 dark:bg-gray-700">
        <Mode />
        <Translate />
      </div>
      <div className="rounded-lg bg-gray-300 p-7 dark:bg-gray-800">
        <span className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          {translate === "id" ? "Masuk Akun" : "Account Login"}
        </span>
        <form
          className="mt-5 text-gray-700 dark:text-gray-300"
          onSubmit={onSignIn}
        >
          <div className="mb-3 flex flex-col">
            <label className="text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={setEmail}
              placeholder={`${
                translate === "id" ? "Masukkan" : "Insert"
              } Email`}
              className="mt-1 rounded-lg border-2 border-transparent bg-gray-400 bg-opacity-30 py-3 px-4 text-gray-700 outline-none transition-all duration-100 hover:bg-opacity-50 focus:border-blue-700 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-300 dark:hover:bg-opacity-70 sm:w-[400px]"
              required
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={setPassword}
              placeholder={`${
                translate === "id" ? "Masukkan" : "Insert"
              } Password`}
              className="mt-1 rounded-lg border-2 border-transparent bg-gray-400 bg-opacity-30 py-3 px-4 text-gray-700 outline-none transition-all duration-100 hover:bg-opacity-50 focus:border-blue-700 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-300 dark:hover:bg-opacity-70"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 mb-2 w-full rounded-lg bg-blue-700 py-3 text-gray-300 outline-none transition-all duration-100 hover:bg-blue-800"
          >
            {translate === "id" ? "Masuk" : "Login"}
          </button>
        </form>
      </div>
      <div className="mt-5 flex text-sm">
        <span className="mr-1 text-gray-700 dark:text-gray-300">
          {translate === "id" ? "Belum punya akun?" : "Don't have an account?"}
        </span>
        <Link to="/signup" className="text-blue-500 hover:underline">
          {translate === "id" ? "Daftar disini" : "Register here"}
        </Link>
      </div>

      <Modal isOpen={alert.isOpen} setIsOpen={setAlert} title={alert.title} />
    </div>
  );
};

SignIn.propTypes = {
  authLogin: PropTypes.func,
};

export default SignIn;
