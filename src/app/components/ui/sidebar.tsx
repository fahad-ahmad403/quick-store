import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`
        fixed top-0 right-0 h-full w-64 z-10 bg-[var(--black-color)] text-white transition-transform duration-300 z-50,
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-white">
          Menu
        </h2>
        <span className="cursor-pointer" onClick={onClose}>Close</span>
      </div>

      <nav className="p-4">
        <ul className="space-y-6">
          <li>
            <Link href="/"
            className="flex w-fit text-white hover:text-[var(--blue-color)]">
                Home
            
            </Link>
          </li>
          <li>
            <Link href="/about"
              className="flex w-fit text-white hover:text-[var(--blue-color)]">
                About
              
            </Link>
          </li>
          <li>
            <Link href="/services"
               className="flex w-fit text-white hover:text-[var(--blue-color)]">
                Services
              
            </Link>
          </li>
          <li>
            <Link href="/contact"
               className="flex w-fit text-white hover:text-[var(--blue-color)]">
                Contact
              
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar