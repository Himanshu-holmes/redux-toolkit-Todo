import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }],
    input:"",
    isEditing:false,
    todoId:"",
  };
  
  export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
      inputHandler: (state, action) => {
        state.input = action.payload;
      },
       handleTodoId: (state, action) => {
        state.todoId = action.payload;
       },
      addTodo: (state, action) => {
        state.todos.push({
          id: nanoid(),
          text: action.payload,
        });
        state.input = "";
        state.todoId = "";
        state.isEditing = false;
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);

        state.input = "";
        state.todoId = "";
        state.isEditing = false;

      },
        editTodo: (state, action) => {
          state.isEditing = true;
          state.todoId = action.payload;
        }
      ,
      updateTodo: (state, action) => {
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text,
            };
          }
          return todo;
        });
        state.input = "";
        state.todoId = "";
        state.isEditing = false;
      },
    },
  });
  

export const { addTodo, removeTodo, updateTodo, inputHandler, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
