import { validateString } from './validateString';


describe('Testing validateString', () => {

    test.each([
        ['машина', 'Машина'],
        [' Машина ','Машина'],
        ['маШиНа','Машина'],
        [' мАшиНА ','Машина'],
    ])('.validateString(%s)', (a,expected) => {
        expect(validateString(a)).toBe(expected);
    });
});
