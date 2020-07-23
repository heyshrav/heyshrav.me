import React from "react";

// import { Switch, Link } from "react-router-dom";

function Navbar() {
  return (
    // <div>
    //   <Switch>
    //     <div className="nav navbar" id="TopNav">
    //       <Link to="/" className="active">
    //         Home
    //       </Link>
    //       <Link to="/">About</Link>
    //       <Link to="/">Contact</Link>

    //       <Link to="/">Portfolio</Link>
    //       <Link to="/" className="highlighted">
    //         Read Blog
    //       </Link>
    //     </div>
    //   </Switch>
    // </div>

    <div>
      <nav className="navbar " role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <a className="navbar-brand" href="heyshrav.me">
            Brand
          </a>
          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <a href="heyshrav.me">Menu</a>
              </li>
              <li>
                <a href="heyshrav.me">Menu</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="heyshrav.me">Link</a>
              </li>
              <li>
                <a href="heyshrav.me">Link</a>
              </li>
              <li>
                <a href="heyshrav.me">Link</a>
              </li>
              <li className="dropdown">
                <a
                  href="heyshrav.me"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Dropdown <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="heyshrav.me">Action</a>
                  </li>
                  <li>
                    <a href="heyshrav.me">Another action</a>
                  </li>
                  <li>
                    <a href="heyshrav.me">Something else here</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="heyshrav.me">Separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
