import { useContext } from "react";
import React from "react";

export const todoContext = React.createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: false,
    },
  ],
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  addTodo: (todo) => {},
  toggleComplete: (id) => {},
});

export const TodoContextProvider = todoContext.Provider;

export const useTodo = () => {
  return useContext(todoContext);
};
