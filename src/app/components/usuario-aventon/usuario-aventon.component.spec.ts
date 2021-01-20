import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAventonComponent } from './usuario-aventon.component';

describe('UsuarioAventonComponent', () => {
  let component: UsuarioAventonComponent;
  let fixture: ComponentFixture<UsuarioAventonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioAventonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAventonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
