
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["/", "Home"],
    ["/about", "About Us"],
    ["/explore", "Explore Ascent"],
    ["/gallery", "Gallery"],
    ["/contact", "Contact"],
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-2.5 pt-2.5 sm:px-4 sm:pt-3 lg:px-5">
      <div className="mx-auto w-full max-w-[1380px] animate-[navbarEnter_0.8s_ease-out]">

        {/* NAVBAR */}
        <div
          className="
            group relative overflow-hidden rounded-2xl
            border border-white/70
            bg-white/[0.94]
            shadow-[0_12px_45px_rgba(61,0,122,0.10)]
            backdrop-blur-2xl
            transition-all duration-500
            hover:shadow-[0_16px_55px_rgba(61,0,122,0.15)]
          "
        >
          {/* Animated top glow */}
          <div
            className="
              pointer-events-none absolute left-1/2 top-0
              h-[2px] w-1/2 -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#3D007A]
              to-transparent
              opacity-70
              blur-[1px]
              animate-[topGlow_4s_ease-in-out_infinite]
            "
          />

          {/* Moving bottom light */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
            <div
              className="
                h-full w-[25%]
                bg-gradient-to-r
                from-transparent
                via-[#3D007A]
                to-transparent
                animate-[navLine_5s_ease-in-out_infinite]
              "
            />
          </div>

          {/* Subtle moving background glow */}
          <div
            className="
              pointer-events-none absolute -right-20 -top-24
              h-48 w-48 rounded-full
              bg-[#3D007A]/[0.045]
              blur-3xl
              transition-all duration-1000
              group-hover:scale-150
              group-hover:bg-[#3D007A]/[0.07]
            "
          />

          <div
            className="
              flex min-h-[68px] items-center justify-between
              px-3.5
              sm:px-5
              md:px-6
              lg:px-7
              xl:px-8
            "
          >

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="
                group/logo relative flex shrink-0 items-center gap-2.5
                outline-none
              "
            >
              {/* Logo glow */}
              <div
                className="
                  absolute -inset-2 rounded-full
                  bg-[#3D007A]/0
                  blur-xl
                  transition-all duration-700
                  group-hover/logo:bg-[#3D007A]/10
                "
              />

              <div className="relative flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
                {/* Orbit ring */}
                <div
                  className="
                    absolute inset-0 rounded-full
                    border border-[#3D007A]/0
                    transition-all duration-700
                    group-hover/logo:rotate-180
                    group-hover/logo:border-[#3D007A]/15
                    group-hover/logo:scale-110
                  "
                />

                <div
                  className="
                    absolute inset-[3px] rounded-full
                    bg-[#3D007A]/[0.035]
                    transition-all duration-500
                    group-hover/logo:scale-110
                    group-hover/logo:bg-[#3D007A]/[0.07]
                  "
                />

                <img
                  src="/images/logo.png"
                  alt="Ascent Yoga Centre"
                  className="
                    relative z-10 h-9 w-9 object-contain
                    transition-all duration-700
                    group-hover/logo:scale-110
                    group-hover/logo:-rotate-3
                    sm:h-10 sm:w-10
                  "
                />
              </div>

              {/* Brand */}
              <span className="relative flex flex-col leading-none">
                <b
                  className="
                    text-[17px] font-bold tracking-[0.14em]
                    text-[#3D007A]
                    transition-all duration-300
                    group-hover/logo:tracking-[0.18em]
                    sm:text-[19px]
                  "
                >
                  ASCENT
                </b>

                <small
                  className="
                    mt-1 text-[7px] font-medium
                    tracking-[0.30em] text-gray-500
                    transition-colors duration-300
                    group-hover/logo:text-[#3D007A]/70
                    sm:text-[8px]
                  "
                >
                  YOGA CENTRE
                </small>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              {links.map(([to, label], index) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  style={{ animationDelay: `${index * 70}ms` }}
                  className={({ isActive }) =>
                    `
                    group/nav relative
                    px-3 py-5
                    text-[13px] font-medium
                    transition-all duration-300
                    xl:px-3.5
                    ${
                      isActive
                        ? "text-[#3D007A]"
                        : "text-gray-600 hover:text-[#3D007A]"
                    }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Hover background */}
                      <span
                        className="
                          absolute inset-x-1 inset-y-2
                          -z-0 rounded-xl
                          bg-[#3D007A]/0
                          transition-all duration-300
                          group-hover/nav:bg-[#3D007A]/[0.045]
                        "
                      />

                      <span
                        className="
                          relative z-10
                          transition-all duration-300
                          group-hover/nav:-translate-y-[1px]
                        "
                      >
                        {label}
                      </span>

                      {/* Active line */}
                      <span
                        className={`
                          absolute bottom-[6px] left-1/2
                          h-[2px] -translate-x-1/2
                          rounded-full bg-[#3D007A]
                          transition-all duration-500
                          ${
                            isActive
                              ? "w-[45%] opacity-100"
                              : "w-0 opacity-0 group-hover/nav:w-[45%] group-hover/nav:opacity-100"
                          }
                        `}
                      />

                      {/* Active glow */}
                      <span
                        className={`
                          absolute bottom-[5px] left-1/2
                          h-[5px] -translate-x-1/2
                          rounded-full bg-[#3D007A]/25
                          blur-[3px]
                          transition-all duration-500
                          ${
                            isActive
                              ? "w-5 opacity-100"
                              : "w-0 opacity-0"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              ))}

              {/* BOOK BUTTON */}
     <Link
  to="/contact#form"
  onClick={() => setOpen(false)}
  className="
    group/book relative z-10 ml-2
    flex items-center justify-center
    overflow-hidden rounded-full
    bg-[#3D007A]
    px-5 py-2.5
    text-[12px] font-semibold text-white
    shadow-[0_6px_20px_rgba(61,0,122,0.22)]
    transition-all duration-300
    hover:-translate-y-0.5
    hover:scale-[1.025]
    hover:bg-[#2d005b]
    hover:shadow-[0_10px_28px_rgba(61,0,122,0.30)]
    active:scale-95
  "
>
  <span
    className="
      pointer-events-none
      absolute inset-y-0 -left-[70%]
      z-0 w-1/2
      skew-x-[-20deg]
      bg-white/20
      transition-all duration-700
      group-hover/book:left-[120%]
    "
  />

  <span
    className="
      relative z-20
      whitespace-nowrap
      text-white
      transition-transform duration-300
      group-hover/book:scale-[1.02]
    "
  >
    Book a Class
  </span>
</Link>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="
                group/menu relative flex h-10 w-10
                flex-col items-center justify-center
                gap-[5px] rounded-xl
                border border-[#E8ECF1]
                bg-[#E8ECF1]/40
                transition-all duration-300
                hover:border-[#3D007A]/20
                hover:bg-[#3D007A]/[0.06]
                active:scale-90
                lg:hidden
              "
            >
              <span
                className={`
                  block h-[2px] w-5 rounded-full
                  bg-[#3D007A]
                  transition-all duration-300
                  ${
                    open
                      ? "translate-y-[7px] rotate-45"
                      : "group-hover/menu:w-6"
                  }
                `}
              />

              <span
                className={`
                  block h-[2px] w-5 rounded-full
                  bg-[#3D007A]
                  transition-all duration-300
                  ${
                    open
                      ? "scale-0 opacity-0"
                      : "group-hover/menu:-translate-x-0.5"
                  }
                `}
              />

              <span
                className={`
                  block h-[2px] w-5 rounded-full
                  bg-[#3D007A]
                  transition-all duration-300
                  ${
                    open
                      ? "-translate-y-[7px] -rotate-45"
                      : "group-hover/menu:w-4"
                  }
                `}
              />
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`
              overflow-hidden
              border-t border-[#E8ECF1]
              bg-white/[0.97]
              transition-all duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              lg:hidden
              ${
                open
                  ? "max-h-[470px] opacity-100"
                  : "max-h-0 border-transparent opacity-0"
              }
            `}
          >
            <nav className="px-4 pb-4 pt-2 sm:px-5">
              {links.map(([to, label], index) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    group/mobile relative flex items-center
                    border-b border-[#E8ECF1]
                    py-3.5 text-sm font-medium
                    transition-all duration-300
                    ${
                      isActive
                        ? "pl-2 text-[#3D007A]"
                        : "text-gray-600 hover:pl-2 hover:text-[#3D007A]"
                    }
                    `
                  }
                  style={{
                    transitionDelay: open ? `${index * 45}ms` : "0ms",
                  }}
                >
                  {({ isActive }) => (
                    <>
                      {/* Active dot */}
                      <span
                        className={`
                          mr-3 h-1.5 w-1.5 rounded-full
                          bg-[#3D007A]
                          transition-all duration-300
                          ${
                            isActive
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0"
                          }
                        `}
                      />

                      <span className="transition-transform duration-300 group-hover/mobile:translate-x-1">
                        {label}
                      </span>

                      {/* Arrow */}
                      <span
                        className="
                          ml-auto translate-x-2 opacity-0
                          transition-all duration-300
                          group-hover/mobile:translate-x-0
                          group-hover/mobile:opacity-100
                        "
                      >
                        →
                      </span>
                    </>
                  )}
                </NavLink>
              ))}

              {/* Mobile Book Button */}
<Link
  to="/contact"
  onClick={() => setOpen(false)}
  className="
    group/mobile-book relative mt-4 block
    overflow-hidden rounded-full
    bg-white
    border border-[#3D007A]/20
    px-6 py-3.5
    text-center text-sm font-semibold
    text-[#3D007A]
    shadow-[0_6px_20px_rgba(61,0,122,0.12)]
    transition-all duration-300
    hover:bg-[#F7F2FF]
    hover:border-[#3D007A]/30
    hover:shadow-[0_8px_25px_rgba(61,0,122,0.18)]
    active:scale-[0.98]
  "
>
  <span
    className="
      absolute inset-0 -translate-x-full
      bg-[#3D007A]/[0.06]
      transition-transform duration-500
      group-hover/mobile-book:translate-x-0
    "
  />

  <span className="relative z-10 text-[#3D007A]">
    Book a Class
  </span>
</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* NAVBAR ANIMATIONS */}
      <style>
        {`
          @keyframes navbarEnter {
            0% {
              opacity: 0;
              transform: translateY(-22px) scale(0.98);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes navLine {
            0% {
              transform: translateX(-160%);
              opacity: 0;
            }

            15% {
              opacity: 1;
            }

            50% {
              transform: translateX(450%);
              opacity: 1;
            }

            85% {
              opacity: 1;
            }

            100% {
              transform: translateX(700%);
              opacity: 0;
            }
          }

          @keyframes topGlow {
            0%,
            100% {
              width: 25%;
              opacity: 0.2;
            }

            50% {
              width: 55%;
              opacity: 0.8;
            }
          }
        `}
      </style>
    </header>
  );
}
