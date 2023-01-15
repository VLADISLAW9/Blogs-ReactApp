import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import ProfileId from "../pages/ProfileId";
import Home from "../pages/Home";

export const privateRoutes = [
	{ path: '/posts', component: Posts, exact: true },
	{ path: '/posts/:id', component: PostIdPage, exact: true },
	{ path: '/profile/:id', component: ProfileId, exact: true },
	{ path: '/home', component: Home, exact: true },
]

export const publicRoutes = [
    {path:'/login', component: Login, exact: true},
    
]


