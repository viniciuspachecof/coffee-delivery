import { createContext, ReactNode, useEffect, useState } from 'react';
import { ICoffee } from '../interface/ICoffee';

interface CoffeesContextType {
  onAdicionarEditarCoffee: (data: ICoffee) => void;
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
  const [coffees, setCoffees] = useState<ICoffee[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:coffees-1.0.0'
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return [];
  });

  function onAdicionarEditarCoffee(data: ICoffee) {
    const coffee = coffees.find((coffee) => coffee.id === data.id);

    if (!coffee) {
      onAdicionarCoffee(data);
    } else {
      onEditarCoffee(data);
    }
  }

  function onAdicionarCoffee(data: ICoffee) {
    setCoffees((state) => [...state, { ...data }]);
  }

  function onEditarCoffee(coffeeAtualizado: ICoffee) {
    const listaCoffees = coffees.filter(
      (coffee) => coffee.id !== coffeeAtualizado.id
    );

    setCoffees([...listaCoffees, coffeeAtualizado]);
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

      setCoffees([...listaCoffees, coffee]);
    }
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(coffees);

    localStorage.setItem('@coffee-delivery:coffees-1.0.0', stateJSON);
  }, [coffees]);

  return (
    <CoffeesContext.Provider
      value={{
        onAdicionarEditarCoffee,
        onRemoverCoffee,
        onAlterarQtdeCoffee,
        coffees,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
