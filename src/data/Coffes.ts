import { ICoffee } from '../interface/Coffee';
import coffeeExpresso from '../assets/coffees/coffee-expresso.svg';
import coffeeAmericano from '../assets/coffees/coffee-americano.svg';
import coffeeExpressoCremoso from '../assets/coffees/coffee-expresso-cremoso.svg';
import coffeeGelado from '../assets/coffees/coffee-gelado.svg';
import coffeeComLeite from '../assets/coffees/coffee-com-leite.svg';
import coffeeLatte from '../assets/coffees/coffee-latte.svg';
import coffeeCapuccino from '../assets/coffees/coffee-capuccino.svg';
import coffeeMacchiato from '../assets/coffees/coffee-macchiato.svg';
import coffeeMochacchino from '../assets/coffees/coffee-mochacchino.svg';
import coffeeChocolateQuente from '../assets/coffees/coffee-chocolate-quente.svg';
import coffeeCubano from '../assets/coffees/coffee-cubano.svg';
import coffeeHavaiano from '../assets/coffees/coffee-havaiano.svg';
import coffeeArabe from '../assets/coffees/coffee-arabe.svg';
import coffeeIrlandes from '../assets/coffees/coffee-irlandes.svg';

export const DataCoffes: ICoffee[] = [
  {
    id: 1,
    titulo: 'Expresso Tradicional',
    descricao: 'O tradicional café feito com água quente e grãos moídos',
    valor: 9.9,
    img: coffeeExpresso,
    categorias: ['TRADICIONAL'],
    qtde: 1,
  },
  {
    id: 2,
    titulo: 'Expresso Americano',
    descricao: 'Expresso diluído, menos intenso que o tradicional',
    valor: 9.9,
    img: coffeeAmericano,
    categorias: ['TRADICIONAL'],
    qtde: 1,
  },
  {
    id: 3,
    titulo: 'Expresso Cremoso',
    descricao: 'Café expresso tradicional com espuma cremosa',
    valor: 9.9,
    img: coffeeExpressoCremoso,
    categorias: ['TRADICIONAL'],
    qtde: 1,
  },
  {
    id: 4,
    titulo: 'Expresso Gelado',
    descricao: 'Bebida preparada com café expresso e cubos de gelo',
    valor: 9.9,
    img: coffeeGelado,
    categorias: ['TRADICIONAL', 'GELADO'],
    qtde: 1,
  },
  {
    id: 5,
    titulo: 'Café com Leite',
    descricao: 'Meio a meio de expresso tradicional com leite vaporizado',
    valor: 9.9,
    img: coffeeComLeite,
    categorias: ['TRADICIONAL', 'COM LEITE'],
    qtde: 1,
  },
  {
    id: 6,
    titulo: 'Latte',
    descricao:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    valor: 9.9,
    img: coffeeLatte,
    categorias: ['TRADICIONAL', 'COM LEITE'],
    qtde: 1,
  },
  {
    id: 7,
    titulo: 'Capuccino',
    descricao:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    valor: 9.9,
    img: coffeeCapuccino,
    categorias: ['TRADICIONAL', 'COM LEITE'],
    qtde: 1,
  },
  {
    id: 8,
    titulo: 'Macchiato',
    descricao: 'Café expresso misturado com um pouco de leite quente e espuma',
    valor: 9.9,
    img: coffeeMacchiato,
    categorias: ['TRADICIONAL', 'COM LEITE'],
    qtde: 1,
  },
  {
    id: 9,
    titulo: 'Mocaccino',
    descricao: 'Café expresso com calda de chocolate, pouco leite e espuma',
    valor: 9.9,
    img: coffeeMochacchino,
    categorias: ['TRADICIONAL', 'COM LEITE'],
    qtde: 1,
  },
  {
    id: 10,
    titulo: 'Chocolate Quente',
    descricao: 'Bebida feita com chocolate dissolvido no leite quente e café',
    valor: 9.9,
    img: coffeeChocolateQuente,
    categorias: ['TRADICIONAL', 'COM LEITE'],
    qtde: 1,
  },
  {
    id: 11,
    titulo: 'Cubano',
    descricao:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    valor: 9.9,
    img: coffeeCubano,
    categorias: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    qtde: 1,
  },
  {
    id: 12,
    titulo: 'Havaiano',
    descricao: 'Bebida adocicada preparada com café e leite de coco',
    valor: 9.9,
    img: coffeeHavaiano,
    categorias: ['ESPECIAL'],
    qtde: 1,
  },
  {
    id: 13,
    titulo: 'Árabe',
    descricao: 'Bebida preparada com grãos de café árabe e especiarias',
    valor: 9.9,
    img: coffeeArabe,
    categorias: ['ESPECIAL'],
    qtde: 1,
  },
  {
    id: 14,
    titulo: 'Irlandês',
    descricao: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    valor: 9.9,
    img: coffeeIrlandes,
    categorias: ['ESPECIAL', 'ALCOÓLICO'],
    qtde: 1,
  },
];
