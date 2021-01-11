import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  template: '',
})
// tslint:disable-next-line: component-class-suffix
export class UserInputComponentStub {
  @Input()
  searchButtonText = null;

  @Output()
  searchButtonPressed = new EventEmitter<string | null>();
}
