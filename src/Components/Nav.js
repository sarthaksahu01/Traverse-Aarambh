import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/Tours"
              aria-label="Tours"
              title="Tours"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Tours
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              aria-label="Tours"
              title="Tours"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Services
            </Link>
          </li>
        </ul>
        <Link
          to="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center lg:mx-auto"
        >
          <svg
            className="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            AARAMBH
          </span>
        </Link>
        <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
          <li>
            <Link
              to="/Sign"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Sign in"
              title="Sign in"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/Signpage"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
