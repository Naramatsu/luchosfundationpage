import { LANGUAJE_ENGLISH, LANGUAJE_SPANISH } from "../../store/types";

const imgPetMale =
  "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg";
const imgPetFemale =
  "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?cs=srgb&dl=pexels-goochie-poochie-grooming-3361739.jpg&fm=jpg";

export const petList = {
  [LANGUAJE_SPANISH]: [
    {
      name: "Otto",
      gender: "Macho",
      img: imgPetMale,
      type: "Perro",
    },
    {
      name: "Otrie",
      gender: "Hembra",
      img: imgPetFemale,
      type: "Gato",
    },
    {
      name: "Otto",
      gender: "Macho",
      img: imgPetMale,
      type: "Perro",
    },
    {
      name: "Otrie",
      gender: "Hembra",
      img: imgPetFemale,
      type: "Gato",
    },
    {
      name: "Otto",
      gender: "Macho",
      img: imgPetMale,
      type: "Perro",
    },
    {
      name: "Otrie",
      gender: "Hembra",
      img: imgPetFemale,
      type: "Gato",
    },
    {
      name: "Otto",
      gender: "Macho",
      img: imgPetMale,
      type: "Perro",
    },
    {
      name: "Otrie",
      gender: "Hembra",
      img: imgPetFemale,
      type: "Gato",
    },
    {
      name: "Otto",
      gender: "Macho",
      img: imgPetMale,
      type: "Perro",
    },
    {
      name: "Otrie",
      gender: "Hembra",
      img: imgPetFemale,
      type: "Gato",
    },
  ],
  [LANGUAJE_ENGLISH]: [
    {
      name: "Otto",
      gender: "Male",
      img: imgPetMale,
      type: "dog",
    },
    {
      name: "Otrie",
      gender: "Female",
      img: imgPetFemale,
      type: "cat",
    },
    {
      name: "Otto",
      gender: "Male",
      img: imgPetMale,
      type: "dog",
    },
    {
      name: "Otrie",
      gender: "Female",
      img: imgPetFemale,
      type: "cat",
    },
    {
      name: "Otto",
      gender: "Male",
      img: imgPetMale,
      type: "dog",
    },
    {
      name: "Otrie",
      gender: "Female",
      img: imgPetFemale,
      type: "cat",
    },
    {
      name: "Otto",
      gender: "Male",
      img: imgPetMale,
      type: "dog",
    },
    {
      name: "Otrie",
      gender: "Female",
      img: imgPetFemale,
      type: "cat",
    },
    {
      name: "Otto",
      gender: "Male",
      img: imgPetMale,
      type: "dog",
    },
    {
      name: "Otrie",
      gender: "Female",
      img: imgPetFemale,
      type: "cat",
    },
  ],
};

export const adoptTitle = {
  [LANGUAJE_SPANISH]: "Adopta una mascota",
  [LANGUAJE_ENGLISH]: "Adopt a Pet",
};

export const adoptBanner = {
  [LANGUAJE_SPANISH]: "¿Estás buscando una mascota?. Empieza tu busqueda aquí.",
  [LANGUAJE_ENGLISH]: "Looking for a pet? Start your search here!",
};

export const adoptButtonBanner = {
  [LANGUAJE_SPANISH]: "Buscar mascotas",
  [LANGUAJE_ENGLISH]: "Pet search",
};

export const adoptGreenText = {
  [LANGUAJE_SPANISH]: `Estamos abiertos al público de martes a domingo a partir de las 11.00 horas. Cuando llegue, se le inscribirá en una lista de espera. Debe tener preparado un número de identificación del animal para que se le inscriba en la lista de espera. Es posible que haya que esperar para conocer a una mascota o que la lista de espera esté llena ese día.`,
  [LANGUAJE_ENGLISH]: `We are open to walk-in traffic Tuesday through Sunday, beginning at 11am. When you arrive, you will be added to a waiting list.You must have an animal ID# prepared to be added to the waiting list. There may be a wait to meet a pet, or the waiting list may be full for the day.`,
};

export const adoptDirectory = {
  [LANGUAJE_SPANISH]: "Directorio",
  [LANGUAJE_ENGLISH]: "Directory",
};
