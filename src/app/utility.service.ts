import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private task:Task[] = [
    {
      id:1,
      task:"Rabi",
      status:false
    }
  ];
  constructor() { }

  getTasks(): Task[]{
    return this.task;
  }

  addTask(obj){
    this.task.push(obj);
  }

  deleteTask(id){
    for(var i = 0;i < this.task.length;i++)
    {
      if(this.task[i].id == id)
      {
        this.task.splice(i,1);
      }
    }
  }


  findTask(id):any{
    var temp;
    for(var i = 0;i < this.task.length;i++)
    {
      if(this.task[i].id == id)
      {
        temp = this.task[i];
      }
    }
    return temp;
  }

  editTask(task,id){
    for(var i = 0;i < this.task.length;i++)
    {
      if(this.task[i].id == id)
      {
        this.task[i].task = task;
      }
    }
  }
  toggletask(id){
    var status: false;
    for(var i = 0;i < this.task.length;i++)
    {
      if(this.task[i].id == id)
      {
        this.task[i].status = (this.task[i].status)? false:true;
      }
    }
  }
}
