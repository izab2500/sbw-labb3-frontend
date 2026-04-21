/**
 * Återställer formulärets inputfält.
 *
 * @param {HTMLInputElement[]} inputs - Lista med input-element som töms
 */
export function resetFormFields(inputs) {
    inputs.forEach(element => element.value = "");
}