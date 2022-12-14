import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";
import BlogCard from "./components/BlogCard";

function App() {
  return (
    <div className="App">
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="../">
                  <img src="../public/images/Heart.png" alt="Logo" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <ul>
                      <li className="is-active">
                        <a>Home</a>
                      </li>
                      <li>
                        <a href="">Examples</a>
                      </li>
                      <li>
                        <a href="">Features</a>
                      </li>
                      <li>
                        <a href="">Team</a>
                      </li>
                      <li>
                        <a href="">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <BlogCard />
              </div>
              <div className="column is-6 is-offset-1">
                <Map />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered">
              <ul>
                <li>
                  <a>And this is the bottom</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <script src="../js/bulma.js"></script>
    </div>
  );
}

export default App;
