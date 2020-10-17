import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {GridviewComponent} from './gridview.component';



describe('GridviewComponent', () => {
  let component: GridviewComponent;
  let fixture: ComponentFixture<GridviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridviewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
