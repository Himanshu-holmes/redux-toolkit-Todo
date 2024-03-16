import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
        console.log("state : ", state.todos)
        console.log("action : ", action.payload)
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
       console.log("action.payload", action.payload);
     
      state.todos =  state.todos.forEach((todo) => {
        // if(todo.id === action.payload.id){
        //     todo.text = action.payload.text;
        //   }else {
        //     state.todos;
        //   }

        console.log("todo from reducer : ",todo);
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
