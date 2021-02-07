import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

todoActivity:any=[];
  constructor(private taskService:UtilityService) { }
  value: 'clear me';


  ngOnInit(): void {
    this.todoActivity = this.taskService.getTasks();
  }

  delete(id) {
    this.taskService.deleteTask(id);
  }

  add(task) {
    var newTodo;
        if(this.todoActivity.length == 0)
        {
          newTodo ={
            id:1,
            task:task,
            status:false
          }
        }
        else
        {
          newTodo = {
            id:this.todoActivity[this.todoActivity.length -1].id+1,
            task:task,
            status: false
          };
        }
        this.taskService.addTask(newTodo);
  }

  toggletask(id)
  {   console.log(id);
    this.taskService.toggletask(id);
  }
  
 

}
