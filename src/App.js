import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./page/home-page"
import UserInfo from "./page/Infor-page"
import Library from "./page/lib-page"
import Love from "./page/love-page"
import Albums from "./page/albums-page"
import Collection from "./page/collection-page"
function App() {
  return (
    <div className="App">
      <Router>

        <Route path="/" exact component={Home} />
        <Route path="/my-information" exact component={UserInfo } />
        <Route path="/love" exact component={Love } />
        <Route path="/album" exact component={Albums } />
        <Route path="/album/:id" exact component={Collection } />
        <Route path="/library" exact component={Library } />
        

      </Router>
    </div>
  );
}

export default App;
