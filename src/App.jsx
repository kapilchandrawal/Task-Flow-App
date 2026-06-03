import React from "react";
import Animate from "./components/Animate";
import Notification from "./components/Notification";
import Header from "./components/Header";
import StatsGrid from "./components/StatsGrid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import ClearButton from "./components/ClearButton";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden">
        <Animate />
        <Notification />

        <div className="max-w-3xl mx-auto relative z-10">
          <Header />
          <StatsGrid />
          <Input />
          <TodoList />
          <ClearButton />
        </div>
      </div>
    </>
  );
};

export default App;
