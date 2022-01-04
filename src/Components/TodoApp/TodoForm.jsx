import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import './TodoApp.scss';

const TodoForm = ({ submitTodo, edit }) => {

    const [input, setInput] = useState(edit ? edit.text : '');
    const inputRef = useRef(null)

    useEffect(() => {
        return inputRef.current.focus();
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        if (!input) {
            return toast.error('خطا : یادداشتی را وارد نکردی')
        }

        submitTodo(input);
        setInput('');
    }

    return (
        <form onSubmit={submitHandler} className='form'>
            <input dir='rtl' className='form-input' type="text" ref={inputRef} placeholder={edit && 'یادداشت ...'} value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='submit' className='form-btn'>{edit ? 'ویرایش' : 'ثبت'}</button>
        </form>
    )
}

export default TodoForm
