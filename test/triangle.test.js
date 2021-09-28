class Triangle {
    constructor(s1,s2,s3) {
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
        this.base = s1;
        this.height = s2;
    }

    get sides() {
        return [this.s1, this.s2, this.s3]
    }
    get area () {
        return this.base * this.height / 2;
    }

}

describe('Can calculate with triangle', () => {

    let triangle;

    beforeEach(() => {
        triangle = new Triangle(3,4,5)
    }) 

    it('can find sides', () => {
        const expected = [4,3,5]
        expect(triangle.sides).toEqual(expect.arrayContaining(expected))
    })

    it('can find the area based on height and base', () => {
        
        expect(triangle.area).toBe(3*4/2);
    })
})