import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  standalone: true,
  imports: [
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    CommonModule
  ],
})
export class FiltersComponent {
  searchQuery: string = '';
  options = ['Amazon Backend', 'Amazon Update', 'August 27 Test', 'Item 4', 'Item 5'];
  selectedOptions: string[] = [];

  isSelected(option: string): boolean {
    return this.selectedOptions.includes(option);
  }

  toggleSelection(option: string): void {
    if (this.isSelected(option)) {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    } else {
      this.selectedOptions.push(option);
    }
  }
}