import CustomInquiry from "../components/About/CustomInquiry";
import Story from "../components/About/Story";
import Team from "../components/About/Team";

export default function AboutUs() {
  const bgUrl = "/images/hero-bg.png";

  return (
    <>
      <section
        className="relative w-full min-h-150 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full max-w-5xl px-6 md:px-10 text-center">
          <h1 className="text-ivory font-medium leading-tight tracking-wide text-3xl sm:text-4xl md:text-5xl">
            Saint Valor &mdash; Where Refined Luxury
            <br />
            Becomes Legacy
          </h1>

          <p className="mt-4 text-ivory/80 text-sm md:text-xl lg:text-base max-w-2xl mx-auto leading-relaxed">
            A distinguished jewelry house blending timeless elegance with
            purposeful design for those who embody influence and style.
          </p>
        </div>
      </section>

      <Story />
      <Team />
      <CustomInquiry />
    </>
  );
}
