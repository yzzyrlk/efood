import React, { useEffect, useState } from 'react';
import { Restaurant } from './types/api';
import { RestaurantCard } from './components/RestaurantCard';
import { Modal } from './components/Modal';
import { Utensils } from 'lucide-react';

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(response => response.json())
      .then(data => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <header className="bg-[#E66767] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Utensils />
              eFood
            </h1>
            <p className="text-lg">Viva experiências gastronômicas no conforto da sua casa</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Carregando restaurantes...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map(restaurant => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onClick={() => setSelectedRestaurant(restaurant)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedMenuItem && (
        <Modal
          item={selectedMenuItem}
          isOpen={!!selectedMenuItem}
          onClose={() => setSelectedMenuItem(null)}
        />
      )}
    </div>
  );
}

export default App;