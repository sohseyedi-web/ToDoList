import React from 'react'
import './TodoApp.scss';


const Todo = ({ todo, onRemove, onCompleted, onEdit }) => {

    return (
        <li className='list-item' key={todo.id}>
            <div onClick={onCompleted} className={`list-item__text ${todo.isCompleted && `list-finish`}`}>
                {todo.text}
            </div>
            <div className="list-item__actions">
                <button onClick={onEdit}>ویرایش</button>
                <button onClick={onRemove}>حذف</button>
            </div>
        </li>
    )
}

export default Todo
