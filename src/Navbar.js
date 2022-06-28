const { Link } = require("react-router-dom");

const Navbar = () => {
  return (
    <nav>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/profile">Profile</Link></span>
    </nav>
    );
};

export default Navbar;
