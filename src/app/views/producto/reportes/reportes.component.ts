import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormModule, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RowComponent,ColComponent,CardComponent,CardHeaderComponent,
    CardBodyComponent,FormModule, FormDirective, FormLabelDirective, 
    FormControlDirective, ButtonDirective, NgStyle,TextColorDirective,
    ReactiveFormsModule,TableDirective,TableColorDirective,TableActiveDirective],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {

}
