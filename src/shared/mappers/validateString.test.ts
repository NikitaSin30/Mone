import { error } from 'console';
import { validateString } from './validateString';


describe('Testing validateString', () => {
    test('The first letter is small', () => {
        expect(validateString('машина')).toBe('Машина');
    });
    test('Came with indention', () => {
        expect(validateString(' Машина ')).toBe('Машина');
    });
    test('Came big letter', () => {
        expect(validateString('маШиНа')).toBe('Машина');
    });
    test('Came with indention and small first letter and big others letter', () => {
        expect(validateString(' мАшиНА  ')).toBe('Машина');
    });
});
