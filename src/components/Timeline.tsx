
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export interface TimelineItemProps {
  title: string;
  organization: string;
  location?: string;
  date: string;
  description?: string;
  tags?: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  organization,
  location,
  date,
  description,
  tags
}) => {
  return (
    <div className="timeline-item reveal">
      <div className="timeline-dot" />
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <h4 className="text-primary font-medium mb-1">{organization}</h4>
      <div className="flex items-center gap-4 text-sm text-secondary mb-2">
        {date && (
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        )}
      </div>
      {description && (
        <p className="text-muted-foreground mb-2">{description}</p>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="mt-8">
      {items.map((item, i) => (
        <TimelineItem
          key={i}
          {...item}
        />
      ))}
    </div>
  );
};

export default Timeline;
