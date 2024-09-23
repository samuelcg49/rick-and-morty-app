// src/context/SearchContext.tsx
import { createContext, useState, useContext } from 'react';

const SearchContext = createContext<{ searchTerm: string; setSearchTerm: React.Dispatch<React.SetStateAction<string>> } | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);