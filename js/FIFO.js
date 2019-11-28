export default class PriorityFIFO {
    constructor() {
        this._inicio = null;
    }

    agregarNodo(nuevoNodo) {
        let inicio = this._inicio;

        if (nuevoNodo != null) {
            if (nuevoNodo.prioridad == 0) {
                while (inicio.siguiente != null) {
                    inicio = inicio.siguiente;
                }

                inicio.siguiente = nuevoNodo;

            } else if (nuevoNodo.prioridad == 1) {
                let nodoPrioridad = null;
                let cont = 0;

                while (inicio.siguiente != null) {
                    if (inicio.siguiente.prioridad == 1) {
                        nodoPrioridad = inicio.siguiente;
                    } else {
                        cont++;
                    }

                    inicio = inicio.siguiente;
                }

                if (cont != 0) {
                    nuevoNodo.siguiente = nodoPrioridad.siguiente;
                    nodoPrioridad.siguiente = nuevoNodo;
                } else {
                    nuevoNodo.siguiente = this._inicio;
                    this._inicio = nuevoNodo;
                }
            }

        } else {
            this._inicio = nuevoNodo;
        }
    }
}