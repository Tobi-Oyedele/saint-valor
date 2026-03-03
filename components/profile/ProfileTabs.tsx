type Tab = "profile" | "orders" | "notifications";

interface ProfileTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TABS: { key: Tab; label: string }[] = [
  { key: "profile", label: "Profile" },
  { key: "orders", label: "Orders" },
  { key: "notifications", label: "Notifications" },
];

const ProfileTabs = ({ activeTab, onTabChange }: ProfileTabsProps) => {
  const tabClass = (tab: Tab) =>
    `pb-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
      activeTab === tab
        ? "border-charcoal text-charcoal"
        : "border-transparent text-secondary hover:text-charcoal"
    }`;

  return (
    <div className="flex gap-8 border-b border-border mb-8">
      {TABS.map(({ key, label }) => (
        <button
          key={key}
          className={tabClass(key)}
          onClick={() => onTabChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
