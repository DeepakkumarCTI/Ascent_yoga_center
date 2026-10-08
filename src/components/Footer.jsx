import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* =====================================================
   FOOTER HIGHLIGHTS
===================================================== */



export default function Footer() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <footer className="relative w-full overflow-hidden bg-[#21003f] text-white">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div
            className="
              absolute -left-24 -top-24
              h-48 w-48
              rounded-full
              bg-[#7B2CBF]/20
              blur-3xl
              animate-[footerGlowOne_7s_ease-in-out_infinite]
              sm:h-60 sm:w-60
            "
          />

          <div
            className="
              absolute left-[35%] -top-28
              h-40 w-40
              rounded-full
              bg-[#FF4DDE]/10
              blur-3xl
              animate-[footerGlowTwo_8s_ease-in-out_infinite]
              sm:h-52 sm:w-52
            "
          />

          <div
            className="
              absolute -right-20 bottom-[-70px]
              h-52 w-52
              rounded-full
              bg-[#E1B270]/12
              blur-3xl
              animate-[footerGlowThree_8s_ease-in-out_infinite]
              sm:h-64 sm:w-64
            "
          />

          <div
            className="
              absolute right-[20%] top-[40%]
              h-32 w-32
              rounded-full
              bg-[#00C2FF]/7
              blur-3xl
              animate-[footerGlowFour_9s_ease-in-out_infinite]
            "
          />

          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)]
              bg-[length:28px_28px]
              opacity-10
            "
          />

          <div className="absolute -right-32 top-[20%] hidden h-[360px] w-[360px] rounded-full border border-white/[0.04] lg:block" />

        </div>

        {/* =====================================================
            TOP BORDER
        ====================================================== */}

        <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#3D007A] via-[#7B2CBF] to-[#E1B270]" />

          <span
            className="
              absolute left-[-30%] top-0
              h-full w-[25%]
              bg-gradient-to-r
              from-transparent
              via-[#FF4DDE]
              to-transparent
              shadow-[0_0_15px_#FF4DDE]
              animate-[footerTopSweep_4s_ease-in-out_infinite]
            "
          />

          <span
            className="
              absolute left-[-30%] top-0
              h-full w-[18%]
              bg-gradient-to-r
              from-transparent
              via-[#00C2FF]
              to-transparent
              shadow-[0_0_15px_#00C2FF]
              animate-[footerTopSweep_5s_ease-in-out_infinite_1.8s]
            "
          />

        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div
          className="
            relative z-10
            mx-auto w-full
            max-w-[1380px]
            px-3
            py-5
            sm:px-5
            sm:py-7
            lg:px-7
            lg:py-8
            xl:px-8
          "
        >

          {/* =====================================================
              BRAND + INTRO
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[18px]
                border
                border-white/10
                bg-white/[0.045]
                px-3.5
                py-3.5
                backdrop-blur-xl
                sm:px-5
                sm:py-4
                lg:px-6
              "
            >

              <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] animate-[footerPanelLine_4s_ease-in-out_infinite]" />
              </div>

              <div
                className="
                  flex
                  flex-col
                  gap-2.5
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >

                {/* BRAND */}

                <div className="flex items-center gap-2.5">

                  <Link
                    to="/"
                    className="group relative flex shrink-0 items-center justify-center"
                  >

                    <span
                      className="
                        absolute
                        -inset-1.5
                        rounded-full
                        bg-gradient-to-r
                        from-[#7B2CBF]
                        via-[#FF4DDE]
                        to-[#E1B270]
                        opacity-20
                        blur-md
                        transition-all
                        duration-500
                        group-hover:opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        flex h-9 w-9
                        items-center justify-center
                        overflow-hidden
                        rounded-full
                        border border-white/20
                        bg-white
                        transition-all
                        duration-500
                        group-hover:scale-105
                      "
                    >
                      <img
                        src="/images/logo.png"
                        alt="Ascent Yoga Centre"
                        className="
                          h-7 w-7
                          object-contain
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        "
                      />
                    </span>

                  </Link>

                  <div>

                    <span
                      className="
                        block
                        text-base
                        font-semibold
                        tracking-[0.15em]
                        text-white
                        sm:text-lg
                      "
                      style={{
                        fontFamily: '"Playfair Display", serif',
                      }}
                    >
                      ASCENT
                    </span>

                    <span className="block text-[6px] font-medium tracking-[0.3em] text-white/40 sm:text-[7px]">
                      YOGA CENTRE
                    </span>

                  </div>

                </div>

                {/* INTRO */}

                <p
                  className="
                    max-w-[560px]
                    text-[9px]
                    leading-4
                    text-white/55
                    md:text-right
                    sm:text-[10px]
                    sm:leading-5
                  "
                >
                  A calm space for mindful movement, conscious breath and
                  everyday wellbeing. Discover a practice that helps you move
                  better, breathe deeper and reconnect with yourself.
                </p>

              </div>

            </div>

          </motion.div>

          {/* =====================================================
              HIGHLIGHTS
          ====================================================== */}

         

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <div
            className="
              mt-5
              grid
              grid-cols-2
              gap-x-5
              gap-y-5
              sm:mt-6
              sm:gap-x-8
              sm:gap-y-6
              lg:grid-cols-[1.3fr_0.75fr_0.95fr_1fr]
              lg:gap-8
              xl:gap-10
            "
          >

            {/* ABOUT */}

            <motion.div
              className="col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
            >

              <FooterHeading>
                ABOUT ASCENT
              </FooterHeading>

              <p
                className="
                  mt-2
                  max-w-[390px]
                  text-[8px]
                  leading-4
                  text-white/45
                  sm:text-[10px]
                  sm:leading-5
                "
              >
                At Ascent, yoga is more than movement. It is a simple way to
                create space, build awareness and bring more balance into
                everyday life.
              </p>

              <div className="mt-2.5 flex items-center gap-1.5">

                <SocialLink
                  href="https://instagram.com"
                  image="/images/social/instagram.png"
                  alt="Instagram"
                  delay="0s"
                />

                <SocialLink
                  href="https://facebook.com"
                  image="/images/social/facebook.png"
                  alt="Facebook"
                  delay="0.7s"
                />

                <SocialLink
                  href="https://youtube.com"
                  image="/images/social/youtube.png"
                  alt="YouTube"
                  delay="1.4s"
                />

                <SocialLink
                  href="https://whatsapp.com"
                  image="/images/social/whatsapp.png"
                  alt="WhatsApp"
                  delay="2.1s"
                />

              </div>

            </motion.div>

            {/* EXPLORE */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >

              <FooterHeading>
                EXPLORE
              </FooterHeading>

              <div className="mt-2.5 flex flex-col gap-1.5">

                <FooterLink to="/about">
                  About Us
                </FooterLink>

                <FooterLink to="/explore">
                  Explore Ascent
                </FooterLink>

                <FooterLink to="/gallery">
                  Gallery
                </FooterLink>

                <FooterLink to="/contact">
                  Contact
                </FooterLink>

              </div>

            </motion.div>

            {/* PRACTICE */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.14 }}
            >

              <FooterHeading>
                PRACTICE
              </FooterHeading>

              <div className="mt-2.5 space-y-1.5">

                <PracticeItem
                  title="Mindful Movement"
                  subtitle="Body"
                  color="#7B2CBF"
                />

                <PracticeItem
                  title="Conscious Breath"
                  subtitle="Breath"
                  color="#FF4DDE"
                />

                <PracticeItem
                  title="Inner Balance"
                  subtitle="Mind"
                  color="#E1B270"
                />

              </div>

            </motion.div>

            {/* CONTACT */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >

              <FooterHeading>
                CONTACT
              </FooterHeading>

              <p className="mt-2.5 text-[8px] leading-4 text-white/50 sm:text-[10px] sm:leading-5">
                Ascent Yoga Centre
                <br />
                Your Centre Address
                <br />
                Coimbatore, Tamil Nadu
              </p>

              <p className="mt-1.5 text-[8px] leading-4 text-white/50 sm:text-[10px] sm:leading-5">
                +91 90000 00000
                <br />
                hello@ascentyogacentre.com
              </p>

              <a
                href="https://wa.me/919000000000?text=Hello%20Ascent%20Yoga%20Centre%2C%20I%20would%20like%20to%20know%20about%20your%20classes."
                target="_blank"
                rel="noreferrer"
                className="
                  group/whatsapp
                  relative
                  mt-2
                  inline-flex
                  min-h-[28px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  px-3
                  text-[7px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white/35
                  hover:bg-white/10
                  sm:min-h-[31px]
                  sm:px-3.5
                  sm:text-[9px]
                "
              >

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    -left-[80%]
                    w-[40%]
                    -skew-x-12
                    bg-white/15
                    transition-all
                    duration-700
                    group-hover/whatsapp:left-[130%]
                  "
                />

                <span className="relative z-10 whitespace-nowrap">
                  WhatsApp Enquiry
                </span>

              </a>

            </motion.div>

          </div>

          {/* =====================================================
              COMPACT CTA
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative mt-5 sm:mt-6"
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[17px]
                border
                border-white/10
                bg-gradient-to-r
                from-[#7B2CBF]/18
                via-[#FF4DDE]/8
                to-[#E1B270]/8
                px-3.5
                py-3
                sm:px-5
                sm:py-3.5
              "
            >

              <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">

                <div className="h-full w-[25%] bg-gradient-to-r from-transparent via-[#FF4DDE] to-transparent animate-[footerCtaLine_4s_ease-in-out_infinite]" />

              </div>

              <div className="flex w-full items-center justify-center gap-3 sm:gap-4">

  <div className="flex min-w-0 flex-col items-center justify-center text-center">

    <span className="text-[6px] font-bold tracking-[0.22em] text-[#E1B270] sm:text-[7px]">
      BEGIN YOUR ASCENT
    </span>

    <h3
      className="
        mt-0.5
        text-center
        text-[16px]
        leading-tight
        text-white
        sm:text-[20px]
      "
      style={{
        fontFamily: '"Playfair Display", serif',
      }}
    >
      Make space for your practice.
    </h3>

  </div>

</div>

            </div>

          </motion.div>

          {/* =====================================================
              DIVIDER
          ====================================================== */}

          <div className="relative mt-4 h-px w-full overflow-hidden sm:mt-5">

            <div className="absolute inset-0 bg-white/10" />

            <span
              className="
                absolute
                left-[-20%]
                top-0
                h-full
                w-[15%]
                bg-gradient-to-r
                from-transparent
                via-[#FF4DDE]
                to-transparent
                animate-[footerLineMove_5s_linear_infinite]
              "
            />

          </div>

          {/* =====================================================
              BOTTOM
          ====================================================== */}

          <div
            className="
              flex
              flex-col
              gap-2
              pt-3
              text-[7px]
              text-white/30
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:text-[8px]
            "
          >

            <span>
              © 2026 Ascent Yoga Centre. All rights reserved.
            </span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">

              <button
                type="button"
                onClick={() => setModal("privacy")}
                className="transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </button>

              <button
                type="button"
                onClick={() => setModal("terms")}
                className="transition-colors duration-300 hover:text-white"
              >
                Terms & Conditions
              </button>

              <span className="hidden h-1 w-1 rounded-full bg-[#FF4DDE]/60 sm:block" />

              <span className="tracking-[0.12em] text-white/20">
                MOVE · BREATHE · CONNECT
              </span>

            </div>

          </div>

        </div>

        {/* =====================================================
            ANIMATIONS
        ====================================================== */}

        <style>{`

          @keyframes footerGlowOne {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.35;
            }

            50% {
              transform: translate(30px, 20px) scale(1.12);
              opacity: 0.6;
            }
          }

          @keyframes footerGlowTwo {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.2;
            }

            50% {
              transform: translate(-25px, 25px) scale(1.15);
              opacity: 0.45;
            }
          }

          @keyframes footerGlowThree {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.25;
            }

            50% {
              transform: translate(-30px, -20px) scale(1.12);
              opacity: 0.5;
            }
          }

          @keyframes footerGlowFour {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.1;
            }

            50% {
              transform: translate(-20px, 15px) scale(1.15);
              opacity: 0.3;
            }
          }

          @keyframes footerTopSweep {
            0% {
              left: -30%;
              opacity: 0;
            }

            15% {
              opacity: 1;
            }

            55% {
              left: 110%;
              opacity: 1;
            }

            70%, 100% {
              left: 110%;
              opacity: 0;
            }
          }

          @keyframes footerLineMove {
            0% {
              left: -20%;
              opacity: 0;
            }

            15% {
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

          @keyframes footerPanelLine {
            0% {
              transform: translateX(-180%);
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            70% {
              opacity: 1;
            }

            100% {
              transform: translateX(500%);
              opacity: 0;
            }
          }

          @keyframes footerCtaLine {
            0% {
              transform: translateX(-180%);
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            65% {
              opacity: 1;
            }

            100% {
              transform: translateX(500%);
              opacity: 0;
            }
          }

          @keyframes socialPulse {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-2px);
            }
          }

        `}</style>

      </footer>

      {/* =====================================================
          LEGAL MODAL
      ====================================================== */}

      <AnimatePresence>
        {modal && (
          <Legal
            type={modal}
            close={() => setModal(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* =====================================================
   FOOTER HEADING
===================================================== */

function FooterHeading({ children }) {
  return (
    <div className="flex items-center gap-1.5">

      <span
        className="
          h-3.5
          w-[2px]
          rounded-full
          bg-gradient-to-b
          from-[#FF4DDE]
          to-[#E1B270]
        "
      />

      <h4 className="text-[8px] font-semibold tracking-[0.2em] text-white/50 sm:text-[9px]">
        {children}
      </h4>

    </div>
  );
}

/* =====================================================
   PRACTICE ITEM
===================================================== */

function PracticeItem({ title, subtitle, color }) {
  return (
    <div className="group flex items-center justify-between gap-2">

      <div className="flex min-w-0 items-center gap-2">

        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
          }}
        />

        <span className="truncate text-[8px] font-medium text-white/60 transition-colors duration-300 group-hover:text-white sm:text-[10px]">
          {title}
        </span>

      </div>

      <span
        className="shrink-0 text-[6px] font-semibold uppercase tracking-[0.14em] sm:text-[7px]"
        style={{
          color,
        }}
      >
        {subtitle}
      </span>

    </div>
  );
}

/* =====================================================
   SOCIAL LINK
===================================================== */

function SocialLink({ href, image, alt, delay }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={alt}
      whileHover={{
        y: -3,
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.92,
      }}
      className="
        group
        relative
        flex
        h-7
        w-7
        shrink-0
        items-center
        justify-center
        overflow-visible
        transition-all
        duration-300
        sm:h-8
        sm:w-8
      "
      style={{
        animation: `socialPulse 3s ease-in-out infinite`,
        animationDelay: delay,
      }}
    >

      <span
        className="
          pointer-events-none
          absolute
          -inset-1.5
          rounded-full
          bg-gradient-to-r
          from-[#7B2CBF]
          via-[#FF4DDE]
          to-[#E1B270]
          opacity-0
          blur-lg
          transition-all
          duration-500
          group-hover:opacity-40
          group-hover:-inset-2
        "
      />

      <img
        src={image}
        alt={alt}
        className="
          relative
          z-10
          block
          h-5
          w-5
          object-contain
          opacity-90
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:opacity-100
          sm:h-6
          sm:w-6
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          inset-0.5
          rounded-full
          border
          border-transparent
          bg-[linear-gradient(#21003f,#21003f)_padding-box,linear-gradient(135deg,#7B2CBF,#FF4DDE,#E1B270)_border-box]
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-40
        "
      />

    </motion.a>
  );
}

/* =====================================================
   FOOTER LINK
===================================================== */

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="
        group
        flex
        w-fit
        items-center
        text-[9px]
        text-white/55
        transition-all
        duration-300
        hover:translate-x-1
        hover:text-white
        sm:text-[10px]
      "
    >

      <span>{children}</span>

      <span
        className="
          ml-1
          h-px
          w-0
          bg-gradient-to-r
          from-[#FF4DDE]
          to-[#E1B270]
          transition-all
          duration-300
          group-hover:w-2.5
        "
      />

    </Link>
  );
}

/* =====================================================
   LEGAL MODAL
===================================================== */

function Legal({ type, close }) {
  const privacy = type === "privacy";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#17002f]/70
        px-3
        py-4
        backdrop-blur-md
        sm:px-6
        sm:py-6
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 15,
          scale: 0.97,
        }}
        transition={{
          duration: 0.3,
        }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          flex
          max-h-[88vh]
          w-full
          max-w-[650px]
          flex-col
          overflow-y-auto
          rounded-[20px]
          bg-white
          p-5
          shadow-[0_25px_80px_rgba(0,0,0,0.25)]
          sm:max-h-[90vh]
          sm:rounded-[24px]
          sm:p-8
          lg:p-10
        "
      >

        <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-[#3D007A]/10 sm:rounded-[24px]" />

        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="
            absolute
            right-4
            top-4
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            text-gray-500
            transition-all
            duration-300
            hover:border-[#3D007A]/20
            hover:bg-[#E8ECF1]
            hover:text-[#3D007A]
            sm:right-5
            sm:top-5
            sm:h-9
            sm:w-9
          "
        >

          <span className="relative block h-4 w-4">

            <span
              className="
                absolute
                left-1/2
                top-1/2
                h-px
                w-5
                -translate-x-1/2
                -translate-y-1/2
                rotate-45
                bg-current
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-1/2
                h-px
                w-5
                -translate-x-1/2
                -translate-y-1/2
                -rotate-45
                bg-current
              "
            />

          </span>

        </button>

        <span className="text-[9px] font-semibold tracking-[0.25em] text-[#3D007A] sm:text-xs">
          {privacy ? "PRIVACY" : "TERMS"}
        </span>

        <h2
          className="
            mt-2
            pr-8
            text-2xl
            font-normal
            leading-tight
            text-[#3D007A]
            sm:mt-3
            sm:text-4xl
          "
          style={{
            fontFamily: '"Playfair Display", serif',
          }}
        >
          {privacy ? "Privacy Policy" : "Terms & Conditions"}
        </h2>

        <div className="mt-4 h-[2px] w-10 bg-gradient-to-r from-[#3D007A] to-[#E1B270] sm:mt-5 sm:w-12" />

        {privacy ? (
          <div className="mt-5 space-y-4 text-[11px] leading-5 text-gray-600 sm:mt-7 sm:space-y-6 sm:text-sm sm:leading-7">

            <p>
              Ascent Yoga Centre respects your privacy. Details submitted
              through the enquiry form are used to respond to your request and
              provide relevant centre information.
            </p>

            <div>

              <h3 className="mb-1.5 text-xs font-semibold text-[#3D007A] sm:mb-2 sm:text-sm">
                Information
              </h3>

              <p>
                We may receive your name, phone number, email and message when
                you voluntarily submit an enquiry.
              </p>

            </div>

            <div>

              <h3 className="mb-1.5 text-xs font-semibold text-[#3D007A] sm:mb-2 sm:text-sm">
                Use of Information
              </h3>

              <p>
                Your details are used for communication about classes,
                schedules and enquiries. We do not sell personal information.
              </p>

            </div>

          </div>
        ) : (
          <div className="mt-5 space-y-4 text-[11px] leading-5 text-gray-600 sm:mt-7 sm:space-y-6 sm:text-sm sm:leading-7">

            <p>
              By using this website, you agree to use the information and
              enquiry features responsibly.
            </p>

            <div>

              <h3 className="mb-1.5 text-xs font-semibold text-[#3D007A] sm:mb-2 sm:text-sm">
                Information Accuracy
              </h3>

              <p>
                Class timings, prices and program availability may change.
                Please confirm current details with the centre.
              </p>

            </div>

            <div>

              <h3 className="mb-1.5 text-xs font-semibold text-[#3D007A] sm:mb-2 sm:text-sm">
                External Services
              </h3>

              <p>
                Social media and WhatsApp links lead to third-party services
                and are subject to their terms.
              </p>

            </div>

          </div>
        )}

        <div className="mt-5 border-t border-gray-100 pt-4 sm:mt-7 sm:pt-5">

          <button
            type="button"
            onClick={close}
            className="
              rounded-full
              bg-[#3D007A]
              px-5
              py-2.5
              text-[10px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_10px_25px_rgba(61,0,122,0.18)]
              sm:px-6
              sm:py-3
              sm:text-xs
            "
          >
            Close
          </button>

        </div>

      </motion.div>

    </motion.div>
  );
}