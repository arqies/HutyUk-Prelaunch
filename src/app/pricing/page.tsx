"use client";
import Link from "next/link";

export default function PricingPage() {
    const plans = [
        {
            name: "Standard",
            price: 50,
            credits: "1,000",
            scripts: "Up to 20",
            images: "Up to 20",
            words: "10M",
            brands: 1,
            products: "Unlimited",
            popular: false,
            gradient: "from-slate-600 to-slate-700"
        },
        {
            name: "Pro",
            price: 100,
            credits: "4,000",
            scripts: "Up to 80",
            images: "Up to 80",
            words: "40M",
            brands: 5,
            products: "Unlimited",
            popular: true,
            gradient: "from-purple-600 to-pink-600"
        },
        {
            name: "Max",
            price: 200,
            credits: "8,000",
            scripts: "Up to 160",
            images: "Up to 160",
            words: "80M",
            brands: 50,
            products: "Unlimited",
            popular: false,
            gradient: "from-orange-500 to-red-500"
        }
    ];

    const allFeatures = [
        "All 6 content types",
        "Built-in templates",
        "Chat history",
        "Brand voice customization",
        "AI-powered generation"
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <header className="relative z-50 border-b border-white/5 backdrop-blur-xl bg-slate-950/80 sticky top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-lg">H</div>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Huty.uk</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Link href="/features" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Features</Link>
                        <Link href="/pricing" className="px-4 py-2 text-sm text-white font-medium">Pricing</Link>
                        <span className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg opacity-80 cursor-default">Coming Soon</span>
                    </div>
                </div>
            </header>

            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-32">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Simple, Credit-Based <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Use your credits for any content type. More credits = more flexibility.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${plan.popular
                                ? "bg-gradient-to-b from-purple-900/50 to-slate-900/50 border-purple-500/50 scale-105"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        ${plan.price}
                                    </span>
                                    <span className="text-gray-400">/seat/mo</span>
                                </div>
                                <div className="mt-2 inline-block px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded-full">
                                    {plan.credits} Credits
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                                    <span className="text-lg">🎬</span>
                                    <span className="text-gray-300"><strong className="text-white">{plan.scripts}</strong> Scripts</span>
                                </li>
                                <li className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                                    <span className="text-lg">🖼️</span>
                                    <span className="text-gray-300"><strong className="text-white">{plan.images}</strong> Images</span>
                                </li>
                                <li className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                                    <span className="text-lg">📝</span>
                                    <span className="text-gray-300"><strong className="text-white">{plan.words}</strong> Words</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">✓</span>
                                    <span className="text-gray-300"><strong className="text-white">{plan.brands}</strong> {plan.brands === 1 ? "Brand" : "Brands"}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">✓</span>
                                    <span className="text-gray-300"><strong className="text-white">{plan.products}</strong> Products</span>
                                </li>
                            </ul>

                            <span
                                className={`block w-full py-3 text-center font-semibold rounded-xl opacity-80 cursor-default ${plan.popular
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                    : "bg-white/10 text-white"
                                    }`}
                            >
                                Coming Soon
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 max-w-3xl mx-auto">
                    <h3 className="text-center text-xl font-semibold mb-8">All Plans Include</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {allFeatures.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                                <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">✓</span>
                                <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-2 text-sm">
                        * Script/Image limits based on using all credits for one type
                    </p>
                    <p className="text-gray-400">
                        Need a custom plan? <a href="mailto:contact@arqies.com" className="text-purple-400 hover:text-purple-300 font-medium">Contact us</a>
                    </p>
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
