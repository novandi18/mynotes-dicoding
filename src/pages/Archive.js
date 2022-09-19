import { useContext, useEffect } from "react";
import Header from "../components/Header";
import ListNotes from "../components/ListNotes";
import BtnNew from "../components/BtnNew";
import AppContext from "../contexts/AppContext";

const Archive = () => {
  const { translate } = useContext(AppContext);

  useEffect(() => {
    document.title = translate === "id" ? "Catatan Arsip" : "Archived Note";
  }, [translate]);

  return (
    <section>
      <Header title={translate === "id" ? "Catatan Arsip" : "Archived Note"} />
      <ListNotes type="archived" translate={translate} />
      <BtnNew />
    </section>
  );
};

export default Archive;
