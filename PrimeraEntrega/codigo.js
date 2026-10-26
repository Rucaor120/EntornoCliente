var tiempo = new Date();

function constructor(año,mes,dia,hora,minuto,segundo) {
    if(año == 0 && mes == 0 && dia == 0 && hora == 0 && minuto == 0 && segundo == 0){
        let t = new Date();
        this.año = t.getFullYear();
        this.mes = t.getMonth() + 1;
        this.dia = t.getDate();
        this.hora = t.getHours();
        this.minuto = t.getMinutes();
        this.segundo = t.getSeconds();
    } else {
        this.año = año;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
}

// Métodos asociados al prototipo
constructor.prototype.getAño = getAño;
constructor.prototype.setAño = setAño;
constructor.prototype.getMes = getMes;
constructor.prototype.setMes = setMes;
constructor.prototype.getDia = getDia;
constructor.prototype.setDia = setDia;
constructor.prototype.getHora = getHora;
constructor.prototype.setHora = setHora;
constructor.prototype.getMinuto = getMinuto;
constructor.prototype.setMinuto = setMinuto;
constructor.prototype.getSegundo = getSegundo;
constructor.prototype.setSegundo = setSegundo;

constructor.prototype.getFechaCompleta = getFechaCompleta;
constructor.prototype.getHoraCompleta = getHoraCompleta;
constructor.prototype.isBisiesto = isBisiesto;
constructor.prototype.esMayor = esMayor;

// Getters
function getAño() {
    return this.año;
}

function getMes() {
    return this.mes;
}

function getDia() {
    return this.dia;
}

function getHora() {
    return this.hora;
}

function getMinuto() {
    return this.minuto;
}

function getSegundo() {
    return this.segundo;
}

// Setters
function setAño(año) {
    this.año = año;
}

function setMes(mes) {
    this.mes = mes;
}

function setDia(dia) {
    this.dia = dia;
}

function setHora(hora) {
    this.hora = hora;
}

function setMinuto(minuto) {
    this.minuto = minuto;
}

function setSegundo(segundo) {
    this.segundo = segundo;
}

function getFechaCompleta(){
    return new Date().getDate + "/" + (new Date().getMonth + 1) + "/" + new Date().getFullYear;
};

function getHoraCompleta() {
    return new Date().getHours + ":" + new Date().getMinutes + ":" + new Date().getSeconds;
};

function isBisiesto(){
    if(tiempo.año % 4 === 0){
        if(tiempo.año % 100 === 0){
            if(tiempo.año % 400 === 0){
                console.log("No es bisiesto");
            }
            console.log("Es bisiesto");
        }
        console.log ("No es bisiesto");
    }
};

function esMayor(otroTiempo) {
    if(this.año > otroTiempo.getAño() && this.mes > otroTiempo.getMes() && this.dia > otroTiempo.getDia() && this.hora > otroTiempo.getHora() && this.minuto > otroTiempo.getMinuto() && this.segundo > otroTiempo.getSegundo()){
        return true;
    } else{
        return false;
    }
}

function esMenor(otroTiempo) {
    if(this.año < otroTiempo.getAño() && this.mes < otroTiempo.getMes() && this.dia < otroTiempo.getDia() && this.hora < otroTiempo.getHora() && this.minuto < otroTiempo.getMinuto() && this.segundo < otroTiempo.getSegundo()){
        return true;
    } else{
        return false;
    }
}

function esIgual(otroTiempo) {
    if(this.año === otroTiempo.getAño() && this.mes === otroTiempo.getMes() && this.dia === otroTiempo.getDia() && this.hora === otroTiempo.getHora() && this.minuto === otroTiempo.getMinuto() && this.segundo === otroTiempo.getSegundo()){
        return true;
    } else{
        return false;
    }
}

function sumaHora(otroTiempo) {
    this.hora += otroTiempo.hora();
}

var tiempo2 = new constructor(0,0,0,0,0,0);

console.log(tiempo2);