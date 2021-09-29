class Triangle {
    constructor(s1,s2,s3) {
        
        this.s1 = s1 || 0;
        this.s2 = s2 || 0;
        this.s3 = s3 || 0;
        this.base = s1;
        this.height = s2;
        console.log(this.s1,this.s2,this.s3);

    }

    get sides() {
        return [this.s1, this.s2, this.s3]
    }
    get area () {
        return this.base * this.height / 2;
    }

    addSide(length) {
        if (this.s1 === 0) {
            this.s1 = length
        } else if (this.s2 === 0) {
            this.s2 = length
        } else if (this.s3 === 0) {
            this.s3 = length
        } else {
            return "All sides are taken"
        }
    }
    get nextEdge() {
        this.s3 = (this.s1 + this.s2 - 1)
        return this.s3
    }

}

describe('Can calculate with triangle', () => {

    let triangle;

    // beforeEach(() => {
    //     triangle = new Triangle(3,4,5)
    // }) 

    it.skip('can find sides', () => {
        const expected = [4,3,5]
        expect(triangle.sides).toEqual(expect.arrayContaining(expected))
    })

    it.skip('can find the area based on height and base', () => {
        
        expect(triangle.area).toBe(3*4/2);
    })

    it('can find the maximum edge of a triangle', () => {
        triangle = new Triangle()
        triangle.addSide(8)
        triangle.addSide(10)
        console.log(triangle.sides);
        
        
        expect(triangle.nextEdge).toBe(17)
        console.log(triangle.sides);
    })
})