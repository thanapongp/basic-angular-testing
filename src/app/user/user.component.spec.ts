import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserInputComponentStub } from '../user-input/user-input.component.sub';
import { UserService } from '../user.service';
import { UserServiceStub } from '../user.service.stub';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserComponent,
        UserInputComponentStub,
      ],
      providers: [
        { provide: UserService, useClass: UserServiceStub }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind searchResult variable to p tag', () => {
    const pTagElement: HTMLParagraphElement = fixture.debugElement.query(By.css('p')).nativeElement;

    component.searchResult = 'testText';
    fixture.detectChanges();

    expect(pTagElement.textContent).toContain('testText');
  });

  it('should call UserService#search when receive searchButtonPressed event from UserInputComponent', () => {
    const userServiceInstance = TestBed.inject(UserService);
    const userServiceSearchSpy = spyOn(userServiceInstance, 'search').and.callThrough();
    const userInputComponentInstance: UserInputComponentStub = fixture.debugElement.query(
      By.css('app-user-input')
    ).componentInstance;

    userInputComponentInstance.searchButtonPressed.emit('testText');

    expect(userServiceSearchSpy).toHaveBeenCalledOnceWith('testText');
  });
});
