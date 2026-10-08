import { motion } from "framer-motion";

export default function PageHero({
  eyebrow = "ASCENT YOGA CENTRE",
  title,
  text,
  image = "/images/page-hero.svg",
  video,
}) {
  return (
    <section className="relative flex min-h-[430px] w-full items-center overflow-hidden bg-[#16002b] sm:min-h-[500px] lg:min-h-[570px]">

      {/* =====================================================
          BACKGROUND MEDIA
      ====================================================== */}

      {video ? (
        <video
          className="
            absolute
            inset-0
            h-full
            w-full
            scale-[1.03]
            object-cover
            object-center
          "
          autoPlay
          muted
          loop
          playsInline
          poster={image}
        >
          <source src={video} type="video/mp4" />

          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
          />
        </video>
      ) : (
        <img
          src={image}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            scale-[1.02]
            object-cover
            object-center
          "
        />
      )}

      {/* =====================================================
          CINEMATIC OVERLAYS
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#10001f]/95 via-[#21003f]/78 to-[#3D007A]/45" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#16002b] via-[#16002b]/60 to-transparent" />

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#16002b]/55 to-transparent" />

      {/* =====================================================
          AMBIENT COLOR LIGHTS
      ====================================================== */}

      {/* LEFT PURPLE GLOW */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-24
          top-[15%]
          h-64
          w-64
          rounded-full
          bg-[#7B2CBF]/20
          blur-[90px]
          sm:h-80
          sm:w-80
        "
      />

      {/* =====================================================
          SUBTLE CENTER / BOTTOM GOLD LIGHT
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 18, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          left-[42%]
          h-64
          w-64
          rounded-full
          bg-[#E1B270]/12
          blur-[90px]
          sm:h-80
          sm:w-80
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* =====================================================
          MOVING LIGHT STREAKS
      ====================================================== */}

      <div className="pointer-events-none absolute left-0 top-[27%] h-px w-full overflow-hidden opacity-50">
        <div className="h-full w-[22%] bg-gradient-to-r from-transparent via-[#FF4DDE] to-transparent animate-[heroStreak_6s_ease-in-out_infinite]" />
      </div>

      <div className="pointer-events-none absolute left-0 top-[72%] h-px w-full overflow-hidden opacity-40">
        <div className="h-full w-[18%] bg-gradient-to-r from-transparent via-[#E1B270] to-transparent animate-[heroStreakReverse_7s_ease-in-out_infinite]" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[430px]
          w-full
          max-w-[1380px]
          items-center
          px-4
          py-20
          sm:min-h-[500px]
          sm:px-6
          sm:py-24
          lg:min-h-[570px]
          lg:px-8
          lg:py-28
          xl:px-10
        "
      >

        {/* =================================================
            MAIN HERO CONTENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-20
            max-w-[780px]
          "
        >

          {/* ================= EYEBROW ================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              flex
              items-center
              gap-2.5
              sm:gap-3
            "
          >

            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                via-[#FF4DDE]
                to-[#E1B270]
                sm:w-12
              "
            />

            <span
              className="
                text-[8px]
                font-semibold
                tracking-[0.25em]
                text-white/70
                sm:text-[10px]
                sm:tracking-[0.3em]
              "
            >
              {eyebrow}
            </span>

            <span
              className="
                hidden
                h-px
                w-8
                bg-gradient-to-r
                from-[#E1B270]
                to-transparent
                sm:block
                sm:w-12
              "
            />

          </motion.div>

          {/* ================= TITLE ================= */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-4
              max-w-[760px]
              text-[40px]
              font-normal
              leading-[1.03]
              tracking-[-0.03em]
              text-white
              sm:mt-5
              sm:text-5xl
              md:text-6xl
              lg:text-[68px]
              xl:text-[74px]
            "
            style={{
              fontFamily: '"Playfair Display", serif',
            }}
          >
            {title}
          </motion.h1>

          {/* ================= DIVIDER ================= */}

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 90, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="
              relative
              mt-5
              h-[3px]
              overflow-hidden
              rounded-full
              bg-gradient-to-r
              from-[#7B2CBF]
              via-[#FF4DDE]
              to-[#E1B270]
              shadow-[0_0_15px_rgba(255,77,222,0.25)]
              sm:mt-6
            "
          >
            <span
              className="
                absolute
                left-[-50%]
                top-0
                h-full
                w-1/2
                bg-white/90
                blur-[2px]
                animate-[pageHeroLine_3s_ease-in-out_infinite]
              "
            />
          </motion.div>

          {/* ================= DESCRIPTION ================= */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.55,
            }}
            className="
              mt-5
              max-w-[620px]
              text-[10px]
              leading-[1.8]
              text-white/70
              sm:mt-6
              sm:text-sm
              sm:leading-6
              lg:text-[15px]
            "
          >
            {text}
          </motion.p>

          {/* ================= MINI INFO ================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className="
              mt-6
              flex
              items-center
              gap-3
              sm:mt-8
              sm:gap-4
            "
          >

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF4DDE] opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E1B270]" />
            </span>

            <span
              className="
                text-[7px]
                font-medium
                tracking-[0.2em]
                text-white/50
                sm:text-[9px]
                sm:tracking-[0.25em]
              "
            >
              MOVE · BREATHE · CONNECT
            </span>

          </motion.div>

        </motion.div>

      </div>

      {/* =====================================================
          BOTTOM EDGE
      ====================================================== */}

      <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden bg-white/5">
        <div
          className="
            h-full
            w-[30%]
            bg-gradient-to-r
            from-transparent
            via-[#FF4DDE]
            to-[#E1B270]
            animate-[pageHeroBottom_5s_ease-in-out_infinite]
          "
        />
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes pageHeroLine {
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

        @keyframes pageHeroBottom {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }

          45% {
            opacity: 1;
          }

          100% {
            transform: translateX(430%);
            opacity: 0;
          }
        }

        @keyframes heroStreak {
          0% {
            transform: translateX(-130%);
            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          70% {
            opacity: 1;
          }

          100% {
            transform: translateX(550%);
            opacity: 0;
          }
        }

        @keyframes heroStreakReverse {
          0% {
            transform: translateX(550%);
            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          70% {
            opacity: 1;
          }

          100% {
            transform: translateX(-130%);
            opacity: 0;
          }
        }
      `}</style>

    </section>
  );
}