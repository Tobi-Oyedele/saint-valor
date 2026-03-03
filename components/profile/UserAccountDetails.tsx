import { Pencil } from "lucide-react";

interface UserAccountDetailsProps {
  editEmail: boolean;
  emailValue: string;
  editPassword: boolean;
  passwordValue: string;
  isSaving: boolean;
  hasChanges: boolean;
  onToggleEditEmail: () => void;
  onEmailChange: (value: string) => void;
  onToggleEditPassword: () => void;
  onPasswordChange: (value: string) => void;
  onSave: () => void;
}

const UserAccountDetails = ({
  editEmail,
  emailValue,
  editPassword,
  passwordValue,
  isSaving,
  hasChanges,
  onToggleEditEmail,
  onEmailChange,
  onToggleEditPassword,
  onPasswordChange,
  onSave,
}: UserAccountDetailsProps) => {
  return (
    <div className="flex flex-col gap-5">
      {/* Email */}
      <div>
        <label className="text-xs text-secondary uppercase tracking-wide mb-1.5 block">
          Email Address
        </label>
        <div className="flex items-center border border-border rounded-md bg-white px-3 py-2 gap-2">
          <input
            type="email"
            value={emailValue}
            disabled={!editEmail}
            onChange={(e) => onEmailChange(e.target.value)}
            className="flex-1 text-sm text-charcoal bg-transparent outline-none disabled:text-secondary"
          />
          <button
            onClick={onToggleEditEmail}
            className="text-secondary hover:text-charcoal transition"
          >
            <Pencil className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="text-xs text-secondary uppercase tracking-wide mb-1.5 block">
          Password
        </label>
        <div className="flex items-center border border-border rounded-md bg-white px-3 py-2 gap-2">
          <input
            type="password"
            value={editPassword ? passwordValue : "••••••••••••••"}
            disabled={!editPassword}
            onChange={(e) => onPasswordChange(e.target.value)}
            placeholder={editPassword ? "Enter new password" : ""}
            className="flex-1 text-sm text-charcoal bg-transparent outline-none disabled:text-secondary"
          />
          <button
            onClick={onToggleEditPassword}
            className="text-secondary hover:text-charcoal transition"
          >
            <Pencil className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={onSave}
        disabled={isSaving || !hasChanges}
        className="w-fit px-6 py-2.5 bg-gold text-white text-sm font-medium rounded-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSaving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default UserAccountDetails;
