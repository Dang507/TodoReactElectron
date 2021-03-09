import React, { useState } from 'react'
import TodoForm from './TodoForm.js';
import Todo from './Todo.js'

function TodoList() {
    const [todos,setTodos]=useState([]);


    const addTodo =todo =>{
     

      const newTodos = [todo,...todos];

      setTodos(newTodos);
      
      
     // console.log(newTodos);
    }
    const updateTodo = (todoId, newValue) => {
       
        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item));
      };

      
      const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };

     
    return (
      <div className="app">
        <h1>hello</h1>
        <TodoForm onSubmit={addTodo}
                  
                    ></TodoForm> 
        <Todo 
                todos={todos}             
                removeTodo={removeTodo}
                updateTodo={updateTodo}
        >

        </Todo>
      </div>
    );
}

export default TodoList
