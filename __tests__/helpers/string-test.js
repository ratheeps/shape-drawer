import {strBetween, nextWord} from '../../app/helpers/string';

const stringTest = "Draw an isosceles triangle with a height of 200 and a width of 100";

test('Check strBetween function', () => {
    let response = strBetween(stringTest, 'draw an', 'with');
    expect(response).toEqual("isosceles triangle");
});

test('Check nextWord function', () => {
    let response = nextWord(stringTest, 'height of');
    expect(response).toEqual("200");
});