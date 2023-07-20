import Home from "./pages/Home"
import NewCommentPage from "./pages/NewCommentPage"
import NotFound from "./pages/NotFound"

const routes = [
    {path:"/new-comment", component:NewCommentPage},
    {path:"/", component:Home, exact:true},
    {component:NotFound},
];

export default routes;