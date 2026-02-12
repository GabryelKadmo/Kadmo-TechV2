interface TimelineItemProps {
    company: string;
    role: string;
    period: string;
    achievements: readonly string[];
    isLast?: boolean;
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
    return (
        <div className="relative">
            {items.map((item, index) => (
                <div key={index} className="relative pb-12 last:pb-0">
                    {/* Linha vertical conectando os itens */}
                    {!item.isLast && (
                        <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                    )}

                    {/* Container do item */}
                    <div className="relative flex gap-6 group">
                        {/* Ponto da timeline */}
                        <div className="relative z-10 flex-shrink-0">
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-black flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:scale-110">
                                <div className="w-3 h-3 rounded-full bg-white" />
                            </div>
                        </div>

                        {/* Card com conteúdo */}
                        <div className="flex-1 -mt-1">
                            <div className="border-2 border-white bg-black p-6 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                                            {item.company}
                                        </h3>
                                        <p className="text-sm text-white/60 font-mono mt-1">
                                            {item.role}
                                        </p>
                                    </div>
                                    <div className="px-3 py-1 border border-white/30 bg-white/5 w-fit">
                                        <span className="text-xs font-mono text-white/80 uppercase tracking-wider">
                                            {item.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-[2px] bg-white/20 mb-4" />

                                {/* Achievements */}
                                <ul className="space-y-3">
                                    {item.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex gap-3 items-start">
                                            <span className="text-white font-bold text-lg mt-0.5 flex-shrink-0">
                                                ▸
                                            </span>
                                            <span className="text-white/80 leading-relaxed">
                                                {achievement}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
