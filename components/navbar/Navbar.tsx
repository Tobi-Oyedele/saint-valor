import MobileNav from "./mobile/MobileNav";
import DesktopNav from "./desktop/DesktopNav";
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
