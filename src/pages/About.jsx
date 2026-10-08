import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
/* =====================================================
   VALUE CARD
===================================================== */

function ValueCard({
  n,
  t,
  d,
  delay = 0,
  theme = "purple",
}) {
  const themes = {
    purple: {
      border: "from-[#3D007A] via-[#7B2CBF] to-[#FF4DDE]",
      glow: "bg-[#7B2CBF]/20",
      number: "from-[#3D007A] to-[#7B2CBF]",
      line: "from-[#7B2CBF] to-[#FF4DDE]",
    },

    pink: {
      border: "from-[#FF4DDE] via-[#C026D3] to-[#7B2CBF]",
      glow: "bg-[#FF4DDE]/15",
      number: "from-[#C026D3] to-[#FF4DDE]",
      line: "from-[#FF4DDE] to-[#E1B270]",
    },

    gold: {
      border: "from-[#E1B270] via-[#FFB86B] to-[#FF4DDE]",
      glow: "bg-[#E1B270]/18",
      number: "from-[#C58B3A] to-[#E1B270]",
      line: "from-[#E1B270] to-[#FF4DDE]",
    },
  };

  const color = themes[theme] || themes.purple;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.035,
      }}
      className="relative"
      style={{
        animation: `beliefCardFloat 4s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {/* OUTER GRADIENT BORDER */}
      <div
        className={`
          absolute
          -inset-[1.5px]
          rounded-[18px]
          bg-gradient-to-br
          ${color.border}
          opacity-70
          transition-all
          duration-500
          sm:rounded-[24px]
        `}
      />

      {/* CARD */}
      <div
        className="
          group
          relative
          h-full
          min-h-[190px]
          overflow-hidden
          rounded-[17px]
          bg-white/90
          p-3
          shadow-[0_12px_35px_rgba(36,23,45,0.08)]
          backdrop-blur-xl
          transition-all
          duration-500
          hover:shadow-[0_20px_50px_rgba(61,0,122,0.15)]
          sm:min-h-[250px]
          sm:rounded-[23px]
          sm:p-6
          lg:p-7
        "
      >
        {/* BACKGROUND GLOW */}
        <div
          className={`
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-24
            w-24
            rounded-full
            ${color.glow}
            blur-2xl
            transition-all
            duration-700
            group-hover:scale-150
            group-hover:opacity-70
            sm:h-36
            sm:w-36
          `}
        />

        {/* MOVING LIGHT */}
        <span
          className="
            pointer-events-none
            absolute
            left-[-70%]
            top-0
            h-full
            w-[45%]
            -skew-x-[20deg]
            bg-gradient-to-r
            from-transparent
            via-white/50
            to-transparent
            opacity-0
            transition-all
            duration-1000
            group-hover:left-[130%]
            group-hover:opacity-100
          "
        />

        {/* TOP ROW */}
        <div className="relative z-10 flex items-start justify-between">
          {/* NUMBER */}
          <div
            className={`
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              ${color.number}
              text-[8px]
              font-bold
              tracking-[0.05em]
              text-white
              shadow-[0_6px_18px_rgba(61,0,122,0.18)]
              sm:h-10
              sm:w-10
              sm:text-[10px]
            `}
          >
            {n}
          </div>

          {/* DECORATIVE LINE */}
          <div
            className={`
              mt-3
              h-[2px]
              w-8
              rounded-full
              bg-gradient-to-r
              ${color.line}
              opacity-60
              transition-all
              duration-500
              group-hover:w-14
              group-hover:opacity-100
              sm:w-12
              sm:group-hover:w-20
            `}
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            relative
            z-10
            mt-5
            text-[12px]
            font-semibold
            leading-tight
            tracking-[-0.01em]
            text-[#24172d]
            sm:mt-7
            sm:text-xl
            lg:text-[22px]
          "
        >
          {t}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            relative
            z-10
            mt-2
            text-[8px]
            leading-[1.55]
            text-[#756d7a]
            sm:mt-3
            sm:text-xs
            sm:leading-5
            lg:text-sm
            lg:leading-6
          "
        >
          {d}
        </p>

        {/* BOTTOM ACCENT */}
        <div
          className="
            absolute
            bottom-3
            left-3
            right-3
            sm:bottom-5
            sm:left-6
            sm:right-6
          "
        >
          <div className="h-px w-full bg-gray-100" />

          <div
            className={`
              mt-2
              h-[2px]
              w-6
              rounded-full
              bg-gradient-to-r
              ${color.line}
              transition-all
              duration-500
              group-hover:w-12
              sm:mt-3
              sm:w-8
              sm:group-hover:w-16
            `}
          />
        </div>
      </div>

      {/* ANIMATED BORDER LIGHT */}
      <span
        className={`
          pointer-events-none
          absolute
          left-[-20%]
          top-0
          h-[2px]
          w-[35%]
          rounded-full
          bg-gradient-to-r
          ${color.border}
          opacity-70
          blur-[1px]
          animate-[beliefBorderMove_4s_ease-in-out_infinite]
        `}
        style={{
          animationDelay: `${delay + 0.5}s`,
        }}
      />
    </motion.div>
  );
}

export default function About() {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* PAGE HERO */}
      <PageHero
        title="About Ascent"
        text="A modern yoga space rooted in mindful movement, conscious breathing and a balanced life."
        image="/images/about-hero.jpg"
      />

      {/* =========================================================
    MISSION & VISION
========================================================= */}
<section className="relative w-full overflow-hidden bg-[#F8F6FA] py-14 sm:py-16 lg:py-[72px]">

  {/* Background */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#7B2CBF]/7 blur-3xl" />

    <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#FF4DDE]/6 blur-3xl" />

    <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E1B270]/5 blur-3xl" />

    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(#3D007A 1px, transparent 1px), linear-gradient(90deg, #3D007A 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />
  </div>

  <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 sm:px-5 lg:px-7 xl:px-9">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-9 max-w-[720px] text-center sm:mb-12"
    >

      <div className="mb-3 flex items-center justify-center gap-2">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#7B2CBF] sm:w-12" />

        <span className="text-[8px] font-bold tracking-[0.24em] text-[#7B2CBF] sm:text-[10px]">
          WHAT GUIDES US
        </span>

        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#E1B270] sm:w-12" />
      </div>

      <h2
        className="text-[30px] leading-[1.05] tracking-[-0.025em] text-[#24172d] sm:text-4xl lg:text-[48px]"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Rooted in purpose.
        <span className="block bg-gradient-to-r from-[#3D007A] via-[#7B2CBF] to-[#FF4DDE] bg-clip-text text-transparent">
          Guided by practice.
        </span>
      </h2>

      <p className="mx-auto mt-3 max-w-[580px] text-[9px] leading-4 text-[#706775] sm:text-sm sm:leading-6">
        At Ascent, yoga is more than movement. It is a journey toward
        greater awareness, balance and connection.
      </p>
    </motion.div>

    {/* MISSION + VISION */}
    <div className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:gap-7">

      {/* MISSION */}
      <motion.article
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative overflow-hidden rounded-[24px] bg-white p-5 shadow-[0_12px_40px_rgba(36,23,45,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(36,23,45,0.12)] sm:p-7 lg:p-9"
      >

        {/* Animated top border */}
        <div className="absolute left-0 right-0 top-0 h-[3px] overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-[#3D007A] via-[#FF4DDE] to-[#E1B270] transition-transform duration-700 group-hover:scale-x-110" />
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7B2CBF]/10 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-[#7B2CBF]/15" />

        <div className="relative z-10">

          {/* Number */}
          <div className="mb-6 flex items-center justify-between">

            <span className="text-[9px] font-bold tracking-[0.22em] text-[#9A919F]">
              01
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-[#7B2CBF] to-transparent sm:w-20" />
          </div>

          <span className="text-[8px] font-bold tracking-[0.22em] text-[#7B2CBF] sm:text-[10px]">
            OUR MISSION
          </span>

          <h3
            className="mt-3 text-[28px] leading-[1.08] text-[#24172d] sm:text-[34px] lg:text-[40px]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Make yoga a
            <span className="block text-[#7B2CBF]">
              way of living.
            </span>
          </h3>

          <p className="mt-4 max-w-[560px] text-[10px] leading-5 text-[#706775] sm:text-[12px] sm:leading-6">
           To create a welcoming space where people can experience the physical, mental, and emotional benefits of yoga while building a healthier, balanced life.
          </p>

          {/* Bottom line */}
          <div className="mt-7 flex items-center gap-3">
            <div className="h-[2px] w-16 overflow-hidden rounded-full bg-[#EEEAF1]">
              <div className="h-full w-full origin-left scale-x-40 bg-gradient-to-r from-[#3D007A] to-[#FF4DDE] transition-transform duration-700 group-hover:scale-x-100" />
            </div>

            <span className="text-[7px] font-semibold tracking-[0.16em] text-[#9A919F]">
              MOVE · BREATHE · GROW
            </span>
          </div>
        </div>
      </motion.article>

      {/* VISION */}
      <motion.article
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.75,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative overflow-hidden rounded-[24px] bg-[#16002b] p-5 shadow-[0_15px_45px_rgba(22,0,43,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(22,0,43,0.25)] sm:p-7 lg:p-9"
      >

        {/* Animated top border */}
        <div className="absolute left-0 right-0 top-0 h-[3px] overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-[#FF4DDE] via-[#7B2CBF] to-[#E1B270]" />
        </div>

        {/* Background glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FF4DDE]/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#7B2CBF]/20 blur-3xl transition-all duration-700 group-hover:scale-125" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative z-10">

          {/* Number */}
          <div className="mb-6 flex items-center justify-between">

            <span className="text-[9px] font-bold tracking-[0.22em] text-white/40">
              02
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-[#FF4DDE] to-transparent sm:w-20" />
          </div>

          <span className="text-[8px] font-bold tracking-[0.22em] text-[#E1B270] sm:text-[10px]">
            OUR VISION
          </span>

          <h3
            className="mt-3 text-[28px] leading-[1.08] text-white sm:text-[34px] lg:text-[40px]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Create space for
            <span className="block bg-gradient-to-r from-[#FF4DDE] to-[#E1B270] bg-clip-text text-transparent">
              meaningful change.
            </span>
          </h3>

          <p className="mt-4 max-w-[560px] text-[10px] leading-5 text-white/60 sm:text-[12px] sm:leading-6">
            To make yoga a natural part of everyday life, helping people reconnect, find clarity, build strength, and achieve inner calm.
          </p>

          {/* Bottom line */}
          <div className="mt-7 flex items-center gap-3">

            <div className="h-[2px] w-16 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full origin-left scale-x-40 bg-gradient-to-r from-[#FF4DDE] to-[#E1B270] transition-transform duration-700 group-hover:scale-x-100" />
            </div>

            <span className="text-[7px] font-semibold tracking-[0.16em] text-white/35">
              CONNECT · ALIGN · ASCEND
            </span>
          </div>
        </div>
      </motion.article>
    </div>

    {/* BOTTOM STATEMENT */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mt-9 flex items-center justify-center gap-3 sm:mt-11"
    >
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#7B2CBF] sm:w-16" />

      <span className="text-[6px] font-medium tracking-[0.2em] text-[#9A919F] sm:text-[8px] sm:tracking-[0.28em]">
        A PRACTICE FOR BODY · MIND · SOUL
      </span>

      <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#E1B270] sm:w-16" />
    </motion.div>

  </div>
</section>

     {/* =========================================================
    PHILOSOPHY
========================================================= */}<section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

  {/* =======================================================
      BACKGROUND DECORATIONS
  ======================================================= */}

  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Purple glow */}
    <motion.div
      animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.12, 1],
        opacity: [0.12, 0.22, 0.12],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        -left-32
        top-20
        h-64
        w-64
        rounded-full
        bg-[#7B2CBF]/15
        blur-[90px]
        sm:h-80
        sm:w-80
      "
    />

    {/* Pink glow */}
    <motion.div
      animate={{
        x: [0, -25, 0],
        y: [0, 20, 0],
        scale: [1, 1.15, 1],
        opacity: [0.08, 0.18, 0.08],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        right-[-100px]
        top-1/4
        h-72
        w-72
        rounded-full
        bg-[#FF4DDE]/10
        blur-[100px]
        sm:h-96
        sm:w-96
      "
    />

    {/* Gold glow */}
    <div
      className="
        absolute
        bottom-[-100px]
        left-[42%]
        h-64
        w-64
        rounded-full
        bg-[#E1B270]/10
        blur-[90px]
      "
    />

    {/* Subtle grid */}
    <div
      className="
        absolute
        inset-0
        opacity-[0.035]
        bg-[radial-gradient(circle_at_1px_1px,#3D007A_1px,transparent_0)]
        bg-[length:28px_28px]
      "
    />

  </div>


  {/* =======================================================
      MAIN CONTAINER
  ======================================================= */}

  <div
    className="
      relative
      z-10
      mx-auto
      grid
      w-full
      max-w-[1380px]
      items-center
      gap-12
      px-4
      sm:gap-16
      sm:px-6
      lg:grid-cols-2
      lg:gap-20
      lg:px-8
      xl:px-10
    "
  >

    {/* =====================================================
        IMAGE SIDE
    ===================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        relative
        order-2
        lg:order-1
      "
    >

      {/* Decorative circle */}

      <motion.div
        animate={{
          rotate: [0, 12, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-8
          -left-8
          h-28
          w-28
          rounded-full
          border
          border-[#7B2CBF]/15
          bg-[#E8ECF1]/60
          sm:h-36
          sm:w-36
          lg:-bottom-10
          lg:-left-10
        "
      />

      {/* Decorative small dots */}

      <div
        className="
          absolute
          -left-2
          top-8
          z-20
          h-2
          w-2
          rounded-full
          bg-[#FF4DDE]
          shadow-[0_0_15px_rgba(255,77,222,0.6)]
        "
      />

      <div
        className="
          absolute
          right-6
          top-[-8px]
          z-20
          h-2.5
          w-2.5
          rounded-full
          bg-[#E1B270]
          shadow-[0_0_15px_rgba(225,178,112,0.6)]
        "
      />


      {/* =================================================
          IMAGE FRAME
      ================================================= */}

      <div className="group relative">

        {/* Static multicolor border */}

        <div
          className="
            absolute
            -inset-[2px]
            rounded-[28px]
            bg-gradient-to-br
            from-[#3D007A]
            via-[#FF4DDE]
            to-[#E1B270]
            opacity-50
            blur-[1px]
            transition-all
            duration-500
            group-hover:opacity-100
          "
        />


        {/* =================================================
            MOVING TOP BORDER
        ================================================= */}

        <span
          className="
            pointer-events-none
            absolute
            -top-[2px]
            left-[-35%]
            z-30
            h-[3px]
            w-[35%]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#FF4DDE]
            to-transparent
            shadow-[0_0_12px_#FF4DDE]
            animate-[philosophyTop_4s_ease-in-out_infinite]
          "
        />


        {/* =================================================
            MOVING RIGHT BORDER
        ================================================= */}

        <span
          className="
            pointer-events-none
            absolute
            right-[-2px]
            top-[-35%]
            z-30
            h-[35%]
            w-[3px]
            rounded-full
            bg-gradient-to-b
            from-transparent
            via-[#00C2FF]
            to-transparent
            shadow-[0_0_12px_#00C2FF]
            animate-[philosophyRight_4s_ease-in-out_infinite_1s]
          "
        />


        {/* =================================================
            MOVING BOTTOM BORDER
        ================================================= */}

        <span
          className="
            pointer-events-none
            absolute
            -bottom-[2px]
            right-[-35%]
            z-30
            h-[3px]
            w-[35%]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#E1B270]
            to-transparent
            shadow-[0_0_12px_#E1B270]
            animate-[philosophyBottom_4s_ease-in-out_infinite_2s]
          "
        />


        {/* =================================================
            MOVING LEFT BORDER
        ================================================= */}

        <span
          className="
            pointer-events-none
            absolute
            bottom-[-35%]
            left-[-2px]
            z-30
            h-[35%]
            w-[3px]
            rounded-full
            bg-gradient-to-b
            from-transparent
            via-[#7B2CBF]
            to-transparent
            shadow-[0_0_12px_#7B2CBF]
            animate-[philosophyLeft_4s_ease-in-out_infinite_3s]
          "
        />


        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[26px]
            bg-[#E8ECF1]
            shadow-[0_20px_60px_rgba(61,0,122,0.12)]
          "
        >

          <img
            src="/images/about-portrait.png"
            alt="Peaceful yoga practice"
            className="
              h-[400px]
              w-full
              object-cover
              transition-transform
              duration-[1200ms]
              ease-out
              group-hover:scale-[1.06]
              sm:h-[500px]
              lg:h-[540px]
            "
          />


          {/* Image gradient */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#21003f]/65
              via-transparent
              to-[#3D007A]/10
            "
          />


          {/* Image light sweep */}

          <span
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-[70%]
              z-10
              w-[35%]
              skew-x-[-18deg]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-all
              duration-[1200ms]
              group-hover:left-[125%]
            "
          />


          {/* Bottom image label */}

          <div
            className="
              absolute
              bottom-5
              left-5
              z-20
              rounded-full
              border
              border-white/20
              bg-[#21003f]/45
              px-3.5
              py-2
              backdrop-blur-md
              sm:bottom-6
              sm:left-6
            "
          >
            <span
              className="
                text-[8px]
                font-semibold
                tracking-[0.22em]
                text-white/85
                sm:text-[9px]
              "
            >
              MINDFUL PRACTICE
            </span>
          </div>

        </div>


        {/* =================================================
            FLOATING PHILOSOPHY CARD
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.45,
          }}
          className="
            absolute
            -bottom-7
            right-3
            z-20
            w-[185px]
            rounded-[18px]
            p-[1px]
            shadow-[0_15px_40px_rgba(33,0,63,0.22)]
            sm:right-8
            sm:w-[220px]
          "
        >

          {/* Gradient border */}

          <div
            className="
              absolute
              inset-0
              rounded-[18px]
              bg-gradient-to-r
              from-[#7B2CBF]
              via-[#FF4DDE]
              to-[#E1B270]
            "
          />

          {/* Card */}

          <div
            className="
              relative
              rounded-[17px]
              bg-[#21003f]
              px-4
              py-3.5
              sm:px-5
              sm:py-4
            "
          >

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[#FF4DDE]" />

              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/55
                  sm:text-[9px]
                "
              >
                Our Philosophy
              </p>

            </div>

            <p
              className="
                mt-1.5
                text-[11px]
                font-semibold
                text-white
                sm:text-sm
              "
            >
              Move with awareness
            </p>

            <div
              className="
                mt-2
                h-px
                w-10
                bg-gradient-to-r
                from-[#FF4DDE]
                to-[#E1B270]
              "
            />

          </div>

        </motion.div>

      </div>

    </motion.div>


    {/* =====================================================
        CONTENT SIDE
    ===================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        order-1
        lg:order-2
      "
    >

      {/* =================================================
          SECTION LABEL
      ================================================= */}

      <div className="flex items-center gap-3">

        <span
          className="
            h-5
            w-[2px]
            rounded-full
            bg-gradient-to-b
            from-[#FF4DDE]
            via-[#7B2CBF]
            to-[#E1B270]
          "
        />

        <span
          className="
            text-[10px]
            font-bold
            tracking-[0.25em]
            text-[#3D007A]
            sm:text-[11px]
          "
        >
          OUR PHILOSOPHY
        </span>

      </div>


      {/* =================================================
          HEADING
      ================================================= */}

      <h2
        className="
          mt-4
          max-w-[650px]
          text-[32px]
          font-normal
          leading-[1.08]
          tracking-[-0.03em]
          text-[#171326]
          sm:text-[40px]
          lg:text-[48px]
          xl:text-[52px]
        "
        style={{
          fontFamily: '"Playfair Display", serif',
        }}
      >
        Yoga that feels human,
        <span
          className="
            block
            bg-gradient-to-r
            from-[#3D007A]
            via-[#7B2CBF]
            to-[#E1B270]
            bg-clip-text
            text-transparent
          "
        >
          grounded and sustainable.
        </span>
      </h2>


      {/* =================================================
          ANIMATED DIVIDER
      ================================================= */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 72,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.25,
        }}
        className="
          relative
          mt-6
          h-[2px]
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          from-[#3D007A]
          via-[#FF4DDE]
          to-[#E1B270]
        "
      >

        <motion.span
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-y-0
            left-0
            w-1/2
            bg-white/80
          "
        />

      </motion.div>


      {/* =================================================
          INTRO
      ================================================= */}

      <p
        className="
          mt-6
          max-w-[620px]
          text-[13px]
          leading-6
          text-[#625b66]
          sm:text-[15px]
          sm:leading-7
        "
      >
        We believe yoga can meet you in every season of life. Our
        approach blends traditional practices with practical guidance
        so you can build a routine that feels supportive rather than
        demanding.
      </p>


      {/* =================================================
          PHILOSOPHY POINTS
      ================================================= */}

      <div
        className="
          mt-6
          grid
          gap-3
          sm:grid-cols-2
          sm:gap-4
        "
      >

        {/* Card 01 */}

        <motion.div
          whileHover={{
            y: -4,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[16px]
            border
            border-[#3D007A]/10
            bg-[#F8F6FA]
            p-4
            transition-all
            duration-300
            hover:border-[#7B2CBF]/25
            hover:shadow-[0_12px_30px_rgba(61,0,122,0.08)]
          "
        >

          <div
            className="
              absolute
              -right-8
              -top-8
              h-20
              w-20
              rounded-full
              bg-[#7B2CBF]/10
              blur-xl
              transition-all
              duration-500
              group-hover:bg-[#FF4DDE]/15
            "
          />

          <div className="relative z-10">

            <span
              className="
                text-[8px]
                font-bold
                tracking-[0.2em]
                text-[#FF4DDE]
              "
            >
              01
            </span>

            <h3
              className="
                mt-1.5
                text-sm
                font-semibold
                text-[#24172d]
              "
            >
              Practice with purpose
            </h3>

            <p
              className="
                mt-1.5
                text-[10px]
                leading-5
                text-[#756d7a]
                sm:text-[11px]
              "
            >
              Build a practice that supports your everyday life.
            </p>

          </div>

        </motion.div>


        {/* Card 02 */}

        <motion.div
          whileHover={{
            y: -4,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[16px]
            border
            border-[#E1B270]/20
            bg-[#FCF8F2]
            p-4
            transition-all
            duration-300
            hover:border-[#E1B270]/50
            hover:shadow-[0_12px_30px_rgba(225,178,112,0.12)]
          "
        >

          <div
            className="
              absolute
              -bottom-8
              -right-8
              h-20
              w-20
              rounded-full
              bg-[#E1B270]/15
              blur-xl
              transition-all
              duration-500
              group-hover:bg-[#FF4DDE]/10
            "
          />

          <div className="relative z-10">

            <span
              className="
                text-[8px]
                font-bold
                tracking-[0.2em]
                text-[#B37A28]
              "
            >
              02
            </span>

            <h3
              className="
                mt-1.5
                text-sm
                font-semibold
                text-[#24172d]
              "
            >
              Grow at your pace
            </h3>

            <p
              className="
                mt-1.5
                text-[10px]
                leading-5
                text-[#756d7a]
                sm:text-[11px]
              "
            >
              Learn, adapt and deepen your practice naturally.
            </p>

          </div>

        </motion.div>

      </div>


      {/* =================================================
          SECOND PARAGRAPH
      ================================================= */}

      <p
        className="
          mt-5
          max-w-[620px]
          text-[13px]
          leading-6
          text-[#625b66]
          sm:text-[15px]
          sm:leading-7
        "
      >
        Whether you are stepping onto a mat for the first time or
        deepening a long-standing practice, Ascent offers room to learn
        at your own pace.
      </p>


      {/* =================================================
          BUTTON
      ================================================= */}

      <Link
        to="/contact"
        className="
          group/visit
          relative
          mt-7
          inline-flex
          min-h-[46px]
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-[#3D007A]
          px-6
          text-xs
          font-semibold
          text-white
          shadow-[0_10px_30px_rgba(61,0,122,0.18)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_15px_35px_rgba(61,0,122,0.25)]
          sm:min-h-[50px]
          sm:px-7
          sm:text-sm
        "
      >

        {/* Button gradient */}

        <span
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-[#3D007A]
            via-[#7B2CBF]
            to-[#3D007A]
            bg-[length:200%_100%]
            opacity-0
            transition-opacity
            duration-500
            group-hover/visit:opacity-100
            animate-[buttonGradient_4s_ease-in-out_infinite]
          "
        />

        {/* Shine */}

        <span
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-[70%]
            w-[35%]
            skew-x-[-18deg]
            bg-white/20
            transition-all
            duration-700
            group-hover/visit:left-[130%]
          "
        />

        <span className="relative z-10">
          Visit Ascent
        </span>

        {/* CSS arrow */}

        <span
          className="
            relative
            z-10
            ml-3
            flex
            h-4
            w-5
            items-center
          "
        >
          <span
            className="
              h-px
              w-4
              bg-white
              transition-all
              duration-300
              group-hover/visit:w-5
            "
          />

          <span
            className="
              absolute
              right-0
              h-1.5
              w-1.5
              rotate-45
              border-r
              border-t
              border-white
            "
          />
        </span>

      </Link>

    </motion.div>

  </div>


  {/* =======================================================
      ANIMATIONS
  ======================================================= */}

  <style>{`

    @keyframes philosophyTop {

      0% {
        left: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      55% {
        left: 105%;
        opacity: 1;
      }

      70%,
      100% {
        left: 105%;
        opacity: 0;
      }

    }


    @keyframes philosophyRight {

      0% {
        top: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      55% {
        top: 105%;
        opacity: 1;
      }

      70%,
      100% {
        top: 105%;
        opacity: 0;
      }

    }


    @keyframes philosophyBottom {

      0% {
        right: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      55% {
        right: 105%;
        opacity: 1;
      }

      70%,
      100% {
        right: 105%;
        opacity: 0;
      }

    }


    @keyframes philosophyLeft {

      0% {
        bottom: -35%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      55% {
        bottom: 105%;
        opacity: 1;
      }

      70%,
      100% {
        bottom: 105%;
        opacity: 0;
      }

    }


    @keyframes buttonGradient {

      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }

    }

  `}</style>

</section>

{/* =========================
    WHAT WE BELIEVE
========================= */}
<section className="relative w-full overflow-hidden bg-[#E8ECF1] py-8 sm:py-12 lg:py-16">

  {/* =========================
      BACKGROUND DECORATIONS
  ========================== */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Purple Glow */}
    <div
      className="
        absolute
        -left-20
        top-6
        h-32
        w-32
        rounded-full
        bg-[#7B2CBF]/10
        blur-3xl
        animate-[beliefGlowOne_7s_ease-in-out_infinite]
        sm:h-52
        sm:w-52
        lg:h-64
        lg:w-64
      "
    />

    {/* Pink Glow */}
    <div
      className="
        absolute
        right-[10%]
        top-1/3
        h-28
        w-28
        rounded-full
        bg-[#FF4DDE]/8
        blur-3xl
        animate-[beliefGlowTwo_8s_ease-in-out_infinite]
        sm:h-44
        sm:w-44
        lg:h-56
        lg:w-56
      "
    />

    {/* Gold Glow */}
    <div
      className="
        absolute
        -right-16
        bottom-0
        h-36
        w-36
        rounded-full
        bg-[#E1B270]/12
        blur-3xl
        animate-[beliefGlowThree_8s_ease-in-out_infinite]
        sm:h-56
        sm:w-56
        lg:h-72
        lg:w-72
      "
    />

    {/* Subtle Grid */}
    <div
      className="
        absolute
        inset-0
        opacity-[0.18]
        bg-[radial-gradient(circle_at_1px_1px,rgba(61,0,122,0.14)_1px,transparent_0)]
        bg-[length:24px_24px]
        sm:bg-[length:28px_28px]
      "
    />
  </div>


  {/* =========================
      CONTENT
  ========================== */}
  <div
    className="
      relative
      z-10
      mx-auto
      w-full
      max-w-[1380px]
      px-4
      sm:px-6
      lg:px-8
      xl:px-10
    "
  >

    {/* =========================
        SECTION HEADING
    ========================== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-[700px] text-center"
    >

      {/* Label */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2">

        <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#7B2CBF] sm:w-10" />

        <span className="text-[7px] font-bold tracking-[0.2em] text-[#3D007A] sm:text-[10px] sm:tracking-[0.28em]">
          WHAT WE BELIEVE
        </span>

        <span className="h-px w-5 bg-gradient-to-l from-transparent to-[#E1B270] sm:w-10" />

      </div>


      {/* Heading */}
      <h2
        className="
          mt-2
          text-[22px]
          font-normal
          leading-[1.1]
          tracking-[-0.02em]
          text-[#24172d]
          sm:mt-3
          sm:text-4xl
          lg:text-[44px]
        "
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Three simple ideas guide our space.
      </h2>


      {/* Animated Divider */}
      <div
        className="
          relative
          mx-auto
          mt-3
          h-[2px]
          w-12
          overflow-hidden
          rounded-full
          sm:mt-4
          sm:w-20
        "
      >

        <div className="absolute inset-0 bg-gradient-to-r from-[#3D007A] via-[#FF4DDE] to-[#E1B270]" />

        <span
          className="
            absolute
            left-[-50%]
            top-0
            h-full
            w-1/2
            bg-white/80
            blur-[2px]
            animate-[beliefLineMove_3s_ease-in-out_infinite]
          "
        />

      </div>

    </motion.div>


    {/* =========================
        VALUE CARDS
        ALWAYS 3 COLUMNS
    ========================== */}
    <div
      className="
        mt-6
        grid
        grid-cols-3
        gap-2
        sm:mt-9
        sm:gap-4
        lg:mt-11
        lg:gap-6
      "
    >

      {/* CARD 01 */}
      <ValueCard
        n="01"
        t="Mindful Movement"
        d="Move with awareness, patience and respect for your body's rhythm."
        delay={0}
        theme="purple"
      />

      {/* CARD 02 */}
      <ValueCard
        n="02"
        t="Conscious Breath"
        d="Use breath as an anchor for focus, calm and steady energy."
        delay={0.25}
        theme="pink"
      />

      {/* CARD 03 */}
      <ValueCard
        n="03"
        t="Inner Balance"
        d="Create simple practices that support wellbeing beyond the studio."
        delay={0.5}
        theme="gold"
      />

    </div>


    {/* =========================
        BOTTOM STATEMENT
    ========================== */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-4 text-center sm:mt-7"
    >
      <span
        className="
          text-[6px]
          font-semibold
          tracking-[0.16em]
          text-[#625b66]
          sm:text-[9px]
          sm:tracking-[0.3em]
        "
      >
        MOVE · BREATHE · CONNECT
      </span>
    </motion.div>

  </div>


  {/* =========================
      ANIMATIONS
  ========================== */}
  <style>{`

    /* CARD SCALE */

    @keyframes beliefCardFloat {

      0%,
      100% {
        transform: scale(1) translateY(0);
      }

      50% {
        transform: scale(1.018) translateY(-3px);
      }

    }


    /* PURPLE GLOW */

    @keyframes beliefGlowOne {

      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
      }

      50% {
        transform: translate(25px, 15px) scale(1.12);
        opacity: 0.55;
      }

    }


    /* PINK GLOW */

    @keyframes beliefGlowTwo {

      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.2;
      }

      50% {
        transform: translate(-20px, 20px) scale(1.1);
        opacity: 0.45;
      }

    }


    /* GOLD GLOW */

    @keyframes beliefGlowThree {

      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.25;
      }

      50% {
        transform: translate(-20px, -15px) scale(1.12);
        opacity: 0.5;
      }

    }


    /* HEADING LINE */

    @keyframes beliefLineMove {

      0% {
        left: -50%;
        opacity: 0;
      }

      20% {
        opacity: 1;
      }

      70% {
        left: 110%;
        opacity: 1;
      }

      100% {
        left: 110%;
        opacity: 0;
      }

    }


    /* CARD BORDER LIGHT */

    @keyframes beliefBorderMove {

      0% {
        transform: translateX(-120%);
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        transform: translateX(120%);
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        transform: translateX(120%);
        opacity: 0;
      }

    }

  `}</style>

</section>

      {/* ASCENT WAY */}
      {/* =========================
    THE ASCENT WAY
========================= */}
<section className="relative w-full overflow-hidden bg-white py-9 sm:py-12 lg:py-16">

  {/* =========================
      BACKGROUND DECORATION
  ========================== */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Purple Glow */}
    <div
      className="
        absolute
        -left-24
        top-1/4
        h-40
        w-40
        rounded-full
        bg-[#7B2CBF]/8
        blur-3xl
        animate-[storyGlow_7s_ease-in-out_infinite]
        sm:h-56
        sm:w-56
      "
    />

    {/* Gold Glow */}
    <div
      className="
        absolute
        -right-20
        bottom-0
        h-44
        w-44
        rounded-full
        bg-[#E1B270]/10
        blur-3xl
        animate-[storyGlowTwo_8s_ease-in-out_infinite]
        sm:h-64
        sm:w-64
      "
    />

    {/* Soft Center Glow */}
    <div
      className="
        absolute
        left-1/2
        top-1/2
        h-32
        w-32
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#FF4DDE]/5
        blur-3xl
        sm:h-48
        sm:w-48
      "
    />

  </div>


  {/* =========================
      CONTENT
  ========================== */}
  <div
    className="
      relative
      z-10
      mx-auto
      grid
      w-full
      max-w-[1380px]
      items-center
      gap-8
      px-4
      sm:gap-10
      sm:px-6
      lg:grid-cols-2
      lg:gap-16
      lg:px-8
      xl:px-10
    "
  >

    {/* =========================
        IMAGE
    ========================== */}
    <motion.div
      initial={{
        opacity: 0,
        x: -35,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="group relative"
    >

      {/* Floating Decorative Circle */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-4
          -top-4
          h-16
          w-16
          rounded-full
          bg-gradient-to-br
          from-[#E1B270]/70
          to-[#FF4DDE]/30
          blur-[1px]
          sm:-right-6
          sm:-top-6
          sm:h-24
          sm:w-24
        "
      />

      {/* Image Glow */}
      <div
        className="
          absolute
          -inset-2
          rounded-[25px]
          bg-gradient-to-br
          from-[#3D007A]/20
          via-[#FF4DDE]/10
          to-[#E1B270]/20
          opacity-60
          blur-xl
          transition-all
          duration-700
          group-hover:opacity-90
        "
      />

      {/* IMAGE FRAME */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[20px]
          bg-[#E8ECF1]
          shadow-[0_15px_45px_rgba(36,23,45,0.12)]
          sm:rounded-[26px]
        "
      >

        <img
          src="/images/story.png"
          alt="Yoga community"
          className="
            h-[290px]
            w-full
            object-cover
            transition-transform
            duration-[1200ms]
            ease-out
            group-hover:scale-[1.06]
            sm:h-[370px]
            lg:h-[430px]
          "
        />

        {/* Image Gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#21003f]/30
            via-transparent
            to-white/5
            opacity-70
          "
        />

        {/* Moving Light */}
        <span
          className="
            pointer-events-none
            absolute
            left-[-60%]
            top-0
            h-full
            w-[35%]
            -skew-x-[20deg]
            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent
            opacity-0
            group-hover:left-[125%]
            group-hover:opacity-100
            transition-all
            duration-[1400ms]
          "
        />

      </div>

      {/* Small Floating Label */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-3
          left-4
          rounded-full
          bg-[#21003f]
          px-3
          py-1.5
          text-[7px]
          font-semibold
          tracking-[0.16em]
          text-white
          shadow-[0_8px_25px_rgba(33,0,63,0.2)]
          sm:bottom-4
          sm:left-5
          sm:px-4
          sm:py-2
          sm:text-[9px]
        "
      >
        THE ASCENT WAY
      </motion.div>

    </motion.div>


    {/* =========================
        CONTENT
    ========================== */}
    <motion.div
      initial={{
        opacity: 0,
        x: 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: "easeOut",
      }}
    >

      {/* LABEL */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >

        <span
          className="
            h-px
            w-6
            bg-gradient-to-r
            from-[#3D007A]
            to-[#FF4DDE]
            sm:w-9
          "
        />

        <span
          className="
            text-[8px]
            font-bold
            tracking-[0.22em]
            text-[#3D007A]
            sm:text-[10px]
            sm:tracking-[0.25em]
          "
        >
          THE ASCENT WAY
        </span>

      </motion.div>


      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
        className="
          mt-2.5
          max-w-[600px]
          text-[27px]
          font-normal
          leading-[1.08]
          tracking-[-0.025em]
          text-[#24172d]
          sm:mt-3
          sm:text-4xl
          lg:text-[44px]
        "
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Progress without{" "}
        <span className="bg-gradient-to-r from-[#3D007A] via-[#9B35C8] to-[#E1B270] bg-clip-text text-transparent">
          pressure.
        </span>
      </motion.h2>


      {/* ANIMATED ACCENT */}
      <div className="relative mt-3 h-[2px] w-14 overflow-hidden rounded-full sm:mt-4 sm:w-16">

        <div className="absolute inset-0 bg-gradient-to-r from-[#3D007A] via-[#FF4DDE] to-[#E1B270]" />

        <span
          className="
            absolute
            left-[-60%]
            top-0
            h-full
            w-1/2
            bg-white/80
            blur-[2px]
            animate-[storyLineMove_3s_ease-in-out_infinite]
          "
        />

      </div>


      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="
          mt-4
          max-w-[620px]
          text-[11px]
          leading-5
          text-[#625b66]
          sm:mt-5
          sm:text-sm
          sm:leading-6
          lg:text-[14px]
        "
      >
        We create sessions where you can listen to your body, learn from
        experienced instructors and leave feeling more connected than when
        you arrived.
      </motion.p>


      {/* =========================
          QUOTE
      ========================== */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="
          group
          relative
          mt-5
          overflow-hidden
          rounded-[16px]
          bg-gradient-to-br
          from-[#E8ECF1]
          via-white
          to-[#F8F1FA]
          px-4
          py-4
          shadow-[0_8px_25px_rgba(36,23,45,0.05)]
          sm:mt-6
          sm:rounded-[18px]
          sm:px-6
          sm:py-5
        "
      >

        {/* Animated Accent */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-[3px]
            bg-gradient-to-b
            from-[#3D007A]
            via-[#FF4DDE]
            to-[#E1B270]
          "
        />

        {/* Quote Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-20
            w-20
            rounded-full
            bg-[#FF4DDE]/8
            blur-2xl
            transition-transform
            duration-700
            group-hover:scale-150
          "
        />

        <p
          className="
            relative
            pl-2
            text-[12px]
            italic
            leading-5
            text-[#3b3141]
            sm:text-base
            sm:leading-6
          "
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          “The goal is not to touch your toes. The goal is to notice what
          happens on the way there.”
        </p>

      </motion.div>


      {/* =========================
          HIGHLIGHTS
      ========================== */}
      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-4">

        {/* Highlight 1 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[14px]
            bg-[#F2EFF5]
            px-3
            py-3
            transition-all
            duration-300
            hover:shadow-[0_12px_30px_rgba(61,0,122,0.10)]
            sm:rounded-[16px]
            sm:px-4
            sm:py-3.5
          "
        >

          <div className="absolute right-0 top-0 h-14 w-14 rounded-full bg-[#7B2CBF]/8 blur-xl transition-transform duration-500 group-hover:scale-150" />

          <p className="relative text-[19px] font-semibold text-[#3D007A] sm:text-2xl">
            100%
          </p>

          <p className="relative mt-0.5 text-[8px] text-[#625b66] sm:text-xs">
            Mindful approach
          </p>

        </motion.div>


        {/* Highlight 2 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[14px]
            bg-[#F8F1EA]
            px-3
            py-3
            transition-all
            duration-300
            hover:shadow-[0_12px_30px_rgba(225,178,112,0.16)]
            sm:rounded-[16px]
            sm:px-4
            sm:py-3.5
          "
        >

          <div className="absolute right-0 top-0 h-14 w-14 rounded-full bg-[#E1B270]/10 blur-xl transition-transform duration-500 group-hover:scale-150" />

          <p className="relative text-[19px] font-semibold text-[#8A5B1F] sm:text-2xl">
            All
          </p>

          <p className="relative mt-0.5 text-[8px] text-[#625b66] sm:text-xs">
            Experience levels
          </p>

        </motion.div>

      </div>

    </motion.div>

  </div>


  {/* =========================
      ANIMATIONS
  ========================== */}
  <style>{`

    @keyframes storyGlow {

      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.25;
      }

      50% {
        transform: translate(25px, -15px) scale(1.12);
        opacity: 0.5;
      }

    }

    @keyframes storyGlowTwo {

      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.25;
      }

      50% {
        transform: translate(-25px, -15px) scale(1.12);
        opacity: 0.5;
      }

    }

    @keyframes storyLineMove {

      0% {
        left: -60%;
        opacity: 0;
      }

      20% {
        opacity: 1;
      }

      70% {
        left: 120%;
        opacity: 1;
      }

      100% {
        left: 120%;
        opacity: 0;
      }

    }

  `}</style>

</section>

      {/* FINAL CTA */}
      {/* =========================
    FIND YOUR BALANCE CTA
========================= */}
<section className="relative w-full overflow-hidden bg-[#21003f] py-7 sm:py-10 lg:py-12">

  {/* =========================
      BACKGROUND EFFECTS
  ========================== */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Purple Glow */}
    <div
      className="
        absolute
        -left-20
        top-1/2
        h-32
        w-32
        -translate-y-1/2
        rounded-full
        bg-[#7B2CBF]/25
        blur-3xl
        animate-[ctaGlowOne_7s_ease-in-out_infinite]
        sm:-left-24
        sm:h-48
        sm:w-48
        lg:h-56
        lg:w-56
      "
    />

    {/* Pink Glow */}
    <div
      className="
        absolute
        right-[10%]
        -top-14
        h-28
        w-28
        rounded-full
        bg-[#FF4DDE]/12
        blur-3xl
        animate-[ctaGlowTwo_8s_ease-in-out_infinite]
        sm:-top-20
        sm:h-40
        sm:w-40
        lg:h-52
        lg:w-52
      "
    />

    {/* Gold Glow */}
    <div
      className="
        absolute
        -bottom-16
        -right-10
        h-32
        w-32
        rounded-full
        bg-[#E1B270]/15
        blur-3xl
        animate-[ctaGlowThree_8s_ease-in-out_infinite]
        sm:-bottom-20
        sm:h-48
        sm:w-48
        lg:h-56
        lg:w-56
      "
    />

    {/* Blue Glow */}
    <div
      className="
        absolute
        left-[42%]
        top-[15%]
        h-16
        w-16
        rounded-full
        bg-[#00C2FF]/8
        blur-3xl
        animate-[ctaGlowFour_6s_ease-in-out_infinite]
        sm:h-24
        sm:w-24
        lg:h-32
        lg:w-32
      "
    />

    {/* Subtle Grid */}
    <div
      className="
        absolute
        inset-0
        opacity-[0.08]
        bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)]
        bg-[length:22px_22px]
        sm:bg-[length:26px_26px]
      "
    />

    {/* Top Light */}
    <div
      className="
        absolute
        left-0
        right-0
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-[#FF4DDE]
        to-transparent
        opacity-50
      "
    />

    {/* Bottom Light */}
    <div
      className="
        absolute
        bottom-0
        left-0
        right-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-[#E1B270]
        to-transparent
        opacity-40
      "
    />

  </div>


  {/* =========================
      CONTENT
  ========================== */}
  <div
    className="
      relative
      z-10
      mx-auto
      flex
      w-full
      max-w-[900px]
      flex-col
      items-center
      px-4
      text-center
      sm:px-6
      lg:px-8
    "
  >

    {/* Decorative Top Circle */}
    <motion.div
      animate={{
        y: [0, -5, 0],
        rotate: [0, 4, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        -right-1
        -top-2
        hidden
        h-8
        w-8
        rounded-full
        border
        border-[#E1B270]/25
        bg-[#E1B270]/10
        sm:block
        lg:right-8
      "
    />

    {/* Decorative Bottom Circle */}
    <motion.div
      animate={{
        y: [0, 5, 0],
        rotate: [0, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        -bottom-1
        -left-1
        hidden
        h-7
        w-7
        rounded-full
        border
        border-[#FF4DDE]/20
        sm:block
        lg:left-8
      "
    />


    {/* Label */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-1.5 sm:gap-2"
    >

      <span className="h-px w-4 bg-gradient-to-r from-transparent to-[#FF4DDE] sm:w-8" />

      <span
        className="
          text-[7px]
          font-semibold
          tracking-[0.2em]
          text-white/60
          sm:text-[9px]
          sm:tracking-[0.25em]
        "
      >
        FIND YOUR BALANCE
      </span>

      <span className="h-px w-4 bg-gradient-to-l from-transparent to-[#E1B270] sm:w-8" />

    </motion.div>


    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.08 }}
      className="
        mt-2
        max-w-[650px]
        text-[24px]
        font-normal
        leading-[1.08]
        tracking-[-0.02em]
        text-white
        sm:mt-3
        sm:text-3xl
        lg:text-[42px]
      "
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      Your practice{" "}
      <span className="bg-gradient-to-r from-[#FF4DDE] via-[#C98AE8] to-[#E1B270] bg-clip-text text-transparent">
        starts here.
      </span>
    </motion.h2>


    {/* Animated Divider */}
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: 55, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.18 }}
      className="
        relative
        mt-2
        h-[2px]
        overflow-hidden
        rounded-full
        bg-gradient-to-r
        from-[#7B2CBF]
        via-[#FF4DDE]
        to-[#E1B270]
        sm:mt-3
        sm:w-[70px]
      "
    >
      <span
        className="
          absolute
          left-[-50%]
          top-0
          h-full
          w-1/2
          bg-white/80
          blur-[2px]
          animate-[ctaLineMove_3s_ease-in-out_infinite]
        "
      />
    </motion.div>


    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.22 }}
      className="
        mx-auto
        mt-2.5
        max-w-[500px]
        text-[9px]
        leading-4
        text-white/60
        sm:mt-3
        sm:text-xs
        sm:leading-5
      "
    >
      Discover a calmer approach to movement, breath and everyday wellbeing
      at Ascent Yoga Centre.
    </motion.p>


    {/* CTA BUTTON */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-3.5 sm:mt-4"
    >

      <Link
        to="/contact"
        className="
          group
          relative
          inline-flex
          min-h-[36px]
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-white
          px-4
          text-[9px]
          font-semibold
          text-[#3D007A]
          shadow-[0_8px_22px_rgba(0,0,0,0.16)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_12px_28px_rgba(255,255,255,0.14)]
          sm:min-h-[42px]
          sm:px-6
          sm:text-[11px]
        "
      >

        {/* Shine */}
        <span
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-[70%]
            z-0
            w-[45%]
            -skew-x-[20deg]
            bg-gradient-to-r
            from-transparent
            via-[#FF4DDE]/20
            to-transparent
            transition-all
            duration-700
            group-hover:left-[125%]
          "
        />

        <span className="relative z-10 whitespace-nowrap">
          Connect With Us
        </span>

        {/* CSS Arrow */}
        <span
          className="
            relative
            z-10
            ml-1.5
            h-[5px]
            w-[5px]
            rotate-45
            border-r
            border-t
            border-[#3D007A]
            transition-transform
            duration-300
            group-hover:translate-x-1
            sm:ml-2
            sm:h-[6px]
            sm:w-[6px]
          "
        />

      </Link>

    </motion.div>


    {/* Bottom Statement */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.45 }}
      className="mt-3 sm:mt-4"
    >
      <span
        className="
          text-[5.5px]
          font-medium
          tracking-[0.16em]
          text-white/25
          sm:text-[7px]
          sm:tracking-[0.25em]
        "
      >
        MOVE · BREATHE · CONNECT
      </span>
    </motion.div>

  </div>


  {/* =========================
      ANIMATIONS
  ========================== */}
  <style>{`

    @keyframes ctaGlowOne {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.25;
      }

      50% {
        transform: translate(20px, -12px) scale(1.12);
        opacity: 0.5;
      }
    }

    @keyframes ctaGlowTwo {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.15;
      }

      50% {
        transform: translate(-20px, 20px) scale(1.1);
        opacity: 0.4;
      }
    }

    @keyframes ctaGlowThree {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.2;
      }

      50% {
        transform: translate(-15px, -15px) scale(1.12);
        opacity: 0.45;
      }
    }

    @keyframes ctaGlowFour {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.1;
      }

      50% {
        transform: translate(15px, 12px) scale(1.15);
        opacity: 0.3;
      }
    }

    @keyframes ctaLineMove {
      0% {
        left: -50%;
        opacity: 0;
      }

      20% {
        opacity: 1;
      }

      70% {
        left: 120%;
        opacity: 1;
      }

      100% {
        left: 120%;
        opacity: 0;
      }
    }

  `}</style>

</section>
    </main>
  );
}

function Value({ n, t, d, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(61,0,122,0.10)] sm:p-8"
    >
      {/* Number */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold tracking-[0.15em] text-[#3D007A]">
          {n}
        </span>

        <span className="h-2 w-2 rounded-full bg-[#3D007A] transition-all duration-500 group-hover:scale-[2]" />
      </div>

      <h3
        className="mt-7 text-2xl font-normal text-gray-900"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        {t}
      </h3>

      <p className="mt-4 text-sm leading-6 text-gray-600">
        {d}
      </p>

      <div className="mt-7 h-[2px] w-8 bg-[#3D007A] transition-all duration-500 group-hover:w-16" />
    </motion.div>
  );
}