import Home from "../pages/Home"
import Lecturer from "../pages/Lecturer"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Classes from "../pages/Classes"

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

export const AuthRoutes = [
    {
        path: "/home",
        component: <Home />
    },
    {
        path: "/lecturer",
        component: <Lecturer />
    },
    {
        path: "/classes",
        component: <Classes />
    },
]