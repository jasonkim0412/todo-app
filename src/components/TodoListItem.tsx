import {
    MdCheckBoxOutlineBlank,MdCheckBox,MdRemoveCircleOutline,
    MdEdit,MdCheck,MdClear
  } from "react-icons/md";
import { Todo } from "../types/Todo";
import cn from "classnames"
import { useState } from "react";
import '../scss/TodoListItem.scss'
  
interface Props {
    todo: Todo;
    removeTodo: (id: number) => void;
    updateTodo: (id: number, text: string) => void;
    completeTodo: (id: number) => void;
}

const TodoListItem = ({todo, removeTodo, updateTodo, completeTodo}: Props) => {
    const {id, text, checked} = todo;
    const [isUpdate,setIsUpdate] = useState(false);
    const [newText, setNewText] = useState(text);
    const [isError, setIsError] = useState(false);
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewText(e.target.value);
        if (isError) setIsError(false);
    }

    const confirmUpdate = () => {
      if (newText.trim() === "") {
        setIsError(true);
        return;
      }
        updateTodo(id, newText.trim());
        setIsUpdate(false);
    }

    const cancelUpdate = () => {
        setIsUpdate(false);
        setNewText(text);
        setIsError(false);
    }
    
    return(
        <div className="TodoListItem">
  <div className={cn("checkbox", { checked })} onClick={() => completeTodo(id)}>
    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
  </div>
  {isUpdate ? (
    <div className="content">
      <input 
        type="text" 
        className={isError ? "error" : ""}
        value={newText} 
        onChange={onChange} />
      <div className="update-confirm" onClick={confirmUpdate}>
        <MdCheck />
      </div>
      <div className="update-cancel" onClick={cancelUpdate}>
        <MdClear />
      </div>
    </div>
  ) : (
    <div className="content">
      <div className="text">{text}</div>
      <div className="update" onClick={() => setIsUpdate(true)}>
        <MdEdit />
      </div>
      <div className="remove" onClick={() => removeTodo(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )}
</div>

    );
}
export default TodoListItem;