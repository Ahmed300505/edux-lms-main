import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramUni } from '../../../shared/services/program.service';
import { AuthService } from '../../../service/auth.service';
import { Enrollment, StudentEnrollmentService } from '../../../shared/services/student-enrollment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student-enrollment',
  standalone: true,
  imports: [
    FormsModule,  // Import Angular FormsModule
    ReactiveFormsModule,
    CommonModule, // Add this for NgFor and other common directives
    // Import Angular ReactiveFormsModule
  ],
  templateUrl: './add-student-enrollment.component.html',
  styleUrls: ['./add-student-enrollment.component.scss'] // Fixed typo: "styleUrl" -> "styleUrls"
})
export class AddStudentEnrollmentComponent {
  studentForm!: FormGroup;
  programs: any[] = [];
  batches: any[] = [];
  studyYears: any[] = [];
  batch: ProgramUni[] = [];
  newProgram: Partial<ProgramUni> = { programName: '' };
  userId: number | null = null;
  selectedProgram: number | null = null;
  selectedBatch: number | null = null;
  selectedStudyYear: number | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private studentService: StudentEnrollmentService
  ) {}
  currentUser: any;

  ngOnInit(): void {
    const userInfo = this.authService.getUserId();
    this.userId = userInfo.userId;
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
    if (this.userId === null) {
      console.error("User ID or username could not be retrieved.");
      return;
    }

    // Initialize the form with validators
    this.studentForm = this.fb.group({
      programID: ['', Validators.required],
      batchID: ['', Validators.required],
      studyYearID: ['', Validators.required],
    });

    this.loadUserEnrollment();
    this.loadDropdownData();
  }

  loadDropdownData() {
    this.studentService.getDropdownData().subscribe({
      next: (data) => {
        this.programs = data.programs || [];
        this.batches = data.batches || [];
        this.studyYears = data.studyYears || [];
      },
      error: (err) => {
        console.error('Error fetching dropdown data:', err);
      },
    });
  }
  
onSubmit() {
  if (this.studentForm.invalid) return;
  const newEnrollment: Enrollment = {
    ...this.studentForm.value,
    userId: this.userId!,
    createdAt: new Date(),
    isActive: true,
  };

  this.studentService.saveStudentRegistration(newEnrollment).subscribe({
    next: () => {
      alert('Enrollment created successfully!');
      this.studentForm.reset();
      this.loadUserEnrollment(); // Reload enrollments
    },
    error: (err) => {
      console.error('Error saving enrollment:', err);
    },
  });
}


  loadUserEnrollment() {
    this.studentService.getActiveEnrollments().subscribe((data) => {
      const enrollment = data.find((enroll: Enrollment) => enroll.userId === this.userId);
      if (enrollment) {
        this.selectedProgram = enrollment.programID;
        this.selectedBatch = enrollment.batchID;
        this.selectedStudyYear = enrollment.studyYearID;
      }
    });
  }

  isProgramDisabled(programID: number): boolean {
    return this.selectedProgram === programID;
  }

  isBatchDisabled(batchID: number): boolean {
    return this.selectedBatch === batchID;
  }

  isStudyYearDisabled(studyYearID: number): boolean {
    return this.selectedStudyYear === studyYearID;
  }
}
