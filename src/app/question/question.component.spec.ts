import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import {By} from "@angular/platform-browser";

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should title has the value', () => {
    let title = component.title;
    expect(title).toBe('Question Test !');

    //verify the HTML
    const titleHtml = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(titleHtml.innerHTML).toBe('Question Test !');
  });

  it('should have a save face on No Button', () => {
      const btn = fixture.debugElement.nativeElement.querySelector('.btn-no');
      expect(btn.innerHTML).toContain(':(')
  });

  it('should be disables buttons on mark response', () => {
    component.markResponse(true);
    expect(component.disableButtons).toBe(true);
  });

});
