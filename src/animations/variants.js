export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for professional feel
        },
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export const cardHover = {
    hover: {
        scale: 1.04,
        y: -5,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2), 0px 0px 15px rgba(255, 255, 255, 0.05)",
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export const pageTransition = {
    initial: { opacity: 0, x: -10 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        x: 10,
        transition: {
            duration: 0.4,
            ease: "easeIn"
        }
    },
};

export const viewportConfig = {
    once: true,
    amount: 0.2,
};
