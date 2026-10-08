import { motion } from "framer-motion";

export default function FloatingContact() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
                fixed
                bottom-5
                right-4
                z-[100]
                sm:bottom-6
                sm:right-6
            "
        >
            <a
                href="tel:+919876543210"
                aria-label="Call Ascent Yoga Centre"
                className="group relative block"
            >

                {/* =================================================
                    OUTER REALISTIC GLOW
                ================================================= */}
                <span
                    className="
                        pointer-events-none
                        absolute
                        -inset-3
                        rounded-full
                        bg-gradient-to-r
                        from-[#7B2CBF]
                        via-[#FF4DDE]
                        to-[#E1B270]
                        opacity-30
                        blur-xl
                        transition-all
                        duration-500
                        group-hover:opacity-70
                        group-hover:blur-2xl
                    "
                />

                {/* =================================================
                    PULSE RING
                ================================================= */}
                <span
                    className="
                        pointer-events-none
                        absolute
                        -inset-2
                        rounded-full
                        border
                        border-[#FF4DDE]/40
                        animate-[contactPulse_2.4s_ease-out_infinite]
                    "
                />

                {/* =================================================
                    MAIN BUTTON
                ================================================= */}
                <span
                    className="
                        relative
                        flex
                        h-12
                        items-center
                        gap-2
                        overflow-hidden
                        rounded-full
                        border
                        border-white/20
                        bg-[#21003f]
                        pl-1.5
                        pr-4
                        shadow-[0_12px_35px_rgba(33,0,63,0.40)]
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:border-[#FF4DDE]/50
                        group-hover:shadow-[0_18px_50px_rgba(123,44,191,0.50)]
                        sm:h-14
                        sm:gap-2.5
                        sm:pl-2
                        sm:pr-5
                    "
                >

                    {/* =================================================
                        ANIMATED SHINE
                    ================================================= */}
                    <span
                        className="
                            pointer-events-none
                            absolute
                            inset-y-0
                            -left-[80%]
                            z-0
                            w-1/2
                            skew-x-[-20deg]
                            bg-gradient-to-r
                            from-transparent
                            via-white/25
                            to-transparent
                            transition-all
                            duration-700
                            group-hover:left-[125%]
                        "
                    />

                    {/* =================================================
                        REALISTIC IMAGE
                    ================================================= */}
                    <span
                        className="
                            relative
                            z-10
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-full
                            border
                            border-white/30
                            bg-white
                            shadow-[0_0_20px_rgba(255,77,222,0.35)]
                            transition-all
                            duration-500
                            group-hover:scale-110
                            sm:h-11
                            sm:w-11
                        "
                    >
                        <img
                            src="/images/call-person.png"
                            alt="Call Ascent Yoga Centre"
                            className="
                                h-full
                                w-full
                                object-cover
                                object-center
                                transition-transform
                                duration-700
                                group-hover:scale-110
                            "
                        />

                        {/* Image highlight */}
                        <span
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                rounded-full
                                bg-gradient-to-tr
                                from-[#7B2CBF]/20
                                via-transparent
                                to-white/20
                            "
                        />
                    </span>

                    {/* =================================================
                        CALL TEXT
                    ================================================= */}
                    <span
                        className="
                            relative
                            z-10
                            whitespace-nowrap
                            text-[8px]
                            font-bold
                            tracking-[0.12em]
                            text-white
                            transition-colors
                            duration-300
                            sm:text-[10px]
                            sm:tracking-[0.15em]
                        "
                    >
                        CALL US
                    </span>

                </span>
            </a>

            <style>{`
                @keyframes contactPulse {
                    0% {
                        transform: scale(0.92);
                        opacity: 0.7;
                    }

                    70% {
                        transform: scale(1.12);
                        opacity: 0;
                    }

                    100% {
                        transform: scale(1.12);
                        opacity: 0;
                    }
                }
            `}</style>
        </motion.div>
    );
}