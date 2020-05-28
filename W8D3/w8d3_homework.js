

function titleize(arr, callback) {
 
    let result = arr.map(el => 
        `Mx. ${el} Jingleheimer Schmidt` 
    );

    callback(result);
};

function printCallback(arr) {
    arr.forEach(el => console.log(el));
};

titleize(["Mary", "Brian", "Leo"], printCallback);


function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}

Elephant.prototype.grow = function() {
    this.height += 12;
}

Elephant.prototype.addTrick(trick) = function() {
    this.tricks.push(trick);
}

Elephant.prototype.play = function() {
    console.log(`${this.name} is ${this.tricks}!`);
}

Elephant.paraderHelper = function(elephant) {
    console.log(`${elephant.name} is trotting by!`);
}

function dinerBreakfast() {
    let order = "I'd like cheesey scrambled eggs please";
    console.log(order);

    return function (newOrder) {
        console.log(`${order.slice(0, order.length - 7)} and ${newOrder} please.`);
    }
}


dinerBreakfast('orange juice');

