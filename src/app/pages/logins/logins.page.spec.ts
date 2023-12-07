import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginsPage } from './logins.page';

describe('LoginsPage', () => {
  let component: LoginsPage;
  let fixture: ComponentFixture<LoginsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
