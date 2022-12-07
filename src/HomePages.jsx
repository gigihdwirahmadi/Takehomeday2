
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link, Outlet} from 'react-router-dom';
import Todo from './todoList';
import './pages/pages.css';
function HomePages (){
    const navigate = useNavigate();
    const [Todos,setTodos]= useState("");
    const [Answer,setAnswer]= useState([]);
    const [Description,setDescription]= useState("");
    const inputdescription=(e)=>{
        setDescription(e.target.value);
    }
    const inputTodos= (e) => {
        setTodos(e.target.value);
    }
    const addAnswer= ()=>{
        setAnswer([...Answer, {title : Todos, deskripsi :Description}]);
 

    }

const deleteToDo = (value) => {
   setAnswer(Answer.filter((t)=> t !== value ))
};

    return (
        <div class="wall">
             <div></div>
            <div class="input" >
                <div><input type="text"onChange={inputTodos}/></div>
                <textarea onChange={inputdescription}></textarea>
                <input type="submit" onClick={addAnswer} class="submit" value="submit"/>
            </div>
            <div class="hasil">
            {Answer.map((value, index) => {
                        return (
                            <div class="item bg-primary "id={index} >
                                <div deskripsi={value.Description} key={index} index={index} >{value.title}</div>
                                <button class="btn2" onClick={() => {
                                    deleteToDo(value)
                                }}>delete</button>
                                </div>                        )
                    })}
                </div>

        </div>
        
    )
    
}
export default HomePages;