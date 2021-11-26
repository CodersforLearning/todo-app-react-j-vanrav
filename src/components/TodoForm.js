import React, {useState} from 'react'
import {Button, TextField} from "@material-ui/core"

function TodoForm({addTodo}){
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    });

    function handleTaskInputChange(e){
        setTodo({ ...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault(); //prevent browser refresh
        if (todo.task.trim()){ //trim removes whitespace
            addTodo({...todo, id: Math.floor(Math.random() * 10000)});
            setTodo({...todo, task:''}); //reset task input
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit">submit</Button>
        </form>
    )
}

export default TodoForm;