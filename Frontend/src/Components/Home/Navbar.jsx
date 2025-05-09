import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate("/cart"); // If authenticated, navigate to the cart page
    } else {
      alert("Please log in to access the cart.");
    }
  };

  return (
    <nav className="bg-zinc-100 text-black h-[80px] p-4 rounded-xl flex justify-between items-center px-10 relative">
    <svg className="" width="160" viewBox="0 0 370 89.05830258616044" class="looka-1j8o68f"><defs id="SvgjsDefs1353"></defs><g id="SvgjsG1354" featurekey="HKaMnE-0" transform="matrix(0.5730863698918787,0,0,0.5730863698918787,-0.8378824741457986,11.868198392329532)" fill="#730049"><g xmlns="http://www.w3.org/2000/svg" fill=""><path d="M66.15 56.05a.36.36 0 0 0 .54-.32c-.34-8.57 1.63-17.73 6.43-24.91 12.19-18.21 33.45-22.94 54.32-18.64 4.41.92 7.43 3.95 3.98 8.25C117.79 37.46 97.57 45 75.28 45.52q-.52.01-.6.53-1 6.59-.54 13.08a.33.33 0 0 0 .54.23q15.73-12.33 34.83-7.6c7.4 1.84 14.85 8.16 18.79 15.3q7.77 14.08 5.09 29.19c-6.3 35.37-41.55 40.08-70.78 38.04-22.38-1.56-43.12-10.85-49.22-33.68-3.97-14.9.2-32.85 12.09-42.93 11.2-9.49 28.22-9.22 40.67-1.63m11.61-18.58q-.18.32.18.31 26.29-.7 44.84-18.4a.31.31 0 0 0-.18-.54c-18.39-2.23-35.02 1.99-44.84 18.63m-4.77 89.56c15.5.01 32.62-1.77 44.02-13.62 13.2-13.72 13.36-40.03-3.52-51.44-11.11-7.52-30.54-3.64-37.9 7.62q-.62.96-2.57.96t-2.58-.96c-7.34-11.27-26.77-15.17-37.89-7.66-16.89 11.39-16.76 37.7-3.57 51.43 11.38 11.86 28.5 13.67 44.01 13.67"></path><path d="M35.34 72.71c-9.06 11.54-6.76 25.45 2.86 36.19a1.57 1.56 34.1 0 1 .31 1.58l-.12.34q-.31.88-.94.19-3.97-4.37-5.32-6.63-9.61-16.14-.09-31.29 2.79-4.44 8.9-7.35 1.03-.49 1.6.5l.3.52q.38.65-.31.97-5.14 2.37-7.19 4.98"></path></g></g><g id="SvgjsG1355" featurekey="J3GnXt-0" transform="matrix(2.7602522994982532,0,0,2.7602522994982532,85.85962155075262,13.990538768815512)" fill="#8e015f"><path d="M6.54 5.84 c1.5067 0 2.8134 0.31 3.92 0.93 s1.9533 1.47 2.54 2.55 s0.88 2.28 0.88 3.6 s-0.32666 2.5234 -0.98 3.61 s-1.5667 1.9367 -2.74 2.55 s-2.48 0.92 -3.92 0.92 l-4.74 0 l0 -14.16 l5.04 0 z M5.94 18.2 c1.08 0 2.07 -0.21002 2.97 -0.63002 s1.6133 -1.0233 2.14 -1.81 s0.79 -1.7333 0.79 -2.84 c0 -1.6 -0.49666 -2.88 -1.49 -3.84 s-2.31 -1.44 -3.95 -1.44 l-2.98 0 l0 10.56 l2.52 0 z M20.86 10.28 c0.33334 0 0.6 0.04 0.8 0.12 l-0.08 1.94 c-0.34666 -0.09334 -0.64666 -0.14 -0.9 -0.14 c-1.7733 0 -2.6734 0.98666 -2.7 2.96 l0 4.84 l-1.8 0 l0 -9.48 l1.8 0 l0 1.46 l0.04 0 c0.24 -0.50666 0.62666 -0.91666 1.16 -1.23 s1.0933 -0.47 1.68 -0.47 z M27.38 10.28 c1.2 0 2.15 0.27328 2.85 0.81994 s1.07 1.3067 1.11 2.28 l0 5.08 c0 0.48 0.02666 0.99334 0.08 1.54 l-1.6 0 c-0.04 -0.42666 -0.06 -0.90666 -0.06 -1.44 l-0.04 0 c-0.41334 0.61334 -0.89 1.0467 -1.43 1.3 s-1.17 0.38 -1.89 0.38 c-0.97334 0 -1.7633 -0.26 -2.37 -0.78 s-0.91 -1.2067 -0.91 -2.06 c0 -1.08 0.45334 -1.8967 1.36 -2.45 s2.1866 -0.83 3.84 -0.83 l1.34 0 l0 -0.34 c0 -0.64 -0.21 -1.1433 -0.63 -1.51 s-0.97 -0.55 -1.65 -0.55 c-0.50666 0 -0.95 0.07666 -1.33 0.23 s-0.83 0.43668 -1.35 0.85002 l-1.08 -1.12 c1.0267 -0.90666 2.28 -1.3733 3.76 -1.4 z M24.919999999999998 17.259999999999998 c0 1.0267 0.68002 1.54 2.04 1.54 c0.81334 0 1.4633 -0.24334 1.95 -0.73 s0.73666 -1.19 0.75 -2.11 l0 -0.52 l-1.02 0 c-1.1733 0 -2.0866 0.15 -2.74 0.45 s-0.98 0.75666 -0.98 1.37 z M38.32 10.28 c0.68 0 1.3133 0.13998 1.9 0.41998 s1.0533 0.67334 1.4 1.18 l0.04 0 l0 -1.36 l1.8 0 l0 9.48 c-0.01334 1.4 -0.49334 2.5466 -1.44 3.44 s-2.1934 1.3467 -3.74 1.36 c-1.96 0 -3.5066 -0.56666 -4.64 -1.7 l1.22 -1.52 c0.94666 1.0267 2.08 1.54 3.4 1.54 c1.1333 0 1.9833 -0.29 2.55 -0.87 s0.85 -1.37 0.85 -2.37 l0 -1.44 l-0.06 0 c-0.32 0.56 -0.78334 0.98 -1.39 1.26 s-1.2367 0.42 -1.89 0.42 c-1.3867 0 -2.5334 -0.46334 -3.44 -1.39 s-1.3667 -2.07 -1.38 -3.43 c0.01334 -1.52 0.47 -2.7334 1.37 -3.64 s2.05 -1.3667 3.45 -1.38 z M35.42 15.26 c0 0.94666 0.27662 1.7067 0.82996 2.28 s1.3167 0.87334 2.29 0.9 c0.96 0 1.7167 -0.28666 2.27 -0.86 s0.83668 -1.3467 0.85002 -2.32 c0 -0.98666 -0.28334 -1.78 -0.85 -2.38 s-1.33 -0.90666 -2.29 -0.92 c-0.94666 0 -1.7 0.31334 -2.26 0.94 s-0.84 1.4133 -0.84 2.36 z M50.76 10.28 c1.4 0 2.5866 0.48338 3.56 1.45 s1.4667 2.1434 1.48 3.53 c0 1.4 -0.48666 2.5734 -1.46 3.52 s-2.1666 1.4333 -3.58 1.46 c-1.3867 0 -2.5666 -0.48 -3.54 -1.44 s-1.4733 -2.14 -1.5 -3.54 c0 -1.3733 0.48334 -2.54 1.45 -3.5 s2.1634 -1.4533 3.59 -1.48 z M47.64 15.26 c0 0.97334 0.28664 1.7633 0.85998 2.37 s1.3267 0.91666 2.26 0.93 c0.94666 0 1.7 -0.30334 2.26 -0.91 s0.84666 -1.4033 0.86 -2.39 c0 -0.97334 -0.28 -1.7633 -0.84 -2.37 s-1.3267 -0.91666 -2.3 -0.93 c-0.94666 0 -1.7 0.31334 -2.26 0.94 s-0.84 1.4133 -0.84 2.36 z M63.02 10.28 c1.0667 0 1.9033 0.32 2.51 0.96 s0.91666 1.5 0.93 2.58 l0 6.18 l-1.8 0 l0 -5.66 c0 -0.73334 -0.19 -1.3133 -0.57 -1.74 s-0.91 -0.64 -1.59 -0.64 c-0.84 0 -1.49 0.28 -1.95 0.84 s-0.69 1.3067 -0.69 2.24 l0 4.96 l-1.8 0 l0 -9.48 l1.8 0 l0 1.46 l0.04 0 c0.25334 -0.53334 0.66334 -0.95 1.23 -1.25 s1.1967 -0.45 1.89 -0.45 z M74.64000000000001 5.84 c1.2933 0 2.32 0.32 3.08 0.96 s1.14 1.5 1.14 2.58 c0 1.5333 -0.81334 2.5734 -2.44 3.12 l0 0.04 l0.02 0 c0.92 0.10666 1.6567 0.49 2.21 1.15 s0.83 1.45 0.83 2.37 c0 1.1867 -0.45666 2.14 -1.37 2.86 s-2.09 1.08 -3.53 1.08 l-4.94 0 l0 -14.16 l5 0 z M74.24000000000001 11.72 c0.8 0 1.43 -0.18334 1.89 -0.55 s0.69 -0.89 0.69 -1.57 c0 -0.64 -0.2 -1.1467 -0.6 -1.52 s-0.92666 -0.56 -1.58 -0.56 l-3.08 0 l0 4.2 l2.68 0 z M74.46000000000001 18.32 c0.94666 0 1.68 -0.22 2.2 -0.66 s0.78 -1.02 0.78 -1.74 c0 -0.8 -0.26334 -1.42 -0.79 -1.86 s-1.27 -0.66 -2.23 -0.66 l-2.86 0 l0 4.92 l2.9 0 z M82.82000000000001 5.800000000000001 c0.36 0 0.67002 0.13002 0.93002 0.39002 s0.39 0.57 0.39 0.93 c0 0.37334 -0.13334 0.68668 -0.4 0.94002 s-0.57332 0.38 -0.91998 0.38 c-0.37334 0 -0.68668 -0.12666 -0.94002 -0.38 s-0.38 -0.56668 -0.38 -0.94002 s0.13334 -0.68668 0.4 -0.94002 s0.57332 -0.38 0.91998 -0.38 z M83.72 10.52 l0 9.48 l-1.8 0 l0 -9.48 l1.8 0 z M89.08 7.859999999999999 l-0.000019531 2.66 l2.58 0 l0 1.56 l-2.58 0 l0 4.56 c0 0.61334 0.08666 1.0867 0.26 1.42 s0.54 0.5 1.1 0.5 c0.53334 0 0.96 -0.09334 1.28 -0.28 l0 1.64 c-0.34666 0.18666 -0.89332 0.29332 -1.64 0.31998 c-0.72 0 -1.2767 -0.11 -1.67 -0.33 s-0.68 -0.52666 -0.86 -0.92 s-0.27 -1.01 -0.27 -1.85 l0 -5.06 l-2.08 0 l0 -1.56 l2.08 0 l0 -2.66 l1.8 0 z M98.32000000000001 10.28 c1.4533 0 2.5834 0.45664 3.39 1.37 s1.2167 2.17 1.23 3.77 l0 0.5 l-7.6 0 c0 0.77334 0.31 1.4233 0.93 1.95 s1.3767 0.79666 2.27 0.81 c0.98666 0 1.8533 -0.47334 2.6 -1.42 l1.36 1.04 c-1.0133 1.2933 -2.4134 1.94 -4.2 1.94 c-1.4533 0 -2.6234 -0.46334 -3.51 -1.39 s-1.3433 -2.1234 -1.37 -3.59 c0 -1.4133 0.45666 -2.59 1.37 -3.53 s2.09 -1.4233 3.53 -1.45 z M101.02000000000001 14.48 c-0.02666 -0.89334 -0.28 -1.5767 -0.76 -2.05 s-1.14 -0.71 -1.98 -0.71 c-0.56 0 -1.0633 0.13666 -1.51 0.41 s-0.79666 0.62668 -1.05 1.06 s-0.38 0.86334 -0.38 1.29 l5.68 0 z"></path></g></svg>
      <div className="hidden sm:flex items-center gap-10 ">
        <Link
          to="/"
          className={`text-base md:text-[18px] font-poppins hover:text-[#e34b97] ${
            activeLink === "/" ? " text-black" : ""
          }`}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`text-base md:text-[18px] font-poppins  hover:text-[#e34b97] ${
            activeLink === "/products" ? " text-black" : ""
          }`}
          onClick={() => handleLinkClick("/products")}
        >
          Products
        </Link>
        <Link
          to="/about"
          className={`text-base md:text-[18px] font-poppins  hover:text-[#e34b97] ${
            activeLink === "/about" ? " text-black" : ""
          }`}
          onClick={() => handleLinkClick("/about")}
        >
          About
        </Link>
        <Link
          to="/blogs"
          className={`text-base md:text-[18px] font-poppins   hover:text-[#e34b97]  ${
            activeLink === "/blogs" ? " text-black" : ""
          }`}
          onClick={() => handleLinkClick("/blogs")}
        >
          Blogs
        </Link>
        <Link
          to="/videos"
          className={`text-base md:text-[18px] font-poppins hover:text-[#e34b97]  ${
            activeLink === "/videos" ? " text-black" : ""
          }`}
          onClick={() => handleLinkClick("/videos")}
        >
          <FontAwesomeIcon icon={faYoutube} size="xl" style={{ color: "#ff111" }} /> Videos
        </Link>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 ">
        <button
          onClick={handleCartClick} // Handle cart click
          className="text-[20px] text-black bg-[#e34b97]  px-2.5 py-0.5 hover:text-white  "
        >
          <i className="ri-shopping-cart-2-fill  "></i> 
        </button>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="text-[18px] text-black bg-[#e34b97]  px-2.5 py-1  hover:text-white font-poppins "
          >
            <i className="ri-logout-box-r-line"></i> Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="text-[18px] text-black bg-[#d15c2d] px-2.5 py-1  hover:text-white font-poppins "
          >
            <i class="ri-login-box-fill"></i> Login
          </Link>
        )}
      </div>

      {/* Hamburger Button for Mobile */}
      <button
         
        className="sm:hidden text-2xl text-[#1B5C40] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="ri-menu-3-line"></i>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-[80px] left-0 w-full bg-[#fcf9ea] z-10 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/"
              className="text-lg font-poppins px-4 py-1 rounded-full"
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-lg font-poppins px-4 py-1 rounded-full"
              onClick={() => handleLinkClick("/products")}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-lg font-poppins px-4 py-1 rounded-full"
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
            <Link
              to="/blogs"
              className="text-lg font-poppins px-4 py-1 rounded-full"
              onClick={() => handleLinkClick("/blogs")}
            >
              Blogs
            </Link>
            <Link
              to="/videos"
              className="text-lg font-poppins flex items-center px-4 py-1 rounded-full justify-center"
              onClick={() => handleLinkClick("/videos")}
            >
              <FontAwesomeIcon icon={faYoutube} size="xl" style={{ color: "#ff111" }} /> Videos
            </Link>
            <div className="mt-4">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="text-sm sm:text-xl rounded-full px-5 py-1 font-poppins bg-[#1B5C40] text-white"
                >
                  <i className="ri-logout-box-r-line"></i> Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-sm sm:text-xl rounded-full px-5 py-1 font-poppins bg-[#1B5C40] text-white"
                >
                  <i className="ri-user-fill"></i> Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
