
import React from 'react';

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}

export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ 
  videoId, 
  title = "YouTube video player" 
}) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
