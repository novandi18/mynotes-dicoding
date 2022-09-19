import Search from "./Search";
import TitlePage from "./Title";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div className="py-5">
      <TitlePage title={title} />
      <Search />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
