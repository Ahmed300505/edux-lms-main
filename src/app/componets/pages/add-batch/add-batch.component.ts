import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Batch, BatchService } from '../../../shared/services/batch.service';

@Component({
  selector: 'app-add-batch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.scss'
})
export class AddBatchComponent {
  programs: Batch[] = [];
  newBatch: Partial<Batch> = { batchName: '' };

  constructor(private batchService: BatchService) {}

  ngOnInit(): void {
    this.getBatch();
  }

  getBatch() {
    this.batchService.getBatch().subscribe((data) => {
      this.programs = data;
    });
  }

  createBatch() {
    if (this.newBatch.batchName) {
      this.batchService.createBatch(this.newBatch as Batch).subscribe(() => {
        this.newBatch.batchName = '';
        this.getBatch();
      });
    }
  }

  deleteBatch(id: number) {
    this.batchService.deleteBatch(id).subscribe(() => this.getBatch());
  }

}
