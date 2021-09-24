class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }
    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top++;
        this.items[this.top] = value;
    }
    pop() {
        if (this.top < 0) {
            return null;
        }
        const verdi = this.items[this.top];
        this.top--;
        return verdi
    }
}

describe('My Stack', () => {
    let stack;
    
    beforeEach(() => {
        stack = new Stack();
    })

    it('is created empty', () => {

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({}); // checks for the value, and not the object itself
    });

    it('can push to the top', () => {
        stack.push('FIRST')
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('FIRST')
    });

    it('can pop off', () => {
        stack.push('FIRST')
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('FIRST')

        stack.pop()
        expect(stack.top).toBe(-1)
        
    })
})