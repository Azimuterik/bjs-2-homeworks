
function parseCount(num) {
    const count = Number.parseInt(num);
    // console.log(count);
    if (Number.isNaN(count)) {
        throw  new Error("Невалидное значение");
        
     
    } 
        return Number.parseInt(num);
    

}
    

// console.log(parseCount('sdfnbks'));

function validateCount(num) {
    try {
        return parseCount(num);
    }
    catch(error) {
        return error;
    }
    
}


class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (b + c < a) || (a + c < b)) {
                
                throw new Error("Треугольник с такими сторонами не существует");
            }

        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    getPerimeter() {
        const perimetr = this.a + this.b + this.c;
        return perimetr;
    }

    getArea() {
        const halfPerimetr = 0.5 * this.getPerimeter();
        const area = +(Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c))).toFixed(3);
        return area;
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle1 = new Triangle(a, b, c);
        return triangle1;
    }
    catch(err) {
        const  error1 = function() {
            return "Ошибка! Треугольник не существует";
        }
        
        
        
        return {
            getPerimeter: error1,
            getArea: error1,
        }
    }
}



// const Triangle1 = new Triangle(2, 3, 4);
// console.log(Triangle1);