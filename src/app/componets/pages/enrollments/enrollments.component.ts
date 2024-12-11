import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { Student } from '../../../models/StudentEnrollment';
import { StudentService } from '../../../student.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { FilterPipe } from '../../../../filter.pipe';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms'; // Import 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-enrollments',
  standalone: true,
  imports: [ MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,RouterModule,FilterPipe,CommonModule,TableModule,FormsModule],
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss'],
})
export class EnrollmentsComponent implements OnInit {
  displayedColumns: string[] = [
    'studentNumber',
    'name',
    'dateOfBirth',
    'email',
    'status',
    'actions',
  ];
  dataSource = new MatTableDataSource<Student>([]);
  globalFilterValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        console.log('API Response:', data); // Debugging log
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  applyFilter(filterValue: string): void {
    this.globalFilterValue = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: Student, filter: string): boolean => {
      return (
        data.firstName.toLowerCase().includes(filter) ||
        data.lastName.toLowerCase().includes(filter) ||
        data.studentNumber.toString().includes(filter) ||
        data.emailAddress.toLowerCase().includes(filter)
      );
    };
  }

  confirmDelete(student: Student): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.deleteStudent(student.studentID!).subscribe(
          () => {
            Swal.fire('Deleted!', 'Student has been deleted.', 'success');
            this.loadStudents();
          },
          (error) => {
            console.error('Error deleting student:', error);
          }
        );
      }
    });
  }
}