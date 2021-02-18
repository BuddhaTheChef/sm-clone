import React, {useState, useEffect} from 'react'
import './App.css'

import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase';

function Post({postId, username, caption, imageUrl}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');


    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()));
            })
        }
        return () => {
            unsubscribe();
        };
    },[postId]);

    const postComment = (event) => {

    };

    return (
        <div className="post">
            <div className="post-header">
                <Avatar
                className="post-avatar"
                alt="user1"
                src=""
                />
                <h3>{username}</h3>
            </div>
            <img className="post-image" src={imageUrl} alt=""/>
            <h4 className="post-text"><strong>{username}</strong> {caption}</h4>

            
                <div className="post-comments">
                    {comments.map((comment) => (
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    ))}
                </div>
            

            <form className="post-commentBox">
                <input className="post-input" type="text" placeholder="Add a caption..." value={comment} onChange={(e) => setComment(e.target.value)}/>
                <button className="post-button" disabled={!comment} type="submit" onClick={postComment}>Post</button>
            </form>
        </div>
    )
}

export default Post;