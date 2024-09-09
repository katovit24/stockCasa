import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResidenciasPage } from './residencias.page';

describe('ResidenciasPage', () => {
  let component: ResidenciasPage;
  let fixture: ComponentFixture<ResidenciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
