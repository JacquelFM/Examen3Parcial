import Nodo from "./Nodo.js";
import FIFO from "./FIFO.js";

class Main {
    constructor() {
        let fifo = new FIFO();

        document.querySelector("#btnAgregar").addEventListener("click", () => {

            let nodo = new Nodo();

            fifo.agregarNodo();

        });

    }


}

let m = new Main();