import { NavLink, withRouter } from "react-router-dom";

const items = [
    {name: "Home", to:"/", exact:true},
    {name: "New comment", to:"/new-comment"},
]

const Navigation = () => {
    return ( 
        <nav>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.to}>
                            <NavLink 
                                to={item.to} 
                                activeClassName="activeClassName" 
                                exact={item.exact || false}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
     );
}
 
export default withRouter(Navigation);