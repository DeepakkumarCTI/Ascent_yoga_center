import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { programs, testimonials } from "../data/data";
import { useEffect, useState } from "react";

export default function Home() {

  function TestimonialCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = testimonials.length;

  useEffect(() => {
    if (!total) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, 2000);

    return () => clearInterval(timer);
  }, [total]);

  if (!total) return null;

  const testimonial = testimonials[current];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  };

  const previousTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="mx-auto w-full max-w-[980px]">

      {/* Main Card */}
      <div className="relative">

        {/* Animated Rainbow Border */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">

          {/* Base Rainbow Border */}
          <div
            className="
              absolute inset-0 rounded-[28px]
              bg-gradient-to-br
              from-[#FF4DDE]
              via-[#7B2CBF]
              via-[#3D007A]
              via-[#00C2FF]
              to-[#FFD166]
              opacity-35
            "
          />

          {/* Top */}
          <span
            className="
              absolute left-[-35%] top-0
              h-[2px] w-[42%]
              rounded-full
              bg-gradient-to-r
              from-transparent
              via-[#FF4DDE]
              to-[#7B2CBF]
              animate-[testimonialTop_3s_ease-in-out_infinite]
            "
          />

          {/* Right */}
          <span
            className="
              absolute right-0 top-[-35%]
              h-[42%] w-[2px]
              rounded-full
              bg-gradient-to-b
              from-[#7B2CBF]
              via-[#00C2FF]
              to-[#36D399]
              animate-[testimonialRight_3s_ease-in-out_infinite_0.5s]
            "
          />

          {/* Bottom */}
          <span
            className="
              absolute bottom-0 right-[-35%]
              h-[2px] w-[42%]
              rounded-full
              bg-gradient-to-l
              from-[#FF7A18]
              via-[#FFD166]
              to-[#36D399]
              animate-[testimonialBottom_3s_ease-in-out_infinite_1s]
            "
          />

          {/* Left */}
          <span
            className="
              absolute bottom-[-35%] left-0
              h-[42%] w-[2px]
              rounded-full
              bg-gradient-to-t
              from-[#7B2CBF]
              via-[#FF4DDE]
              to-[#FF7A18]
              animate-[testimonialLeft_3s_ease-in-out_infinite_1.5s]
            "
          />
        </div>

        {/* Card Content */}
        <div className="relative m-[2px] overflow-hidden rounded-[26px] bg-[#faf9fb]">

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#7B2CBF]/10 blur-3xl animate-[testimonialGlow_5s_ease-in-out_infinite]" />

          <div className="grid min-h-[330px] grid-cols-1 items-center gap-6 p-6 sm:min-h-[350px] sm:p-8 md:grid-cols-[180px_1fr] md:gap-10 md:p-10 lg:grid-cols-[220px_1fr] lg:p-12">

            {/* Student Image */}
            <motion.div
              key={`image-${current}`}
              initial={{
                opacity: 0,
                x: direction > 0 ? -35 : 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative">

                {/* Image Glow */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#3D007A]/20 via-[#FF4DDE]/10 to-[#E1B270]/30 blur-xl" />

                {/* Image Border */}
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-[3px] border-white shadow-xl sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-44 lg:w-44">
                  <img
                    src={
                      testimonial.image ||
                      testimonial.avatar ||
                      "/images/testimonials/default.jpg"
                    }
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Small Accent */}
                <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full border-4 border-[#faf9fb] bg-gradient-to-br from-[#3D007A] to-[#E1B270] sm:h-8 sm:w-8" />
              </div>
            </motion.div>

            {/* Testimonial Content */}
            <motion.div
              key={`content-${current}`}
              initial={{
                opacity: 0,
                x: direction > 0 ? 35 : -35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="min-w-0 text-center md:text-left"
            >

              {/* Stars */}
              <div className="text-sm tracking-[3px] text-[#E1B270] sm:text-base">
                ★★★★★
              </div>

              {/* Quote */}
              <p
                className="mt-4 text-lg leading-8 text-[#403746] sm:text-xl sm:leading-9 lg:text-[22px]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                “{testimonial.quote}”
              </p>

              {/* Student */}
              <div className="mt-5">
                <b className="block text-sm font-semibold text-[#24172d] sm:text-base">
                  {testimonial.name}
                </b>

                <small className="mt-1 block text-xs text-[#8a818f]">
                  {testimonial.role}
                </small>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-5">

        {/* Previous */}
        <button
          type="button"
          onClick={previousTestimonial}
          aria-label="Previous testimonial"
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full
            border border-[#ddd5e2]
            bg-white
            text-[#3D007A]
            shadow-sm
            transition
            hover:border-[#3D007A]
            hover:bg-[#3D007A]
            hover:text-white
          "
        >
          <span className="text-lg leading-none">‹</span>
        </button>

        {/* Progress Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                h-1.5 rounded-full transition-all duration-500
                ${
                  current === index
                    ? "w-7 bg-[#3D007A]"
                    : "w-1.5 bg-[#d7d0dc] hover:bg-[#9d91a6]"
                }
              `}
            />
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full
            border border-[#ddd5e2]
            bg-white
            text-[#3D007A]
            shadow-sm
            transition
            hover:border-[#3D007A]
            hover:bg-[#3D007A]
            hover:text-white
          "
        >
          <span className="text-lg leading-none">›</span>
        </button>

      </div>

      {/* Auto Slide Status */}
      <div className="mx-auto mt-4 h-[2px] w-24 overflow-hidden rounded-full bg-[#e8e2eb]">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
          className="h-full bg-gradient-to-r from-[#3D007A] via-[#FF4DDE] to-[#E1B270]"
        />
      </div>

    </div>
  );
}
  return (
    <main className="w-full overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
     
<section className="relative min-h-[500px] w-full overflow-hidden sm:min-h-[550px] lg:min-h-[650px]">

  {/* ================= BACKGROUND IMAGE ================= */}
  <img
    src="/images/hero.png"
    alt="Yoga practice"
    className="
      absolute inset-0 h-full w-full
      object-cover
      object-[65%_center]
      scale-[1.01]
      sm:object-center
      lg:scale-[1.02]
      transition-transform duration-[3000ms]
    "
  />


  {/* ================= DARK BASE OVERLAY ================= */}
  <div className="absolute inset-0 bg-[#160025]/40 sm:bg-[#160025]/35" />


  {/* ================= MAIN GRADIENT ================= */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-[#160025]/90
      via-[#3D007A]/65
      to-[#3D007A]/10
      sm:from-[#160025]/95
      sm:via-[#3D007A]/75
      sm:to-[#3D007A]/10
    "
  />


  {/* ================= MOBILE BOTTOM DARK GRADIENT ================= */}
  <div
    className="
      absolute inset-x-0 bottom-0
      h-56
      bg-gradient-to-t
      from-[#160025]/90
      via-[#160025]/40
      to-transparent
      sm:h-48
      sm:from-[#160025]/70
      sm:via-transparent
    "
  />


  {/* ================= SOFT PURPLE LIGHT ================= */}
  <div
    className="
      pointer-events-none absolute
      -left-32 top-[22%]
      h-[280px] w-[280px]
      rounded-full
      bg-[#8d35c7]/20
      blur-[90px]
      animate-[heroGlow_7s_ease-in-out_infinite]
      sm:h-[360px] sm:w-[360px]
      lg:h-[420px] lg:w-[420px]
      lg:blur-[110px]
    "
  />


  {/* ================= SMALL DECORATIVE GLOW ================= */}
  <div
    className="
      pointer-events-none absolute
      right-[5%] top-[15%]
      h-24 w-24
      rounded-full
      bg-[#d9a7ff]/10
      blur-[55px]
      animate-[heroGlowSmall_5s_ease-in-out_infinite]
      sm:right-[15%]
      sm:top-[20%]
      sm:h-32 sm:w-32
      sm:blur-[70px]
    "
  />


  {/* ================= DECORATIVE VERTICAL LINE ================= */}
  <div
    className="
      absolute left-4 top-1/2 hidden
      h-24 w-px
      -translate-y-1/2
      bg-gradient-to-b
      from-transparent
      via-white/40
      to-transparent
      lg:left-8
      lg:block
      lg:h-28
    "
  />


  {/* ================= CONTENT ================= */}
  <div
    className="
      relative z-10 mx-auto flex
      min-h-[500px]
      w-full max-w-[1380px]
      items-center
      px-5
      sm:min-h-[550px]
      sm:px-8
      md:px-12
      lg:min-h-[650px]
      lg:px-16
      xl:px-20
    "
  >

    <div
      className="
        w-full
        max-w-[760px]
        pt-8
        sm:pt-10
        lg:pt-14
      "
    >

      {/* ================= EYEBROW ================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          mb-4
          flex items-center gap-2
          sm:mb-5 sm:gap-3
        "
      >

        <span className="h-px w-6 bg-gradient-to-r from-[#d9a7ff] to-transparent sm:w-12" />

        <span
          className="
            text-[7px]
            font-semibold
            tracking-[0.25em]
            text-white/80
            sm:text-[11px]
            sm:tracking-[0.32em]
          "
        >
          ASCENT YOGA CENTRE
        </span>

        <span className="h-px w-4 bg-white/20 sm:w-10" />

      </motion.div>


      {/* ================= HEADING ================= */}
      {/* ================= HEADING ================= */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 0.1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    max-w-[760px]
    text-[2.65rem]
    font-normal
    leading-[0.94]
    tracking-[-0.045em]

    sm:text-[4rem]
    sm:leading-[0.91]

    md:text-[5rem]

    lg:text-[6rem]

    xl:text-[6.5rem]
  "
  style={{ fontFamily: '"Playfair Display", serif' }}
>
  <span
    className="
      block
      bg-gradient-to-r
      from-white
      via-[#E8CFFF]
      to-[#C88AEE]
      bg-clip-text
      text-transparent
    "
  >
    Rise Within.
  </span>

  <span
    className="
      mt-1
      block
      bg-gradient-to-r
      from-[#C88AEE]
      via-[#FF4DDE]
      to-[#E1B270]
      bg-clip-text
      text-transparent
    "
  >
    <i className="font-normal">
      Move Beyond.
    </i>
  </span>
</motion.h1>


      {/* ================= DESCRIPTION ================= */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.35,
        }}
        className="
          mt-5
          max-w-[390px]
          text-[10px]
          leading-[1.65]
          text-white/75

          sm:mt-7
          sm:max-w-[570px]
          sm:text-[15px]
          sm:leading-7
        "
      >
        A calm space to move with intention, breathe deeply and build a
        healthier relationship with yourself.
      </motion.p>


      {/* ================= BUTTONS ================= */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
        }}
        className="
          mt-6
          flex flex-row
          gap-2

          sm:mt-8
          sm:gap-3
        "
      >

        {/* PRIMARY BUTTON */}
        <Link
          to="/contact"
          className="
            group relative
            inline-flex
            min-h-[40px]
            flex-1
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-white
            px-4
            text-[10px]
            font-semibold
            text-[#3D007A]
            shadow-[0_8px_25px_rgba(0,0,0,0.18)]
            transition-all duration-300
            hover:-translate-y-1
            hover:scale-[1.02]
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
            active:scale-95

            sm:min-h-[48px]
            sm:flex-none
            sm:px-7
            sm:text-sm
          "
        >

          <span
            className="
              pointer-events-none
              absolute inset-y-0 -left-full
              w-1/2
              skew-x-[-20deg]
              bg-[#3D007A]/10
              transition-all duration-700
              group-hover:left-[120%]
            "
          />

          <span className="relative z-10 whitespace-nowrap">
            Book a Class
          </span>

        </Link>


        {/* SECONDARY BUTTON */}
        <Link
          to="/explore"
          className="
            group
            inline-flex
            min-h-[40px]
            flex-1
            items-center
            justify-center
            rounded-full
            border border-white/35
            bg-white
            px-4
            text-[10px]
            font-semibold
            text-white
            backdrop-blur-md
            transition-all duration-300
            hover:-translate-y-1
            hover:border-white/80
            hover:bg-white
            hover:text-[#3D007A]
            active:scale-95

            sm:min-h-[48px]
            sm:flex-none
            sm:px-7
            sm:text-sm
          "
        >

          <span className="whitespace-nowrap transition-transform duration-300 group-hover:translate-x-0.5">
            Explore Ascent
          </span>

        </Link>

      </motion.div>


      {/* ================= TRUST / DETAIL ROW ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
        className="
          mt-6
          flex items-center gap-2
          text-[7px]
          tracking-[0.1em]
          text-white/50

          sm:mt-10
          sm:gap-4
          sm:text-[10px]
          sm:tracking-[0.12em]
        "
      >

        <span
          className="
            h-1 w-1
            rounded-full
            bg-[#d9a7ff]
            shadow-[0_0_10px_#d9a7ff]
            sm:h-1.5 sm:w-1.5
            sm:shadow-[0_0_12px_#d9a7ff]
          "
        />

        <span>
          MINDFUL MOVEMENT
        </span>

        <span className="h-px w-4 bg-white/20 sm:w-8" />

        <span>
          INNER BALANCE
        </span>

      </motion.div>

    </div>

  </div>


  {/* ================= SCROLL INDICATOR ================= */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="
      absolute bottom-5
      right-5
      hidden
      flex-col items-center gap-2
      text-[8px]
      tracking-[0.25em]
      text-white/50

      sm:flex
      lg:right-10
      lg:bottom-6
    "
  >

    <span className="rotate-90">
      SCROLL
    </span>

    <span className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent sm:h-10" />

  </motion.div>


  {/* ================= HERO ANIMATIONS ================= */}
  <style>
    {`
      @keyframes heroGlow {
        0%,
        100% {
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 0.5;
        }

        50% {
          transform: translate3d(25px, -15px, 0) scale(1.1);
          opacity: 0.8;
        }
      }

      @keyframes heroGlowSmall {
        0%,
        100% {
          transform: scale(1);
          opacity: 0.3;
        }

        50% {
          transform: scale(1.3);
          opacity: 0.7;
        }
      }
    `}
  </style>

</section>
      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-[#3D007A] text-white">
  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[10%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#FF4DDE]/10 blur-3xl" />
    <div className="absolute right-[10%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#E1B270]/10 blur-3xl" />
  </div>

  <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-2 md:grid-cols-4">

    {/* Stat 01 */}
    <div className="group relative flex flex-col items-center justify-center border-b border-white/15 px-3 py-4 text-center transition-all duration-500 hover:bg-white/[0.04] md:border-b-0 md:border-r md:py-5">
      <span className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] transition-all duration-500 group-hover:w-20" />

      <b
        className="bg-gradient-to-r from-white via-[#F5D9FF] to-[#E1B270] bg-clip-text text-2xl font-medium text-transparent sm:text-3xl"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        10+
      </b>

      <span className="mt-1 text-[10px] tracking-wide text-white/70 transition-colors duration-300 group-hover:text-white/90 sm:text-xs">
        Years of practice
      </span>
    </div>

    {/* Stat 02 */}
    <div className="group relative flex flex-col items-center justify-center border-b border-white/15 px-3 py-4 text-center transition-all duration-500 hover:bg-white/[0.04] md:border-b-0 md:border-r md:py-5">
      <span className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] transition-all duration-500 group-hover:w-20" />

      <b
        className="bg-gradient-to-r from-white via-[#F5D9FF] to-[#FF4DDE] bg-clip-text text-2xl font-medium text-transparent sm:text-3xl"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        500+
      </b>

      <span className="mt-1 text-[10px] tracking-wide text-white/70 transition-colors duration-300 group-hover:text-white/90 sm:text-xs">
        Students supported
      </span>
    </div>

    {/* Stat 03 */}
    <div className="group relative flex flex-col items-center justify-center border-b border-white/15 px-3 py-4 text-center transition-all duration-500 hover:bg-white/[0.04] md:border-b-0 md:border-r md:py-5">
      <span className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] transition-all duration-500 group-hover:w-20" />

      <b
        className="bg-gradient-to-r from-white via-[#F5D9FF] to-[#E1B270] bg-clip-text text-2xl font-medium text-transparent sm:text-3xl"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        10+
      </b>

      <span className="mt-1 text-[10px] tracking-wide text-white/70 transition-colors duration-300 group-hover:text-white/90 sm:text-xs">
        Wellness sessions
      </span>
    </div>

    {/* Stat 04 */}
    <div className="group relative flex flex-col items-center justify-center px-3 py-4 text-center transition-all duration-500 hover:bg-white/[0.04] md:py-5">
      <span className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] transition-all duration-500 group-hover:w-20" />

      <b
        className="bg-gradient-to-r from-white via-[#F5D9FF] to-[#FF4DDE] bg-clip-text text-2xl font-medium text-transparent sm:text-3xl"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        6
      </b>

      <span className="mt-1 text-[10px] tracking-wide text-white/70 transition-colors duration-300 group-hover:text-white/90 sm:text-xs">
        Days every week
      </span>
    </div>

  </div>
</section>


      {/* =====================================================
          ABOUT ASCENT
      ===================================================== */}
      

<section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

  {/* Background Decorative Glow */}
  <div
    className="
      pointer-events-none absolute
      -left-32 top-1/3
      h-72 w-72
      rounded-full
      bg-[#3D007A]/[0.035]
      blur-[90px]
    "
  />

  <div
    className="
      pointer-events-none absolute
      -right-32 bottom-0
      h-80 w-80
      rounded-full
      bg-[#E1B270]/[0.05]
      blur-[100px]
    "
  />

  <div
    className="
      relative mx-auto grid w-full
      max-w-[1380px]
      items-center gap-12
      px-5
      sm:px-8
      md:grid-cols-2
      lg:gap-20
      lg:px-16
      xl:px-20
    "
  >

    {/* IMAGE SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative mx-auto w-full max-w-[620px]"
    >

      {/* Decorative Back Border */}
      <div
        className="
          absolute
          -bottom-3 -left-3
          h-full w-full
          rounded-[30px]
          border border-[#E1B270]/25
          transition-all duration-700
          group-hover:-bottom-5
          group-hover:-left-5
          group-hover:border-[#E1B270]/50
        "
      />

      {/* Static Gradient Border */}
      <div
        className="
          absolute -inset-[2px]
          rounded-[30px]
          bg-gradient-to-br
          from-[#3D007A]
          via-[#8d35c7]
          to-[#E1B270]
          opacity-50
          transition-all duration-500
          group-hover:opacity-100
        "
      />

      {/* Animated Border Highlight - NO ROTATION */}
      <div
        className="
          pointer-events-none
          absolute -inset-[2px]
          overflow-hidden
          rounded-[30px]
          opacity-80
        "
      >
        <div
          className="
            absolute
            -left-[40%]
            top-0
            h-[3px]
            w-[40%]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
            blur-[1px]
            animate-[borderTopMove_3.5s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute
            right-0
            -top-[40%]
            h-[40%]
            w-[3px]
            rounded-full
            bg-gradient-to-b
            from-transparent
            via-white
            to-transparent
            blur-[1px]
            animate-[borderRightMove_3.5s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute
            -right-[40%]
            bottom-0
            h-[3px]
            w-[40%]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
            blur-[1px]
            animate-[borderBottomMove_3.5s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute
            bottom-0
            -left-[40%]
            h-[40%]
            w-[3px]
            rounded-full
            bg-gradient-to-b
            from-transparent
            via-white
            to-transparent
            blur-[1px]
            animate-[borderLeftMove_3.5s_ease-in-out_infinite]
          "
        />
      </div>

      {/* Inner Background */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-white
          p-[3px]
        "
      >

        {/* Image */}
        <div
          className="
            relative
            h-[340px]
            overflow-hidden
            rounded-[25px]
            sm:h-[410px]
            lg:h-[480px]
          "
        >
          <img
            src="/images/about-home.jpg"
            alt="Yoga meditation"
            className="
              h-full w-full
              object-cover
              transition-transform
              duration-[1200ms]
              ease-out
              group-hover:scale-[1.06]
            "
          />

          {/* Image Overlay */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t
              from-[#21003f]/35
              via-transparent
              to-white/5
              opacity-70
              transition-opacity duration-700
              group-hover:opacity-90
            "
          />

          {/* Moving Image Light */}
          <div
            className="
              pointer-events-none absolute
              -left-[80%] top-0
              h-full w-[45%]
              skew-x-[-18deg]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-all
              duration-[1200ms]
              group-hover:left-[130%]
            "
          />

          {/* Image Corner Decoration */}
          <div
            className="
              absolute right-5 top-5
              h-12 w-12
              rounded-full
              border border-white/30
              bg-white/10
              backdrop-blur-md
              transition-all duration-500
              group-hover:scale-110
              group-hover:rotate-12
            "
          />

          {/* Bottom Label */}
          <div
            className="
              absolute bottom-5 left-5
              rounded-full
              border border-white/20
              bg-black/20
              px-4 py-2
              text-[9px]
              font-semibold
              tracking-[0.2em]
              text-white
              backdrop-blur-md
              transition-all duration-500
              group-hover:bg-[#3D007A]/70
            "
          >
            MINDFUL MOVEMENT
          </div>
        </div>
      </div>

      {/* Floating Accent */}
      <div
        className="
          absolute -right-4 -top-4
          h-16 w-16
          rounded-full
          border border-[#3D007A]/15
          bg-white/70
          shadow-[0_10px_35px_rgba(61,0,122,0.08)]
          backdrop-blur-md
          transition-all duration-700
          group-hover:-right-6
          group-hover:-top-6
          group-hover:rotate-180
        "
      >
        <div
          className="
            absolute left-1/2 top-1/2
            h-2 w-2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#3D007A]
          "
        />
      </div>
    </motion.div>


    {/* CONTENT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="max-w-[590px]"
    >

      {/* Label */}
      <div className="flex items-center gap-3">
        <span
          className="
            h-px w-8
            bg-gradient-to-r
            from-[#3D007A]
            to-[#E1B270]
            sm:w-10
          "
        />

        <span
          className="
            text-[10px]
            font-bold
            tracking-[0.22em]
            text-[#3D007A]
            sm:text-xs
          "
        >
          ABOUT ASCENT
        </span>
      </div>


      {/* Heading */}
      <h2
        className="
          mt-4
          max-w-[570px]
          text-3xl
          leading-[1.08]
          tracking-[-0.025em]
          text-[#24172d]
          sm:text-4xl
          lg:text-[48px]
        "
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        A quieter place to{" "}
        <span
          className="
            bg-gradient-to-r
            from-[#3D007A]
            via-[#7032a1]
            to-[#B77DDD]
            bg-clip-text
            text-transparent
          "
        >
          become stronger.
        </span>
      </h2>


      {/* Animated Divider */}
      <div
        className="
          relative my-6
          h-[2px] w-20
          overflow-hidden
          rounded-full
          bg-[#E8ECF1]
        "
      >
        <div
          className="
            absolute left-0 top-0
            h-full w-1/2
            rounded-full
            bg-gradient-to-r
            from-[#3D007A]
            to-[#E1B270]
            animate-[aboutLine_3s_ease-in-out_infinite]
          "
        />
      </div>


      {/* Paragraph */}
      <p className="max-w-[550px] text-sm leading-7 text-[#625b66] sm:text-base">
        At Ascent, yoga is not about perfection. It is a practice of
        creating space — in the body, in the breath and in the mind.
      </p>

      <p className="mt-4 max-w-[550px] text-sm leading-7 text-[#625b66] sm:text-base">
        Our sessions welcome beginners and experienced practitioners
        into a warm, grounded environment where consistency matters more
        than comparison.
      </p>


      {/* Feature Row */}
      <div className="mt-7 flex flex-wrap gap-3">

        <div
          className="
            rounded-full
            border border-[#E8ECF1]
            bg-[#FAF9FB]
            px-4 py-2
            text-[10px]
            font-semibold
            tracking-[0.12em]
            text-[#625b66]
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#3D007A]/20
            hover:text-[#3D007A]
          "
        >
          MINDFUL PRACTICE
        </div>

        <div
          className="
            rounded-full
            border border-[#E8ECF1]
            bg-[#FAF9FB]
            px-4 py-2
            text-[10px]
            font-semibold
            tracking-[0.12em]
            text-[#625b66]
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#E1B270]/40
            hover:text-[#8b632b]
          "
        >
          INNER BALANCE
        </div>

      </div>


      {/* Link */}
      <Link
        to="/about"
        className="
          group/link
          mt-7
          inline-flex
          items-center
          gap-3
          text-sm
          font-semibold
          text-[#3D007A]
        "
      >
        <span className="relative">
          Discover our philosophy

          <span
            className="
              absolute
              -bottom-1
              left-0
              h-[1px]
              w-0
              bg-[#3D007A]
              transition-all
              duration-300
              group-hover/link:w-full
            "
          />
        </span>

        <span
          className="
            transition-transform
            duration-300
            group-hover/link:translate-x-2
          "
        >
          →
        </span>
      </Link>

    </motion.div>
  </div>


  {/* Animations */}
  <style>
    {`
      /* Top border highlight */
      @keyframes borderTopMove {
        0% {
          left: -40%;
          opacity: 0;
        }

        15% {
          opacity: 1;
        }

        50% {
          left: 100%;
          opacity: 1;
        }

        70% {
          opacity: 0;
        }

        100% {
          left: 100%;
          opacity: 0;
        }
      }

      /* Right border highlight */
      @keyframes borderRightMove {
        0% {
          top: -40%;
          opacity: 0;
        }

        15% {
          opacity: 1;
        }

        50% {
          top: 100%;
          opacity: 1;
        }

        70% {
          opacity: 0;
        }

        100% {
          top: 100%;
          opacity: 0;
        }
      }

      /* Bottom border highlight */
      @keyframes borderBottomMove {
        0% {
          right: -40%;
          opacity: 0;
        }

        15% {
          opacity: 1;
        }

        50% {
          right: 100%;
          opacity: 1;
        }

        70% {
          opacity: 0;
        }

        100% {
          right: 100%;
          opacity: 0;
        }
      }

      /* Left border highlight */
      @keyframes borderLeftMove {
        0% {
          bottom: -40%;
          opacity: 0;
        }

        15% {
          opacity: 1;
        }

        50% {
          bottom: 100%;
          opacity: 1;
        }

        70% {
          opacity: 0;
        }

        100% {
          bottom: 100%;
          opacity: 0;
        }
      }

      /* Text divider */
      @keyframes aboutLine {
        0% {
          transform: translateX(-120%);
          opacity: 0.4;
        }

        50% {
          transform: translateX(100%);
          opacity: 1;
        }

        100% {
          transform: translateX(220%);
          opacity: 0.4;
        }
      }
    `}
  </style>

</section>

      {/* =====================================================
          PROGRAMS
      ===================================================== */}
     <section className="w-full bg-[#E8ECF1] py-14 sm:py-16 lg:py-20">
  <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 xl:px-10">

    {/* Section Header */}
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
       <span className="!text-white text-[10px] font-bold tracking-[0.2em] sm:text-xs">
  EXPLORE ASCENT
</span>
        <h2
          className="mt-2 max-w-[600px] text-3xl leading-tight text-[#24172d] sm:text-4xl lg:text-[44px]"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Practice that meets you where you are.
        </h2>
      </div>

      <Link
        to="/explore"
        className="text-sm font-semibold text-[#3D007A] transition hover:translate-x-1"
      >
        View all programs →
      </Link>
    </div>

    {/* Program Cards */}
    <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
      {programs.slice(0, 3).map((p, index) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative min-w-0 overflow-hidden rounded-[24px] p-[2px]"
        >
          {/* Animated Rainbow Border */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]">

            {/* Soft Rainbow Base Border */}
            <span
              className="
                absolute inset-0 rounded-[24px]
                bg-gradient-to-br
                from-[#FF4DDE]
                via-[#7B2CBF]
                via-[#3D007A]
                via-[#00C2FF]
                to-[#FFD166]
                opacity-30
                transition-opacity duration-500
                group-hover:opacity-80
              "
            />

            {/* Top Moving Border */}
            <span
              className="
                absolute left-[-35%] top-0
                h-[2px] w-[45%]
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-[#FF4DDE]
                via-[#7B2CBF]
                to-[#3D007A]
                opacity-0
                blur-[0.5px]
                group-hover:opacity-100
                animate-[programBorderTop_3.5s_ease-in-out_infinite]
              "
            />

            {/* Right Moving Border */}
            <span
              className="
                absolute right-0 top-[-35%]
                h-[45%] w-[2px]
                rounded-full
                bg-gradient-to-b
                from-transparent
                via-[#3D007A]
                via-[#00C2FF]
                to-[#36D399]
                opacity-0
                blur-[0.5px]
                group-hover:opacity-100
                animate-[programBorderRight_3.5s_ease-in-out_infinite_0.4s]
              "
            />

            {/* Bottom Moving Border */}
            <span
              className="
                absolute bottom-0 right-[-35%]
                h-[2px] w-[45%]
                rounded-full
                bg-gradient-to-l
                from-transparent
                via-[#36D399]
                via-[#FFD166]
                to-[#FF7A18]
                opacity-0
                blur-[0.5px]
                group-hover:opacity-100
                animate-[programBorderBottom_3.5s_ease-in-out_infinite_0.8s]
              "
            />

            {/* Left Moving Border */}
            <span
              className="
                absolute bottom-[-35%] left-0
                h-[45%] w-[2px]
                rounded-full
                bg-gradient-to-t
                from-transparent
                via-[#FF7A18]
                via-[#FF4DDE]
                to-[#7B2CBF]
                opacity-0
                blur-[0.5px]
                group-hover:opacity-100
                animate-[programBorderLeft_3.5s_ease-in-out_infinite_1.2s]
              "
            />
          </div>

          {/* Card */}
          <div
            className="
              relative h-full overflow-hidden rounded-[22px]
              bg-white shadow-sm
              transition-all duration-500
              group-hover:-translate-y-[2px]
              group-hover:shadow-xl
            "
          >
            {/* Image */}
            <div className="relative h-[220px] overflow-hidden sm:h-[240px]">
              <img
                src={p.image}
                alt={p.title}
                className="
                  h-full w-full object-cover
                  transition duration-700
                  group-hover:scale-105
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#24172d]/30
                  via-transparent
                  to-transparent
                  opacity-0
                  transition duration-500
                  group-hover:opacity-100
                "
              />

              {/* Level Badge */}
              <span
                className="
                  absolute left-4 top-4
                  rounded-full
                  bg-white/90
                  px-3 py-1
                  text-[10px]
                  font-semibold
                  text-[#3D007A]
                  shadow-sm
                  backdrop-blur-sm
                "
              >
                {p.level}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <small className="text-xs font-medium text-[#8a818f]">
                {p.duration}
              </small>

              <h3
                className="mt-2 text-xl text-[#24172d]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {p.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#6b6470]">
                {p.desc}
              </p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>

  {/* Border Animation Keyframes */}
  <style>{`
    @keyframes programBorderTop {
      0% {
        left: -40%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        left: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        left: 100%;
        opacity: 0;
      }
    }

    @keyframes programBorderRight {
      0% {
        top: -40%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        top: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        top: 100%;
        opacity: 0;
      }
    }

    @keyframes programBorderBottom {
      0% {
        right: -40%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        right: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        right: 100%;
        opacity: 0;
      }
    }

    @keyframes programBorderLeft {
      0% {
        bottom: -40%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        bottom: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        bottom: 100%;
        opacity: 0;
      }
    }
  `}</style>
</section>


      {/* =====================================================
          WHY ASCENT
      ===================================================== */}
   

<section className="relative w-full overflow-hidden bg-[#16002b] py-9 text-white sm:py-12 lg:py-16">

  {/* Background atmosphere */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-[#7B2CBF]/20 blur-3xl sm:h-64 sm:w-64" />

    <div className="absolute right-[-90px] top-[-50px] h-56 w-56 rounded-full bg-[#E1B270]/10 blur-3xl sm:h-72 sm:w-72" />

    <div className="absolute bottom-[-100px] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#3D007A]/40 blur-3xl sm:h-80 sm:w-80" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:28px_28px] opacity-30" />
  </div>


  <div className="relative z-10 mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-14 xl:px-16">

    {/* ================= HEADER ================= */}
    <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr_430px] lg:items-end">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >

        <div className="mb-2.5 flex items-center gap-2 sm:mb-4 sm:gap-3">
          <span className="h-px w-6 bg-[#E1B270] sm:w-10" />

          <span className="text-[8px] font-bold tracking-[0.24em] text-[#E1B270] sm:text-[10px]">
            WHY ASCENT
          </span>
        </div>


        <h2
          className="text-[26px] leading-[1.08] sm:text-4xl lg:text-[56px]"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          More than a class.
          <br />

          <span className="bg-gradient-to-r from-white via-[#e7d2f3] to-[#c58ce7] bg-clip-text text-transparent">
            A practice for life.
          </span>
        </h2>

      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >

        <p className="max-w-[430px] text-[10px] leading-5 text-white/60 sm:text-sm sm:leading-7">
          We bring traditional yoga into a welcoming, contemporary space where
          movement, breath and mindfulness work together to create a deeper
          sense of wellbeing.
        </p>

        <div className="mt-2.5 h-px w-14 bg-gradient-to-r from-[#E1B270] to-transparent sm:mt-4 sm:w-24" />

      </motion.div>

    </div>


    {/* ================= CARDS ================= */}
    <div className="mt-6 border-t border-white/10 pt-4 sm:mt-9 sm:pt-6">

      {/* 
        EXACTLY 3 COLUMNS ON ALL SCREEN SIZES
      */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">


        {/* ================= CARD 01 ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          whileHover={{ y: -5 }}
          className="group relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] p-2.5 backdrop-blur-md transition-all duration-500 hover:border-[#9d55ca]/50 hover:bg-white/[0.07] sm:rounded-[20px] sm:p-5 lg:p-7"
        >

          {/* Glow */}
          <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#7B2CBF]/20 blur-2xl transition-all duration-500 group-hover:bg-[#9d55ca]/35 sm:-right-12 sm:-top-12 sm:h-32 sm:w-32" />


          {/* Top */}
          <div className="relative z-10 flex items-start justify-between">

            <span className="text-[7px] font-bold tracking-[0.12em] text-[#E1B270] sm:text-[10px] sm:tracking-[0.18em]">
              01
            </span>

            <span className="text-[6px] tracking-[0.08em] text-white/25 sm:text-[9px] sm:tracking-[0.15em]">
              BODY
            </span>

          </div>


          {/* Content */}
          <div className="relative z-10 mt-6 sm:mt-9">

            <div className="mb-2 h-px w-5 bg-gradient-to-r from-[#E1B270] to-transparent transition-all duration-500 group-hover:w-10 sm:mb-4 sm:w-10 sm:group-hover:w-16" />

            <h3
              className="text-[12px] leading-[1.15] sm:text-xl lg:text-[26px]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Mindful Movement
            </h3>

            <p className="mt-1.5 text-[7px] leading-[1.55] text-white/50 sm:mt-2.5 sm:text-xs sm:leading-6">
              Build strength, flexibility and body awareness through intentional
              movement and balanced practice.
            </p>

          </div>


          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#E1B270] to-[#9d55ca] transition-all duration-500 group-hover:w-full" />

        </motion.div>



        {/* ================= CARD 02 ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          whileHover={{ y: -5 }}
          className="group relative min-w-0 overflow-hidden rounded-xl border border-[#8d35c7]/25 bg-gradient-to-br from-[#3D007A]/70 via-[#2a0750]/70 to-[#1b0730]/80 p-2.5 backdrop-blur-md transition-all duration-500 hover:border-[#8d35c7]/60 sm:rounded-[20px] sm:p-5 lg:p-7"
        >

          {/* Glow */}
          <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#9d55ca]/20 blur-2xl transition-all duration-500 group-hover:bg-[#b77ddd]/30 sm:-right-14 sm:-top-14 sm:h-32 sm:w-32" />


          {/* Top */}
          <div className="relative z-10 flex items-start justify-between">

            <span className="text-[7px] font-bold tracking-[0.12em] text-[#E1B270] sm:text-[10px] sm:tracking-[0.18em]">
              02
            </span>

            <span className="text-[6px] tracking-[0.08em] text-white/25 sm:text-[9px] sm:tracking-[0.15em]">
              BREATH
            </span>

          </div>


          {/* Content */}
          <div className="relative z-10 mt-6 sm:mt-9">

            <div className="mb-2 h-px w-5 bg-gradient-to-r from-[#b77ddd] to-transparent transition-all duration-500 group-hover:w-10 sm:mb-4 sm:w-10 sm:group-hover:w-16" />

            <h3
              className="text-[12px] leading-[1.15] sm:text-xl lg:text-[26px]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Conscious Breath
            </h3>

            <p className="mt-1.5 text-[7px] leading-[1.55] text-white/55 sm:mt-2.5 sm:text-xs sm:leading-6">
              Discover breathing practices that help quiet the mind, improve
              focus and create a calmer inner rhythm.
            </p>

          </div>


          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#8d35c7] to-[#E1B270] transition-all duration-500 group-hover:w-full" />

        </motion.div>



        {/* ================= CARD 03 ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.19 }}
          whileHover={{ y: -5 }}
          className="group relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#241035]/80 to-[#140022]/90 p-2.5 backdrop-blur-md transition-all duration-500 hover:border-[#E1B270]/40 hover:bg-white/[0.055] sm:rounded-[20px] sm:p-5 lg:p-7"
        >

          {/* Glow */}
          <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#E1B270]/10 blur-2xl transition-all duration-500 group-hover:bg-[#E1B270]/20 sm:-right-12 sm:-top-12 sm:h-32 sm:w-32" />


          {/* Top */}
          <div className="relative z-10 flex items-start justify-between">

            <span className="text-[7px] font-bold tracking-[0.12em] text-[#E1B270] sm:text-[10px] sm:tracking-[0.18em]">
              03
            </span>

            <span className="text-[6px] tracking-[0.08em] text-white/25 sm:text-[9px] sm:tracking-[0.15em]">
              MIND
            </span>

          </div>


          {/* Content */}
          <div className="relative z-10 mt-6 sm:mt-9">

            <div className="mb-2 h-px w-5 bg-gradient-to-r from-[#E1B270] to-transparent transition-all duration-500 group-hover:w-10 sm:mb-4 sm:w-10 sm:group-hover:w-16" />

            <h3
              className="text-[12px] leading-[1.15] sm:text-xl lg:text-[26px]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Inner Balance
            </h3>

            <p className="mt-1.5 text-[7px] leading-[1.55] text-white/50 sm:mt-2.5 sm:text-xs sm:leading-6">
              Create meaningful habits that support everyday wellbeing,
              emotional balance and a more grounded life.
            </p>

          </div>


          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#E1B270] to-[#8d35c7] transition-all duration-500 group-hover:w-full" />

        </motion.div>

      </div>

    </div>


    {/* ================= BOTTOM STATEMENT ================= */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 sm:mt-7 sm:pt-5"
    >

      <p className="text-[6px] font-semibold tracking-[0.16em] text-white/30 sm:text-[9px] sm:tracking-[0.2em]">
        MOVE · BREATHE · CONNECT
      </p>

      <div className="flex items-center gap-1.5">

        <span className="h-px w-4 bg-[#E1B270]/60 sm:w-7" />

        <span className="text-[7px] text-white/30 sm:text-[10px]">
          Your practice, your journey
        </span>

      </div>

    </motion.div>

  </div>
</section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-white py-7 sm:py-9 lg:py-11">
  {/* Background Decorations */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Purple Glow */}
    <div
      className="
        absolute -left-20 top-10
        h-36 w-36
        rounded-full
        bg-[#7B2CBF]/6
        blur-3xl
        sm:-left-28
        sm:h-48 sm:w-48
      "
    />

    {/* Gold Glow */}
    <div
      className="
        absolute -right-20 bottom-0
        h-40 w-40
        rounded-full
        bg-[#E1B270]/8
        blur-3xl
        sm:-right-28
        sm:h-52 sm:w-52
      "
    />

    {/* Pink Glow */}
    <div
      className="
        absolute left-[45%] top-[25%]
        h-32 w-32
        rounded-full
        bg-[#FF4DDE]/5
        blur-3xl
        animate-[testimonialGlow_5s_ease-in-out_infinite]
      "
    />

    {/* Left Decorative Line */}
    <div
      className="
        absolute left-0 top-1/2
        h-px w-12
        bg-gradient-to-r
        from-transparent
        via-[#7B2CBF]/30
        to-[#FF4DDE]/40
        sm:w-20
      "
    />

    {/* Right Decorative Line */}
    <div
      className="
        absolute right-0 top-1/2
        h-px w-12
        bg-gradient-to-l
        from-transparent
        via-[#E1B270]/40
        to-[#00C2FF]/30
        sm:w-20
      "
    />
  </div>

  <div
    className="
      relative z-10
      mx-auto w-full
      max-w-[1380px]
      px-4
      sm:px-6
      lg:px-8
      xl:px-10
    "
  >

    {/* =========================
        HEADING
    ========================== */}
    <div className="mb-4 text-center sm:mb-5 lg:mb-6">

      <span
        className="
          text-[8px]
          font-bold
          tracking-[0.18em]
          text-[#3D007A]
          sm:text-[10px]
          sm:tracking-[0.2em]
        "
      >
        STUDENT VOICES
      </span>

      <h2
        className="
          mt-1
          text-[25px]
          leading-tight
          text-[#24172d]
          sm:mt-1.5
          sm:text-3xl
          lg:text-[40px]
        "
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        What our community says.
      </h2>

      <p
        className="
          mx-auto
          mt-1.5
          max-w-[500px]
          text-[8px]
          leading-4
          text-[#756d7a]
          sm:mt-2
          sm:text-xs
          sm:leading-5
        "
      >
        Real experiences from students who have made yoga a meaningful part
        of their everyday lives.
      </p>
    </div>

    {/* =========================
        TESTIMONIAL IMAGES
        Added in order:
        1. Priya
        2. Nisha
        3. Rahul
    ========================== */}

    <div className="hidden">
      {/* Keeps image paths explicit for the testimonial data */}
      <img src="/images/Priya.jpg" alt="" />
      <img src="/images/Nisha.jpg" alt="" />
      <img src="/images/Rahul.jpg" alt="" />
    </div>

    {/* Testimonial Carousel */}
    <TestimonialCarousel
      testimonials={testimonials.map((testimonial, index) => ({
        ...testimonial,
        image: [
          "/images/Priya.jpg",
          "/images/Nisha.jpg",
          "/images/Rahul.jpg",
        ][index % 3],
      }))}
    />

  </div>

  {/* =========================
      ANIMATION STYLES
  ========================== */}
  <style>{`

    /* =================================
       TOP - PURPLE / PINK
    ================================= */

    @keyframes testimonialTop {
      0% {
        left: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        left: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        left: 100%;
        opacity: 0;
      }
    }


    /* =================================
       RIGHT - BLUE / GREEN
    ================================= */

    @keyframes testimonialRight {
      0% {
        top: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        top: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        top: 100%;
        opacity: 0;
      }
    }


    /* =================================
       BOTTOM - GOLD / ORANGE
    ================================= */

    @keyframes testimonialBottom {
      0% {
        right: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        right: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        right: 100%;
        opacity: 0;
      }
    }


    /* =================================
       LEFT - ORANGE / PINK / PURPLE
    ================================= */

    @keyframes testimonialLeft {
      0% {
        bottom: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        bottom: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        bottom: 100%;
        opacity: 0;
      }
    }


    /* =================================
       BACKGROUND GLOW
    ================================= */

    @keyframes testimonialGlow {
      0%,
      100% {
        transform: translate3d(0, 0, 0) scale(1);
        opacity: 0.25;
      }

      50% {
        transform: translate3d(10px, -8px, 0) scale(1.08);
        opacity: 0.55;
      }
    }


    /* =================================
       RAINBOW BORDER GLOW
    ================================= */

    @keyframes rainbowPulse {
      0%,
      100% {
        opacity: 0.25;
      }

      50% {
        opacity: 0.55;
      }
    }


    /* =================================
       IMAGE FLOAT
    ================================= */

    @keyframes testimonialImageFloat {
      0%,
      100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-4px);
      }
    }

  `}</style>
</section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative h-[330px] w-full overflow-hidden sm:h-[360px] lg:h-[390px]">

  {/* Background Image */}
  <img
    src="/images/cta.jpg"
    alt="Yoga studio"
    className="
      absolute inset-0
      h-full w-full
      object-cover
      object-center
      transition-transform
      duration-[4000ms]
      hover:scale-105
    "
  />

  {/* Main Dark Overlay */}
  <div className="absolute inset-0 bg-[#21003f]/70" />

  {/* Purple / Pink Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#21003f]/95 via-[#3D007A]/65 to-[#21003f]/45" />

  {/* Animated Color Glow */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Purple Glow */}
    <div
      className="
        absolute -left-24 top-[-80px]
        h-64 w-64
        rounded-full
        bg-[#7B2CBF]/35
        blur-3xl
        animate-[ctaGlowOne_6s_ease-in-out_infinite]
      "
    />

    {/* Pink Glow */}
    <div
      className="
        absolute left-[35%] top-[-100px]
        h-56 w-56
        rounded-full
        bg-[#FF4DDE]/20
        blur-3xl
        animate-[ctaGlowTwo_7s_ease-in-out_infinite]
      "
    />

    {/* Blue Glow */}
    <div
      className="
        absolute right-[15%] bottom-[-100px]
        h-64 w-64
        rounded-full
        bg-[#00C2FF]/20
        blur-3xl
        animate-[ctaGlowThree_8s_ease-in-out_infinite]
      "
    />

    {/* Gold Glow */}
    <div
      className="
        absolute -right-24 top-[-70px]
        h-60 w-60
        rounded-full
        bg-[#E1B270]/20
        blur-3xl
        animate-[ctaGlowFour_6s_ease-in-out_infinite]
      "
    />

    {/* Moving Light Sweep */}
    <div
      className="
        absolute top-0
        h-full w-[25%]
        -skew-x-12
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
        animate-[ctaSweep_6s_ease-in-out_infinite]
      "
    />

    {/* Small Floating Orbs */}
    <span
      className="
        absolute left-[18%] top-[22%]
        h-2 w-2 rounded-full
        bg-[#FF4DDE]
        shadow-[0_0_15px_#FF4DDE]
        animate-[ctaFloat_4s_ease-in-out_infinite]
      "
    />

    <span
      className="
        absolute right-[22%] top-[30%]
        h-1.5 w-1.5 rounded-full
        bg-[#00C2FF]
        shadow-[0_0_14px_#00C2FF]
        animate-[ctaFloat_5s_ease-in-out_infinite_0.8s]
      "
    />

    <span
      className="
        absolute right-[35%] bottom-[22%]
        h-2 w-2 rounded-full
        bg-[#FFD166]
        shadow-[0_0_15px_#FFD166]
        animate-[ctaFloat_4.5s_ease-in-out_infinite_1.2s]
      "
    />

    {/* Subtle Grid */}
    <div
      className="
        absolute inset-0
        bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)]
        bg-[length:28px_28px]
        opacity-20
      "
    />
  </div>

  {/* Animated Rainbow Border */}
  <div className="pointer-events-none absolute inset-0">

    {/* Top Border */}
    <span
      className="
        absolute left-[-30%] top-0
        h-[2px] w-[35%]
        rounded-full
        bg-gradient-to-r
        from-transparent
        via-[#FF4DDE]
        to-[#7B2CBF]
        shadow-[0_0_10px_#FF4DDE]
        animate-[ctaBorderTop_4s_ease-in-out_infinite]
      "
    />

    {/* Right Border */}
    <span
      className="
        absolute right-0 top-[-30%]
        h-[35%] w-[2px]
        rounded-full
        bg-gradient-to-b
        from-[#7B2CBF]
        via-[#00C2FF]
        to-[#36D399]
        shadow-[0_0_10px_#00C2FF]
        animate-[ctaBorderRight_4s_ease-in-out_infinite_0.6s]
      "
    />

    {/* Bottom Border */}
    <span
      className="
        absolute bottom-0 right-[-30%]
        h-[2px] w-[35%]
        rounded-full
        bg-gradient-to-l
        from-[#FF7A18]
        via-[#FFD166]
        to-[#36D399]
        shadow-[0_0_10px_#FFD166]
        animate-[ctaBorderBottom_4s_ease-in-out_infinite_1.2s]
      "
    />

    {/* Left Border */}
    <span
      className="
        absolute bottom-[-30%] left-0
        h-[35%] w-[2px]
        rounded-full
        bg-gradient-to-t
        from-[#FF7A18]
        via-[#FF4DDE]
        to-[#7B2CBF]
        shadow-[0_0_10px_#FF4DDE]
        animate-[ctaBorderLeft_4s_ease-in-out_infinite_1.8s]
      "
    />
  </div>

  {/* Content */}
  <div
    className="
      relative z-10
      mx-auto flex h-full w-full
      max-w-[1380px]
      items-center
      px-5
      sm:px-8
      lg:px-12
      xl:px-16
    "
  >
    <div className="max-w-[680px]">

      {/* Eyebrow */}
      <div className="flex items-center gap-3">
        <span
          className="
            h-px w-8
            bg-gradient-to-r
            from-[#FF4DDE]
            to-[#E1B270]
            sm:w-12
          "
        />

        <span
          className="
            text-[8px]
            font-bold
            tracking-[0.2em]
            text-white/80
            sm:text-[10px]
            sm:tracking-[0.25em]
          "
        >
          BEGIN YOUR JOURNEY
        </span>
      </div>

      {/* Heading */}
      <h2
        className="
          mt-2
          text-[30px]
          leading-[1.08]
          text-white
          sm:mt-3
          sm:text-4xl
          lg:text-[48px]
          xl:text-[52px]
        "
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Make a little more
        <br />
        <span className="bg-gradient-to-r from-white via-[#E1B270] to-[#FFB7F2] bg-clip-text text-transparent">
          space for yourself.
        </span>
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-[500px] text-[9px] leading-5 text-white/70 sm:mt-4 sm:text-xs sm:leading-6">
        Step into a practice that helps you slow down, reconnect,
        and create more balance in everyday life.
      </p>

      {/* Button */}
      <Link
        to="/contact"
        className="
          group/cta
          relative mt-4
          inline-flex
          min-h-[40px]
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border border-white/20
          bg-white
          px-5
          text-[10px]
          font-semibold
          text-[#3D007A]
          shadow-[0_8px_30px_rgba(0,0,0,0.18)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_12px_35px_rgba(255,255,255,0.2)]
          sm:mt-5
          sm:min-h-[44px]
          sm:px-6
          sm:text-xs
        "
      >
        {/* Button Shine */}
        <span
          className="
            pointer-events-none
            absolute inset-y-0
            -left-[80%]
            z-0
            w-[45%]
            -skew-x-12
            bg-gradient-to-r
            from-transparent
            via-[#FF4DDE]/30
            to-transparent
            transition-all
            duration-700
            group-hover/cta:left-[130%]
          "
        />

        <span className="relative z-10 whitespace-nowrap">
          Get in touch
        </span>

        {/* Button Glow */}
        <span
          className="
            pointer-events-none
            absolute inset-0
            rounded-full
            opacity-0
            shadow-[inset_0_0_20px_rgba(123,44,191,0.25)]
            transition-opacity
            duration-500
            group-hover/cta:opacity-100
          "
        />
      </Link>
    </div>
  </div>

  {/* Animation Keyframes */}
  <style>{`
    /* ==============================
       BACKGROUND GLOWS
    ============================== */

    @keyframes ctaGlowOne {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.5;
      }

      50% {
        transform: translate(50px, 30px) scale(1.15);
        opacity: 0.8;
      }
    }

    @keyframes ctaGlowTwo {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
      }

      50% {
        transform: translate(-40px, 50px) scale(1.2);
        opacity: 0.6;
      }
    }

    @keyframes ctaGlowThree {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.25;
      }

      50% {
        transform: translate(-45px, -35px) scale(1.15);
        opacity: 0.55;
      }
    }

    @keyframes ctaGlowFour {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
      }

      50% {
        transform: translate(-35px, 40px) scale(1.15);
        opacity: 0.6;
      }
    }

    /* ==============================
       LIGHT SWEEP
    ============================== */

    @keyframes ctaSweep {
      0% {
        left: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      55% {
        left: 110%;
        opacity: 1;
      }

      70%,
      100% {
        left: 110%;
        opacity: 0;
      }
    }

    /* ==============================
       FLOATING ORBS
    ============================== */

    @keyframes ctaFloat {
      0%,
      100% {
        transform: translateY(0) scale(1);
        opacity: 0.5;
      }

      50% {
        transform: translateY(-14px) scale(1.3);
        opacity: 1;
      }
    }

    /* ==============================
       BORDER ANIMATIONS
    ============================== */

    @keyframes ctaBorderTop {
      0% {
        left: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        left: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        left: 100%;
        opacity: 0;
      }
    }

    @keyframes ctaBorderRight {
      0% {
        top: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        top: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        top: 100%;
        opacity: 0;
      }
    }

    @keyframes ctaBorderBottom {
      0% {
        right: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        right: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        right: 100%;
        opacity: 0;
      }
    }

    @keyframes ctaBorderLeft {
      0% {
        bottom: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        bottom: 100%;
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        bottom: 100%;
        opacity: 0;
      }
    }
  `}</style>
</section>

    </main>
  );
}