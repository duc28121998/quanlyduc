import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap2',
  templateUrl: './baitap2.component.html',
  styleUrls: ['./baitap2.component.css']
})
export class Baitap2Component {
  students = 
  [
    {
      fullname: 'Nguyễn Văn Tèo',
      birth: '20-02-1999',
      gender: 'Nam',
      mark: '8.5',
      photo: '../assets/img/1.png'

    },
    {
      fullname: 'Phan Thị Nở',
      birth: '20-12-1999',
      gender: 'Nữ',
      mark: '8.5',
      photo: '../assets/img/2.png'

    },
    {
      fullname: 'Nguyễn Khá Bảnh',
      birth: '20-01-2000',
      gender: 'Nam',
      
      photo: '../assets/img/3.png',
      mark: '8.5'
    },
    
  ]

}