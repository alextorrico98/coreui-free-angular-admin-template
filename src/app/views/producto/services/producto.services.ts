import{HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { productoModel } from "../models/producto.model"

@Injectable({
    providedIn:'root'
})
export class productoService{
    private API_URL= 'http://localhost:8000/producto';
    constructor(private http:HttpClient){

    }
    geTodosLopProductos():Observable<productoModel[]>{
        return this.http.get<productoModel[]>(`${this.API_URL}/traerProductos`);
    }
    agregarproducto(producto:productoModel): Observable<productoModel>{
        return this.http.post<productoModel>(`${this.API_URL}/crear`,producto);
    }
    editarProducto(idproducto:productoModel): Observable<productoModel>{
        return this.http.put<productoModel>(this.API_URL+'/editar/'+ idproducto,idproducto);
    }
    eliminarproducto(idproducto:string): Observable<productoModel>{
        return this.http.delete<productoModel>(this.API_URL+'/eliminar/'+ idproducto);
    }
}