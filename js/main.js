import Nodo from "./Nodo.js";
import FIFO from "./FIFO.js";

class Main {
    constructor() {
        let fifo = new FIFO();

        document.querySelector("#btnAgregar").addEventListener("click", () => {
            let intNodo = document.querySelector("#num").value;
            let intPrioridad = document.querySelector("#prioridad").value;

            fifo.agregarNodo(new Nodo(
                intNodo,
                intPrioridad,
                null
            ));

        });

    }


}

let m = new Main();