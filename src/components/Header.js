import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("object clicked");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="navy" text="Add" onClick={onClick} />
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
