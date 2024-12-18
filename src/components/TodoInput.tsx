import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import '../scss/TodoInput.scss'

interface Props {
    addTodo: (text: string) => void;
}

const TodoInput = ({addTodo}: Props) => {
    const [text, setText] = useState("")
    const [isError, setIsError] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        if (isError) setIsError(false);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim() === "") {
            setIsError(true); // 에러 상태 설정
            return;
        }
        addTodo(text);
        setText("");
    }

    return(
        <form className="TodoInput" onSubmit={onSubmit}>
            <input 
                className={isError ? "error" : ""}
                placeholder="할 일을 입력하세요"
                value={text}
                onChange={onChange}/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
}
export default TodoInput;