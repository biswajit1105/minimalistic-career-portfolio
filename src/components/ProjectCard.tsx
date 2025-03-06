
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card overflow-hidden h-full flex flex-col reveal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {demoUrl && (
          <a 
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
        {githubUrl && (
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={16} />
            Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
