class Math {
    constructor() {
        this.value = 0
    }

    add(n1, n2) {
        this.value = n1 + n2;
        return n1 + n2;
    }
    sub(n1, n2) {
        this.value = n1 - n2;
        return n1 - n2;
    }
    get checkValue() {
        return this.value
    }
    addOne(n1) {
        this.value = this.value + n1 + 1;
        return this.value;
    }
    cube(a) {
        this.value = a*a*a;
        return a*a*a;
    }
    remainder(a,b) {
        return b != 0 ? a % b : "NO";
    }

}

class ArrayFunctions {
    constructor() {
        this.list = {}
    }
    pushNumbers(...args) {
        console.log(args)
        for(let i = 0; i < args.length; i++) {
            this.list[i] = args[i]
        }
    }
    getFirstValue() {
        return this.list[0]
    }
}

getFirstValue = (arr) => arr[0]

describe('math operations', () => {

    let math;

    beforeEach(() => {
        math = new Math()
    })

    it('can add', () => {
        math.add(3,5)
        expect(math.value).toBe(8)
    })

    it('can subtract', () => {
        math.sub(5,4)
        expect(math.value).toBe(1)
    })

    it('can add 1', () => {
        math.addOne(2)
        expect(math.value).toBe(3)
        math.addOne(2)
        expect(math.value).toBe(6)
    })

    it('can cube the number', () => {
        // math.cube(4)
        expect( math.cube(4)).toBe(64)
    })

    it('can find remainder', () => {
        expect(math.remainder(-9, 45)).toBe(-9)
        expect(math.remainder(-9, 0)).toBe('NO')
    })

})

describe.skip('array function', () => {

        it('array return the first element', () => {
            const array = new ArrayFunctions()
            array.pushNumbers(1,2,3,4,5)
            expect(array.getFirstValue()).toBe(1)
        })
})