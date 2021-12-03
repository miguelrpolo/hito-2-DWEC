var Animal = /** @class */ (function () {
    function Animal(nombre, patas, carne, eda) {
        this.nombreAnimal = nombre;
        this.numeroPatas = patas;
        this.carnivoro = carne;
        this.edad = eda;
    }
    Animal.prototype.getNombreAnimal = function () {
        return this.nombreAnimal;
    };
    Animal.prototype.setNombreAnimal = function (nuevo) {
        this.nombreAnimal = nuevo;
    };
    Animal.prototype.getNumeroPatas = function () {
        return this.numeroPatas;
    };
    Animal.prototype.setNumeroPatas = function (nuevo) {
        this.numeroPatas = nuevo;
    };
    Animal.prototype.getCarnivoro = function () {
        return this.carnivoro;
    };
    Animal.prototype.setCarnivoro = function (nuevo) {
        this.carnivoro = nuevo;
    };
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setEdad = function (nuevo) {
        this.edad = nuevo;
    };
    Animal.prototype.toString = function () {
        return (this.getNombreAnimal() + ", es carnívoro? " + this.getCarnivoro() + ", tiene " + this.getNumeroPatas() + " patas, y además tiene " + this.getEdad() + " años.");
    };
    return Animal;
}());
function mostrar(caja) {
    var animal1 = new Animal("Conejo", 4, false, 8);
    var animal2 = new Animal("León", 4, true, 12);
    var animal3 = new Animal("Paloma", 2, false, 6);
    var lista = new Array();
    lista.push(animal1);
    lista.push(animal2);
    lista.push(animal3);
    mostrar2(caja, lista);
}
function mostrar2(caja, lista) {
    lista.forEach(function (animal) {
        caja.innerHTML += (animal.toString() + '\r\n\r\n');
    });
}
