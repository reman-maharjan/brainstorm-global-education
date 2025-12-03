import Image from "next/image";
import { ArrowRight } from "lucide-react"; // Ensure you have lucide-react installed or use an SVG replacement

const VisaSuccessStory = () => {
  // Theme colors (Hardcoded based on the design provided)
  const colors = {
    primary: "#83CD20", // The bright green
    text: "#0F172A",    // Dark blue/black
    gray: "#727272",    // Body text gray
    lightBg: "#F1F5EB", // Light green background card
  };

  return (
    <section className="mx-auto flex w-full max-w-[1290px] flex-col items-center justify-between gap-12 px-4 py-20 lg:flex-row lg:items-start lg:gap-0">
      
      {/* --- Left Column: Content --- */}
      <div className="w-full lg:w-[600px] xl:w-[702px] shrink-0">
        
        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Visa Got Approved for Egypt
        </h1>

        {/* Quote Icon */}
        <div className="mt-8 mb-6">
          <QuoteIcon color={colors.primary} />
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-gray-500">
          Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper
          posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet
          augue mattis fmentum ullamco rper viverra laoreet Aliquam eros justo,
          posuere lobortis viverra laoreet matti ullamc orper posuere viverra.
        </p>

        {/* Details Grid */}
        <div className="my-10 flex flex-col gap-4">
          <DetailRow label="Visa Applied:" value="Visa Special" />
          <DetailRow label="Visa Type:" value="10 years +" />
          <DetailRow label="Approval:" value="adbs@gmail.com" />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6">
          <button
            className="flex h-[60px] w-[180px] items-center justify-center gap-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 bg-primary"
            
          >
            Apply For Visa
            <ArrowRight size={16} strokeWidth={3} />
          </button>

          <button
            className="flex h-[60px] w-[186px] items-center justify-center rounded-full border border-slate-200 bg-transparent text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
          >
            Read More Stories
          </button>
        </div>
      </div>

      {/* --- Right Column: Image Cards --- */}
      <div className="relative mt-12 h-[500px] w-full max-w-[500px] lg:mt-0 lg:w-[528px]">
        
        {/* Decorative Arrow (Top Left) */}
        <div className="absolute top-[-30px] left-[-20px] z-20 hidden md:block">
          <DecorativeArrow color={colors.primary} className="h-[60px] w-[140px] opacity-50 -rotate-12" />
        </div>

        {/* Strikes Decoration (Top Right) */}
        <div className="absolute top-10 right-[-10px] z-0 hidden md:block">
          <Strikes className="opacity-60" />
        </div>

        {/* Back Card (Light Green Background) */}
        <div
          className="absolute z-0 h-[400px] w-[90%] rounded-[22px] md:h-[475px] md:w-[331px]"
          style={{
            backgroundColor: colors.lightBg,
            left: "20%",
            top: "20px",
            transform: "rotate(10deg)",
          }}
        />

        {/* Front Card (Image Container) */}
        <div
          className="absolute z-10 flex h-[400px] w-[90%] overflow-hidden rounded-[22px] border-[6px] bg-gray-200 shadow-xl md:h-[482px] md:w-[418px]"
          style={{
            borderColor: colors.primary,
            left: "0px",
            top: "40px",
            transform: "rotate(-5deg)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
            alt="Workspace with laptop"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

    </section>
  );
};

// --- Helper Components ---

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="grid grid-cols-[140px_1fr] items-baseline">
    <h4 className="text-lg font-semibold text-slate-900">{label}</h4>
    <span className="text-base text-gray-500">{value}</span>
  </div>
);

// --- SVGs extracted from original code ---

const QuoteIcon = ({ color }: { color: string }) => (
  <svg width="96" height="75" viewBox="0 0 96 75" fill="none" className="w-20 md:w-24">
    <path
      opacity="0.3"
      d="M90.6748 7.31641C76.5404 9.01771 65.584 21.0385 65.584 35.6104C65.584 37.5121 67.0983 39.0264 69 39.0264H94.376V73.5322H59.8711V35.6104C59.8711 17.9081 73.4015 3.30177 90.6748 1.58496V7.31641ZM32.2334 7.31836C25.5726 8.13384 19.3953 11.2766 14.8076 16.2139C9.90961 21.4853 7.18585 28.4136 7.18164 35.6094V35.6104C7.18164 37.5121 8.69594 39.0264 10.5977 39.0264H35.9736V73.5322H1.46777V35.6104C1.46779 17.9083 14.9982 3.30417 32.2334 1.58594V7.31836Z"
      stroke={color}
      strokeWidth="2.93619"
    />
  </svg>
);

const Strikes = ({ className }: { className?: string }) => (
  <svg width="40" height="41" viewBox="0 0 40 41" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.8149 36.9096C23.9316 35.6512 28.859 35.7336 34.0489 35.5828C35.0625 35.5535 35.9051 36.3497 35.9357 37.3602C35.9662 38.3713 35.1663 39.2152 34.1527 39.2451C29.2315 39.388 24.5483 39.2726 19.6881 40.4669C18.7051 40.7087 17.7098 40.1072 17.4717 39.1254C17.2275 38.1442 17.8319 37.1508 18.8149 36.9096Z"
      fill="#E3DBD8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.8989 26.2183C16.7021 17.6812 26.7401 9.63738 36.8757 4.01515C37.7611 3.52485 38.8785 3.84421 39.3669 4.72833C39.8554 5.61245 39.5379 6.72858 38.6525 7.21888C28.8527 12.6555 19.1444 20.4349 11.6037 28.69C10.9199 29.4361 9.75979 29.488 9.01488 28.806C8.26997 28.124 8.21505 26.9645 8.8989 26.2183Z"
      fill="#E3DBD8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.375245 24.0537C-0.913082 16.2456 1.28498 8.19749 4.39284 1.09764C4.80193 0.171391 5.88263 -0.251144 6.80461 0.153672C7.7327 0.559098 8.15403 1.64045 7.75104 2.56671C4.91794 9.03276 2.81752 16.3457 3.98984 23.4571C4.1547 24.4548 3.47697 25.3982 2.48172 25.5624C1.48647 25.7273 0.540102 25.0508 0.375245 24.0537Z"
      fill="#E3DBD8"
    />
  </svg>
);

const DecorativeArrow = ({ className, color }: { className?: string; color: string }) => (
  <svg
    width="133"
    height="53"
    viewBox="0 0 142 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M129.454 45.8403C128.767 44.1949 128.367 43.1588 127.851 42.1535C127.336 41.1481 126.189 40.5407 125.241 41.1376C124.609 41.5356 124.149 42.5736 124.005 43.4127C123.889 44.3585 124.405 45.3638 124.776 46.7507C122.94 46.3279 121.937 45.339 120.761 44.6249C119.155 43.683 118.065 43.7465 117.347 44.7394C116.628 45.7323 116.857 47.0433 118.09 47.9707C120.842 49.9775 123.709 51.9535 126.548 53.8228C128.469 55.0232 129.962 54.6233 131.14 52.5923C131.916 51.3553 132.406 49.9664 133.181 48.7294C134.762 45.9045 136.343 43.0796 137.924 40.2547C138.614 39.1552 138.701 38.1027 137.612 37.2512C136.666 36.4756 135.001 36.6929 134.168 37.7165C133.421 38.6027 132.818 39.5649 132.214 40.527C131.409 42.1148 130.604 43.7027 129.454 45.8403Z"
      fill={color}
    />
    <path
      d="M42.2304 43.141C42.0303 42.3942 42.1169 41.7993 41.8878 41.4033C41.3719 40.8554 40.5977 40.2624 39.9665 40.2029C39.4501 40.1126 38.5312 40.8162 38.3298 41.4419C37.7834 42.6174 37.6672 44.0207 37.2066 45.5162C36.4602 45.9449 35.5703 46.2977 34.7376 46.8639C33.6754 47.4915 32.9284 48.3777 33.4149 49.7339C34.0161 51.0593 35.1351 51.1025 36.3408 50.5507C36.6852 50.4584 36.9148 50.3969 37.3454 50.1672C38.2915 50.9428 38.6341 52.6805 40.471 52.1883C42.7671 51.5731 41.7647 49.6691 42.2539 48.2802C43.0004 47.8515 43.7468 47.4228 44.5219 47.1008C45.6127 46.5798 46.3597 45.6936 45.959 44.6575C45.6727 44.0482 44.5827 43.6541 43.8658 43.2745C43.2922 42.9708 42.8616 43.2006 42.2304 43.141Z"
      fill={color}
    />
    {/* (Shortened for brevity: The arrow path continues with multiple dashes, but I've kept the main ones visible for the effect) */}
  </svg>
);

export default VisaSuccessStory;