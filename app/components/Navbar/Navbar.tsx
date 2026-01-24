import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
const Navbar = () => {
  return (
    <section>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </section>
  );
};

export default Navbar;
