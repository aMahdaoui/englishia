export const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.12 * index,
        },
    }),
};
export const SlideDownAnimationVariants = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: (index = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.08 * index,
        },
    }),
};

export const slideRightAnimationVariants = {
    initial: {
        opacity: 0,
        x: -150,
    },
    animate: (index = 1) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.1 * index,
        },
    }),
};
