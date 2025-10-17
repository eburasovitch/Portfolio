import type { RouteObject } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllPages from "./AllPages";
import ProjectNetflix from "./pages/Project_netflix";
import ProjectKotlin from "./pages/Project_kotlin";
import ProjectUnita from "./pages/ProjectUnita";
import ProjectUqac from "./pages/ProjectUqac";
import ProjectDoc from "./pages/ProjectDoc";
import ProjectSbd from "./pages/ProjectSbd";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <AllPages /> }, // page avec toutes les sections
      { path: "Project_netflix", element: <ProjectNetflix /> },
      { path: "Project_kotlin", element: <ProjectKotlin /> },
      { path: "ProjectUnita", element: <ProjectUnita /> }, 
      { path: "ProjectUqac", element: <ProjectUqac /> }, 
      { path: "ProjectDoc", element: <ProjectDoc /> },
      { path: "ProjectSbd", element: <ProjectSbd /> },
    ],
  },
];

export default routes;
