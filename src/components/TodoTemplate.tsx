import { useState, useRef } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import '../scss/TodoTemplate.scss'

const TodoTemplate = () => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          text: "리액트 기초 알아보기",
          checked: true,
        },
      ]
      );
      const nextId = useRef(2);

      const addTodo = (text: string) => {
        const newTodo = {
            id: nextId.current,
            text: text,
            checked: false
        }
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
        nextId.current += 1;
      }

      const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
      }

      const updateTodo = (id: number, text: string) => {
        setTodos(todos.map((todo)=> todo.id === id ? {...todo,text:text} : todo))
      }

      const completeTodo = (id: number) => {
        setTodos(todos.map((todo)=> todo.id === id ? {...todo,checked:!todo.checked} : todo))
      }

    return(
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <TodoInput addTodo={addTodo}/>
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                completeTodo={completeTodo}/>
        </div>
    );
}
export default TodoTemplate;