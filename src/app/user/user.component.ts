import { Component } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  template: `
    <app-user-input
      [searchButtonText]="customSearchButtonText"
      (searchButtonPressed)="search($event)"
    >
    </app-user-input>
    <p>{{ searchResult }}</p>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  searchResult = '';

  customSearchButtonText = 'Hello!';

  constructor(private userService: UserService) {}

  search($event: string): void {
    this.userService.search($event).subscribe(response => {
      this.searchResult = response as string;
    });
  }
}
