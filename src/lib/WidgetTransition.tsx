import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WidgetAOS = ({ children, animation = "fade-up" }) => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div
            data-aos={animation}
        >
            {children}
        </div>
    );
};

export default WidgetAOS;
