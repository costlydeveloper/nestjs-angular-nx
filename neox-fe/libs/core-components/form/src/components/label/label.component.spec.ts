import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestTranslocoModule } from '@team-link/common';
import { LabelComponent } from './label.component';
import { ILabel } from './label.model';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;
  const labelName = 'Test Label';
  const labelId = 'testLabelId';
  const inputConfig: ILabel = {
    showLabel: true,
    name: 'label.testLabel',
    required: true,
    id: 'testLabelId',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        LabelComponent,
        getTestTranslocoModule({
          'label.testLabel': labelName,
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LabelComponent);
    fixture.componentRef.setInput('config', inputConfig);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display label with correct text and required indicator', () => {
    const labelElement: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('label');
    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent).toContain(labelName);
    expect(labelElement.innerHTML).toContain(
      '<span class="text-red-500 text-sm">*</span>',
    );
    expect(labelElement.getAttribute('for')).toEqual(labelId);
  });
});
