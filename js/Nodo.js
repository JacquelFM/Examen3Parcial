export default class Nodo {
    constructor(dato, prioridad, siguiente) {
        this._dato = dato;
        this._prioridad = 0;
        this._siguiente = siguiente;
    }

    get dato() {
        return this._dato;
    }

    get prioridad() {
        return this._prioridad;
    }

    get siguiente() {
        return this._siguiente;
    }

    set siguiente(nuevo) {
        this._siguiente = nuevo;
    }

}