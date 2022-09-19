import PropTypes from "prop-types";

const TitlePage = ({ title }) => {
  return (
    <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
      {title}
    </span>
  );
};

TitlePage.propTypes = {
  title: PropTypes.string,
};

export default TitlePage;
