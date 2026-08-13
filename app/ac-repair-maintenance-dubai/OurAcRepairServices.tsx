'use client'

import Image from 'next/image';
import React, { useState } from 'react'

export default function OurAcRepairServices() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-urbanist">
                            OUR AC REPAIR SERVICES
                        </h2>
                        <div className="border-b-2 border-cyan-100 w-full pt-2"></div>
                    </div>

                    <div className="text-gray-700 space-y-4 leading-relaxed text-sm md:text-base leading-5">
                        <h3 className="text-xl font-bold text-gray-900 font-urbanist">
                            FCU Repair
                        </h3>

                        <p>Diagnosis and repair of residential fan coil units, including motors, blowers, valves, actuators, controls, drainage components and other replaceable parts.
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 font-urbanist">
                            Thermostat & Controls
                        </h3>

                        <p>Diagnosis of thermostat, actuator, valve and control-related problems affecting cooling or FCU operation.</p>
                        <h3 className="text-xl font-bold text-gray-900 font-urbanist">
                            AC Water Leaks
                        </h3>
                        <p>Diagnosis of AC water leaks including drain lines, drain trays, insulation, condensation and other FCU-related causes.</p>

                        <h3 className="text-xl font-bold text-gray-900 font-urbanist">
                            FCU Replacement
                        </h3>

                        <p>Where an FCU is beyond economical repair, Enviroclean can provide a quotation for supply and replacement of the complete fan coil unit.</p>
                        <p>Replacement works can include removal of the existing FCU, installation of the replacement unit, required connections and full testing and recommissioning.</p>

                        <h3 className="text-xl font-bold text-gray-900 font-urbanist">
                            AC Component Replacement
                        </h3>
                        <p>Supply and replacement of faulty AC components following diagnosis.</p>
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="bg-neutral-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-neutral-900 transition-colors shadow-xs cursor-pointer"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>

                <div className="w-full h-full relative aspect-square rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/images/coil-cleaning-2.webp"
                        alt="EnviroClean technician working on AC unit"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}