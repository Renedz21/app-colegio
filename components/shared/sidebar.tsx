"use client";
// import { LucideProps } from "lucide-react";
import Link from "next/link";
import Each from "./each";
import { Icons } from "@/components/icons/icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type IRoutes = {
  name: string;
  path: string;
  icon?: any;
};

const routes: IRoutes[] = [
  {
    name: "Panel de control",
    path: "/dashboard",
    icon: Icons.dashboard,
  },
  {
    name: "Alumnos",
    path: "/students",
    icon: Icons.user,
  },
  {
    name: "Profesores",
    path: "/teachers",
    icon: Icons.briefcase,
  },
  {
    name: "Finanzas",
    path: "/finance",
    icon: Icons.coins,
  },
  {
    name: "Cursos",
    path: "/courses",
    icon: Icons.bookOpen,
  },
  {
    name: "Reportes",
    path: "/reports",
    icon: Icons.waterfallUp,
  },
  {
    name: "Configuración",
    path: "/settings",
    icon: Icons.settings,
  },
  {
    name: "Ayuda",
    path: "/help",
    icon: Icons.help,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col py-4">
      <div className="flex-1 px-3 py-2">
        <div>
          {/* 
            // TODO: Add logo here 
          */}
        </div>
        <div className="space-y-1">
          <Each
            of={routes}
            render={(route: IRoutes) => (
              <Link
                href={route.path}
                className={cn(
                  "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-indigo-400/10 md:text-sm",
                  pathname === route.path
                    ? "bg-blue-400/10 text-blue-600"
                    : "text-gray-500",
                )}
              >
                <div className="bg flex flex-1 items-center">
                  {route.icon && (
                    <route.icon className="mr-3 size-5 md:size-6" />
                  )}
                  {route.name}
                </div>
              </Link>
            )}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
