import clsx from "clsx";

interface NavLinkProps {
  text: string;
  id: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ text, id, isActive }) => {
  return (
    <div
      className={clsx(
        "border-b-2 px-4 py-2 text-gray-700 dark:text-white",
        isActive ? "border-blue-500" : "border-transparent",
      )}
    >
      <a href={`#${id}`}>{text}</a>
    </div>
  );
};

export default NavLink;
