import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Sean Craig</h1>
      <div className="links">
        <NavLink exact={true} activeClassName="active" to="/">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="active" to="/resume">
          Resume
        </NavLink>
      </div>
    </nav>
    // <Grid container spacing={2}>
    //   <Grid item xs={8}>
    //     <h1>Sean Craig</h1>
    //   </Grid>
    //   <Grid item xs={4}>
    //     <NavLink
    //       exact={true}
    //       to="/"
    //       style={(isActive) => ({
    //         borderBottom: isActive ? "5px solid red" : "",
    //       })}
    //     >
    //       About
    //     </NavLink>
    //     <NavLink
    //       to="/portfolio"
    //       style={(isActive) => ({
    //         borderBottom: isActive ? "5px solid red" : "",
    //       })}
    //     >
    //       Portfolio
    //     </NavLink>
    //     <NavLink
    //       to="/contact"
    //       style={(isActive) => ({
    //         borderBottom: isActive ? "5px solid red" : "",
    //       })}
    //     >
    //       Contact
    //     </NavLink>
    //     <NavLink
    //       to="/resume"
    //       style={(isActive) => ({
    //         borderBottom: isActive ? "5px solid red" : "",
    //       })}
    //     >
    //       Resume
    //     </NavLink>
    //   </Grid>
    // </Grid>
  );
};

export default Navbar;
