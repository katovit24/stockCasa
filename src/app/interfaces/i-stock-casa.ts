export interface IStockCasa {
    nombre_residencia : string,
    estancias : estancia[],
}

export interface estancia {
    nombre_estancia : string
    contenedores : contenedor[]
}

export interface contenedor {
    nombre_contenedor : string,
    objetos : objeto[]    
}

export interface objeto {
    nombre_objeto : string,
    cantidad : number,
    favorito : boolean,
    ultima_modificacion : string   
}