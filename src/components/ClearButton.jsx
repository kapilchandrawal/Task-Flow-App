import React from "react";

const ClearButton = ({ onClick, completedTodos }) => {
  // if (completedTodos === 0) return null;
  return (
    <button
      onClick={onClick}
      className="mt-4 w-full py-3 backdrop-blur-2xl bg-white/5 text-white/70 border-white/10 hover:bg-white/10
      hover:text-white hover:scale-[1.02] active-scale-95 text-sm transition-all duration-300 rounded-lg font-semibold"
    >
      Clear {completedTodos} completed tasks
    </button>
  );
};

export default ClearButton;
