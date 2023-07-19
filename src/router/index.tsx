import Home from "../pages/Home"
import Lecturer from "../pages/Lecturer"
import Login from "../pages/Login"
import Post from "../pages/Post"
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
    {
        path: "/post",
        component: <Post />
    },
    {
        path: "/lecturer",
        component: <Lecturer />
    },
]