import Navbar from "./components/Navbar";
import { LocaleProvider } from "./contexts/LocaleContext";

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LocaleProvider>
            <div className="min-h-screen bg-background relative">
                {/* Eclipse blur fixo no topo - aparece em todas as páginas */}
                <div
                    className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-dvh pointer-events-none z-0"
                    style={{
                        background: 'radial-gradient(ellipse at center top, rgba(240, 255, 240, 0.1) 0%, rgba(240, 255, 240, 0.05) 40%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />

                <Navbar />

                <main className="relative z-10">
                    {children}
                </main>
            </div>
        </LocaleProvider>
    );
}
