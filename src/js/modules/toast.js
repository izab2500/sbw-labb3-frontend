/**
 * Visar ett meddelande högst upp i gränssnittet vid lyckad CRUD-operation
 * och tar bort det efter 4-sekunder.
 *
 * @param {string} message - Meddelande från API-responsen
 */
export function toast(message) {
    const div = document.createElement("div");
    div.classList.add("toast");
    div.textContent = message;
    document.body.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 4000);
}