import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';
import background from './img/Background.png';
import Parks from './components/Parks';

import {withRouter} from 'react-router';



function App(props) {
  return (
    <Router>
      <div style ={{backgroundImage: `url(${background})`}}>
        <Header/>

          <Switch> 
            
            <Route exact path="/" render={(props) => <Feed />} />
            <Route exact path="/:id" render={(props) => <Parks />} />
            
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
