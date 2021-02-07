import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  value: 'clear me';
  task:any;
  id:any;
  constructor(private taskService: UtilityService) { }

  ngOnInit(): void {
    this.id = window.location.href.split('/')[4];
    // console.log(id)
    var temp = this.taskService.findTask(this.id);
    console.log(temp)
    console.log(temp.task)
    this.task = temp.task;
  }

  editTask(value){
    this.taskService.editTask(value,this.id)
  }

}
