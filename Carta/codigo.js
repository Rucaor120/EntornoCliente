class excepcionCarta extends Error {
    constructor (message){
        super(message);
        this.name = "ExcepcionesCarta";
    }
}

class carta {
    constructor(numero = 1, palo = "r") {
        if(numero < 1 && numero > 13 || palo !== "t" && "r" && "p" && "c"){
            throw new excepcionCarta("El palo/numero no es correcto");
        } else{
        this.numero = numero;
        this.palo = palo;
        }
    }

    static clonar(copia) {
        return new Carta(copia.getNumero(), copia.getPalo());
    }

    getNumero() {
        return this.numero;
    }

    getPalo() {
        return this.palo;
    }

    setNumero(numero) {
        if (numero > 13 || numero < 1) {
            return console.log("El numero debe ser entre 1 y 13");
        } else {
            this.numero = numero;
        }
    }

    setPalo(palo) {
        if (palo != "c" || "p" || "r" || "t") {
            return console.log("Debe contener la leta c,p,r o t");
        } else {
            this.palo = palo;
        }
    }
    mostrarCarta() {
        const nombreNumero = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Reina", "Rey"];

        let nombrePalo;
        switch (this.getPalo()) {
            case "c":
                nombrePalo = "Corazones";
                break;
            case "p":
                nombrePalo = "Picas";
                break;
            case "r":
                nombrePalo = "Rombos";
                break;
            case "t":
                nombrePalo = "Tréboles";
                break;
            default:
                nombrePalo = "Desconocido";
                break;
        }

        const texto = `${nombreNumero[this.getNumero() - 1]} de ${nombrePalo}`;
        console.log(texto);
        return texto;
    }

    comparar(copia) {
        const ordenPalos = { t: 4, r: 3, p: 2, c: 1 };

        if (this.getNumero() !== copia.getNumero()) {
            return this.getNumero() > copia.getNumero() ? 1 : -1;
        }
        if (ordenPalos[this.getPalo()] > ordenPalos[copia.getPalo()]) {
            return 1;
        } else if (ordenPalos[this.getPalo()] < ordenPalos[copia.getPalo()]) {
            return -1;
        } else {
            return 0;
        }
    }

}

try{
        let c1 = new Carta(14, "k");
    } catch(e){
        console.log(e.message);
    }