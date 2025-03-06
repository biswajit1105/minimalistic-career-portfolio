
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  organization: string;
  date: string;
  image: string;
  certificateUrl: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  organization,
  date,
  image,
  certificateUrl
}) => {
  return (
    <div className="card group relative overflow-hidden reveal">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <a 
            href={certificateUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary w-full flex justify-center"
          >
            <ExternalLink size={16} className="mr-2" />
            View Certificate
          </a>
        </div>
      </div>
      
      <div className="h-40 mb-4 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <div className="text-primary mb-1">{organization}</div>
      <div className="text-sm text-muted-foreground">{date}</div>
    </div>
  );
};

export default CertificateCard;
