import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 3000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const value = Math.min(
        Math.round((elapsed / duration) * 100),
        100
      );

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 350);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#10001f]"
        >
          {/* =====================================================
              BACKGROUND
          ====================================================== */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3D007A_0%,#21003f_38%,#10001f_75%)]" />

          {/* Purple ambient glow */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.18, 0.35, 0.18],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B2CBF]/30 blur-[120px] sm:h-[600px] sm:w-[600px]"
          />

          {/* Pink glow */}
          <motion.div
            animate={{
              x: [-80, 80, -80],
              y: [-50, 50, -50],
              opacity: [0.08, 0.2, 0.08],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[15%] top-[20%] h-[220px] w-[220px] rounded-full bg-[#FF4DDE]/20 blur-[100px]"
          />

          {/* Gold glow */}
          <motion.div
            animate={{
              x: [60, -60, 60],
              y: [40, -40, 40],
              opacity: [0.06, 0.16, 0.06],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[10%] right-[12%] h-[250px] w-[250px] rounded-full bg-[#E1B270]/20 blur-[110px]"
          />

          {/* =====================================================
              CINEMATIC GRID
          ====================================================== */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* =====================================================
              MOVING LIGHT BEAMS
          ====================================================== */}

          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-[24%] h-px w-[55%] bg-gradient-to-r from-transparent via-[#FF4DDE]/40 to-transparent"
          />

          <motion.div
            animate={{
              x: ["120%", "-120%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute right-0 top-[76%] h-px w-[50%] bg-gradient-to-r from-transparent via-[#E1B270]/35 to-transparent"
          />

          {/* =====================================================
              FLOATING PARTICLES
          ====================================================== */}

          <div className="pointer-events-none absolute inset-0">
            {[
              ["12%", "25%", 2],
              ["18%", "68%", 3],
              ["28%", "18%", 2],
              ["72%", "22%", 2],
              ["84%", "38%", 3],
              ["90%", "70%", 2],
              ["76%", "82%", 2],
              ["22%", "86%", 3],
              ["8%", "50%", 2],
              ["94%", "52%", 2],
            ].map(([left, top, size], index) => (
              <motion.span
                key={index}
                className="absolute rounded-full bg-white/50"
                style={{
                  left,
                  top,
                  width: size,
                  height: size,
                }}
                animate={{
                  y: [-12, 12, -12],
                  opacity: [0.15, 0.7, 0.15],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: 2.5 + index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>

          {/* =====================================================
              MAIN CENTER
          ====================================================== */}

          <div className="relative z-20 flex flex-col items-center">

            {/* Outer atmosphere */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[330px] w-[330px] rounded-full border border-[#FF4DDE]/10 sm:h-[430px] sm:w-[430px]"
            />

            {/* Large outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[290px] w-[290px] rounded-full border border-white/[0.06] sm:h-[380px] sm:w-[380px]"
            >
              <span className="absolute left-1/2 top-[-3px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#FF4DDE] shadow-[0_0_15px_#FF4DDE]" />
            </motion.div>

            {/* Second orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[245px] w-[245px] rounded-full border border-[#E1B270]/10 sm:h-[315px] sm:w-[315px]"
            >
              <span className="absolute bottom-[8%] left-[8%] h-[5px] w-[5px] rounded-full bg-[#E1B270] shadow-[0_0_14px_#E1B270]" />
            </motion.div>

            {/* Third orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[205px] w-[205px] rounded-full border border-[#7B2CBF]/25 sm:h-[260px] sm:w-[260px]"
            >
              <span className="absolute right-[4%] top-[25%] h-[4px] w-[4px] rounded-full bg-[#FF4DDE] shadow-[0_0_12px_#FF4DDE]" />
            </motion.div>

            {/* =================================================
                GLASS LOGO CONTAINER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex h-[165px] w-[165px] items-center justify-center sm:h-[205px] sm:w-[205px]"
            >
              {/* Rotating gradient border */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#3D007A,#FF4DDE,#E1B270,#7B2CBF,#3D007A)] p-[2px]"
              >
                <div className="h-full w-full rounded-full bg-[#16002b]" />
              </motion.div>

              {/* Inner glass */}
              <div className="absolute inset-[8px] rounded-full border border-white/10 bg-white/[0.035] shadow-[inset_0_0_40px_rgba(255,255,255,0.03),0_0_60px_rgba(123,44,191,0.25)] backdrop-blur-xl" />

              {/* Pulse */}
              <motion.div
                animate={{
                  scale: [0.85, 1.1, 0.85],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[105px] w-[105px] rounded-full bg-[#7B2CBF] blur-[35px] sm:h-[130px] sm:w-[130px]"
              />

              {/* Logo */}
              <motion.img
                src="/images/logo.png"
                alt="Ascent Yoga Centre"
                animate={{
                  scale: [1, 1.04, 1],
                  filter: [
                    "drop-shadow(0 0 8px rgba(255,77,222,0.1))",
                    "drop-shadow(0 0 22px rgba(255,77,222,0.35))",
                    "drop-shadow(0 0 8px rgba(255,77,222,0.1))",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 h-[88px] w-[88px] object-contain sm:h-[112px] sm:w-[112px]"
              />
            </motion.div>

            {/* =================================================
                BRAND TEXT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mt-8 text-center"
            >
              <h1
                className="text-[32px] tracking-[0.12em] text-white sm:text-[42px]"
                style={{
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                Ascent
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 75 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                }}
                className="mx-auto mt-2 h-[2px] rounded-full bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270]"
              />

              <p className="mt-3 text-[7px] font-medium tracking-[0.42em] text-white/45 sm:text-[9px]">
                YOGA · WELLNESS · BALANCE
              </p>
            </motion.div>

            {/* =================================================
                LOADING PROGRESS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="mt-9 w-[220px] sm:w-[280px]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[7px] font-medium tracking-[0.25em] text-white/35">
                  PREPARING YOUR JOURNEY
                </span>

                <motion.span
                  key={progress}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="text-[9px] font-semibold text-white/60"
                >
                  {progress}%
                </motion.span>
              </div>

              <div className="relative h-[3px] overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#3D007A] via-[#FF4DDE] to-[#E1B270]"
                  style={{
                    width: `${progress}%`,
                  }}
                />

                {/* Moving shine */}
                <motion.div
                  animate={{
                    x: ["-100%", "500%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 h-full w-[35%] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[1px]"
                />
              </div>

              <p className="mt-4 text-center text-[7px] font-medium tracking-[0.35em] text-white/30">
                FIND YOUR BALANCE
              </p>
            </motion.div>
          </div>

          {/* =====================================================
              CORNER DETAILS
          ====================================================== */}

          <div className="absolute left-5 top-5 hidden text-[7px] tracking-[0.3em] text-white/20 sm:block">
            ASCENT / 01
          </div>

          <div className="absolute right-5 top-5 hidden text-[7px] tracking-[0.3em] text-white/20 sm:block">
            YOGA CENTRE
          </div>

          <div className="absolute bottom-5 left-5 hidden text-[7px] tracking-[0.3em] text-white/20 sm:block">
            MOVE
          </div>

          <div className="absolute bottom-5 right-5 hidden text-[7px] tracking-[0.3em] text-white/20 sm:block">
            BREATHE · CONNECT
          </div>

          {/* =====================================================
              BOTTOM LIGHT
          ====================================================== */}

          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/[0.04]">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2.8,
                ease: "easeInOut",
              }}
              className="h-full w-[30%] bg-gradient-to-r from-transparent via-[#FF4DDE] to-[#E1B270]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}