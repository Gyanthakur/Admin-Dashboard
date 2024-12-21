import {
  MdHome,
  MdOutlineShoppingCart,
  MdTask,
  MdStackedBarChart,
  MdViewKanban,
} from "react-icons/md";

export const routes = [
  {
    name: "Dashboard",
    path: "/dashboard", // Use consistent naming for the path key
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: <MdTask className="h-6 w-6" />,
  },
  {
    name: "Kanban",
    path: "/kanban",
    icon: <MdViewKanban className="h-6 w-6" />,
  },
  {
    name: "Charts",
    path: "/charts", // Fix key from 'paths' to 'path'
    icon: <MdStackedBarChart className="h-6 w-6" />,
  },
];

// export default routes;
