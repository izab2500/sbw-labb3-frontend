/**
 * Fyller formuläret med data från en tabellrads celler.
 *
 * @param {HTMLTableCellElement[]} cells - Celler, tds från en tabellrad
 * @param {HTMLInputElement[]} inputs - Lista med inputfält som fylls i
 */
export function populateFormFromRow(cells, inputs) {
    cells.forEach((cell, index) => {
        if (!inputs[index]) return
        inputs[index].value = cell.textContent;

    });
}