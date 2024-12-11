import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudyYear, StudyYearService } from '../../../shared/services/study-year.service';

@Component({
  selector: 'app-add-study-year',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-study-year.component.html',
  styleUrl: './add-study-year.component.scss'
})
export class AddStudyYearComponent {
  studyYear: StudyYear[] = [];
  newProgram: Partial<StudyYear> = { studyYears: '' };

  constructor(private programsService: StudyYearService) {}

  ngOnInit(): void {
    this.getStudyYear();
  }

  getStudyYear() {
    this.programsService.getStudyYear().subscribe((data) => {
      this.studyYear = data;
    });
  }

  createStudyYear() {
    if (this.newProgram.studyYears) {
      this.programsService.createStudyYear(this.newProgram as StudyYear).subscribe(() => {
        this.newProgram.studyYears = '';
        this.getStudyYear();
      });
    }
  }

  deleteProgram(id: number) {
    this.programsService.deleteStudyYear(id).subscribe(() => this.getStudyYear());
  }
}
