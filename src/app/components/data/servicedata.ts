export interface Product {
  id: number;
  icon: string;
  alt: string;
  title: string;
  description: string;
}

export const servicesData: Product[] = [
  {
    id: 1,
    icon: "/delivery-truck.svg",
    alt: "Delivery Truck Icon",
    title: "Fast Delivery",
    description: "Lorem ipsum dolor sit amet consectetur. Ac libero venenatis venenatis eu. Vitae molestie nunc commodo scelerisque.",
  },
  {
    id: 2,
    icon: "/verified.svg",
    alt: "Verified Icon",
    title: "Secure Payments",
    description: "Lorem ipsum dolor sit amet consectetur. Ac libero venenatis venenatis eu. Vitae molestie nunc commodo scelerisque.",
  },
  {
    id: 3,
    icon: "/trust.svg",
    alt: "Trust Icon",
    title: "Trusted App",
    description: "Lorem ipsum dolor sit amet consectetur. Ac libero venenatis venenatis eu. Vitae molestie nunc commodo scelerisque.",
  },
  {
    id: 4,
    icon: "/verified.svg",
    alt: "Verified Icon",
    title: "Secure",
    description: "Lorem ipsum dolor sit amet consectetur. Ac libero venenatis venenatis eu. Vitae molestie nunc commodo scelerisque.",
  },
];
