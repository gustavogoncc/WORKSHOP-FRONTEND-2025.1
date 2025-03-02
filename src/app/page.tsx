"use client";

import { useEffect, useState } from "react";
import { PokemonCard } from "@/components/PokemonCard";

interface PokemonCard {
  id: string;
  name: string;
  types: string[];
  images: {
    large: string;
  };
}

export default function Home() {
  const [randomCards, setRandomCards] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState(true); // Adicione um estado para o loading

  useEffect(() => {
    const fetchRandomCards = async () => {
      setLoading(true); // Define loading como true no início da busca

      let allUniqueCards: PokemonCard[] = [];
      let attempts = 0;
      const maxAttempts = 5; // Limite máximo de tentativas

      while (allUniqueCards.length < 12 && attempts < maxAttempts) {
        attempts++;
        try {
          const response = await fetch("https://api.pokemontcg.io/v2/cards?orderBy=random&pageSize=50");
          const data = await response.json();
          const newUniqueCards = removeDuplicates(data.data, 'id');
          allUniqueCards = [...allUniqueCards, ...newUniqueCards];
          allUniqueCards = removeDuplicates(allUniqueCards, 'id').slice(0, 12); // Garante que não teremos mais de 12 cartas únicas
        } catch (error) {
          console.error("Erro ao buscar as cartas:", error);
          break; // Para de tentar se houver um erro
        }
      }

      setRandomCards(allUniqueCards);
      setLoading(false); // Define loading como false após a busca
    };

    type PokemonCardKey = keyof PokemonCard;

    function removeDuplicates(arr: PokemonCard[], key: PokemonCardKey): PokemonCard[] {
      const seen = new Set();
      return arr.filter(item => {
        const keyValue = item[key];
        return seen.has(keyValue) ? false : seen.add(keyValue);
      });
    }

    fetchRandomCards();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-blue-200 py-6">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 shadow-md rounded-lg p-3 bg-white/80">
          Bem-vindo ao Mundo Do Pokémon!
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Descubra novas cartas, monte sua coleção e torne-se um Mestre do Pokémon!
        </p>

        {loading ? ( // Renderiza uma mensagem de carregamento enquanto as cartas estão sendo buscadas
          <p className="text-center text-lg">Carregando cartas...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {randomCards.map((card) => (
              <div
                key={card.id}
                className="bg-[theme(colors.secondary)] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={card.images.large}
                  alt={card.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-[theme(colors.primary)] mb-2">{card.name}</h2>
                  <div className="flex flex-wrap gap-2">
                    {card.types?.map((type) => (
                      <span
                        key={type}
                        className="bg-[theme(colors.fire)] text-[theme(colors.background)] text-sm font-medium px-2.5 py-0.5 rounded"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}