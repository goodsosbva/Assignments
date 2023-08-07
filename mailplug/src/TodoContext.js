import React, { useReducer, createContext, useContext, useEffect } from "react";
import axios from "axios";

const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        value: [...state.value, action.todo],
      };
    case "TOGGLE":
      return {
        ...state,
        value: state.value.map((todo) =>
          todo.id === action.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case "REMOVE":
      return {
        ...state,
        value: state.value.filter((todo) => todo.id !== action.id),
      };
    case "EDIT":
      return {
        ...state,
        value: state.value.map((todo) =>
          todo.id === action.id ? { ...todo, content: action.content } : todo
        ),
      };
    case "SET_TODOS":
      return action.todos;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  // const [nextId, setNextId] = useState(0);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/todos");
        const todos = response.data;

        // 가장 큰 값 찾기
        const maxId = todos.value.reduce(
          (max, todo) => Math.max(max, todo.id),
          0
        );

        // 가장 id 값 +1
        const nextId = maxId + 1;

        dispatch({ type: "SET_TODOS", todos, nextId });
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }

    fetchTodos();
  }, []);

  const value = {
    state,
    dispatch,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodoState() {
  const { state } = useContext(TodoContext);
  if (!state) {
    throw new Error("Cannot find useTodoState");
  }
  return state;
}

export function useTodoDispatch() {
  const { dispatch } = useContext(TodoContext);
  if (!dispatch) {
    throw new Error("Cannot find useTodoDispatch");
  }
  return dispatch;
}
