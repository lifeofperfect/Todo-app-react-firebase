import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import "./App.css";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("todos")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <form action="">
        <FormControl>
          <InputLabel>Enter Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo key={todo} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
