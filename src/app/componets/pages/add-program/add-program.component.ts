import { Component } from '@angular/core';
import { ProgramService, ProgramUni } from '../../../shared/services/program.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-program',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-program.component.html',
  styleUrl: './add-program.component.scss'
})
export class AddProgramComponent {
  batch: ProgramUni[] = [];
  newProgram: Partial<ProgramUni> = { programName: '' };

  constructor(private programsService: ProgramService) {}

  ngOnInit(): void {
    this.loadPrograms();
  }

  loadPrograms() {
    this.programsService.getPrograms().subscribe((data) => {
      this.batch = data;
    });
  }

  addProgram() {
    if (this.newProgram.programName) {
      this.programsService.createProgram(this.newProgram as ProgramUni).subscribe(() => {
        this.newProgram.programName = '';
        this.loadPrograms();
      });
    }
  }

  deleteProgram(id: number) {
    this.programsService.deleteProgram(id).subscribe(() => this.loadPrograms());
  }
}
