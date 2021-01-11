import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

import { UserInputComponent } from './user-input.component';

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [UserInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind searchButtonText variable to button text', () => {
    const searchButtonElement: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;

    component.searchButtonText = 'testText';
    fixture.detectChanges();

    expect(searchButtonElement.textContent).toContain('testText');
  });

  it('should bind input value to searchTerm variable', () => {
    const searchInputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    searchInputElement.value = 'testInputValue';
    searchInputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.searchTerm).toBe('testInputValue');
  });

  it('should emit searchButtonPressed event with current searchTerm variable value when click search button', () => {
    const searchButtonElement = fixture.debugElement.query(By.css('button'));
    component.searchTerm = 'testSearchTerm';

    component.searchButtonPressed.pipe(take(1)).subscribe((emitValue: string | null) => {
      expect(emitValue).toBe('testSearchTerm');
    });

    searchButtonElement.triggerEventHandler('click', null);
  });
});
