import React from 'react';
import LandingBackground from '@global/assets/img/LandingBackground.jpg';

type Props = {};

const LandingPage = (props: Props) => {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center pt-20 px-4 overflow-hidden"
            style={{ backgroundImage: `url(${LandingBackground})` }}
        >
            {/* --- HERO SECTION --- */}
            <section className="text-center z-10 max-w-4xl mx-auto mb-16">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                    Kanban-style <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                        project management
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Visualize and organize your work with an intuitive interface
                    designed for high-performance teams.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 active:scale-95">
                        Get started
                    </button>
                    <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/10 transition-all active:scale-95">
                        View demo
                    </button>
                </div>
            </section>

            {/* --- UI PREVIEW (The Board) --- */}
            <section className="w-full max-w-6xl mx-auto pb-20">
                {/* <GlassCard className="p-1 md:p-2 border-white/20 shadow-2xl">
                   
                    <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 aspect-[16/9]">
                       
                        <div className="p-8 text-slate-400 text-center">
                            [ Your Kanban Board Component Renders Here ]
                        </div>
                    </div>
                </GlassCard> */}
            </section>

            {/* Background Decorative Glow (Optional extra) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
            </div>
        </div>
    );
};

export default LandingPage;
