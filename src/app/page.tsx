"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 6);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const contentTypes = [
        { icon: "📧", title: "Email Campaigns", description: "Generate 3 email variants optimized for conversions", gradient: "from-blue-500 to-cyan-500" },
        { icon: "🎬", title: "Video Scripts", description: "Create engaging video scripts for any platform", gradient: "from-purple-500 to-pink-500" },
        { icon: "📝", title: "Blog Posts", description: "SEO-optimized blog content that ranks", gradient: "from-green-500 to-emerald-500" },
        { icon: "🚀", title: "Landing Pitches", description: "High-converting landing page copy", gradient: "from-orange-500 to-red-500" },
        { icon: "📢", title: "Text Ads", description: "Google-optimized ad copy that converts", gradient: "from-yellow-500 to-orange-500" },
        { icon: "🖼️", title: "Image Ads", description: "AI-generated visual ad concepts", gradient: "from-pink-500 to-rose-500" }
    ];

    const stats = [
        { value: "10x", label: "Faster Creation" },
        { value: "6+", label: "Content Types" },
        { value: "AI", label: "Powered Templates" },
        { value: "∞", label: "Possibilities" }
    ];



    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <header className="relative z-50 border-b border-white/5 backdrop-blur-xl bg-slate-950/80 sticky top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-lg">H</div>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Huty.uk</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="/features" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Features</Link>
                        <Link href="/pricing" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Pricing</Link>
                        <span className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg opacity-80 cursor-default">Coming Soon</span>
                    </div>
                </div>
            </header>

            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-32">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        Credit-Based AI Content Generation
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Generate <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">All Your Content</span> with AI
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Videos, blogs, emails, ads, and more. One platform, unlimited creativity. Use templates or build your own prompts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <span className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-2xl opacity-80 cursor-default">
                            Coming Soon
                        </span>
                        <Link href="/features" className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                            Explore Features
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{stat.value}</div>
                                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Generate <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Any Content Type</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">From emails to video scripts, our AI handles it all with built-in templates</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contentTypes.map((content, i) => (
                        <div
                            key={i}
                            className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer group ${activeFeature === i
                                ? "bg-white/10 border-purple-500/50 scale-[1.02]"
                                : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                                }`}
                            onMouseEnter={() => setActiveFeature(i)}
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${content.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                {content.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
                            <p className="text-gray-400">{content.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Brand & Product</span> Management
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Create brands with custom guidelines, add products, and generate consistent content that matches your voice and style every time.
                        </p>
                        <ul className="space-y-4">
                            {["Brand voice & guidelines", "Product-specific prompts", "Share with your organisation", "Template customization"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">✓</span>
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                <div>
                                    <div className="font-semibold">Your Brand</div>
                                    <div className="text-sm text-gray-400">2 products • 5 templates</div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {["Product Launch Email", "Weekly Blog Post", "Social Ad Campaign"].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                        <span className="text-sm text-gray-300">{item}</span>
                                        <span className="text-xs text-purple-400">Generate</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
                <div className="relative rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                    <div className="relative px-8 py-16 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Automate Your Content?</h2>
                        <p className="text-purple-100 mb-8 max-w-xl mx-auto">Start with credits and generate videos, blogs, emails, and more</p>
                        <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl opacity-80 cursor-default">
                            Coming Soon
                        </span>
                    </div>
                </div>
            </section>

            <footer className="relative z-10 border-t border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">H</div>
                            <span className="font-semibold">Huty.uk</span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
                            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                        </div>
                        <p className="text-gray-500 text-sm">© 2026 Huty.uk. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
