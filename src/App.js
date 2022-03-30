import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import PostListing from './components/PostListing';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
            <Route exact path='/' exact element={<PostListing/>}/>
            <Route exact path='/product/:id' exact element={<PostDetail/>}/>
            <Route>404 Not Found!</Route>
        </Routes>
 
      </Router>
      
    </div>
  );
}

export default App;
