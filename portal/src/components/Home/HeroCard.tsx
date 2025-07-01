import React from 'react';

interface HeroCardProps {
    title?: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    onCtaClick?: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({
    title = "Build Your Resume Effortlessly",
    subtitle = "Resume Builder",
    description = "Create a professional resume in minutes with our easy-to-use builder. Stand out and land your dream job!",
    ctaText = "Get Started",
    onCtaClick,
}) => (
    <div className="max-w-md mx-auto my-8 p-8 rounded-2xl shadow-lg bg-white text-center">
        <h2 className="mb-2 text-3xl font-bold">{title}</h2>
        <h3 className="mb-4 text-blue-700 font-medium">{subtitle}</h3>
        <p className="mb-8 text-gray-700">{description}</p>
        <button
            className="px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold text-base hover:bg-blue-800 transition-colors"
            onClick={onCtaClick}
        >
            {ctaText}
        </button>
    </div>
);

export default HeroCard;
