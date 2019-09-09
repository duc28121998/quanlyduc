import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap1',
  templateUrl: './baitap1.component.html',
  styleUrls: ['./baitap1.component.css']
})
export class Baitap1Component{ 
  
  student = {
    fullname: 'Nguyễn Văn Tèo',
    birthday: '20-01-1999',
    gender: 'Nam',
    photo: '../assets/img/7.jpg',
    mark:8.5
  }

}
