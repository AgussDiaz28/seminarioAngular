// tslint:disable: quotemark
import { Beer } from "../interfaces/Beer";
export const BEERS: Beer[] = [
  {
    name: "Birra1",
    description: "Negra",
    img: "Imagen1",
    price: 95,
    inStock: false,
    stockLeft: 0,
    onSale: true,
  },
  {
    name: "Birra2",
    description: "Rubia",
    img: "Imagen2",
    price: 145,
    inStock: true,
    stockLeft: 2,
    onSale: false,
  },
  {
    name: "Birra3",
    description: "Rubia",
    img: "Imagen2",
    price: 135,
    inStock: true,
    stockLeft: 8,
    onSale: true,
  },
  {
    name: "Birra4",
    description: "Rubia",
    img: "Imagen2",
    price: 99,
    inStock: true,
    stockLeft: 5,
    onSale: false,
  }
];
