import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    )
  }
    
  export default Navbar;
    