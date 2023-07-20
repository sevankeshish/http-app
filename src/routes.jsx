import FullComment from "./pages/FullComment/FullComment";
import Home from "./pages/Home"
import NewComment from "./pages/NewComment/NewComment";
import NotFound from "./pages/NotFound"

const routes = [
    {path:"/comment/:id" , component:FullComment},  
    {path:"/new-comment", component:NewComment},
    {path:"/", component:Home, exact:true},
    {component:NotFound},
];

export default routes;