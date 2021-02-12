import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    })
  }, []);

  return (
    <div className="app">
      <div className="app-header">
        <h4>Social Media</h4>
        {/* <img className="app-headerImage" src="" alt=""/> */}
      </div>
      <h2>HI, welcome to a new social media</h2>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

     </div>
  );
}

export default App;
