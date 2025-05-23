import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({ name: "v_productos" })
export class VproductosEntity { 
  @ViewColumn()
  idproducto: number;

  @ViewColumn()
  idvendedor: number;
  
  @ViewColumn()
  nombre: string;

  @ViewColumn()
  descripcion: string;

  @ViewColumn()
  precio: number;

  @ViewColumn()
  nombrevendedor: string;

  @ViewColumn()
  categoria: string;

  @ViewColumn()
  fechacreacion: Date;

  @ViewColumn()
  imagen: string;

}

