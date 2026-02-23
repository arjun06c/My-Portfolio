import React from 'react';
import { Medal, ArrowSquareOut } from '@phosphor-icons/react';

const Certificates = ({ certificates }) => {
    return (
        <div className="certificates-section">
            <h3 className="category-title">Certifications</h3>
            <div className="certificates-grid">
                {certificates.map((cert) => (
                    <div key={cert.id} className="certificate-card glass">
                        <div className="cert-left">
                            <Medal size={40} weight="fill" color="var(--accent)" />
                        </div>
                        <div className="cert-right">
                            <h4>{cert.title}</h4>
                            <p>{cert.platform} • {cert.year}</p>
                            <a href={cert.link} className="view-cert-link">
                                View Certificate <ArrowSquareOut size={16} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
