import {strBetween, nextWord} from './string'

export const shapes = {
    'isosceles triangle': [
        'height', 'width'
    ],
    'square': [
        'length'
    ],
    'scalene triangle': [
        'height', 'width'
    ],
    'parallelogram': [
        'height', 'width'
    ],
    'equilateral triangle': [
        'length'
    ],
    'pentagon': [
        'length'
    ],
    'rectangle': [
        'height', 'width'
    ],
    'hexagon': [
        'length'
    ],
    'heptagon': [
        'length'
    ],
    'octagon': [
        'length'
    ],
    'circle': [
        'radius'
    ],
    'oval': [
        'width', 'height'
    ]
};

export const processText = (query) => {
    // find the shape
    let shape = findShape(query);
    if (!shape) return {shape: null, properties:{}};
    // find the properties
    let properties = getValues(query, shape);
    return {shape, properties};
};

export const findShape = (query) => {
    // fins the shape
    let shape = strBetween(query, 'draw a', 'with');
    // check shape is exist
    shape = checkShapeIsAvailable(shape) ? shape : strBetween(query, 'draw an', 'with');
    return checkShapeIsAvailable(shape) ? shape : null;
};

export const getValues = (query, shape) => {
    // check shape is exist
    if (!shapes.hasOwnProperty(shape)) {
        return {};
    }
    let properties = {};
    // find values for properties
    shapes[shape].forEach(function (prosperity) {
        let prosperityOf = prosperity + ' of';
        let value = nextWord(query, prosperityOf);
        properties[prosperity] = 0;
        // check value is a number value
        if (!isNaN(value)) {
            properties[prosperity] = parseFloat(value);
        }
    });
    return properties;
};

const checkShapeIsAvailable = (shape) => {
    if (shapes.hasOwnProperty(shape)) {
        return true;
    }
    return false;
};
