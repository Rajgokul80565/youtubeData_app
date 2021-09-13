import './App.css';
import Youtube from './component/Youtube';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import VideoDetails from './component/VideoDetails'
import DataContext from './Context/YoutubeContext';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <DataContext>
    <Route path="/" exact component={ Youtube} />
    <Route exact path="/video" component={VideoDetails} />
    <Route path = "/video/:id"  component={VideoDetails} />
    </DataContext>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
