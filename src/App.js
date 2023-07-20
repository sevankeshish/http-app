
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Discussion from "./Container/Discussion/Discussion";
import "./App.css";

import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Layout from "./Layout/Layout"

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Layout>
        <Switch>
          {/* <Discussion/> */}
          {routes.map((item, index) => (
            <Route {...item} key={index}/>
          ))}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
