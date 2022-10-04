import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import "../App.css";

 class TodoList extends React.Component{
        state = {
        task : "",
        taskList : []
        }

        componentDidMount(){
            this.getTaskList();
        }

        getTaskList = () => {
            axios.get('http://localhost:4000/tasks')
            .then((response) => response.data)
            .then(response => this.setState({taskList: response}));
        }

        onDeleteClick = (taskId) => {
            axios.delete(`http://localhost:4000/deleteTasks/${taskId}`)
            this.getTaskList();
        };
        onUpdateClick = (taskName) => {
            axios.Update(`http://localhost:4000/updateTasks/${taskName}`)
            this.getTaskList();
        };
        onAddClick = () => {
            axios.post('http://localhost:4000/addTasks',{
                task: this.state.task
            });
            this.getTaskList();
            this.setState({task:''})
            };
        onSearchClick = () => {
                axios.post('http://localhost:4000/searchTasks',{
                    task: this.state.task
                });
                this.getTaskList();
                this.setState({task:''})
                };

        render(){
            return(
            <div className="App1">
              <h1>Todo List</h1>
              <div className="ui input">
               <input value= {this.state.task} onChange={e=> this.setState({
			    task: e.target.value
			     })} placeholder="add task" />
             </div>
              <button className="ui basic green button" onClick={
		       () => this.onAddClick()} >Add</button>

                <h3> Task Search</h3>

            <div className="ui input">
             <input  type="text" placeholder="search task"  />
             </div>
              <button className="ui basic pink button" onClick={
		       () => this.onSearchClick()} >Search</button>
               <hr  />
      
            <div className="ui cards">
             {this.state.taskList.map((tasks) => (
              <div className="card">
               <div className="content">
                <div className="ui checkbox">
                <input  type="checkbox" name="example" />
                <label>{tasks.taskName}</label>
            </div>
        </div>
            <div className="extra content">
             <div className="ui two buttons">
              <div className="ui basic green button"><button className="btn btn-edit" onClick={()=> this.onUpdateClick(tasks.taskName)}><i className="fa fa-edit"></i></button></div>
               <div className="ui basic red button"><button className="btn" onClick={()=> this.onDeleteClick(tasks.taskId)} ><i className="fa fa-trash" ></i></button></div>
            </div>
         </div>
    </div>
     ))} 
</div>
<button className="ui primary button basic" text-align="right">Delete All</button>      
</div>   
  );
}
 }

export default  TodoList