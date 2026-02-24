import React from 'react';
import { Medal, ArrowSquareOut } from '@phosphor-icons/react';

const Certificates = ({ certificates }) => {
    return (
        <div className="space-y-4">
            {certificates.map((cert) => (
                <div key={cert.id} className="glass-card p-4 flex items-center gap-4 hover:border-accent/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                        <Medal size={24} weight="fill" />
                    </div>
                    <div className="flex-grow">
                        <h4 className="text-white font-bold text-sm group-hover:text-accent transition-colors">{cert.title}</h4>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mt-0.5">{cert.platform} • {cert.year}</p>
                    </div>
                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-accent transition-colors"
                    >
                        <ArrowSquareOut size={18} />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Certificates;
