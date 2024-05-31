import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { productoModel } from "../models/producto.model"
import { productoService } from "../services/producto.services"
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormModule, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RowComponent,FormsModule,ColComponent,CardComponent,CardHeaderComponent,CardBodyComponent,FormModule, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, NgStyle,TextColorDirective,ReactiveFormsModule,TableDirective,TableColorDirective,TableActiveDirective],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  listaProductos: productoModel[] = [];
  productoModelo: productoModel=new productoModel();


  constructor(private productoService:productoService){
  this.getProducto();
}
getProducto(){
  this.productoService.geTodosLopProductos().subscribe({
    next:(respuesta)=>{
      this.listaProductos = respuesta;
    },
    error:(error)=>{
      console.log(error)
    }
  })
}
guardarProducto(){
  this.productoService.agregarproducto(this.productoModelo).subscribe({
    next:(respuesta)=>{
      console.log("se guardo exitosamente",respuesta);
      this.getProducto();
      this.productoModelo=new productoModel();
    },
    error:(error)=>{
      console.log(error)
    }
  })
}
editarProducto()
{
console.log("operacion exitosa")
//this.productoModelo=producto;
this.productoService.editarProducto(this.productoModelo).subscribe({
  next:(respuesta)=>{
    console.log("se modifico exitosamente",respuesta);
    this.getProducto();
    this.productoModelo=new productoModel();
  },
  error:(error)=>{
    console.log(error)
  }
})
}
eliminarProducto(idproducto: productoModel) {
  console.log("item para eliminar", idproducto);
  this.productoService.eliminarproducto(idproducto._id).subscribe({
    next: (respuesta) => {
      console.log("se elimino exitosamente", respuesta);
      this.getProducto();
      this.productoModelo = new productoModel();
    },
    error: (error) => {
      console.log(error);
    }
  });
}
agregar()
{
  console.log(this.productoModelo)
  if(this.productoModelo._id==''){
    console.log("guardar")
  }else
  {
    console.log("editar")
  }
}
 agregarProducto(){
  this.productoService.agregarproducto(this.productoModelo).subscribe({
    next:(respuesta)=>{
      console.log("se guardo exitosamente",respuesta);
      this.getProducto();
      this.productoModelo=new productoModel();
    },
    error:(error)=>{
      console.log(error)
    }
 })
}
verProducto(producto:productoModel){
  this.productoModelo=producto;
}
}
