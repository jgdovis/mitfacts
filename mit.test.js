var utils  = require('course-utilities');
var mit = utils.load('./mit.js', 'mit');

describe('MIT', () => {

    test('Object properties present', () => {
        expect(mit).toHaveProperty('city');
        expect(mit).toHaveProperty('colors');
        expect(mit).toHaveProperty('mascott');
        expect(mit).toHaveProperty('founded');
        expect(mit).toHaveProperty('motto');
    });

    test('City match', () => {
        expect(mit.city).toBe('Cambridge');
    });

    test('Colors match', () => {
        expect(mit.colors).toContain('Black,steel Gray Cardinal');    
    });

    test('mascot', () => {
        expect(mit.mascott).toBe('Tim the Beaver');
    });

    test('Founded range', () => {
        expect(mit.founded).toBeLessThanOrEqual(1875);
        expect(mit.founded).toBeGreaterThanOrEqual(1850);    
    });

    test('Motto', () => {
        expect(mit.motto).toMatch('mens et manus');
    });
});