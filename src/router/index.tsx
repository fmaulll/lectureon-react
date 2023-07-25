import Home from "../pages/Home"
import Lecturer from "../pages/Lecturer"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Classes from "../pages/Classes"
import { AiOutlineHome } from "react-icons/ai"
import { LuNewspaper } from "react-icons/lu"
import { HiOutlineUsers } from "react-icons/Hi"
import DetailLecturer from "../pages/DetailLecturer"

export const NonAuthRoutes = [
    {
        path: "/",
        component: <Login />
    },
    {
        path: "/signup",
        component: <Signup />
    },
]

// dynamic sidebar menu 

export const AuthRoutes = [
    {
        path: "/home",
        name: "home",
        label: "Home",
        icon: <AiOutlineHome size={20} />,
        component: <Home />,
        sidebar: true
    },
    {
        path: "/lecturer",
        name: "lecturer",
        label: "Lecturer",
        icon: <LuNewspaper size={20} />,
        component: <Lecturer />,
        sidebar: true
    },
    {
        path: "/lecturer/:id",
        name: "lecturer",
        label: "Lecturer",
        icon: <LuNewspaper size={20} />,
        component: <DetailLecturer />,
        sidebar: false
    },
    {
        path: "/classes",
        name: "classes",
        label: "Classes",
        icon: <HiOutlineUsers size={20} />,
        component: <Classes />,
        sidebar: true
    },
]