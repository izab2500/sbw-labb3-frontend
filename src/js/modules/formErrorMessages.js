/**
 * Visar eller döljer felmeddelanden i formuläret.
 *
 * @param {HTMLDivElement[]} divErrs - Lista med div-element för felmeddelanden
 * @param {Object} workexperienceObj - Objekt med formen:
 * {
 *   companyname: "" | värde,
 *   jobtitle: "" | värde,
 *   location: "" | värde,
 *   description: "" | värde
 * }
 * @param {string} msg - Felmeddelande som visas vid tomma fält
 */
export function formErrorMessages(divErrs, workexperienceObj, msg) {
    const values = Object.values(workexperienceObj);
    values.forEach((value, index) => {
        if (values[index] === "") {
            divErrs[index].classList.add("form-error");
            divErrs[index].textContent = msg;
        } else {
            divErrs[index].classList.remove("form-error");
            divErrs[index].textContent = "";
        }
    });
}