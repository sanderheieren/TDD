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
}


describe('sum of two numbers', () => {

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

})