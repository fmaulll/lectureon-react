import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

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
]