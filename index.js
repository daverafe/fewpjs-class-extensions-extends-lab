// Your code here
class Polygon {
    constructor(integers) {
        this.integers = integers
    }

    get countSides() {
        return this.integers.length 
    }

    get perimeter() {
        return this.integers.reduce(function(total, integer) {
            return total + integer
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        let intArray = this.integers
        if((intArray[0] + intArray[1]) < intArray[2]) {
            return false 
        } else if((intArray[1] + intArray[2]) < intArray[0]) {
            return false 
        } else if((intArray[0] + intArray[2]) < intArray[1]) {
            return false 
        } else {
            return true 
        }
    }
}

class Square extends Polygon {
    get isValid() {
        return new Set(this.integers).size == 1 
    }

    get area() {
        if(this.isValid) {
            return this.integers[0] * this.integers[1]
        }
    }
}