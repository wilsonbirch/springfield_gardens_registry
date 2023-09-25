import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [path, setPath] = useState('/');
  const navItems = [
    {
      title: 'Home',
      path: '/',
    },
    // {
    //   title: 'About',
    //   path: '/about',
    // },
    // {
    //   title: 'Dashboard',
    //   path: '/dashboard',
    // },
  ];

  return (
    <div>
      {/* <div
        class="title-bar"
        data-responsive-toggle="springfield-gardens-registry-nav"
        data-hide-for="small"
      >
        <button
          class="menu-icon"
          type="button"
          data-toggle="springfield-gardens-registry-nav"
        ></button>
        <div class="title-bar-title">
          Springfield Gardens Registry
        </div>
      </div> */}

      <div
        className="top-bar"
        id="springfield-gardens-registry-nav"
      >
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Springfield Gardens Registry
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="dropdown menu" data-dropdown-menu>
            <div className="columns">
              <ul className="menu">
                {navItems.map((item, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => setPath(item.path)}
                    >
                      <Link
                        className={`clear button${
                          path === item.path
                            ? ''
                            : ' secondary'
                        }`}
                        to={item.path}
                      >
                        {item.title}
                      </Link>
                    </button>
                  );
                })}
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
