"use client";

import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard"; // Importe o componente PokemonCard
interface PokemonCardProps {
  id: string;
  name: string;
  types: string[];
  images: {
    large: string;
  };
}

export default function Cartas() {
  const [cards, setCards] = useState<PokemonCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("https://api.pokemontcg.io/v2/cards?pageSize=12");
        const data = await response.json();
        setCards(data.data);
      } catch (error) {
        console.error("Erro ao buscar as cartas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Cartas de Pokémon</h1>

      {loading ? (
        <p className="text-center text-lg">Carregando cartas...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <PokemonCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}