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
    IDUSUARIO?: number,
    NOMBRE?: string,
    APELLIDO?: string,
    CONTRASENIA?: string,
    CORREO?: string,
    TELEFONO?: string,
    FOTO?: string,
    GENERO?: string,
    FECHA_NACIMIENTO?: string,
    FECHA_REGISTRO?: string,
    DIRECCION?: string
}

export interface UserClient {
    ID?: number,
    USERNMAE?: string,
    CONTRASENIA?: string,
    NOMBRE?: string,
    APELLIDO?: string,
    CORREO?: string,
    TELEFONO?: string,
    FOTOGRAFIA?: string,
    GENERO?: string,
    FECHA_NACIMIENTO?: string,
    FECHA_REGISTRO?: string,
    DIRECCION?: string,
    ESTADO?: number,
    ROL?: string
}