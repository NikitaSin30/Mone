import { validateString } from './validateString';


describe('Testing validateString', () => {
    test('Should return the capital letter', () => {
        expect(validateString('машина')).toBe('Машина');
    });
    test('Should delete spaces', () => {
        expect(validateString(' Машина ')).toBe('Машина');
    });
    test('Should return the first letter big and the rest small', () => {
        expect(validateString('маШиНа')).toBe('Машина');
    });
    test('Should delete spaces ,return big first letter and small others letter', () => {
        expect(validateString(' мАшиНА ')).toBe('Машина');
    });

});
