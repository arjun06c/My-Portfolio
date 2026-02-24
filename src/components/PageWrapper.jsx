import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';

const PageWrapper = ({ children, className }) => {
    return (
        <motion.div
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
