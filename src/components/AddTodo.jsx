import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, inputHandler, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const input = useSelector((state) => state.input);
  const isEditing = useSelector((state) => state.isEditing);
  const todoId = useSelector((state) => state.todoId);  

  const todoHandler = (e) => {
    e.preventDefault();
    if (isEditing) {
      console.log(todos);
      updateTodoHandler(e);
      return;
    }
    addTodoHandler(e);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
   
    console.log(" clicked added");
    dispatch(addTodo(input));
  
  };

  const updateTodoHandler = (e) => {
    e.preventDefault();

    console.log("todo input", input);
    dispatch(
      updateTodo({
        id: todoId,
        text: input,
      })
    );
  
   
 
  };

  return (
    <form onSubmit={todoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => dispatch(inputHandler(e.target.value))}
      />
      {isEditing ? (
        <button type="submit">Update</button>
      ) : (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      )}
    </form>
  );
}

export default AddTodo;
