import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-slate-200">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <div className="text-2xl font-bold text-slate-900">Auth App</div>
          </Link>
          <div className="flex space-x-3">
            <Link to="/Home">
              <div className="text-slate-900 font-bold">Home</div>
            </Link>
            <Link to="/about">
              <div className="text-slate-900 font-bold">About</div>
            </Link>
            <Link to="/profile">
              <div className="text-slate-900 font-bold">Profile</div>
            </Link>
            <Link to="/signin">
              <div className="text-slate-900 font-bold">Sign In</div>
            </Link>
            <Link to="/signup">
              <div className="text-slate-900 font-bold">Sign Up</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
