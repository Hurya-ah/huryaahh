import React from 'react';

// Define the props type for the Card component
interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="border p-6 rounded-lg shadow-lg">
      {/* Image section */}
      <img src={img} alt={title} className="w-full h-64 object-cover rounded-t-lg" />
      
      {/* Title */}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      
      {/* Description */}
      <p className="mt-2 text-blue-400">{desc}</p>
      
      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-yellow-500 text-sm square-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
