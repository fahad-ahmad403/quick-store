export interface Product {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const servicesData: Product[] = [
  {
    id: 1,
    icon: "/delivery-truck.svg",
    title: "Fast Delivery",
    description: "Lorem ipsum dolor sit amet consectetur. Ac libero venenatis venenatis eu. Vitae molestie nunc commodo scelerisque.",
  },
  {
    id: 2,
    icon: "/verified.svg",
    title: "Secure Payments",
    description: "Lorem ipsum dolor sit amet consectetur. Ac libero venenatis venenatis eu. Vitae molestie nunc commodo scelerisque.",
  },
  {
    id: 3,
    icon: "/trust.svg",
    title: "Trusted App",
    description: "Lorem ipsum dolor sit amet consectetur. Ac libero venenatis venenatis eu. Vitae molestie nunc commodo scelerisque.",
  },
  {
    id: 4,
    icon: "/verified.svg",
    title: "Secure",
    description: "Lorem ipsum dolor sit amet consectetur. Ac libero venenatis venenatis eu. Vitae molestie nunc commodo scelerisque.",
  },
];
