class Converter {
    constructor(){
        this.hour = 0;
    }
    addHour(h) {
        this.hour = h;
    }
    get howManySeconds() {
        return this.hour * 60 * 60;
    }


}

describe('can convert hour to second', () => {

    let hourToSecondConverter;

    it('can add the hour', () => {
        hourToSecondConverter = new Converter()
        hourToSecondConverter.addHour(5);

        expect(hourToSecondConverter.howManySeconds).toBe(5*60*60);
    })
})