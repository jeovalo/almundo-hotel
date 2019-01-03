
export class ErrorDTO  {
  public codigo: number;
  public mensaje: string;

  constructor(codigo: number, mensaje: string) {
    this.codigo = codigo;
    this.mensaje = mensaje;
  }
}
