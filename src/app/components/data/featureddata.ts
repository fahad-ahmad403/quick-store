export interface Product {
  id: number;
  title: string;
  badge: string;
  image: string;
  alt: string;
  price: string;
  css: string;
  titlecss: string;
  imagestyles: string;
}

export const featuredProductsData: Product[] = [
  {
    id: 1,
    title: "Samsung S25 Ultra",
    image: "/samsung-s25-ultra.png",
    alt: "Samsung S25 Ultra",
    price: "$350",
    badge: "Newly Added",
    css: "bg-[rgb(240,241,243)]",
    titlecss: "w-full",
    imagestyles: "w-[162px] h-[162px] !important",
  },
  {
    id: 2,
    title: "Galaxy Watch Ultra",
    image: "/samsung-watch.png",
    alt: "Galaxy Watch Ultra",
    price: "$140",
    badge: "Newly Added",
    css: "bg-[rgb(252,227,213)]",
    titlecss: "w-full",
    imagestyles: "w-[167.57px] h-[191px] !important",
  },
  {
    id: 3,
    title: "Samsung Z Flip 7 FE",
    image: "/samsung-z-flip.png",
    alt: "Samsung Z Flip 7 FE",
    price: "$400",
    badge: "Newly Added",
    css: "bg-[rgb(224,224,226)]",
    titlecss: "w-[80%]",
    imagestyles: "w-[162px] h-[162px] !important",
  },
  {
    id: 4,
    title: "Samsung Galaxy Buds 3",
    image: "/samsung-buds.png",
    alt: "Samsung Galaxy Buds 3",
    price: "$130",
    badge: "Newly Added",
    css: "bg-[rgb(233,243,255)]",
    titlecss: "w-[90%]",
    imagestyles: "w-[145px] h-[119px] !important",
  },
  {
    id: 5,
    title: "Samsung HeadPhone",
    image: "/samsung-headphone.png",
    alt: "Samsung HeadPhone",
    price: "$190",
    badge: "Newly Added",
    css: "bg-[rgb(238,234,223)]",
    titlecss: "w-[80%]",
    imagestyles: "w-[165px] h-[165px] !important",
  },
  {
    id: 6,
    title: "Galaxy Book 5 360",
    image: "/samsung-laptop.png",
    alt: "Galaxy Book 5 360",
    price: "$1300",
    badge: "Newly Added",
    css: "bg-[rgb(246,246,248)]",
    titlecss: "w-[90%]",
    imagestyles: "w-[193px] h-[154px] !important",
  },
];
