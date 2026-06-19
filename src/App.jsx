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
    setNotification({ message, type });
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

  //On Toggle
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
    const todo = todos.find((t) => t.id === id);

    if (!todo.completed) {
      playSound("completed");
      showNotification("🎉 Great job! Task completed");
    }
  };

  // Key Press Down (add)
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleAddTodo();
    }
  };

  // Edit key press
  const handleEditKeyPress = (e, id) => {
    if (e.key === "Enter") {
      saveEdit(id);
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };

  // Start Editing
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // Update todo
  const saveEdit = (id) => {
    if (!editText.trim()) return;
    console.log(id);

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo,
      ),
    );
    setEditText("");
    setEditingId(null);
    playSound("update");
    showNotification("Task updated successfully!");
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditText("");
    setEditingId(null);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
    playSound("delete");
    showNotification("🗑️ Task deleted successfully!", "info");
  };

  // Clear all completed task
  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
    playSound("deleted");
    showNotification("🗑️ Task deleted successfully!", "info");
  };

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
            onKeyPress={handleKeyPress}
          />
          <TodoList
            todos={todos}
            onDelete={deleteTodo}
            onStartEdit={startEditing}
            onSaveEdit={saveEdit}
            onCancelEdit={cancelEdit}
            editingId={editingId}
            editText={editText}
            onEditTextChange={(e) => setEditText(e.target.value)}
            onEditKeyPress={handleEditKeyPress}
            onToggle={toggleTodo}
          />
          <ClearButton
            // completedTodos={completedTodos}
            onClick={clearCompleted}
          />
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
