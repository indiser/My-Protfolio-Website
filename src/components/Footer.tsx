export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-zinc-950 py-12">
            <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-zinc-200">DevPortfolio</span>
                    <span className="text-xs text-zinc-500">
                        © {new Date().getFullYear()} Senior Architect. All rights reserved.
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
