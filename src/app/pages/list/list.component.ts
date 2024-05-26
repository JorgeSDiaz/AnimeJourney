import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

interface columnData{
  field: string;
  header: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableModule, InputIconModule, IconFieldModule, InputTextModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public cols!: columnData[];
  public data!: any[];

  ngOnInit() {
    this.data = [
      { name: 'John', age: 30, job: 'Doctor', city: 'New York' },
      { name: 'Doe', age: 25, job: 'Engineer', city: 'California' },
      { name: 'Smith', age: 35, job: 'Teacher', city: 'Texas' },
      { name: 'Johnson', age: 40, job: 'Designer', city: 'Florida' }
    ];

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'age', header: 'Age' },
      { field: 'job', header: 'Job' },
      { field: 'city', header: 'City' }
    ];
  };

  getFilterValue(event: any) {
    return event.target.value;
  }
}
