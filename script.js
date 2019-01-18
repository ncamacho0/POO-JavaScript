

class Forma {
    constructor (ancho, alto, color){
        this.ancho = ancho;
        this.alto = alto;
        this.color = color;
    }
    dibujar(){
        return document.body.innerHTML = `
        <div  style = "
        width: ${this.ancho}px;
        height: ${this.alto}px;
        background: ${this.color};"
        >   
        </div>
        
        `
    }
}

class Cuadrado extends Forma {
    constructor (lado, color){
        super(lado,lado,color)
    }
}

let figuraCuadrado =  new Cuadrado (200,"red");
