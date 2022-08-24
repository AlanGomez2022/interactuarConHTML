const PREFERIDA=7000;
const PLATEA=5500;
const SUPERPULLMAN=5000;
const PLATEACYL=4000;
const LATERAL=3500;
const CABECERA=3000;
const IVA=0.21;
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  CLASES Y OBJETOS                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////



class Persona{
    constructor(name,numero){
        this.nombre= name;
        this.dni=numero;
    }
    mostrarse(){
        return ("Nombre: "+this.nombre+ " DNI: "+this.dni);
    }
}
class CompraTicket{
    constructor(comprador){
        this.personas=[comprador];
        this.sector="";
        this.precioSector=0;
        this.subtotal=0;
        this.total=0;
        this.codigosDecuento=["A123","B234","C567","D891"];
        
    }
    agregarPersona(persona){
        this.personas.push(persona);
    }
    calcularCosto(){
        this.subtotal= this.precioSector*(this.personas.length)

    }
    calcularCostoConIva(){
        this.total=this.subtotal*IVA+this.subtotal        
    }
    elegirSector(zona){
        switch (zona){
            case 1:{
                this.sector= "Platea Preferida";
                this.precioSector=PREFERIDA;
                break;
            }               
            case 2:{
                this.sector= "Platea";
                this.precioSector=PLATEA;
                break;
            }               
           case 3:{
                this.sector= "Super Pullman";
                this.precioSector=SUPERPULLMAN;
                break;
            }               
            case 4:{
                this.sector= "Platea C y L";
                this.precioSector=PLATEACYL;
                break;
            }                
            case 5:{
                this.sector= "Pullman Lateral";
                this.precioSector=LATERAL;
                break;
            }
            case 6:{
                this.sector= "Cabecera";
                this.precioSector=CABECERA;
                break;
            }
            default:
                break;   
        }
       
    }
    
    mostrarCompra(){
        let titulo= document.createElement("h2");
        titulo.className="cont";
        let caja=document.getElementById("contCompra")
        titulo.innerHTML=`Se ha generado una compra por ${+this.personas.length} Tickets, que corresponden a: `;
        caja.append(titulo);
        let people=new Persona();
        for (people of this.personas){
            let elemento=document.createElement("h3")
            let textoPersona=people.mostrarse()
            elemento.className="contChico"
            elemento.innerHTML=`${textoPersona}`
            caja.append(elemento)
            let subElemento=document.createElement('h4')
            subElemento.className="contMasChico"
            subElemento.innerHTML=`${this.sector} - Valor: $ ${this.precioSector} + IVA`
            caja.append(subElemento);
        }
        let subFinal=document.createElement("h3");
        subFinal.className="contChico";
        let final=document.createElement("h2");
        final.className="cont"
        subFinal.innerHTML=`Subtotal: $  ${this.subtotal} + IVA`
        caja.append(subFinal)
        final.innerHTML=`TOTAL A PAGAR: $ ${this.total}`
        caja.append(final)
        }
    }
// FUNCIONES QUE USA EL PROGRAMA PRINCIPAL/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarSector(){
    let lugar=0;
       while(true){
        lugar=parseInt(prompt("Ingrese el numero del sector que desea:\n \
        1- Platea Preferida ($"+PREFERIDA+" + IVA) \n \
        2- Platea ($"+PLATEA+" + IVA) \n \
        3- Super Pullman($"+SUPERPULLMAN+" + IVA) \n \
        4- Platea C y L ($"+PLATEACYL+" + IVA) \n \
        5- Pullman Lateral ($"+LATERAL+" + IVA) \n \
        6- Cabecera ($"+CABECERA+" + IVA)"));
        if ( typeof(lugar)==="number" && lugar>0 && lugar<7){
           return lugar;
        }else{
            alert ("ERROR!!! Opcion incorrecta!! vuelva a ingresar una opcion");
        }
        }
}
function validarCantEntradas(){
    let cantidad=parseInt(prompt("Ingrese la cantidad de entradas que desea comprar \n \
    (Recuerde que solo se permiten 4 entradas por compra):  "));
    while(true){
        if (typeof(cantidad)==="number" && cantidad>0 && cantidad<=4){
           return cantidad;
        }else{
            alert("ERROR!!! Opcion incorrecta!! ")
            cantidad=parseInt(prompt("Vuelva a ingresar una cantidad de entradas a comprar (4 Maximo por compra):  "));
        }
    }
}

//PROGRAMA PRINCIPAL--------------------------------------------------------------------------------------------------------------------------------------

alert("Bienvenido a EntradasAlan.com");
alert("Comencemos con el proceso de reserva de entradas");
let cantEntradas=validarCantEntradas();
let sector=(validarSector())

if (cantEntradas===1){
    let individuo= new Persona(prompt("Ingrese su nombre y apellido: "),prompt("ingrese su numero de DNI: "));
    let compra= new CompraTicket(individuo);
    compra.elegirSector(sector);
    compra.calcularCosto();
    compra.calcularCostoConIva();
    compra.mostrarCompra();
}else{
    let individuo= new Persona(prompt("Ingrese su nombre y apellido: "),prompt("ingrese su numero de DNI: "));
    let compra= new CompraTicket(individuo);
    compra.elegirSector(sector);
    for(let i=1;i<cantEntradas;i++){
        let personita= new Persona()
        personita.nombre=prompt("Ingrese el nombre de la siguiente persona que lo acompañará: ");
        personita.dni=prompt("Ingrese el DNI de esa persona:");
        compra.agregarPersona(personita);
        
    }
    compra.calcularCosto();
    compra.calcularCostoConIva();
    compra.mostrarCompra();
}


