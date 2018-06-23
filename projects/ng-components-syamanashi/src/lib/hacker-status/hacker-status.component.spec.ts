import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {HackerStatusComponent} from './hacker-status.component';
import { By } from '@angular/platform-browser';

@Component({
  template: `
      <ss-hacker-status [status]="appStatus"></ss-hacker-status>
    `,
})
class TestHostComponent {
  appStatus: string;
}

describe('HackerStatusComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HackerStatusComponent,
        TestHostComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it(`should set pulse color to green when input is 'safe'`, () => {
    testHost.appStatus = 'safe';
    fixture.detectChanges();

    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;

    expect(pulseEl.classList).toContain('green');
  });

  it(`should set pulse color to green when input is 'safe' (using snapshot testing)`, () => {
    testHost.appStatus = 'safe';
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it(`should set pulse color to red when input is 'danger' (using snapshot testing)`, () => {
    testHost.appStatus = 'danger';
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it(`should set pulse color to yellow when input is 'warning' (using snapshot testing)`, () => {
    testHost.appStatus = 'warning';
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it(`should set pulse color to yellow when input is undefined/null (using snapshot testing)`, () => {
    testHost.appStatus = null;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

});
