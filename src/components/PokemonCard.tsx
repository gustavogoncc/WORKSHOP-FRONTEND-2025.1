// src/components/PokemonCard.tsx
import React from 'react';

interface PokemonCardProps {
  card: {
    id: string;
    name: string;
    types?: string[];
    images: {
      large: string;
    };
  };
}

export function PokemonCard({ card }: PokemonCardProps) {
  return (
    <div
      key={card.id}
      className="bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <img
        src={card.images.large}
        alt={card.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.name}</h2>
        <div className="flex flex-wrap gap-2">
          {card.types?.map((type) => (
            <span
              key={type}
              className="bg-gray-200 text-gray-700 text-sm font-medium px-2.5 py-0.5 rounded"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}