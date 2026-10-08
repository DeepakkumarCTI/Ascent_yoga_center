import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

const photos = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-7.jpg",
  "gallery-8.jpg",
];

export default function Gallery() {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* PAGE HERO */}
      <PageHero
  title="Our Gallery"
  text="A glimpse into the calm spaces, shared practice and community moments at Ascent."
  video="/images/gallery-hero.mp4"
  
/>

      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-full max-w-[1380px] px-3 sm:px-5 lg:px-7 xl:px-8">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-[760px] text-center"
    >
      <span className="text-[10px] font-bold tracking-[0.28em] text-[#3D007A] sm:text-[11px]">
        MOMENTS AT ASCENT
      </span>

      <h2
        className="mt-3 text-3xl font-normal leading-tight text-gray-900 sm:text-4xl lg:text-[46px]"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        A space to breathe, move and connect.
      </h2>

      <div className="mx-auto mt-5 h-[2px] w-12 bg-[#3D007A]" />

      <p className="mt-5 text-sm leading-6 text-gray-600 sm:text-base">
        Explore moments from our studio, classes and the community that
        makes Ascent feel like home.
      </p>
    </motion.div>

    {/* FILTERS */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3"
    >
      {["Gallery"].map((filter, index) => (
        <button
          key={filter}
          type="button"
          className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
            index === 0
              ? "bg-[#3D007A] text-white shadow-[0_6px_18px_rgba(61,0,122,0.18)]"
              : "border border-[#E8ECF1] bg-white text-gray-600 hover:border-[#3D007A]/20 hover:bg-[#E8ECF1] hover:text-[#3D007A]"
          }`}
        >
          {filter}
        </button>
      ))}
    </motion.div>

    {/* GALLERY GRID */}
    <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-4 lg:gap-5">

      {/* LARGE IMAGE */}
      <GalleryItem
        image={`/images/gallery/${photos[0]}`}
        alt="Ascent yoga studio"
        className="sm:col-span-2 sm:row-span-2"
        height="h-[360px] sm:h-[520px]"
        delay={0}
      />

      {/* IMAGE 2 */}
      <GalleryItem
        image={`/images/gallery/${photos[1]}`}
        alt="Yoga practice at Ascent"
        className=""
        height="h-[250px] sm:h-[250px]"
        delay={0.08}
      />

      {/* IMAGE 3 */}
      <GalleryItem
        image={`/images/gallery/${photos[2]}`}
        alt="Yoga session"
        className=""
        height="h-[250px] sm:h-[250px]"
        delay={0.16}
      />

      {/* IMAGE 4 */}
      <GalleryItem
        image={`/images/gallery/${photos[3]}`}
        alt="Mindful yoga practice"
        className=""
        height="h-[250px] sm:h-[250px]"
        delay={0.24}
      />

      {/* IMAGE 5 */}
      <GalleryItem
        image={`/images/gallery/${photos[4]}`}
        alt="Yoga community"
        className=""
        height="h-[250px] sm:h-[250px]"
        delay={0.32}
      />

      {/* IMAGE 6 */}
      <GalleryItem
        image={`/images/gallery/${photos[5]}`}
        alt="Ascent yoga class"
        className="sm:col-span-2"
        height="h-[280px]"
        delay={0.40}
      />

      {/* IMAGE 7 */}
      <GalleryItem
        image={`/images/gallery/${photos[6]}`}
        alt="Meditation session"
        className=""
        height="h-[280px]"
        delay={0.48}
      />

      {/* IMAGE 8 */}
      <GalleryItem
        image={`/images/gallery/${photos[7]}`}
        alt="Ascent community"
        className=""
        height="h-[280px]"
        delay={0.56}
      />
    </div>
  </div>
</section>

      {/* GALLERY CTA */}
     <section className="relative w-full overflow-hidden bg-[#E8ECF1] py-10 sm:py-14 lg:py-16">

  {/* BACKGROUND GLOWS */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-24 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[#7B2CBF]/10 blur-3xl sm:h-72 sm:w-72" />

    <div className="absolute -right-24 top-0 h-56 w-56 rounded-full bg-[#FF4DDE]/10 blur-3xl sm:h-72 sm:w-72" />

    <div className="absolute bottom-[-100px] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#E1B270]/10 blur-3xl sm:h-72 sm:w-72" />

    {/* SUBTLE GRID */}
    <div
      className="absolute inset-0 opacity-[0.25]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(61,0,122,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(61,0,122,0.035) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
      }}
    />
  </div>

  {/* TOP COLOR LINE */}
  <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
    <div className="h-full w-[35%] bg-gradient-to-r from-transparent via-[#7B2CBF] to-[#FF4DDE] animate-[ctaLineMove_4s_ease-in-out_infinite]" />
  </div>

  <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 sm:px-5 lg:px-7 xl:px-8">

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="mx-auto max-w-[900px] text-center"
    >

      {/* EYEBROW */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-2"
      >
        <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#7B2CBF] sm:w-10" />

        <span className="text-[9px] font-bold tracking-[0.25em] text-[#3D007A] sm:text-[10px] sm:tracking-[0.3em]">
          EXPERIENCE ASCENT
        </span>

        <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#FF4DDE] sm:w-10" />
      </motion.div>

      {/* HEADING */}
      <h2
        className="mt-3 text-[28px] font-normal leading-tight text-[#24172d] sm:mt-4 sm:text-4xl lg:text-[48px]"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Come experience the{" "}
        <span className="bg-gradient-to-r from-[#3D007A] via-[#7B2CBF] to-[#FF4DDE] bg-clip-text text-transparent">
          space for yourself.
        </span>
      </h2>

      {/* DIVIDER */}
      <div className="mx-auto mt-4 h-[2px] w-16 overflow-hidden rounded-full bg-[#3D007A]/10 sm:mt-5">
        <div className="h-full w-1/2 bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] animate-[ctaLineMove_3s_ease-in-out_infinite]" />
      </div>

      {/* DESCRIPTION */}
      <p className="mx-auto mt-4 max-w-[650px] text-[10px] leading-5 text-[#625b66] sm:mt-5 sm:text-sm sm:leading-6">
        Step into a calmer space, meet our community and discover a practice
        that fits naturally into your life.
      </p>

      {/* CTA BUTTON */}
      <motion.a
        href="/contact"
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="group relative mt-6 inline-flex min-h-[40px] items-center justify-center overflow-hidden rounded-full bg-[#3D007A] px-6 text-[11px] font-semibold text-white shadow-[0_8px_25px_rgba(61,0,122,0.22)] transition-all duration-300 hover:bg-[#2d005b] hover:shadow-[0_14px_32px_rgba(61,0,122,0.28)] sm:mt-7 sm:min-h-[46px] sm:px-8 sm:text-sm"
      >
        {/* BUTTON SHINE */}
        <span className="pointer-events-none absolute inset-y-0 -left-[70%] z-0 w-1/2 skew-x-[-20deg] bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

        <span className="relative z-10 text-white">
          Visit Ascent
        </span>

        {/* BUTTON GLOW */}
        <span className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
      </motion.a>

      {/* BOTTOM MESSAGE */}
      <div className="mt-6 flex items-center justify-center gap-2.5 sm:mt-7 sm:gap-4">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#7B2CBF]/40 sm:w-14" />

        <span className="text-[7px] font-semibold tracking-[0.2em] text-[#625b66]/70 sm:text-[9px] sm:tracking-[0.28em]">
          MOVE · BREATHE · CONNECT
        </span>

        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#E1B270]/50 sm:w-14" />
      </div>

    </motion.div>
  </div>

  {/* BOTTOM COLOR LINE */}
  <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
    <div className="ml-auto h-full w-[35%] bg-gradient-to-r from-[#00C2FF] via-[#7B2CBF] to-transparent animate-[ctaLineMove_4s_ease-in-out_infinite_reverse]" />
  </div>

  <style>{`
    @keyframes ctaLineMove {
      0% {
        transform: translateX(-120%);
        opacity: 0.3;
      }

      50% {
        transform: translateX(100%);
        opacity: 1;
      }

      100% {
        transform: translateX(220%);
        opacity: 0.3;
      }
    }
  `}</style>
</section>
    </main>
  );
}


/* =========================================================
   GALLERY ITEM
========================================================= */

function GalleryItem({
  image,
  alt,
  className = "",
  height = "h-[280px]",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay }}
      className={`group relative overflow-hidden rounded-[20px] bg-[#E8ECF1] ${className} ${height}`}
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#21003f]/70 via-[#3D007A]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Border */}
      <div className="absolute inset-0 rounded-[20px] border border-white/0 transition-all duration-500 group-hover:border-white/30" />

      {/* Hover Label */}
      <div className="absolute bottom-5 left-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-[9px] font-semibold tracking-[0.2em] text-white">
          ASCENT YOGA CENTRE
        </span>

        <div className="mt-2 h-[2px] w-8 bg-white transition-all duration-500 group-hover:w-12" />
      </div>

      {/* Corner Detail */}
      <div className="absolute right-5 top-5 flex h-8 w-8 translate-y-[-5px] items-center justify-center rounded-full border border-white/0 bg-white/0 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:border-white/40 group-hover:bg-white/10 group-hover:opacity-100">
        <span className="text-sm text-white">↗</span>
      </div>
    </motion.div>
  );
}