import React from 'react';
import { Star } from 'lucide-react';
import { Restaurant } from '../types/api';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

export function RestaurantCard({ restaurant, onClick }: RestaurantCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img 
          src={restaurant.capa} 
          alt={restaurant.titulo} 
          className="w-full h-48 object-cover"
        />
        {restaurant.destacado && (
          <span className="absolute top-4 right-4 bg-[#E66767] text-white px-4 py-1 rounded">
            Destaque da semana
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-[#E66767]">{restaurant.titulo}</h3>
          <div className="flex items-center gap-1">
            <span>{restaurant.avaliacao}</span>
            <Star className="text-[#E66767]" size={16} fill="#E66767" />
          </div>
        </div>
        <p className="text-gray-600 mb-4">{restaurant.descricao}</p>
        <button 
          onClick={onClick}
          className="w-full bg-[#E66767] text-white py-2 rounded hover:bg-[#d45555]"
        >
          Ver cardápio
        </button>
      </div>
    </div>
  );
}