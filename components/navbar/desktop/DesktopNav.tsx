import DesktopTopNav from "./DesktopTopNav";
import DesktopBottomNav from "./DesktopBottomNav";

const DesktopNav = () => {
  return (
    <nav className="py-4 px-10 space-y-6 bg-ivory">
      {/* top nav section*/}
      <DesktopTopNav />

      {/* bottom nav section */}
      <DesktopBottomNav />
    </nav>
  );
};

export default DesktopNav;
