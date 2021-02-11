import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h4>Social Media</h4>
        {/* <img className="app-headerImage" src="" alt=""/> */}
      </div>
      <h2>HI, welcome to a new social media</h2>

      <Post username="User1" caption=" Getting coffee with the fam! #brrr" imageUrl=" https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"/>
      <Post username="User2" caption=" Getting coffee with the fam! #brrr" imageUrl="https://images.unsplash.com/photo-1492158244976-29b84ba93025?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60"/>
      <Post username="User3" caption=" Getting coffee with the fam! #brrr" imageUrl="https://images.unsplash.com/photo-1504888527749-e68244b4d3d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"/>
    </div>
  );
}

export default App;
