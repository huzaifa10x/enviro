'use client'

import React, { useState } from "react";
import Image from "next/image";

export default function ContactForm({ onlyForms = false }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        service: "",
        message: ""
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, msg: "" });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await res.json();

            if (res.ok) {
                setStatus({
                    type: 'success',
                    msg: result?.data?.message || "Thank you! Your inquiry has been submitted successfully."
                });
                setFormData({ name: "", email: "", phone: "", location: "", service: "", message: "" });
            } else {
                setStatus({ type: 'error', msg: result.error || "Failed to submit inquiry. Please try again." });
            }
        } catch (error) {
            setStatus({ type: 'error', msg: "Network error. Please check your internet connection." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className={`bg-secondary rounded-3xl overflow-hidden shadow-lg ${onlyForms ? '' : 'grid grid-cols-1 lg:grid-cols-2'}`}>
                {onlyForms ?
                    "" : <div className="relative min-h-[350px] lg:min-h-full">
                        <Image
                            src="/images/contact-image.jpg"
                            alt="Technician working"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                }

                <div className="p-8 md:p-12 bg-[#DBF9F0]" >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">We Love To Hear From You</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="p-4 rounded-lg border border-gray-200 w-full outline-none bg-[#c9f1e0] placeholder-gray-600 text-gray-800 focus:border-green-500"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="p-4 rounded-lg border border-gray-200 w-full outline-none bg-[#c9f1e0] placeholder-gray-600 text-gray-800 focus:border-green-500"
                            />
                        </div>

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="p-4 rounded-lg border border-gray-200 w-full outline-none bg-[#c9f1e0] placeholder-gray-600 text-gray-800 focus:border-green-500"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="p-4 rounded-lg border border-gray-200 w-full outline-none bg-[#c9f1e0] text-gray-700 focus:border-green-500"
                            >
                                <option value="">Location</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Arabian Ranches">Arabian Ranches</option>
                                <option value="Dubai Marina">Dubai Marina</option>
                                <option value="Palm Jumeirah">Palm Jumeirah</option>
                                <option value="Emirates Hills">Emirates Hills</option>
                                <option value="Jumeriah Park">Jumeriah Park</option>
                            </select>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="p-4 rounded-lg border border-gray-200 w-full outline-none bg-[#c9f1e0] text-gray-700 focus:border-green-500"
                            >
                                <option value="">Service You Require</option>
                                <option value="AC Cleaning">AC Cleaning</option>
                                <option value="Duct Cleaning">Duct Cleaning</option>
                                <option value="Coil Cleaning">Coil Cleaning</option>
                                <option value="AC Sanitisation">AC Sanitisation</option>
                            </select>
                        </div>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows={4}
                            required
                            className="p-4 rounded-lg border border-gray-200 w-full outline-none bg-[#c9f1e0] placeholder-gray-600 text-gray-800 focus:border-green-500"
                        ></textarea>

                        {status.type && (
                            <div className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}>
                                {status.msg}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-gray-900 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition w-fit flex items-center gap-2 cursor-pointer"
                        >
                            {loading ? "Sending..." : "Submit"} <span>↗</span>
                        </button>
                    </form>
                </div >
            </div>
        </section>
    );
}