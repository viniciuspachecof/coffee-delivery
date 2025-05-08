import { createContext, ReactNode, useState } from 'react';
import { ICoffee } from '../interface/ICoffee';

interface CoffeesContextType {
  onAdicionarCoffee: (data: ICoffee) => void;
  onRemoverCoffee: (id: number) => void;
  onAlterarQtdeCoffee: (id: number, qtdeAtualizada: number) => void;
  coffees: ICoffee[];
}

export const CoffeesContext = createContext({} as CoffeesContextType);

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<ICoffee[]>([]);

  function onAdicionarCoffee(data: ICoffee) {
    setCoffees((state) => [...state, { ...data }]);
  }

  function onRemoverCoffee(id: number) {
    const listaCoffees = coffees.filter((coffee) => coffee.id !== id);

    setCoffees(listaCoffees);
  }

  function onAlterarQtdeCoffee(id: number, qtdeAtualizada: number) {
    const listaCoffees = coffees.filter((coffee) => coffee.id !== id);
    const coffee = coffees.find((coffee) => coffee.id === id);

    if (coffee) {
      coffee.qtde = qtdeAtualizada;

      listaCoffees.push(coffee);

      setCoffees(listaCoffees);
    }
  }

  return (
    <CoffeesContext.Provider
      value={{
        onAdicionarCoffee,
        onRemoverCoffee,
        onAlterarQtdeCoffee,
        coffees,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
