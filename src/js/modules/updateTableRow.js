/**
 * Uppdaterar tabellceller för en rad i DOM.
 *
 * @param {HTMLTableCellElement[]} cells - Celler i tabellraden som uppdateras
 * @param {Object} workexperienceObj - Objekt med formen:
 * {
 *   companyname: string,
 *   jobtitle: string,
 *   location: string,
 *   description: string
 * }
 */

export function updateTableRow(cells, workexperienceObj) {
    const inputValues = Object.values(workexperienceObj);
    inputValues.forEach((text, index) => {
        if (!text) return
        cells[index].textContent = text;
    })
}