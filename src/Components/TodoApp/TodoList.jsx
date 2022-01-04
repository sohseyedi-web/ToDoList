import React, { useState } from 'react'
import './TodoApp.scss';
import TodoForm from './TodoForm';
import Todo from './Todos';


const TodoList = ({ todos, onRemove, onCompleted, onUpdated }) => {

    const [edit, setEdit] = useState({ id: null, text: '', isCompleted: false });

    const editTodo = (newValue) => {
        onUpdated(edit.id, newValue)
        setEdit({ id: null, text: '' })
    }


    const renderTodo = () => {
        if (todos.length === 0) return <div className='text-center display-6 mt-4'>یادداشتی وارد نشده است</div>
        return (
            <ul ul className='list' dir='rtl' >
                {
                    todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            onRemove={() => onRemove(todo.id)}
                            onCompleted={() => onCompleted(todo.id)}
                            onEdit={() => setEdit(todo)}
                        />
                    ))
                }
            </ul>
        )
    }


    return (
        <div>{edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodo()}</div>
    )


}
export default TodoList
