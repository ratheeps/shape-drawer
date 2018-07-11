import {findShape, processText} from '../../app/helpers/text-processer';

const isoscelesTriangle = "Draw an isosceles triangle with a height of 200 and a width of 100";
const square = "Draw a square with a side length of 200";
const scaleneTriangle = "Draw a Scalene Triangle with a height of 200 and a width of 100";
const parallelogram = "Draw a Parallelogram with a width of 250 and a height of 400";
const equilateralTriangle = "Draw a equilateral triangle with a length of 300";
const pentagon = "Draw an pentagon with a side length of 200";
const rectangle = "Draw a rectangle with a width of 250 and a height of 400";
const hexagon = "Draw an hexagon with a side length of 200";
const heptagon = "Draw an heptagon with a side length of 200";
const octagon = "Draw an octagon with a side length of 200";
const circle = "Draw a circle with a radius of 100";
const oval = "Draw a oval with a width of 300 and a height of 150";

test('Check finding the shape (isosceles triangle)', () => {
    let response = findShape(isoscelesTriangle);
    expect(response).toEqual("isosceles triangle");
});

test('Check finding the shape (square)', () => {
    let response = findShape(square);
    expect(response).toEqual("square");
});

test('Check finding the shape (scalene triangle)', () => {
    let response = findShape(scaleneTriangle);
    expect(response).toEqual("scalene triangle");
});

test('Check finding the shape (parallelogram)', () => {
    let response = findShape(parallelogram);
    expect(response).toEqual("parallelogram");
});

test('Check finding the shape (equilateral triangle)', () => {
    let response = findShape(equilateralTriangle);
    expect(response).toEqual("equilateral triangle");
});

test('Check finding the shape (pentagon)', () => {
    let response = findShape(pentagon);
    expect(response).toEqual("pentagon");
});

test('Check finding the shape (rectangle)', () => {
    let response = findShape(rectangle);
    expect(response).toEqual("rectangle");
});

test('Check finding the shape (hexagon)', () => {
    let response = findShape(hexagon);
    expect(response).toEqual("hexagon");
});

test('Check finding the shape (heptagon)', () => {
    let response = findShape(heptagon);
    expect(response).toEqual("heptagon");
});

test('Check finding the shape (octagon)', () => {
    let response = findShape(octagon);
    expect(response).toEqual("octagon");
});

test('Check finding the shape (circle)', () => {
    let response = findShape(circle);
    expect(response).toEqual("circle");
});

test('Check finding the shape (oval)', () => {
    let response = findShape(oval);
    expect(response).toEqual("oval");
});


test('Check text processing response (isosceles triangle)', () => {
    let response = processText(isoscelesTriangle);
    expect(response).toEqual({
        shape: 'isosceles triangle',
        properties: {
            width: 100,
            height: 200
        }
    });
});

test('Check text processing response (square)', () => {
    let response = processText(square);
    expect(response).toEqual({
        shape: 'square',
        properties: {
            length: 200,
        }
    });
});

test('Check text processing response (scalene triangle)', () => {
    let response = processText(scaleneTriangle);
    expect(response).toEqual({
        shape: 'scalene triangle',
        properties: {
            height: 200,
            width: 100,
        }
    });
});

test('Check text processing response (parallelogram)', () => {
    let response = processText(parallelogram);
    expect(response).toEqual({
        shape: 'parallelogram',
        properties: {
            height: 400,
            width: 250,
        }
    });
});

test('Check text processing response (equilateral triangle)', () => {
    let response = processText(equilateralTriangle);
    expect(response).toEqual({
        shape: 'equilateral triangle',
        properties: {
            length: 300,
        }
    });
});

test('Check text processing response (pentagon)', () => {
    let response = processText(pentagon);
    expect(response).toEqual({
        shape: 'pentagon',
        properties: {
            length: 200,
        }
    });
});

test('Check text processing response (rectangle)', () => {
    let response = processText(rectangle);
    expect(response).toEqual({
        shape: 'rectangle',
        properties: {
            height: 400,
            width: 250,
        }
    });
});

test('Check text processing response (hexagon)', () => {
    let response = processText(hexagon);
    expect(response).toEqual({
        shape: 'hexagon',
        properties: {
            length: 200,
        }
    });
});

test('Check text processing response (heptagon)', () => {
    let response = processText(heptagon);
    expect(response).toEqual({
        shape: 'heptagon',
        properties: {
            length: 200,
        }
    });
});

test('Check text processing response (octagon)', () => {
    let response = processText(octagon);
    expect(response).toEqual({
        shape: 'octagon',
        properties: {
            length: 200,
        }
    });
});

test('Check text processing response (circle)', () => {
    let response = processText(circle);
    expect(response).toEqual({
        shape: 'circle',
        properties: {
            radius: 100,
        }
    });
});

test('Check text processing response (oval)', () => {
    let response = processText(oval);
    expect(response).toEqual({
        shape: 'oval',
        properties: {
            height: 150,
            width: 300,
        }
    });
});
