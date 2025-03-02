import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        {/* Link para a página inicial */}
        <Link href="/" className="text-xl font-bold hover:text-yellow-200 transition-colors duration-200">
            Início
        </Link>

        {/* Link para a página de cartas */}
        <Link href="/cartas" className="text-xl font-bold hover:text-yellow-200 transition-colors duration-200">
            Cartas
        </Link>
      </nav>
    </header>
  );
}