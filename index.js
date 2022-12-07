// Your code here
class Polygon {
    constructor(num) {
        this.num = num;
    }
    get countSides() {
        return this.num.length;
    }
    get perimeter() {
        return this.num.reduce((acc, curr) => acc + curr);
    }
}
class Triangle extends Polygon {
    get isValid() {
        let valid = false;
        for (let i = 1; i < this.num.length; i++) {
            if (this.num[i - 1] == this.num[i]) {
                valid = true;
            } else {
                valid = false;
            }
        }
        return valid;
    }
}
class Square extends Polygon {
    get isValid() {
        let valid = false;
        for (let i = 1; i < this.num.length; i++) {
            if (this.num[i - 1] == this.num[i]) {
                valid = true;
            } else {
                valid = false;
            }
        }
        return valid;
    }
    get area() {
        return this.num[0] ** 2;
    }
}