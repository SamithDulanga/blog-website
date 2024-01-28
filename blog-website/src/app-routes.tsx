import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { Main } from "./main/Main.tsx";
import { Home } from "./home/Home.tsx";
import { Services } from "./services/Services.tsx";
import { About } from "./about/About.tsx";
import { Contact } from "./contact/Contact.tsx";
import { SingleBlog } from "./singleBlog/SingleBlog.tsx";
import {BlogPage} from "./blogPage/BlogPage.tsx";
import {HomeContent} from "./homeContent/HomeContent.tsx";

const appRoutes: RouteObject[] = [
    {
        index: true,
        element: <Navigate to="home" />,
    },
    {
        path: "home",
        Component: Home,
        children: [
            {
                path: "blog/:id",
                Component: SingleBlog,

            },
            {
                path:"",
                Component:HomeContent
            }
        ]


    },
    {
        path: "service",
        Component: Services,
    },
    {
        path: "about",
        Component: About,
    },
    {
        path: "contact",
        Component: Contact,
    },

];

const routes: RouteObject[] = [
    {
        index: true,
        element: <Navigate to="/thingstoknow" />,
    },
    {
        path: "thingstoknow",
        Component: Main,
        children: appRoutes,
    },
];

export const router = createBrowserRouter(routes);
