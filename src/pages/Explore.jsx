import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import PageHero from "../components/PageHero";
import {
  programs,
  instructors,
  schedule,
  plans,
} from "../data/data";

const themes = [
  {
    main: "#7B2CBF",
    second: "#FF4DDE",
  },
  {
    main: "#3D007A",
    second: "#7B2CBF",
  },
  {
    main: "#00A6B2",
    second: "#6FE7EF",
  },
  {
    main: "#C88A2B",
    second: "#E1B270",
  },
];

export default function Explore() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProgram]);

  /* Close modal with Escape key */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProgram(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectedProgramIndex = selectedProgram
    ? programs.findIndex(
        (item) => item.title === selectedProgram.title
      )
    : 0;

  const selectedTheme =
    themes[selectedProgramIndex >= 0 ? selectedProgramIndex % themes.length : 0];

  return (
    <main className="w-full overflow-hidden">

      {/* =========================================================
          PAGE HERO
      ========================================================= */}
      <PageHero
        title="Explore Ascent"
        text="Find a program, meet your instructors, discover your weekly rhythm and choose a plan that fits your practice."
        video="/images/explore-hero.mp4"
      />

      {/* =========================================================
          YOGA PROGRAMS
      ========================================================= */}
      <section className="relative w-full overflow-hidden bg-[#F8F6FA] py-12 sm:py-16 lg:py-[68px]">

        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#7B2CBF]/7 blur-3xl" />

          <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#FF4DDE]/6 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E1B270]/5 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#3D007A_1px,transparent_1px),linear-gradient(90deg,#3D007A_1px,transparent_1px)] [background-size:50px_50px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 sm:px-5 lg:px-7 xl:px-9">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex flex-col gap-5 sm:mb-10 lg:mb-11 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-[680px]">

              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-7 bg-gradient-to-r from-[#7B2CBF] to-[#FF4DDE] sm:w-10" />

                <span className="text-[8px] font-bold tracking-[0.24em] text-[#7B2CBF] sm:text-[10px]">
                  EXPLORE ASCENT
                </span>
              </div>

              <h2
                className="text-[30px] leading-[1.05] tracking-[-0.025em] text-[#24172d] sm:text-4xl lg:text-[48px]"
                style={{
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                Choose your

                <span className="block bg-gradient-to-r from-[#3D007A] via-[#7B2CBF] to-[#FF4DDE] bg-clip-text text-transparent">
                  practice.
                </span>
              </h2>

              <p className="mt-3 max-w-[570px] text-[9px] leading-4 text-[#706775] sm:text-sm sm:leading-6">
                From foundational movement to deeper breath and meditation
                practices, find a rhythm that meets you where you are.
              </p>
            </div>

            <Link
              to="/contact"
              className="group hidden items-center gap-3 self-start text-[10px] font-semibold tracking-[0.08em] text-[#3D007A] lg:flex"
            >
              <span>VIEW ALL PROGRAMS</span>

              <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#3D007A]/20 transition-all duration-300 group-hover:border-[#7B2CBF] group-hover:bg-[#3D007A]">
                <span className="absolute h-px w-3 bg-[#3D007A] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white" />

                <span className="absolute ml-2 h-[5px] w-[5px] rotate-45 border-r border-t border-[#3D007A] transition-all duration-300 group-hover:translate-x-1 group-hover:border-white" />
              </span>
            </Link>
          </motion.div>

          {/* PROGRAM GRID */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">

            {programs.map((p, index) => {
              const theme = themes[index % themes.length];

              return (
                <motion.article
                  key={p.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0_10px_35px_rgba(36,23,45,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(36,23,45,0.12)] sm:rounded-[24px]"
                >

                  {/* Top Accent */}
                  <div
                    className="absolute left-0 right-0 top-0 z-30 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${theme.main}, ${theme.second}, #E1B270)`,
                    }}
                  />

                  <div className="flex min-h-[235px] flex-col sm:min-h-[255px] md:flex-row">

                    {/* IMAGE */}
                    <div className="relative h-[185px] shrink-0 overflow-hidden md:h-auto md:w-[43%]">

                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#16002b]/75 via-transparent to-[#16002b]/10" />

                      <div
                        className="absolute inset-0 opacity-0 mix-blend-color transition-opacity duration-500 group-hover:opacity-25"
                        style={{
                          background: `linear-gradient(135deg, ${theme.main}, ${theme.second})`,
                        }}
                      />

                      {/* Number */}
                      <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/20 text-[8px] font-semibold tracking-[0.08em] text-white backdrop-blur-md sm:left-4 sm:top-4 sm:h-9 sm:w-9">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Level */}
                      <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/25 px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-3 sm:text-[8px]">
                        {p.level}
                      </div>

                      {/* Duration */}
                      <span className="absolute bottom-4 right-3 text-[8px] font-medium text-white/90 sm:right-4 sm:text-[9px]">
                        {p.duration}
                      </span>

                      {/* Shine */}
                      <span className="pointer-events-none absolute inset-y-0 -left-[80%] w-[45%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[130%]" />
                    </div>

                    {/* CONTENT */}
                    <div className="relative flex flex-1 flex-col justify-between p-4 sm:p-5 lg:p-6">

                      <div>

                        <div className="flex items-center gap-2">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{
                              backgroundColor: theme.main,
                              boxShadow: `0 0 10px ${theme.main}`,
                            }}
                          />

                          <span className="text-[7px] font-bold tracking-[0.18em] text-[#9A919F] sm:text-[8px]">
                            ASCENT PROGRAM
                          </span>
                        </div>

                        <h3
                          className="mt-2 text-[22px] leading-tight text-[#24172d] sm:mt-3 sm:text-[25px] lg:text-[28px]"
                          style={{
                            fontFamily: '"Playfair Display", serif',
                          }}
                        >
                          {p.title}
                        </h3>

                        <p className="mt-2 line-clamp-3 text-[8px] leading-4 text-[#746C78] sm:mt-2.5 sm:text-[10px] sm:leading-5 lg:text-[11px]">
                          {p.desc}
                        </p>
                      </div>

                      {/* ENQUIRE BUTTON */}
                      <div className="mt-5">

                        <button
                          type="button"
                          onClick={() => setSelectedProgram(p)}
                          className="group/link inline-flex items-center gap-2 text-left text-[8px] font-bold uppercase tracking-[0.08em] text-[#3D007A] sm:text-[9px]"
                        >
                          <span className="relative">
                            Enquire

                            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] transition-transform duration-300 group-hover/link:scale-x-100" />
                          </span>

                          <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border border-[#3D007A]/15 transition-all duration-300 group-hover/link:bg-[#3D007A]">
                            <span className="absolute h-px w-2.5 bg-[#3D007A] transition-colors duration-300 group-hover/link:bg-white" />

                            <span className="absolute ml-1.5 h-[4px] w-[4px] rotate-45 border-r border-t border-[#3D007A] transition-colors duration-300 group-hover/link:border-white" />
                          </span>
                        </button>

                        <div className="mt-4 h-[2px] w-full overflow-hidden rounded-full bg-[#EEEAF1]">
                          <div
                            className="h-full w-[22%] rounded-full transition-all duration-700 group-hover:w-[65%]"
                            style={{
                              background: `linear-gradient(90deg, ${theme.main}, ${theme.second})`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Glow */}
                      <div
                        className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
                        style={{
                          backgroundColor: theme.second,
                        }}
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* MOBILE VIEW ALL */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mt-6 flex justify-center lg:hidden"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#3D007A]/15 bg-white px-4 py-2.5 text-[8px] font-bold tracking-[0.12em] text-[#3D007A] shadow-sm transition-all duration-300 hover:border-[#7B2CBF]/40 hover:shadow-md"
            >
              VIEW ALL PROGRAMS

              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute h-px w-2 bg-[#3D007A]" />

                <span className="absolute ml-1 h-[4px] w-[4px] rotate-45 border-r border-t border-[#3D007A]" />
              </span>
            </Link>
          </motion.div>

          {/* Bottom Statement */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
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
              delay: 0.2,
            }}
            className="mt-8 flex items-center justify-center gap-3 sm:mt-10"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#7B2CBF] sm:w-14" />

            <span className="text-[6px] font-medium tracking-[0.2em] text-[#9B929F] sm:text-[8px] sm:tracking-[0.28em]">
              MOVE · BREATHE · CONNECT
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#E1B270] sm:w-14" />
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INSTRUCTORS
      ========================================================= */}
      <section className="relative w-full overflow-hidden bg-[#E8ECF1] py-12 sm:py-16 lg:py-[68px]">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#7B2CBF]/5 blur-3xl" />
          <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-[#E1B270]/8 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 sm:px-5 lg:px-7 xl:px-9">

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
              duration: 0.7,
            }}
            className="mb-8 text-center sm:mb-10"
          >
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#7B2CBF]" />

              <span className="text-[8px] font-bold tracking-[0.24em] text-[#7B2CBF] sm:text-[10px]">
                OUR INSTRUCTORS
              </span>

              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#E1B270]" />
            </div>

            <h2
              className="text-[30px] leading-tight text-[#24172d] sm:text-4xl lg:text-[46px]"
              style={{
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Meet the people behind
              <span className="block bg-gradient-to-r from-[#3D007A] via-[#7B2CBF] to-[#FF4DDE] bg-clip-text text-transparent">
                your practice.
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-[560px] text-[9px] leading-4 text-[#706775] sm:text-sm sm:leading-6">
              Experienced teachers who bring knowledge, presence and
              encouragement into every session.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">

            {instructors.map((instructor, index) => {
              const theme = themes[index % themes.length];

              return (
                <motion.article
                  key={
                    instructor.name ||
                    instructor.title ||
                    `instructor-${index}`
                  }
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[14px] bg-white shadow-[0_8px_30px_rgba(36,23,45,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(36,23,45,0.12)] sm:rounded-[20px]"
                >

                  <div
                    className="absolute left-0 right-0 top-0 z-20 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${theme.main}, ${theme.second}, #E1B270)`,
                    }}
                  />

                  <div className="relative aspect-[0.82] overflow-hidden sm:aspect-[0.9]">

                    <img
                      src={
                        instructor.image ||
                        instructor.photo ||
                        instructor.img
                      }
                      alt={
                        instructor.name ||
                        instructor.title ||
                        "Yoga Instructor"
                      }
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#16002b]/90 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">

                      <p className="text-[6px] font-bold uppercase tracking-[0.12em] text-white/55 sm:text-[8px] sm:tracking-[0.18em]">
                        {instructor.specialty ||
                          instructor.role ||
                          "Yoga Instructor"}
                      </p>

                      <h3
                        className="mt-1 text-[13px] leading-tight text-white sm:mt-2 sm:text-[22px] lg:text-[25px]"
                        style={{
                          fontFamily: '"Playfair Display", serif',
                        }}
                      >
                        {instructor.name ||
                          instructor.title ||
                          "Instructor"}
                      </h3>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-4 lg:p-5">

                    <p className="line-clamp-3 text-[6px] leading-3 text-[#706775] sm:text-[9px] sm:leading-4 lg:text-[10px]">
                      {instructor.bio ||
                        instructor.description ||
                        instructor.desc ||
                        "Guiding students with mindful movement, breath and balanced practice."}
                    </p>

                    <div className="mt-3 h-[2px] overflow-hidden rounded-full bg-[#EEEAF1] sm:mt-4">
                      <div
                        className="h-full w-[25%] rounded-full transition-all duration-700 group-hover:w-[70%]"
                        style={{
                          background: `linear-gradient(90deg, ${theme.main}, ${theme.second})`,
                        }}
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CLASS SCHEDULE
      ========================================================= */}
     {/* =========================================================
    CLASS SCHEDULE
========================================================= */}
<section className="relative w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-[68px]">

  {/* Background decoration */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#7B2CBF]/5 blur-3xl" />

    <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#FF4DDE]/5 blur-3xl" />

    <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E1B270]/5 blur-3xl" />
  </div>

  <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 sm:px-5 lg:px-7 xl:px-9">

    {/* =========================
        SECTION HEADER
    ========================= */}
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="mb-7 sm:mb-9 lg:mb-10"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-px w-7 bg-gradient-to-r from-[#7B2CBF] to-[#FF4DDE] sm:w-10" />

        <span className="text-[7px] font-bold tracking-[0.24em] text-[#7B2CBF] sm:text-[9px] lg:text-[10px]">
          WEEKLY RHYTHM
        </span>
      </div>

      <h2
        className="text-[28px] leading-[1.05] tracking-[-0.025em] text-[#24172d] sm:text-4xl lg:text-[48px]"
        style={{
          fontFamily: '"Playfair Display", serif',
        }}
      >
        A rhythm for

        <span className="ml-1.5 bg-gradient-to-r from-[#3D007A] via-[#7B2CBF] to-[#FF4DDE] bg-clip-text text-transparent sm:ml-2">
          your week.
        </span>
      </h2>

      <p className="mt-3 max-w-[580px] text-[8px] leading-4 text-[#706775] sm:text-sm sm:leading-6">
        Explore our weekly class rhythm and find a time that fits
        naturally into your schedule.
      </p>
    </motion.div>

    {/* =========================
        SCHEDULE TABLE
    ========================= */}
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative overflow-hidden rounded-[18px] border border-[#E8E2EB] bg-white shadow-[0_15px_45px_rgba(36,23,45,0.07)] sm:rounded-[22px]"
    >

      {/* Top gradient line */}
      <div className="absolute left-0 right-0 top-0 z-20 h-[3px] bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270]" />

      {/* =========================
          DESKTOP / TABLET HEADER
      ========================= */}
      <div className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-[#E8E2EB] bg-[#F8F6FA]">

        <div className="px-3 py-3.5 text-[7px] font-bold uppercase tracking-[0.16em] text-[#7B2CBF] sm:px-5 sm:py-4 sm:text-[8px] lg:px-6">
          Day
        </div>

        <div className="border-l border-[#E8E2EB] px-3 py-3.5 text-[7px] font-bold uppercase tracking-[0.16em] text-[#7B2CBF] sm:px-5 sm:py-4 sm:text-[8px] lg:px-6">
          Morning
        </div>

        <div className="border-l border-[#E8E2EB] px-3 py-3.5 text-[7px] font-bold uppercase tracking-[0.16em] text-[#7B2CBF] sm:px-5 sm:py-4 sm:text-[8px] lg:px-6">
          Evening
        </div>
      </div>

      {/* =========================
          SCHEDULE ROWS
      ========================= */}
      <div>
        {schedule.map((item, index) => {

          /*
            Your schedule structure:

            item[0] = Day
            item[1] = Morning class
            item[2] = Morning time
            item[3] = Evening class
            item[4] = Evening time
          */

          const day = item[0];
          const morningClass = item[1];
          const morningTime = item[2];
          const eveningClass = item[3];
          const eveningTime = item[4];

          const theme = themes[index % themes.length];

          return (
            <motion.div
              key={`${day}-${index}`}
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
              }}
              className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-[#EEEAF1] last:border-b-0 transition-all duration-300 hover:bg-[#FAF8FC]"
            >

              {/* =========================
                  DAY
              ========================= */}
              <div className="flex items-center px-3 py-4 sm:px-5 sm:py-5 lg:px-6">

                <div>
                  <span className="block text-[8px] font-bold text-[#24172d] sm:text-[10px] lg:text-[11px]">
                    {day}
                  </span>

                  <span className="mt-1 block text-[5px] font-medium uppercase tracking-[0.12em] text-[#9A919F] sm:text-[7px]">
                    Practice Day
                  </span>
                </div>

              </div>

              {/* =========================
                  MORNING
              ========================= */}
              <div className="flex items-center border-l border-[#EEEAF1] px-3 py-4 sm:px-5 sm:py-5 lg:px-6">

                <div className="flex min-w-0 items-center gap-2 sm:gap-3">

                  {/* Color dot */}
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full sm:h-2 sm:w-2"
                    style={{
                      backgroundColor: theme.main,
                      boxShadow: `0 0 8px ${theme.main}55`,
                    }}
                  />

                  <div className="min-w-0">

                    <span className="block truncate text-[7px] font-semibold text-[#24172d] sm:text-[9px] lg:text-[10px]">
                      {morningClass}
                    </span>

                    <span className="mt-0.5 block text-[6px] font-medium text-[#8C8491] sm:text-[8px]">
                      {morningTime}
                    </span>

                  </div>

                </div>

              </div>

              {/* =========================
                  EVENING
              ========================= */}
              <div className="flex items-center border-l border-[#EEEAF1] px-3 py-4 sm:px-5 sm:py-5 lg:px-6">

                <div className="flex min-w-0 items-center gap-2 sm:gap-3">

                  {/* Color dot */}
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full sm:h-2 sm:w-2"
                    style={{
                      backgroundColor: theme.second,
                      boxShadow: `0 0 8px ${theme.second}55`,
                    }}
                  />

                  <div className="min-w-0">

                    <span className="block truncate text-[7px] font-semibold text-[#24172d] sm:text-[9px] lg:text-[10px]">
                      {eveningClass}
                    </span>

                    <span className="mt-0.5 block text-[6px] font-medium text-[#8C8491] sm:text-[8px]">
                      {eveningTime}
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

    </motion.div>

    {/* =========================
        BOTTOM NOTE
    ========================= */}
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="mt-5 flex items-center justify-center sm:mt-6"
    >
      <div className="flex items-center gap-2">

        <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#7B2CBF] sm:w-8" />

        <p className="text-center text-[6px] font-medium tracking-[0.1em] text-[#9A919F] sm:text-[8px] sm:tracking-[0.16em]">
          SCHEDULES MAY VARY · PLEASE CONFIRM YOUR CLASS BEFORE ARRIVING
        </p>

        <span className="h-px w-5 bg-gradient-to-l from-transparent to-[#E1B270] sm:w-8" />

      </div>
    </motion.div>

  </div>
</section>

      {/* =========================================================
          PLANS & PRICING
      ========================================================= */}
      <section className="relative w-full overflow-hidden bg-[#E8ECF1] py-12 sm:py-16 lg:py-[68px]">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#7B2CBF]/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#FF4DDE]/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 sm:px-5 lg:px-7 xl:px-9">

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
              duration: 0.7,
            }}
            className="mb-8 text-center sm:mb-10"
          >
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#7B2CBF]" />

              <span className="text-[8px] font-bold tracking-[0.24em] text-[#7B2CBF] sm:text-[10px]">
                PLANS & PRICING
              </span>

              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#E1B270]" />
            </div>

            <h2
              className="text-[30px] leading-tight text-[#24172d] sm:text-4xl lg:text-[48px]"
              style={{
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Choose a plan that
              <span className="block bg-gradient-to-r from-[#3D007A] via-[#7B2CBF] to-[#FF4DDE] bg-clip-text text-transparent">
                supports your practice.
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-[560px] text-[9px] leading-4 text-[#706775] sm:text-sm sm:leading-6">
              Simple options designed to help you build a consistent and
              meaningful yoga practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">

            {plans.map((plan, index) => {

              const theme = themes[index % themes.length];

              const planName =
                plan.name ||
                plan.title ||
                `Plan ${index + 1}`;

              const planPrice =
                plan.price ||
                plan.amount ||
                "";

              const planDescription =
                plan.description ||
                plan.desc ||
                "";

              const features =
                plan.features ||
                plan.inclusions ||
                plan.items ||
                [];

              const popular =
                plan.popular ||
                plan.isPopular ||
                index === 1;

              return (
                <motion.article
                  key={`${planName}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className={`group relative overflow-hidden rounded-[16px] p-3 shadow-[0_10px_35px_rgba(36,23,45,0.08)] transition-all duration-500 hover:-translate-y-1 sm:rounded-[22px] sm:p-5 lg:p-6 ${
                    popular
                      ? "bg-[#16002b] text-white"
                      : "bg-white text-[#24172d]"
                  }`}
                >

                  {/* Top gradient */}
                  <div
                    className="absolute left-0 right-0 top-0 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${theme.main}, ${theme.second}, #E1B270)`,
                    }}
                  />

                  {/* Popular */}
                  {popular && (
                    <div className="absolute right-2 top-3 rounded-full bg-white/10 px-2 py-1 text-[5px] font-bold tracking-[0.1em] text-white sm:right-4 sm:top-4 sm:px-2.5 sm:text-[7px]">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="pt-2 sm:pt-3">

                    <span
                      className={`text-[7px] font-bold uppercase tracking-[0.18em] ${
                        popular
                          ? "text-white/45"
                          : "text-[#9A919F]"
                      }`}
                    >
                      ASCENT PLAN
                    </span>

                    <h3
                      className={`mt-2 text-[18px] leading-tight sm:text-[24px] lg:text-[28px] ${
                        popular
                          ? "text-white"
                          : "text-[#24172d]"
                      }`}
                      style={{
                        fontFamily: '"Playfair Display", serif',
                      }}
                    >
                      {planName}
                    </h3>

                    {planDescription && (
                      <p
                        className={`mt-2 text-[6px] leading-3 sm:text-[9px] sm:leading-4 ${
                          popular
                            ? "text-white/55"
                            : "text-[#706775]"
                        }`}
                      >
                        {planDescription}
                      </p>
                    )}

                    <div className="mt-4 sm:mt-6">

                      <span
                        className={`text-[24px] font-semibold tracking-[-0.04em] sm:text-[34px] ${
                          popular
                            ? "text-white"
                            : "text-[#3D007A]"
                        }`}
                      >
                        {planPrice}
                      </span>
                    </div>

                    <div
                      className={`my-4 h-px sm:my-5 ${
                        popular
                          ? "bg-white/10"
                          : "bg-[#E8E2EB]"
                      }`}
                    />

                    {/* Features */}
                    <div className="space-y-2 sm:space-y-3">

                      {features.slice(0, 5).map((feature, featureIndex) => (
                        <div
                          key={`${feature}-${featureIndex}`}
                          className="flex items-start gap-2"
                        >
                          <span
                            className="mt-0.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-full sm:h-4 sm:w-4"
                            style={{
                              background: popular
                                ? "rgba(255,255,255,0.12)"
                                : `${theme.main}12`,
                            }}
                          >
                            <span
                              className="h-[4px] w-[7px] -rotate-45 border-b border-l sm:h-[5px] sm:w-[8px]"
                              style={{
                                borderColor: popular
                                  ? "#E1B270"
                                  : theme.main,
                              }}
                            />
                          </span>

                          <span
                            className={`text-[6px] leading-3 sm:text-[9px] sm:leading-4 ${
                              popular
                                ? "text-white/65"
                                : "text-[#706775]"
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
<Link
  to="/contact"
  className={`
    group/plan
    relative
    z-[50]
    mt-5
    flex
    min-h-[38px]
    w-full
    items-center
    justify-center
    overflow-hidden
    rounded-full
    border
    px-2
    py-2
    text-[6px]
    font-extrabold
    tracking-[0.08em]
    transition-all
    duration-300

    sm:mt-7
    sm:min-h-[44px]
    sm:px-3
    sm:py-2.5
    sm:text-[8px]
    sm:tracking-[0.12em]

    lg:min-h-[46px]
    lg:text-[9px]
    lg:tracking-[0.14em]

    ${
      popular
        ? `
          border-[#E1B270]
          bg-white
          text-[#3D007A]
          shadow-[0_6px_20px_rgba(0,0,0,0.20)]
          hover:-translate-y-1
          hover:border-[#E1B270]
          hover:bg-[#E1B270]
          hover:text-[#16002b]
          hover:shadow-[0_10px_30px_rgba(225,178,112,0.40)]
        `
        : `
          border-[#3D007A]
          bg-[#3D007A]
          text-white
          shadow-[0_6px_20px_rgba(61,0,122,0.22)]
          hover:-translate-y-1
          hover:border-[#16002b]
          hover:bg-[#16002b]
          hover:text-white
          hover:shadow-[0_10px_30px_rgba(22,0,43,0.35)]
        `
    }
  `}
>
  {/* Animated shine */}
  <span
    className="
      pointer-events-none
      absolute
      inset-y-0
      left-[-80%]
      z-0
      w-[45%]
      -skew-x-12
      bg-gradient-to-r
      from-transparent
      via-white/40
      to-transparent
      opacity-0
      transition-all
      duration-700
      group-hover/plan:left-[130%]
      group-hover/plan:opacity-100
    "
  />

  {/* Button text */}
  <span
    className={`
      relative
      z-20
      whitespace-nowrap
      font-extrabold
      transition-colors
      duration-300
      ${
        popular
          ? "text-[#3D007A] group-hover/plan:text-[#16002b]"
          : "text-white group-hover/plan:text-white"
      }
    `}
  >
    CHOOSE THIS PLAN
  </span>
</Link>
                  </div>

                  <div
                    className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-10 blur-3xl transition-all duration-500 group-hover:scale-150"
                    style={{
                      backgroundColor: theme.second,
                    }}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAM DETAILS MODAL
      ========================================================= */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#16002b]/80 p-3 backdrop-blur-md sm:p-5"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProgram(null);
              }
            }}
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative max-h-[92vh] w-full max-w-[850px] overflow-hidden rounded-[22px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:rounded-[30px]"
            >

              {/* TOP COLOR LINE */}
              <div
                className="absolute left-0 right-0 top-0 z-50 h-[4px]"
                style={{
                  background: `linear-gradient(90deg, ${selectedTheme.main}, ${selectedTheme.second}, #E1B270)`,
                }}
              />

              <div className="max-h-[92vh] overflow-y-auto">

                {/* MODAL IMAGE */}
                <div className="relative h-[190px] overflow-hidden sm:h-[260px] md:h-[310px]">

                  <img
                    src={selectedProgram.image}
                    alt={selectedProgram.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#16002b]/95 via-[#16002b]/30 to-transparent" />

                  {/* CLOSE */}
                  <button
                    type="button"
                    onClick={() => setSelectedProgram(null)}
                    aria-label="Close program details"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#3D007A] sm:right-5 sm:top-5 sm:h-10 sm:w-10"
                  >
                    <span className="relative h-4 w-4">
                      <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />

                      <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
                    </span>
                  </button>

                  {/* IMAGE DETAILS */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-7 sm:right-7">

                    <div className="mb-2 flex flex-wrap gap-2">

                      <span className="rounded-full border border-white/20 bg-black/25 px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:text-[8px]">
                        {selectedProgram.level}
                      </span>

                      <span className="rounded-full border border-white/20 bg-black/25 px-2.5 py-1.5 text-[7px] font-semibold tracking-[0.08em] text-white backdrop-blur-md sm:text-[8px]">
                        {selectedProgram.duration}
                      </span>
                    </div>

                    <h3
                      className="text-[28px] leading-tight text-white sm:text-4xl md:text-[46px]"
                      style={{
                        fontFamily: '"Playfair Display", serif',
                      }}
                    >
                      {selectedProgram.title}
                    </h3>
                  </div>
                </div>

                {/* MODAL CONTENT */}
                <div className="p-5 sm:p-7 md:p-9">

                  <div className="grid gap-6 md:grid-cols-[1fr_240px] md:gap-10">

                    {/* LEFT */}
                    <div>

                      <div className="mb-3 flex items-center gap-2">

                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            backgroundColor: selectedTheme.main,
                            boxShadow: `0 0 10px ${selectedTheme.main}`,
                          }}
                        />

                        <span className="text-[8px] font-bold tracking-[0.2em] text-[#9A919F]">
                          ABOUT THIS PROGRAM
                        </span>
                      </div>

                      <p className="text-[11px] leading-6 text-[#625B66] sm:text-sm sm:leading-7">
                        {selectedProgram.desc}
                      </p>

                      {/* DETAILS */}
                      <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">

                        <div className="rounded-2xl border border-[#E8E2EB] bg-[#FAF8FC] p-3 sm:p-4">
                          <span className="block text-[7px] font-bold uppercase tracking-[0.15em] text-[#9A919F]">
                            Level
                          </span>

                          <span className="mt-1.5 block text-[10px] font-semibold text-[#24172d] sm:text-xs">
                            {selectedProgram.level}
                          </span>
                        </div>

                        <div className="rounded-2xl border border-[#E8E2EB] bg-[#FAF8FC] p-3 sm:p-4">
                          <span className="block text-[7px] font-bold uppercase tracking-[0.15em] text-[#9A919F]">
                            Duration
                          </span>

                          <span className="mt-1.5 block text-[10px] font-semibold text-[#24172d] sm:text-xs">
                            {selectedProgram.duration}
                          </span>
                        </div>

                        <div className="col-span-2 rounded-2xl border border-[#E8E2EB] bg-[#FAF8FC] p-3 sm:col-span-1 sm:p-4">
                          <span className="block text-[7px] font-bold uppercase tracking-[0.15em] text-[#9A919F]">
                            Experience
                          </span>

                          <span className="mt-1.5 block text-[10px] font-semibold text-[#24172d] sm:text-xs">
                            Guided Practice
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT CTA */}
                    <div className="relative overflow-hidden rounded-[20px] bg-[#16002b] p-5 sm:p-6">

                      <div
                        className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25 blur-3xl"
                        style={{
                          backgroundColor: selectedTheme.second,
                        }}
                      />

                      <div
                        className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full opacity-20 blur-3xl"
                        style={{
                          backgroundColor: selectedTheme.main,
                        }}
                      />

                      <div className="relative z-10">

                        <span className="text-[7px] font-bold tracking-[0.2em] text-white/45">
                          READY TO BEGIN?
                        </span>

                        <h4
                          className="mt-2 text-[23px] leading-tight text-white sm:text-[27px]"
                          style={{
                            fontFamily: '"Playfair Display", serif',
                          }}
                        >
                          Start your

                          <span className="block bg-gradient-to-r from-[#FF4DDE] to-[#E1B270] bg-clip-text text-transparent">
                            practice.
                          </span>
                        </h4>

                        <p className="mt-3 text-[9px] leading-4 text-white/55 sm:text-[10px] sm:leading-5">
                          Connect with our team and find the right class
                          for your current practice.
                        </p>

                        <Link
                          to="/contact"
                          onClick={() => setSelectedProgram(null)}
                          className="mt-5 flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-[8px] font-bold tracking-[0.12em] text-[#3D007A] transition-all duration-300 hover:bg-[#E1B270] hover:text-[#16002b] sm:text-[9px]"
                        >
                          BOOK THIS CLASS
                        </Link>

                        <button
                          type="button"
                          onClick={() => setSelectedProgram(null)}
                          className="mt-2.5 flex w-full items-center justify-center rounded-full border border-white/15 px-4 py-3 text-[8px] font-semibold tracking-[0.12em] text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white sm:text-[9px]"
                        >
                          CLOSE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}