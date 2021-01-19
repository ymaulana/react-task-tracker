import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Waddap!!",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JSX
// const headingStyles = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
