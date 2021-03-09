import React,{useState} from 'react'
import TodoForm from './TodoForm.js'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


    const Todo = ({todos, removeTodo, updateTodo }) => {
      const intial= {
        id:null,
        text:''
      }
      
        const [edit, setEdit] = useState(intial);    
        const submitUpdate = (text)=> {        
            updateTodo(edit.id, text)
            setEdit({
              id: null,
              text: ''
            });
          };                   
          if (edit.id) {
            return <TodoForm edit={edit} onSubmit={submitUpdate} />;
          }               
    return  (
      <div>
      {
      todos.map((todo, index) => (
       
     //id:todo.id,text:todo.text
        <div className="showlist" key= {index}
         >                    
          <div key={todo.id}  >
            {todo.text}
          </div>
          
          <div className="icons" 
              >
            <RiCloseCircleLine
               className='delete-icon' 
               
                onClick={() => removeTodo(todo.id)}
                />                                  
            <TiEdit  
            className='edit-icon'  
                 
            onClick={()=>setEdit({id:todo.id, text:todo.text} )}
             
              
            />
          </div>
        </div>
      
          ))        
        }
        </div>
        );
  }


export default Todo
