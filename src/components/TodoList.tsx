import { Todo } from "../types/Todo";
import TodoListItem from "./TodoListItem";
import '../scss/TodoList.scss'

interface Props {
    todos: Todo[];
    removeTodo: (id: number) => void;
    updateTodo: (id: number, text: string) => void;
    completeTodo: (id:number) => void;
}

const TodoList = ({todos, removeTodo, updateTodo, completeTodo}: Props) => {

    return(
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                    completeTodo={completeTodo}/>
            ))}
        </div>
    );
}
export default TodoList;