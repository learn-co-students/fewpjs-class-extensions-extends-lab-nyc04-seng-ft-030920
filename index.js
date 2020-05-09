class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce( ( accumulator, currentValue ) => accumulator + currentValue, 0)
    }

}

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this.array)) return;
        if (this.array.length !== 3) return;
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))    
    }
}

class Square extends Polygon {
    get area() {
        if (!this.isValid) return
        return this.array[0] ** 2
    }

    get isValid() {
        if (!Array.isArray(this.array)) return
        if (this.array.length !== 4) return
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        let side4 = this.array[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))

    }
}