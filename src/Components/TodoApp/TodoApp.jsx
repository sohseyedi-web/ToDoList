import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Navbar from './../Navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify';
const TodoApp = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (input) => {
        const newTodo = {
            id: Math.floor(Math.random() * 100),
            text: input,
            isCompleted: false
        }
        toast.success('یادداشت جدید ثبت شد')
        setTodos([...todos, newTodo])
    }
    const removeTodo = (id) => {
        const removeItem = todos.filter(i => i.id !== id);
        toast.error('یادداشت حذف شد')
        setTodos(removeItem)
    }
    const completeTodo = (id) => {

        const itemIndex = todos.findIndex(i => i.id === id);
        const selectedTodos = { ...todos[itemIndex] }
        selectedTodos.isCompleted = !selectedTodos.isCompleted;

        const updatedTodos = [...todos];
        updatedTodos[itemIndex] = selectedTodos;
        toast.success('یادداشت تکمیل  شد')
        setTodos(updatedTodos);



    }
    const updateTodo = (id, newValue) => {
        const itemIndex = todos.findIndex(i => i.id === id);
        const selectedTodos = { ...todos[itemIndex] }
        selectedTodos.text = newValue;

        const updatedTodos = [...todos];
        updatedTodos[itemIndex] = selectedTodos;
        toast.warning('یادداشت ویرایش شد')
        setTodos(updatedTodos);
    }

    return (
        <>
            <ToastContainer />
            <Navbar unCompletedItem={todos.filter(t => !t.isCompleted).length} />
            <TodoForm submitTodo={addTodo} />
            <TodoList todos={todos} onRemove={removeTodo} onCompleted={completeTodo} onUpdated={updateTodo} />
        </>
    )
}

export default TodoApp
