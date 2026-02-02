import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
const Navbar = () => {
  return (
    <section>
      <div className="lg:hidden">
        <MobileNav />
      </div>

      <div className="hidden lg:block">
        <DesktopNav />
      </div>
    </section>
  );
};

export default Navbar;
