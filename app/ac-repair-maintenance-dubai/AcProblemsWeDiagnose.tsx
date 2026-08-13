import Link from 'next/link';
import React from 'react';

export default function AcProblemsWeDiagnose() {
    const column1Items = [
        "⁠AC not cooling",
        "⁠Weak airflow",
        "⁠AC leaking water",
        "⁠Unusual AC noises",
        "⁠FCU not operating",
        "⁠⁠Blower motor faults",
        "⁠Fan and motor problems",
    ];

    const column2Items = [
        "⁠Thermostat faults",
        "⁠Control valve and actuator problems",
        "⁠Blocked strainers",
        "⁠Drainage problems",
        "⁠Evaporator coil issues",
        "⁠Electrical / control faults",
        "⁠Ageing or damaged FCUs",
    ];

    return (
        <section className="w-full bg-white py-16 px-6 md:px-0">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="w-full text-center mb-12 relative pb-4 border-b border-[#aedcd7]">
                    <span className="text-primary text-sm md:text-base font-urbanist font-semibold tracking-wide mb-2 block">
                        Something Wrong With Your AC?
                    </span>
                    <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-zinc-900 tracking-wide">
                        AC PROBLEMS WE DIAGNOSE
                    </h2>
                    <span className="text-primary text-sm md:text-base font-urbanist font-semibold tracking-wide my-2 block">
                        Our HVAC technicians can investigate:
                    </span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-5 w-full max-w-5xl px-4 md:px-8 mb-12">
                    <div className="flex flex-col gap-5">
                        {column1Items.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="flex-shrink-0 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.14-.1l4.14-5.5a.75.75 0 0 0-.1-.1l-.1-.12Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-urbanist font-medium text-zinc-900 tracking-wide">
                                    {item}
                                </h4>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-5">
                        {column2Items.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="flex-shrink-0 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.14-.1l4.14-5.5a.75.75 0 0 0-.1-.1l-.1-.12Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-urbanist font-medium text-zinc-900 tracking-wide">
                                    {item}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
                <Link href={'tel:+971800368476'} className="bg-[#333333] hover:bg-zinc-800 text-white font-urbanist font-medium py-3.5 px-8 rounded-xl text-lg transition-colors duration-200 tracking-wide shadow-sm">
                    Call Now For Quote
                </Link>
            </div>
        </section>
    );
}