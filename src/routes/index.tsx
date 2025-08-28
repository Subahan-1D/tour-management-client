import App from "@/App";
import About from "@/pages/About";
import { createBrowserRouter } from "react-router";
import AdminLayout from '../components/ui/Layout/AdminLayout';
import Analitycs from "@/pages/Analitycs";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },

  {
    Component : AdminLayout,
    path : "/admin",
    children : [
      {
        Component : Analitycs,
        path : "analitycs" 
      }
    ]
  }
]);
