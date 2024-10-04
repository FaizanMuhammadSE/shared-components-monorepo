// Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105'>
      <img className='w-full h-48 object-cover' src={imageUrl} alt={title} />
      <div className='p-5'>
        <h2 className='text-xl font-bold text-gray-800 mb-2'>{title}</h2>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
