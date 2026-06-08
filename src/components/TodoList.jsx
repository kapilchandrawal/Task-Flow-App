import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  let todos = [];
  let editingId;
  let editText;
  let onToggle;
  let onStartEdit;
  let onSaveEdit;
  let onCancleEdit;
  let onDelete;
  let onEditTextChange;
  let onEditKeyPress;

  return (
    <>
      <div className="space-y-2">
        {todos.map((todo, index) => {
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            editingId={editingId}
            editText={editText}
            onToggle={onToggle}
            onStartEdit={onStartEdit}
            onSaveEdit={onSaveEdit}
            onCancleEdit={onCancleEdit}
            onDelete={onDelete}
            onEditTextChange={onEditTextChange}
            onEditKeyPress={onEditKeyPress}
          />;
        })}
      </div>
    </>
  );
};

export default TodoList;
