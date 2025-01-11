import React, { useState, useEffect } from "react";
import { db, collection, addDoc, getDocs, Timestamp } from "./firebase";

const App = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");

  // 댓글 가져오는 함수
  const getComments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "comment"));
      const commentsList = [];
      querySnapshot.forEach((doc) => {
        commentsList.push({ id: doc.id, ...doc.data() });
      });
      setComments(commentsList);
    } catch (error) {
      console.error("Error getting comments: ", error);
    }
  };

  // 댓글 추가하는 함수
  const addComment = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "comment"), {
        name: name,
        contents: contents,
        createdAt: Timestamp.fromDate(new Date()),
      });
      setName("");
      setContents("");
      getComments(); // 댓글 추가 후 댓글 목록 갱신
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  useEffect(() => {
    getComments(); // 컴포넌트가 처음 마운트될 때 댓글 목록을 가져옴
  }, []);

  return (
    <div>
      <h1>Comment System</h1>

      <h2>Add a Comment</h2>
      <form onSubmit={addComment}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter your comment"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          required
        />
        <button type="submit">Add Comment</button>
      </form>

      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.contents} <br />
            <small>
              Posted on {comment.createdAt.toDate().toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
