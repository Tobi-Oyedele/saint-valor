import { ShoppingCart } from "lucide-react";

interface CollectionsEmptyStateProps {
  message?: string;
  subMessage?: string;
}

const CollectionsEmptyState = ({
  message = "No Categories yet",
  subMessage = "Add a new category to view your categories",
}: CollectionsEmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3">
      <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
        <ShoppingCart size={32} className="text-gold" />
      </div>
      <p className="text-sm font-medium text-charcoal">{message}</p>
      <p className="text-xs text-secondary">{subMessage}</p>
    </div>
  );
};

export default CollectionsEmptyState;
