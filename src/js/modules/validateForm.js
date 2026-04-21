/**
 * Validerar formdata från inputfält. Returnerar ett objekt
 * som representerar en giltig eller inte giltig arbetserfarenhet 
 *
 * @param {HTMLInputElement[]} inputs - Lista med inputfält
 * @param {Object} workexperienceObj - Objekt som fylls med validerade värden
 * @returns {Object} Objekt som representerar ifylld formdata
 */
export function validateForm(inputs, workexperienceObj) {
    const obj = workexperienceObj;
    console.log(obj)
    inputs.forEach(element => {
        const key = element.name
        const value = element.value;
        if (value !== "") obj[key] = value;
    });
    return obj;
}