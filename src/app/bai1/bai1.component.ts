import { Component, OnInit } from '@angular/core';
import { students } from '../students'
@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  config: any;
  constructor() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.listStudents.length
    };

  }


  pageChanged(event) {
    this.config.currentPage = event;
  }
  searchText
  listStudents = []
  onDeleteStudent(id) {
    let isDelete = confirm("Thay Mua co that su muon xoa khong ?")
    if (isDelete) {
      let temp = this.listStudents.filter(student => {
        return student.id !== id
      })
      this.listStudents = [...temp]
    }
  }

  pageOfItems: Array<any>;
  ngOnInit() {
    this.listStudents = students.map((student, i) => (student));
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    pageOfItems = pageOfItems;
  }

}