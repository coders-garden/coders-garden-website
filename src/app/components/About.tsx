import React from 'react';

const About: React.FC = () => {
    return (
        <section>
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">About Us</span></h2>
                <p className="mt-4">We are a fantastic team doing great things.</p>
            </div>
        </section>
    );
};

export default About;
