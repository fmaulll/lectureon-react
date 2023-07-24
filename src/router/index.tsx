import Home from "../pages/Home"
import Lecturer from "../pages/Lecturer"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Classes from "../pages/Classes"
import { AiOutlineHome } from "react-icons/ai"
import { LuNewspaper } from "react-icons/lu"
import { HiOutlineUsers } from "react-icons/Hi"

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
        component: <Home />
    },
    {
        path: "/lecturer",
        name: "lecturer",
        label: "Lecturer",
        icon: <LuNewspaper size={20} />,
        component: <Lecturer />
    },
    {
        path: "/classes",
        name: "classes",
        label: "Classes",
        icon: <HiOutlineUsers size={20} />,
        component: <Classes />
    },
]