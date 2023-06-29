import { LANGUAJE_ENGLISH, LANGUAJE_SPANISH } from "../../store/types";

export const filterOptions = {
  [LANGUAJE_SPANISH]: [
    { name: "Tipo", options: ["", "Perro", "Gato"] },
    { name: "Genero", options: ["", "Macho", "Hembra"] },
    { name: "Tamaño", options: ["", "Pequeño", "Mediano", "Grande"] },
  ],
  [LANGUAJE_ENGLISH]: [
    { name: "Type", options: ["", "Dog", "Cat"] },
    { name: "Gender", options: ["", "Male", "Female"] },
    { name: "Size", options: ["", "Small", "Medium", "Big"] },
  ],
};

export const buttonSearch = {
  [LANGUAJE_SPANISH]: "Buscar",
  [LANGUAJE_ENGLISH]: "Search",
};
