interface ProductMetaProps {
  material?: string;
  karat?: string;
  weight?: string;
  gender?: string;
  length?: string;
}

const ProductMeta = ({ material, karat, weight, gender, length }: ProductMetaProps) => {
  if (!material && !karat && !weight && !gender && !length) return null;

  return (
    <div className="flex flex-col gap-1.5 pt-4 border-t border-border text-xs text-secondary">
      {material && (
        <p>
          Material: <span className="text-charcoal">{material}</span>
        </p>
      )}
      {karat && (
        <p>
          Karat: <span className="text-charcoal">{karat}</span>
        </p>
      )}
      {weight && (
        <p>
          Weight: <span className="text-charcoal">{weight}</span>
        </p>
      )}
      {length && (
        <p>
          Length: <span className="text-charcoal">{length}</span>
        </p>
      )}
      {gender && (
        <p>
          Gender: <span className="text-charcoal">{gender}</span>
        </p>
      )}
    </div>
  );
};

export default ProductMeta;
