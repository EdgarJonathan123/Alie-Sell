/**
 * El '?' significa que un campo es opcional
 */

export interface UserData {
    nombre: string,
    apellido: string,
    contrasenia: string,
    correo: string,
    telefono: string,
    foto: string,
    genero: string,
    fecha_nacimiento: string,
    direccion: string
}


export interface Cliente {
    idusuario: number,
    nombre?: string,
    apellido?: string,
    contrasenia?: string,
    correo?: string,
    telefono?: string,
    foto?: string,
    genero?: string,
    fecha_nacimiento?: string,
    fecha_registro?:string,
    direccion?: string
}

export interface tableData {
    idusuario?: boolean,
    nombre?: boolean,
    apellido?: boolean,
    contrasenia?: boolean,
    correo?: boolean,
    telefono?: boolean,
    foto?: boolean,
    genero?: boolean,
    fecha_nacimiento?: boolean,
    fecha_registro?:boolean,
    direccion?: boolean
}