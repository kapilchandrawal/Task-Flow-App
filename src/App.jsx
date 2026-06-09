import { React, useState } from "react";
import Animate from "./components/Animate";
import Notification from "./components/Notification";
import Header from "./components/Header";
import StatsGrid from "./components/StatsGrid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import ClearButton from "./components/ClearButton";

const playSound = (data) => {};

const App = () => {
  const STORAGE_KEY = "todos";

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [notification, setNotification] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  console.log("todo", todos);
  

  // Get from localStorage

  // Save to localStorage

  // Show notification
  const showNotification = (message, type = "success") => {
    setNotification({message, type});
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Add todos
  const handleAddTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos([newTodo, ...todos]);
    setInput("");
    playSound("add");
    showNotification("✨ Task added successfully!", "success");
  };

  // Update todo

  // Delete todo

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden">
        <Animate />
        <Notification
          notification={notification}
          onClose={() => setNotification(null)}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <Header />
          <StatsGrid />
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onAdd={handleAddTodo}
          />
          <TodoList />
          <ClearButton />
        </div>
        <style>
          {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
              }
            to {
              opacity: 1;
              transform: translateY(0);
            } 
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(10px);}
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
       `}
        </style>
      </div>
    </>
  );
};

export default App;
