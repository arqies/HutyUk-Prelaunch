"use client";
import Link from "next/link";
import { useState } from "react";

export default function FeaturesPage() {
    const [activeTab, setActiveTab] = useState(0);

    const contentTypes = [
        {
            icon: "📧",
            title: "Email Campaigns",
            subtitle: "3 Variants Per Generation",
            description: "Generate high-converting email sequences with multiple variants. Perfect for A/B testing and finding what resonates with your audience.",
            features: ["Subject line optimization", "CTA variations", "Personalization tokens", "Mobile-optimized formatting"],
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: "🎬",
            title: "Video Scripts",
            subtitle: "Platform-Optimized",
            description: "Create engaging video scripts tailored for YouTube, TikTok, Instagram Reels, and more. Hook viewers from the first second.",
            features: ["Hook optimization", "Scene breakdowns", "Call-to-action placement", "Platform-specific timing"],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: "📝",
            title: "Blog Posts",
            subtitle: "SEO-Optimized",
            description: "Generate comprehensive blog content that ranks. Our AI understands SEO best practices and creates content that drives organic traffic.",
            features: ["Keyword integration", "Meta descriptions", "Header structure", "Internal linking suggestions"],
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: "🚀",
            title: "Landing Pitches",
            subtitle: "High-Converting Copy",
            description: "Craft compelling landing page copy that converts visitors into customers. Every word optimized for action.",
            features: ["Headline variations", "Benefit-focused copy", "Social proof sections", "Urgency elements"],
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: "📢",
            title: "Text Ads",
            subtitle: "Google & Social",
            description: "Create ad copy that stands out in crowded feeds. Optimized for Google Ads, Facebook, LinkedIn, and more.",
            features: ["Character-limit compliance", "Headline variations", "Description options", "CTA optimization"],
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            icon: "🖼️",
            title: "Image Ads",
            subtitle: "AI Visual Concepts",
            description: "Generate creative visual concepts and ad designs. From social media graphics to display ads.",
            features: ["Brand consistency", "Platform sizing", "Text overlay suggestions", "Visual hierarchy"],
            gradient: "from-pink-500 to-rose-500"
        }
    ];

    const platformFeatures = [
        {
            icon: "🏢",
            title: "Brand Management",
            description: "Create and manage multiple brands with custom guidelines, voice, and style preferences."
        },
        {
            icon: "📦",
            title: "Product Catalog",
            description: "Add products with descriptions and specific prompts for targeted content generation."
        },
        {
            icon: "🎨",
            title: "Template System",
            description: "Use built-in templates or create custom prompts with beginning, middle, and end sections."
        },
        {
            icon: "💬",
            title: "Chat History",
            description: "All your generations are saved. Review, regenerate, or build upon previous ideas."
        },
        {
            icon: "👥",
            title: "Organization Sharing",
            description: "Share brands and templates with your team. Collaborate seamlessly."
        },
        {
            icon: "⚡",
            title: "Credit System",
            description: "Flexible credits that work across all content types. Use them how you need."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 right-1/3 w-60 h-60 bg-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <header className="relative z-50 border-b border-white/5 backdrop-blur-xl bg-slate-950/80 sticky top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-lg">H</div>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Huty.uk</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Link href="/features" className="px-4 py-2 text-sm text-white font-medium">Features</Link>
                        <Link href="/pricing" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Pricing</Link>
                        <span className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg opacity-80 cursor-default">Coming Soon</span>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        6 Content Types • Unlimited Creativity
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Everything You Need to <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Create Content</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                        From emails to video scripts, our AI generates high-quality content for your brand in seconds.
                    </p>
                </div>
            </section>

            {/* Content Types */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Content Types</h2>
                    <p className="text-gray-400">Click to explore each content type</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {contentTypes.map((type, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === i
                                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                : "bg-white/5 text-gray-300 hover:bg-white/10"
                                }`}
                        >
                            {type.icon} {type.title}
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                        <div className="flex items-start gap-6">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${contentTypes[activeTab].gradient} flex items-center justify-center text-3xl flex-shrink-0`}>
                                {contentTypes[activeTab].icon}
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-purple-400 mb-1">{contentTypes[activeTab].subtitle}</div>
                                <h3 className="text-2xl font-bold mb-3">{contentTypes[activeTab].title}</h3>
                                <p className="text-gray-400 mb-6">{contentTypes[activeTab].description}</p>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {contentTypes[activeTab].features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs">✓</span>
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Features */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Platform Features</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Built for teams and individuals who want to scale their content</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {platformFeatures.map((feature, i) => (
                        <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Template Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Smart Templates</span> for Every Need
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Start with our built-in prompts or create your own. Templates let you define the beginning and end of prompts while our AI handles the context and generation.
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-sm text-purple-400 mb-1">Built-in Templates</div>
                                <div className="text-white">3 Email Variants, Video Script, Blog Post, Landing Pitch, Text Ad, Image Ad</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-sm text-purple-400 mb-1">Custom Templates</div>
                                <div className="text-white">Define prompt beginning, RAG injection point, and prompt ending</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl p-6 font-mono text-sm">
                            <div className="text-gray-500 mb-2"># Template Structure</div>
                            <div className="text-purple-400">prompt_beginning:</div>
                            <div className="text-gray-300 ml-4 mb-2">&quot;You are an expert copywriter...&quot;</div>
                            <div className="text-blue-400">+ [Brand Context]</div>
                            <div className="text-blue-400">+ [Product Info]</div>
                            <div className="text-blue-400 mb-2">+ [Chat History]</div>
                            <div className="text-purple-400">prompt_end:</div>
                            <div className="text-gray-300 ml-4">&quot;Generate 3 variations...&quot;</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
                <div className="relative rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                    <div className="relative px-8 py-16 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Generate Your Content?</h2>
                        <p className="text-purple-100 mb-8 max-w-xl mx-auto">Start with our free tier and upgrade as you grow</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl opacity-80 cursor-default">
                                Coming Soon
                            </span>
                            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                                View Pricing
                            </Link>
                        </div>
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
