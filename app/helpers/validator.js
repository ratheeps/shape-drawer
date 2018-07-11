import {shapes} from "./text-processer";

/**
 * default validation message
 * @type {string}
 */
export const sampleText = "Please enter proper text (example : Draw a square with a side length of 200)";

/**
 * Validate the shape data
 * @param data
 * @returns {*}
 */
export const shapeDataValidator = (data) => {
    let error = null;
    if (!data.shape) {
        return "Shape not found, " + sampleText;
    }
    let properties = shapes[data.shape];

    properties.forEach(function (property) {
        if (!data.properties[property] && !error){
            error = "Can't found the " + property + " for " + data.shape + ""
        }
    });
    return error;
};
