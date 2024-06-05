import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-b from-[#DE640C] to-[#C3450C] w-1/6 h-full fixed top-0 left-0 z-[1000]">
      <Link to="/" className="h-fit flex justify-center items-center mt-4">
        <img src="/logo.svg" className="max-h-10" />
      </Link>
      <div to="/" className="h-fit flex justify-center items-center mt-4">
        <img src="/profile.svg" className="h-48" />
      </div>
      <NavLinks />
    </div>
  );
}
