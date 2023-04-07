import React, { useEffect, useState } from 'react';
import "./Feed.css";
import InputOption from './InputOption';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function Feed() {

  const [input, setInput] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Simeon Yanev",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput("");
  }

  return (
    <div className='feed'>

      <div className='feed__inputContainer'>

        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type='text' />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>

        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#61BE7E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#E98F70" />
        </div>

      </div>

      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

    </div>
  )
}

export default Feed;