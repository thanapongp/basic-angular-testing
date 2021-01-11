import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  template: `
    <input [(ngModel)]="searchTerm" />
    <button (click)="searchButtonPressed.emit(searchTerm)">
      {{ searchButtonText }}
    </button>
  `,
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Input()
  searchButtonText: string | null = 'Search';

  @Output()
  searchButtonPressed = new EventEmitter<string | null>();

  searchTerm = '';
}
