import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Element {
  name: string;
  brand: string;
  category: string;
  element: string;
  [key: string]: any;
}

const ELEMENT_DATA: Element[] = Array.from({ length: 3 }, (_, i) => ({
  select: false,
  name: `Item ${i + 1}`,
  brand: `Brand ${i + 1}`,
  category: `Category ${Math.floor(Math.random() * 10 + 1)}`,
  element: `Element ${i + 1}`,
  col1: `Data ${i + 1}`,
  col2: `Data ${i + 1}`,
  col3: `Data ${i + 1}`,
  col4: `Data ${i + 1}`,
  col5: `Data ${i + 1}`,
  col6: `Data ${i + 1}`,
  col7: `Data ${i + 1}`,
  col8: `Data ${i + 1}`,
  col9: `Data ${i + 1}`,
  col10: `Data ${i + 1}`,
  col11: `Data ${i + 1}`,
  col12: `Data ${i + 1}`,
  col13: `Data ${i + 1}`,
  col14: `Data ${i + 1}`,
  col15: `Data ${i + 1}`,
  col16: `Data ${i + 1}`,
  col17: `Data ${i + 1}`,
  col18: `Data ${i + 1}`,
  col19: `Data ${i + 1}`,
  col20: `Data ${i + 1}`,
}));

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    CommonModule,
    FormsModule,
  ],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'brand', 'category', 'element', ...this.getColumns()];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection: Element[] = [];
  isSmallScreen: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });

    this.dataSource.paginator = this.paginator;
  }

  getColumns() {
    return Array.from({ length: 20 }, (_, i) => `col${i + 1}`); 
  }

  toggleSelection(element: Element): void {
    const index = this.selection.indexOf(element);
    if (index === -1) {
      this.selection.push(element);
    } else {
      this.selection.splice(index, 1);
    }
  }

  isAllSelected(): boolean {
    return this.selection.length === this.dataSource.data.length;
  }

  selectAll(): void {
    if (this.isAllSelected()) {
      this.selection = [];
    } else {
      this.selection = [...this.dataSource.data];
    }
  }
}
