export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white">
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-5xl font-bold mb-6">🎨 Portfolio</h1>
                <p className="text-xl text-gray-300 mb-8">
                    Bem-vindo ao meu portfolio em portfolio.kadmo.com.br
                </p>

                {/* Adicione seus projetos aqui */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-2">Projeto 1</h3>
                        <p className="text-gray-400">Descrição do projeto...</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-2">Projeto 2</h3>
                        <p className="text-gray-400">Descrição do projeto...</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-2">Projeto 3</h3>
                        <p className="text-gray-400">Descrição do projeto...</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
