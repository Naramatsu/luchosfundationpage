import { LANGUAJE_ENGLISH, LANGUAJE_SPANISH } from "../../store/types";

const logo = "logo.png";

export const tabs = {
  [LANGUAJE_SPANISH]: [
    {
      label: "Adoptar",
      link: "adopt",
    },
    {
      label: "Blogs",
      link: "blogs",
    },
    {
      img: logo,
      link: "",
    },
    {
      label: "Sobre nosotros",
      link: "aboutus",
    },
    {
      label: "Contactanos",
      link: "contact",
    },
  ],
  [LANGUAJE_ENGLISH]: [
    {
      label: "Adopt a Pet",
      link: "adopt",
    },
    {
      label: "Blogs",
      link: "blogs",
    },
    {
      img: logo,
      link: "",
    },
    {
      label: "About us",
      link: "aboutus",
    },
    {
      label: "Contact",
      link: "contact",
    },
  ],
};
