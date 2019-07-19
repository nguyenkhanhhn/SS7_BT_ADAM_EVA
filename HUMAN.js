
let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.hello = function () {
        alert('xin chào! tôi là ' + this.name + '. Giới tính: '+ this.gender + '. Cân nặng: ' + this.weight);
    };

    this.eat = function (apple) {
        if (apple.weight > 0) {
            apple.decrease();
            this.weight ++
        } else {
            alert('hết táo rồi!')
        }
    };

    this.checkApple = function (apple) {
        alert('Khối lượng táo còn lại: ' + apple.getWeight());
    };

    this.checkWeight = function () {
        alert('Cân nặng: ' + this.weight);
    };
};

let apple = new Apple(10);
let adam = new Human('Adam','male', 60);
let eva = new Human('Eva','female', 40);

function hello(human) {
    human.hello();
}

function eat(human) {
    human.eat(apple);
}

function checkApple(human) {
    human.checkApple(apple);
}

function checkWeight(human) {
    human.checkWeight();
}