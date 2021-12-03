class Animal{

   private nombreAnimal:string;
   private numeroPatas:Number;
   private carnivoro:boolean;
   private edad:number;

    constructor(nombre:string,patas:number,carne:boolean,eda:number){
        this.nombreAnimal=nombre;
        this.numeroPatas=patas;
        this.carnivoro=carne;
        this.edad=eda;
    }

    public getNombreAnimal(){
        return this.nombreAnimal
    }
    public setNombreAnimal(nuevo:string){
        this.nombreAnimal=nuevo;
    }
    public getNumeroPatas(){
        return this.numeroPatas
    }
    public setNumeroPatas(nuevo:number){
        this.numeroPatas=nuevo;
    }
    public getCarnivoro(){
        return this.carnivoro
    }
    public setCarnivoro(nuevo:boolean){
        this.carnivoro=nuevo;
    }
    public getEdad(){
        return this.edad
    }
    public setEdad(nuevo:number){
        this.edad=nuevo;
    }

    public toString(){
return (this.getNombreAnimal() + ", es carnívoro? " + this.getCarnivoro() + ", tiene " +this.getNumeroPatas() + " patas, y además tiene " + this.getEdad() + " años.");
    }
}
function mostrar(caja:HTMLTextAreaElement){
let animal1 = new Animal("Conejo",4,false,8);
let animal2 = new Animal("León",4,true,12);
let animal3 = new Animal("Paloma",2,false,6);

let lista = new Array<Animal>();
lista.push(animal1);
lista.push(animal2);
lista.push(animal3);
mostrar2(caja,lista);
}

function mostrar2(caja:HTMLTextAreaElement, lista:Array<Animal>){
lista.forEach(animal=>{
caja.innerHTML+=(animal.toString() + '\r\n\r\n');
})
}