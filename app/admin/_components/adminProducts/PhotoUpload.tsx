"use client";

import { useRef, useState } from "react";
import { Upload, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
  mainImage: File | null;
  subImages: File[];
  onMainImageChange: (file: File | null) => void;
  onSubImagesChange: (files: File[]) => void;
};

const blobLoader = ({ src }: { src: string }) => src;

const PhotoUpload = ({
  mainImage,
  subImages,
  onMainImageChange,
  onSubImagesChange,
}: Props) => {
  const mainInputRef = useRef<HTMLInputElement>(null);
  const subInputRef = useRef<HTMLInputElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [subImagePreviews, setSubImagePreviews] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      subImagePreviews.forEach((url) => URL.revokeObjectURL(url));
      if (mainImagePreview) URL.revokeObjectURL(mainImagePreview);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMainImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onMainImageChange(file);
    if (mainImagePreview) URL.revokeObjectURL(mainImagePreview);
    setMainImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const newPreviews = files.map((f) => URL.createObjectURL(f));
    onSubImagesChange([...subImages, ...files]);
    setSubImagePreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeSubImage = (index: number) => {
    URL.revokeObjectURL(subImagePreviews[index]);
    const updatedFiles = subImages.filter((_, i) => i !== index);
    const updatedPreviews = subImagePreviews.filter((_, i) => i !== index);
    onSubImagesChange(updatedFiles);
    setSubImagePreviews(updatedPreviews);
    if (carouselIndex >= updatedFiles.length)
      setCarouselIndex(Math.max(0, updatedFiles.length - 1));
  };

  const removeMainImage = () => {
    if (mainImagePreview) URL.revokeObjectURL(mainImagePreview);
    setMainImagePreview(null);
    onMainImageChange(null);
    if (mainInputRef.current) mainInputRef.current.value = "";
  };

  const visiblePreviews = subImagePreviews.slice(
    carouselIndex,
    carouselIndex + 3,
  );

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-medium text-charcoal">
        Photo Upload <span className="text-red-500">*</span>
      </h3>

      {/* Main Image */}
      <div className="border border-dashed border-border p-8 flex flex-col items-center justify-center gap-2">
        {mainImagePreview ? (
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <Image
                loader={blobLoader}
                src={mainImagePreview}
                alt="Cover"
                className="object-cover"
                width={196}
                height={196}
                style={{ width: "196px", height: "196px" }}
                unoptimized
              />
              <button
                type="button"
                aria-label="Remove image"
                onClick={removeMainImage}
                className="absolute top-1 right-1 bg-burgundy text-white p-0.5 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Trash2 size={12} />
              </button>
            </div>
            <p className="text-xs text-secondary">{mainImage?.name}</p>
          </div>
        ) : (
          <>
            <Upload size={20} className="text-secondary" />
            <p className="text-xs text-secondary text-center">
              Upload cover image for collection
              <br />
              <span className="text-secondary/70">(.JPEG, .PNG)</span>
            </p>
          </>
        )}
        <button
          type="button"
          onClick={() => mainInputRef.current?.click()}
          className="text-xs border border-border px-4 py-1.5 text-charcoal hover:bg-ivory transition-colors cursor-pointer"
        >
          Upload file
        </button>
        <input
          ref={mainInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleMainImage}
        />
      </div>

      {/* Sub Images */}
      <input
        ref={subInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        className="hidden"
        onChange={handleSubImages}
      />

      {subImagePreviews.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-secondary">{subImages.length} uploaded</p>
          <div className="flex items-center gap-2">
            {subImagePreviews.length > 3 && (
              <button
                type="button"
                aria-label="Previous images"
                onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                className="w-6 h-6 bg-gold text-white flex items-center justify-center"
              >
                <ChevronLeft size={14} />
              </button>
            )}
            <div className="flex gap-2">
              {visiblePreviews.map((src, i) => (
                <div key={carouselIndex + i} className="relative w-24 h-24">
                  <Image
                    loader={blobLoader}
                    src={src}
                    alt={`Sub ${carouselIndex + i + 1}`}
                    className="object-cover"
                    width={96}
                    height={96}
                    style={{ width: "96px", height: "96px" }}
                    unoptimized
                  />
                  <button
                    type="button"
                    aria-label={`Remove image ${carouselIndex + i + 1}`}
                    onClick={() => removeSubImage(carouselIndex + i)}
                    className="absolute top-1 right-1 bg-burgundy text-white p-0.5 hover:opacity-80 transition-opacity"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
            {subImagePreviews.length > 3 && (
              <button
                type="button"
                aria-label="Next images"
                onClick={() =>
                  setCarouselIndex(
                    Math.min(subImages.length - 3, carouselIndex + 1),
                  )
                }
                className="w-6 h-6 bg-gold text-white flex items-center justify-center"
              >
                <ChevronRight size={14} />
              </button>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => subInputRef.current?.click()}
        className="text-xs text-charcoal border border-border px-4 py-2 w-fit hover:bg-ivory transition-colors cursor-pointer"
      >
        + Add more images
      </button>
    </div>
  );
};

export default PhotoUpload;
