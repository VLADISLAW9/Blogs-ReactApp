import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import ProfileId from "../pages/ProfileId";
import Home from "../pages/Home";

export const privateRoutes = [
	{ path: '/about', component: About, exact: true },
	{ path: '/posts', component: Posts, exact: true },
	{ path: '/posts/:id', component: PostIdPage, exact: true },
	{ path: '/myprofile', component: MyProfile, exact: true },
	{ path: '/profile/:id', component: ProfileId, exact: true },
	{ path: '/home', component: Home, exact: true },
]

export const publicRoutes = [
    {path:'/login', component: Login, exact: true},
    
]


