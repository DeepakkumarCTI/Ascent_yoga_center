import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { testimonials } from "../data/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // =========================================================
  // WHATSAPP FORM SUBMISSION
  // =========================================================
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const interest = formData.get("interest")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    // Create WhatsApp message
    const whatsappMessage = `Hello Ascent Yoga Centre,

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email}
Interested In: ${interest}

Message:
${message}`;

    // Your WhatsApp number
    // Replace 919000000000 with your actual WhatsApp number.
    const whatsappUrl = `https://wa.me/919000000000?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Show success message
    setSent(true);

    // Open WhatsApp with entered form details
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Clear form
    form.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* =========================================================
          PAGE HERO
      ========================================================= */}
      <PageHero
        title="Contact Ascent"
        text="Have a question about classes, schedules or your first visit? We would love to hear from you."
        video="/images/contact-hero.mp4"
      />


      {/* =========================================================
          CONTACT SECTION
      ========================================================= */}
      <section className="w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1380px] grid-cols-1 gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 xl:px-10">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <span className="text-[9px] font-semibold tracking-[0.2em] text-[#3D007A] sm:text-[10px] lg:text-xs">
              GET IN TOUCH
            </span>

            <h2
              className="mt-2 text-3xl font-normal leading-[1.15] text-[#3D007A] sm:text-4xl lg:mt-3 lg:text-5xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Come as you are.
            </h2>

            <div className="mt-3 h-[2px] w-10 bg-gradient-to-r from-[#3D007A] to-[#FF4DDE] sm:mt-4 sm:w-12 lg:mt-5 lg:w-14" />

            <p className="mt-4 max-w-[560px] text-xs leading-6 text-gray-600 sm:text-sm sm:leading-7 lg:mt-6 lg:text-base">
              Reach out for class information, trial sessions, group
              enquiries or anything you would like to know before visiting.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-6 space-y-5 sm:mt-7 sm:space-y-6 lg:mt-8">

              {/* Studio */}
              <div className="border-l-2 border-[#3D007A]/20 pl-4 lg:pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3D007A] sm:text-xs">
                  Studio
                </p>

                <p className="mt-1.5 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                  Ascent Yoga Centre
                  <br />
                  Your Centre Address
                  <br />
                  Coimbatore, Tamil Nadu
                </p>
              </div>

              {/* Phone */}
              <div className="border-l-2 border-[#3D007A]/20 pl-4 lg:pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3D007A] sm:text-xs">
                  Phone & WhatsApp
                </p>

                <p className="mt-1.5 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                  +91 90000 00000
                  <br />
                  Mon – Sat · 6:00 AM – 8:00 PM
                </p>
              </div>

              {/* Email */}
              <div className="border-l-2 border-[#3D007A]/20 pl-4 lg:pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3D007A] sm:text-xs">
                  Email
                </p>

                <p className="mt-1.5 break-words text-xs text-gray-600 sm:text-sm">
                  hello@ascentyogacentre.com
                </p>
              </div>

            </div>

            {/* =====================================================
                WHATSAPP BUTTON
            ===================================================== */}
            
          </motion.div>


          {/* =====================================================
              ENQUIRY FORM
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            id="form"
            className="
              min-w-0
              rounded-[18px]
              border
              border-[#E8ECF1]
              bg-[#E8ECF1]/55
              p-4
              shadow-[0_12px_40px_rgba(61,0,122,0.06)]
              sm:rounded-[22px]
              sm:p-6
              lg:rounded-[24px]
              lg:p-8
              xl:p-10
            "
          >

            {/* Top gradient */}
            <div className="mb-5 h-[2px] w-12 bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] sm:mb-6 lg:mb-7 lg:w-16" />

            <span className="text-[9px] font-semibold tracking-[0.2em] text-[#3D007A] sm:text-[10px] lg:text-xs">
              SEND AN ENQUIRY
            </span>

            <h3
              className="mt-2 text-2xl font-normal leading-tight text-[#3D007A] sm:text-3xl lg:mt-3 lg:text-4xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Tell us what you need.
            </h3>


            {/* =====================================================
                FORM
            ===================================================== */}
            <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 lg:mt-8">

              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">

                {/* NAME */}
                <label className="block min-w-0">
                  <span className="mb-1.5 block text-[10px] font-semibold text-gray-700 sm:text-xs">
                    Name
                  </span>

                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      h-10
                      w-full
                      min-w-0
                      rounded-lg
                      border
                      border-gray-200
                      bg-white
                      px-3
                      text-xs
                      text-gray-800
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-[#3D007A]
                      focus:ring-2
                      focus:ring-[#3D007A]/10
                      sm:h-11
                      sm:px-3.5
                      sm:text-sm
                      lg:rounded-xl
                      lg:px-4
                    "
                  />
                </label>


                {/* PHONE */}
                <label className="block min-w-0">
                  <span className="mb-1.5 block text-[10px] font-semibold text-gray-700 sm:text-xs">
                    Phone
                  </span>

                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    className="
                      h-10
                      w-full
                      min-w-0
                      rounded-lg
                      border
                      border-gray-200
                      bg-white
                      px-3
                      text-xs
                      text-gray-800
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-[#3D007A]
                      focus:ring-2
                      focus:ring-[#3D007A]/10
                      sm:h-11
                      sm:px-3.5
                      sm:text-sm
                      lg:rounded-xl
                      lg:px-4
                    "
                  />
                </label>


                {/* EMAIL */}
                <label className="block min-w-0">
                  <span className="mb-1.5 block text-[10px] font-semibold text-gray-700 sm:text-xs">
                    Email
                  </span>

                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                      h-10
                      w-full
                      min-w-0
                      rounded-lg
                      border
                      border-gray-200
                      bg-white
                      px-3
                      text-xs
                      text-gray-800
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-[#3D007A]
                      focus:ring-2
                      focus:ring-[#3D007A]/10
                      sm:h-11
                      sm:px-3.5
                      sm:text-sm
                      lg:rounded-xl
                      lg:px-4
                    "
                  />
                </label>


                {/* INTEREST */}
                <label className="block min-w-0">
                  <span className="mb-1.5 block text-[10px] font-semibold text-gray-700 sm:text-xs">
                    Interested In
                  </span>

                  <select
                    required
                    name="interest"
                    defaultValue="Yoga Program"
                    className="
                      h-10
                      w-full
                      min-w-0
                      rounded-lg
                      border
                      border-gray-200
                      bg-white
                      px-3
                      text-xs
                      text-gray-800
                      outline-none
                      transition-all
                      focus:border-[#3D007A]
                      focus:ring-2
                      focus:ring-[#3D007A]/10
                      sm:h-11
                      sm:px-3.5
                      sm:text-sm
                      lg:rounded-xl
                      lg:px-4
                    "
                  >
                    <option>Yoga Program</option>
                    <option>Trial Class</option>
                    <option>Pricing</option>
                    <option>Private Session</option>
                  </select>
                </label>


                {/* MESSAGE */}
                <label className="col-span-2 block min-w-0">
                  <span className="mb-1.5 block text-[10px] font-semibold text-gray-700 sm:text-xs">
                    Message
                  </span>

                  <textarea
                    required
                    name="message"
                    rows="4"
                    placeholder="How can we help?"
                    className="
                      min-h-[90px]
                      w-full
                      resize-none
                      rounded-lg
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-2.5
                      text-xs
                      leading-5
                      text-gray-800
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-[#3D007A]
                      focus:ring-2
                      focus:ring-[#3D007A]/10
                      sm:min-h-[105px]
                      sm:px-3.5
                      sm:text-sm
                      lg:min-h-[120px]
                      lg:rounded-xl
                      lg:px-4
                      lg:py-3
                    "
                  />
                </label>


                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}
                <div className="col-span-2">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      group
                      relative
                      h-10
                      w-full
                      overflow-hidden
                      rounded-lg
                      bg-[#3D007A]
                      px-4
                      text-xs
                      font-semibold
                      text-white
                      shadow-[0_10px_25px_rgba(61,0,122,0.16)]
                      transition-all
                      duration-300
                      hover:shadow-[0_15px_30px_rgba(61,0,122,0.24)]
                      sm:h-11
                      sm:text-sm
                      lg:h-12
                      lg:rounded-xl
                    "
                  >
                    {/* Button shine */}
                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        -left-[60%]
                        z-0
                        w-1/3
                        skew-x-[-20deg]
                        bg-white/20
                        transition-all
                        duration-700
                        group-hover:left-[120%]
                      "
                    />

                    <span className="relative z-10">
                      Send Enquiry
                    </span>
                  </motion.button>
                </div>

              </div>


              {/* =====================================================
                  SUCCESS MESSAGE
              ===================================================== */}
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="
                    mt-4
                    rounded-lg
                    border
                    border-[#3D007A]/10
                    bg-white
                    px-3
                    py-2.5
                    text-center
                    text-[10px]
                    font-medium
                    text-[#3D007A]
                    sm:text-xs
                    lg:mt-5
                    lg:px-4
                    lg:py-3
                    lg:text-sm
                  "
                >
                  Thank you! Your enquiry has been received.
                  Opening WhatsApp...
                </motion.div>
              )}

            </form>
          </motion.div>

        </div>
      </section>


      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}
      <section className="relative w-full overflow-hidden bg-[#E8ECF1] py-10 sm:py-14 lg:py-20">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[20%] h-40 w-40 rounded-full bg-[#7B2CBF]/10 blur-3xl" />
          <div className="absolute bottom-[15%] right-[5%] h-40 w-40 rounded-full bg-[#FF4DDE]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-[1380px] px-3 sm:px-5 lg:px-8 xl:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[700px] text-center"
          >
            <span className="text-[7px] font-semibold tracking-[0.2em] text-[#3D007A] sm:text-[9px] lg:text-xs">
              TESTIMONIALS
            </span>

            <h2
              className="mt-2 text-[20px] font-normal leading-tight text-[#3D007A] sm:text-3xl lg:mt-3 lg:text-5xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Kind words from our community.
            </h2>

            <div className="mx-auto mt-3 h-[2px] w-16 overflow-hidden rounded-full bg-[#3D007A]/10 sm:mt-4 sm:w-20">
              <span className="block h-full w-1/2 bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270]" />
            </div>
          </motion.div>

          <div className="mt-5 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-4 lg:mt-10 lg:gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="
                  group
                  relative
                  min-w-0
                  overflow-hidden
                  rounded-[14px]
                  bg-white
                  p-2.5
                  shadow-[0_10px_30px_rgba(61,0,122,0.05)]
                  transition-all
                  duration-500
                  hover:shadow-[0_18px_45px_rgba(61,0,122,0.12)]
                  sm:rounded-[18px]
                  sm:p-4
                  lg:rounded-[22px]
                  lg:p-6
                "
              >

                <div className="pointer-events-none absolute inset-0 rounded-[14px] border border-[#7B2CBF]/20 sm:rounded-[18px] lg:rounded-[22px]" />

                <span className="pointer-events-none absolute left-[-35%] top-0 z-20 h-[2px] w-[35%] rounded-full bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] animate-[testimonialBorderTop_3.5s_ease-in-out_infinite]" />

                <span
                  className="pointer-events-none absolute right-0 top-[-35%] z-20 h-[35%] w-[2px] rounded-full bg-gradient-to-b from-[#FF4DDE] via-[#E1B270] to-[#00C2FF] animate-[testimonialBorderRight_3.5s_ease-in-out_infinite]"
                  style={{ animationDelay: "0.8s" }}
                />

                <span
                  className="pointer-events-none absolute bottom-0 right-[-35%] z-20 h-[2px] w-[35%] rounded-full bg-gradient-to-r from-[#00C2FF] via-[#7B2CBF] to-[#FF4DDE] animate-[testimonialBorderBottom_3.5s_ease-in-out_infinite]"
                  style={{ animationDelay: "1.6s" }}
                />

                <span
                  className="pointer-events-none absolute bottom-[-35%] left-0 z-20 h-[35%] w-[2px] rounded-full bg-gradient-to-b from-[#E1B270] via-[#FF4DDE] to-[#7B2CBF] animate-[testimonialBorderLeft_3.5s_ease-in-out_infinite]"
                  style={{ animationDelay: "2.4s" }}
                />

                <p className="relative z-10 text-[8px] leading-[1.6] text-gray-600 sm:text-[10px] sm:leading-5 lg:text-sm lg:leading-7">
                  “{t.quote}”
                </p>

                <div className="relative z-10 mt-3 border-t border-gray-100 pt-2.5 sm:mt-4 sm:pt-3 lg:mt-6 lg:pt-5">
                  <p className="truncate text-[8px] font-semibold text-[#3D007A] sm:text-[10px] lg:text-sm">
                    {t.name}
                  </p>

                  <p className="mt-0.5 truncate text-[7px] text-gray-500 sm:text-[9px] lg:text-xs">
                    {t.role}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes testimonialBorderTop {
            0% {
              left: -35%;
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            50% {
              left: 100%;
              opacity: 1;
            }

            75% {
              opacity: 0;
            }

            100% {
              left: 100%;
              opacity: 0;
            }
          }

          @keyframes testimonialBorderRight {
            0% {
              top: -35%;
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            50% {
              top: 100%;
              opacity: 1;
            }

            75% {
              opacity: 0;
            }

            100% {
              top: 100%;
              opacity: 0;
            }
          }

          @keyframes testimonialBorderBottom {
            0% {
              right: -35%;
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            50% {
              right: 100%;
              opacity: 1;
            }

            75% {
              opacity: 0;
            }

            100% {
              right: 100%;
              opacity: 0;
            }
          }

          @keyframes testimonialBorderLeft {
            0% {
              bottom: -35%;
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            50% {
              bottom: 100%;
              opacity: 1;
            }

            75% {
              opacity: 0;
            }

            100% {
              bottom: 100%;
              opacity: 0;
            }
          }
        `}</style>
      </section>


      {/* =========================================================
          FIND US / MAP
      ========================================================= */}
      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-20">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[3%] top-[15%] h-48 w-48 rounded-full bg-[#7B2CBF]/10 blur-3xl" />
          <div className="absolute bottom-[10%] right-[3%] h-48 w-48 rounded-full bg-[#FF4DDE]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-1 items-center gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 xl:px-10">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <span className="text-[9px] font-semibold tracking-[0.2em] text-[#3D007A] sm:text-[10px] lg:text-xs">
              FIND US
            </span>

            <h2
              className="mt-2 text-3xl font-normal leading-[1.15] text-[#3D007A] sm:text-4xl lg:mt-3 lg:text-5xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Make your way to Ascent.
            </h2>

            <div className="mt-3 h-[2px] w-10 bg-gradient-to-r from-[#3D007A] to-[#FF4DDE] sm:mt-4 sm:w-12 lg:mt-5 lg:w-14" />

            <p className="mt-4 max-w-[500px] text-xs leading-6 text-gray-600 sm:text-sm sm:leading-7 lg:mt-6 lg:text-base">
              Find us in Coimbatore and visit our peaceful space for yoga,
              mindful movement and wellness practices.
            </p>

            <div className="group relative mt-5 overflow-hidden rounded-xl bg-[#E8ECF1]/60 p-4 sm:mt-6 sm:rounded-2xl sm:p-5 lg:mt-7">

              <div className="pointer-events-none absolute inset-0 rounded-xl border border-[#7B2CBF]/15 sm:rounded-2xl" />

              <span className="pointer-events-none absolute left-[-35%] top-0 z-20 h-[2px] w-[35%] rounded-full bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] animate-[mapCardTop_3.5s_ease-in-out_infinite]" />

              <span
                className="pointer-events-none absolute right-0 top-[-35%] z-20 h-[35%] w-[2px] rounded-full bg-gradient-to-b from-[#FF4DDE] via-[#E1B270] to-[#00C2FF] animate-[mapCardRight_3.5s_ease-in-out_infinite]"
                style={{ animationDelay: "0.8s" }}
              />

              <span
                className="pointer-events-none absolute bottom-0 right-[-35%] z-20 h-[2px] w-[35%] rounded-full bg-gradient-to-r from-[#00C2FF] via-[#7B2CBF] to-[#FF4DDE] animate-[mapCardBottom_3.5s_ease-in-out_infinite]"
                style={{ animationDelay: "1.6s" }}
              />

              <span
                className="pointer-events-none absolute bottom-[-35%] left-0 z-20 h-[35%] w-[2px] rounded-full bg-gradient-to-b from-[#E1B270] via-[#FF4DDE] to-[#7B2CBF] animate-[mapCardLeft_3.5s_ease-in-out_infinite]"
                style={{ animationDelay: "2.4s" }}
              />

              <div className="relative z-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3D007A] sm:text-xs">
                  Ascent Yoga Centre
                </p>

                <p className="mt-1.5 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                  Your Centre Address
                  <br />
                  Coimbatore, Tamil Nadu
                </p>

                <div className="mt-4 flex items-center gap-2 border-t border-[#3D007A]/10 pt-3">
                  <span className="relative h-2 w-2 rounded-full bg-[#3D007A] shadow-[0_0_0_5px_rgba(61,0,122,0.08)]">
                    <span className="absolute inset-0 rounded-full bg-[#FF4DDE] animate-ping opacity-40" />
                  </span>

                  <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-gray-500 sm:text-[10px]">
                    Visit us in Coimbatore
                  </span>
                </div>
              </div>
            </div>
          </motion.div>


          {/* GOOGLE MAP */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="
              group
              relative
              min-h-[280px]
              min-w-0
              overflow-hidden
              rounded-[18px]
              bg-[#E8ECF1]
              shadow-[0_15px_45px_rgba(61,0,122,0.08)]
              sm:min-h-[340px]
              sm:rounded-[22px]
              lg:min-h-[390px]
              lg:rounded-[24px]
            "
          >

            <div className="pointer-events-none absolute inset-0 z-30 rounded-[18px] border border-[#7B2CBF]/20 sm:rounded-[22px] lg:rounded-[24px]" />

            <span className="pointer-events-none absolute left-[-30%] top-0 z-40 h-[3px] w-[30%] rounded-full bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] shadow-[0_0_12px_rgba(255,77,222,0.45)] animate-[mapBorderTop_4s_ease-in-out_infinite]" />

            <span
              className="pointer-events-none absolute right-0 top-[-30%] z-40 h-[30%] w-[3px] rounded-full bg-gradient-to-b from-[#FF4DDE] via-[#E1B270] to-[#00C2FF] shadow-[0_0_12px_rgba(0,194,255,0.45)] animate-[mapBorderRight_4s_ease-in-out_infinite]"
              style={{ animationDelay: "1s" }}
            />

            <span
              className="pointer-events-none absolute bottom-0 right-[-30%] z-40 h-[3px] w-[30%] rounded-full bg-gradient-to-r from-[#00C2FF] via-[#7B2CBF] to-[#FF4DDE] shadow-[0_0_12px_rgba(123,44,191,0.45)] animate-[mapBorderBottom_4s_ease-in-out_infinite]"
              style={{ animationDelay: "2s" }}
            />

            <span
              className="pointer-events-none absolute bottom-[-30%] left-0 z-40 h-[30%] w-[3px] rounded-full bg-gradient-to-b from-[#E1B270] via-[#FF4DDE] to-[#7B2CBF] shadow-[0_0_12px_rgba(255,77,222,0.45)] animate-[mapBorderLeft_4s_ease-in-out_infinite]"
              style={{ animationDelay: "3s" }}
            />

            <iframe
              title="Ascent Yoga Centre Location"
              src="https://www.google.com/maps?q=Ascent%20Yoga%20Centre%2C%20Coimbatore%2C%20Tamil%20Nadu&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#3D007A]/10 via-transparent to-white/5" />

            <div className="pointer-events-none absolute bottom-3 left-3 z-20 rounded-lg border border-white/50 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-4 sm:py-2.5">
              <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#3D007A] sm:text-[10px]">
                Ascent Yoga Centre
              </p>

              <p className="mt-0.5 text-[8px] text-gray-500 sm:text-[10px]">
                Coimbatore, Tamil Nadu
              </p>
            </div>

          </motion.div>

        </div>

        <style>{`
          @keyframes mapCardTop {
            0% { left: -35%; opacity: 0; }
            10% { opacity: 1; }
            50% { left: 100%; opacity: 1; }
            75% { opacity: 0; }
            100% { left: 100%; opacity: 0; }
          }

          @keyframes mapCardRight {
            0% { top: -35%; opacity: 0; }
            10% { opacity: 1; }
            50% { top: 100%; opacity: 1; }
            75% { opacity: 0; }
            100% { top: 100%; opacity: 0; }
          }

          @keyframes mapCardBottom {
            0% { right: -35%; opacity: 0; }
            10% { opacity: 1; }
            50% { right: 100%; opacity: 1; }
            75% { opacity: 0; }
            100% { right: 100%; opacity: 0; }
          }

          @keyframes mapCardLeft {
            0% { bottom: -35%; opacity: 0; }
            10% { opacity: 1; }
            50% { bottom: 100%; opacity: 1; }
            75% { opacity: 0; }
            100% { bottom: 100%; opacity: 0; }
          }

          @keyframes mapBorderTop {
            0% { left: -30%; opacity: 0; }
            10% { opacity: 1; }
            50% { left: 100%; opacity: 1; }
            75% { opacity: 0; }
            100% { left: 100%; opacity: 0; }
          }

          @keyframes mapBorderRight {
            0% { top: -30%; opacity: 0; }
            10% { opacity: 1; }
            50% { top: 100%; opacity: 1; }
            75% { opacity: 0; }
            100% { top: 100%; opacity: 0; }
          }

          @keyframes mapBorderBottom {
            0% { right: -30%; opacity: 0; }
            10% { opacity: 1; }
            50% { right: 100%; opacity: 1; }
            75% { opacity: 0; }
            100% { right: 100%; opacity: 0; }
          }

          @keyframes mapBorderLeft {
            0% { bottom: -30%; opacity: 0; }
            10% { opacity: 1; }
            50% { bottom: 100%; opacity: 1; }
            75% { opacity: 0; }
            100% { bottom: 100%; opacity: 0; }
          }
        `}</style>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative w-full overflow-hidden bg-[#3D007A] px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#21003f] via-[#3D007A] to-[#21003f]" />

          <div className="absolute left-[8%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#7B2CBF]/20 blur-3xl sm:h-48 sm:w-48" />

          <div className="absolute right-[8%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#FF4DDE]/20 blur-3xl sm:h-48 sm:w-48" />

          <div className="absolute bottom-0 left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-[#E1B270]/10 blur-3xl sm:h-48 sm:w-56" />

          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B2CBF]/20 blur-3xl sm:h-72 sm:w-72" />
        </div>

        {/* Animated border */}
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 border border-white/10" />

          <span className="absolute left-0 top-0 h-[2px] w-[28%] bg-gradient-to-r from-[#7B2CBF] via-[#FF4DDE] to-[#E1B270] animate-[ctaBorderTop_4s_linear_infinite]" />

          <span className="absolute right-0 top-0 h-[28%] w-[2px] bg-gradient-to-b from-[#FF4DDE] via-[#E1B270] to-[#00C2FF] animate-[ctaBorderRight_4s_linear_infinite]" />

          <span className="absolute bottom-0 right-0 h-[2px] w-[28%] bg-gradient-to-l from-[#00C2FF] via-[#7B2CBF] to-[#FF4DDE] animate-[ctaBorderBottom_4s_linear_infinite]" />

          <span className="absolute bottom-0 left-0 h-[28%] w-[2px] bg-gradient-to-t from-[#E1B270] via-[#FF4DDE] to-[#7B2CBF] animate-[ctaBorderLeft_4s_linear_infinite]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-[850px] text-center"
        >

          <span className="block text-[9px] font-semibold tracking-[0.22em] text-white sm:text-[10px] lg:text-xs lg:tracking-[0.3em]">
            BEGIN YOUR PRACTICE
          </span>

          <h2
            className="mt-2 block text-2xl font-normal leading-[1.2] text-white sm:text-3xl lg:mt-3 lg:text-5xl"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Your first step can start today.
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-10 bg-gradient-to-r from-[#FF4DDE] via-white to-[#E1B270] sm:mt-4 sm:w-14" />

          <p className="mx-auto mt-4 block max-w-[600px] text-[10px] leading-[1.7] text-white/90 sm:mt-5 sm:text-xs sm:leading-6 lg:mt-5 lg:text-base lg:leading-7">
            Explore our programs or reach out to the Ascent team to find the
            right practice for you.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:justify-center sm:gap-3 lg:mt-8">

            <Link
  to="/explore"
  className="
    group/explore
    relative
    z-[100]
    flex
    min-h-[40px]
    items-center
    justify-center
    overflow-hidden
    rounded-full
    border
    border-white
    bg-white
    px-3
    py-2.5
    text-[9px]
    font-semibold
    text-[#3D007A]
    shadow-[0_8px_25px_rgba(0,0,0,0.12)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-[#E1B270]
    hover:text-[#21003f]
    hover:shadow-[0_12px_30px_rgba(225,178,112,0.35)]
    sm:min-h-[44px]
    sm:px-5
    sm:py-3
    sm:text-[10px]
    lg:min-h-[48px]
    lg:px-7
    lg:py-3.5
    lg:text-sm
  "
>
  {/* Animated shine */}
  <span
    className="
      pointer-events-none
      absolute
      inset-y-0
      left-[-70%]
      z-0
      w-[45%]
      -skew-x-12
      bg-gradient-to-r
      from-transparent
      via-white/70
      to-transparent
      opacity-0
      transition-all
      duration-700
      group-hover/explore:left-[130%]
      group-hover/explore:opacity-100
    "
  />

  {/* Visible text */}
  <span
    className="
      relative
      z-20
      whitespace-nowrap
      font-semibold
      text-[#3D007A]
      transition-colors
      duration-300
      group-hover/explore:text-[#21003f]
    "
  >
    Explore Programs
  </span>
</Link>

            <a
              href="https://wa.me/919000000000?text=Hello%20Ascent%20Yoga%20Centre%2C%20I%20would%20like%20to%20know%20about%20your%20classes."
              target="_blank"
              rel="noreferrer"
              className="
                flex
                min-h-[40px]
                items-center
                justify-center
                rounded-full
                border
                border-white/70
                bg-white/5
                px-3
                py-2.5
                text-[9px]
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white/15
                sm:min-h-[44px]
                sm:px-5
                sm:py-3
                sm:text-[10px]
                lg:min-h-[48px]
                lg:px-7
                lg:py-3.5
                lg:text-sm
              "
            >
              WhatsApp Us
            </a>

          </div>

          <p className="mt-6 block text-[7px] font-semibold tracking-[0.25em] text-white/70 sm:mt-7 sm:text-[8px]">
            MOVE · BREATHE · CONNECT
          </p>

        </motion.div>

        <style>{`
          @keyframes ctaBorderTop {
            0% {
              left: -30%;
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            50% {
              left: 100%;
              opacity: 1;
            }

            75% {
              opacity: 0;
            }

            100% {
              left: 100%;
              opacity: 0;
            }
          }

          @keyframes ctaBorderRight {
            0% {
              top: -30%;
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            50% {
              top: 100%;
              opacity: 1;
            }

            75% {
              opacity: 0;
            }

            100% {
              top: 100%;
              opacity: 0;
            }
          }

          @keyframes ctaBorderBottom {
            0% {
              right: -30%;
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            50% {
              right: 100%;
              opacity: 1;
            }

            75% {
              opacity: 0;
            }

            100% {
              right: 100%;
              opacity: 0;
            }
          }

          @keyframes ctaBorderLeft {
            0% {
              bottom: -30%;
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            50% {
              bottom: 100%;
              opacity: 1;
            }

            75% {
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