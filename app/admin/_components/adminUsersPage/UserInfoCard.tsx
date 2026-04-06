import { User } from "@/types";
import { formatDate } from "@/lib/utils";

interface UserInfoCardProps {
  user: User;
}

const UserInfoCard = ({ user }: UserInfoCardProps) => {
  return (
    <div className="px-6 py-5 flex items-center gap-8">
      <div>
        <p className="text-xs text-secondary mb-0.5">Name</p>
        <p className="font-medium text-charcoal text-sm min-w-30">
          {user.firstName} {user.lastName}
        </p>
      </div>
      <div>
        <p className="text-xs text-secondary mb-0.5">Email</p>
        <p className="text-sm text-charcoal">{user.email}</p>
      </div>
      <div>
        <p className="text-xs text-secondary mb-0.5">Member since</p>
        <p className="text-sm text-charcoal">{formatDate(user.memberSince)}</p>
      </div>
      {/* <div>
        <p>Address</p>
        <p>{user.address.street}</p>
      </div> */}
    </div>
  );
};

export default UserInfoCard;
