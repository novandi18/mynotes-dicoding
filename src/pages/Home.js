import { useContext, useEffect } from "react";
import Header from "../components/Header";
import ListNotes from "../components/ListNotes";
import BtnNew from "../components/BtnNew";
import AppContext from "../contexts/AppContext";

const Home = (ref) => {
  const { translate } = useContext(AppContext);

  useEffect(() => {
    document.title = translate === "id" ? "Catatan Aktif" : "Active Note";
  }, [translate]);

  return (
    <section>
      <Header title={translate === "id" ? "Catatan Aktif" : "Active Note"} />
      <ListNotes type="active" translate={translate} />
      <BtnNew />
    </section>
  );
};

export default Home;
