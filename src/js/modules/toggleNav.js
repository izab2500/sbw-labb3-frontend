/**
 * Visar eller döljer primärnavigeringen på mindre skärmstorlekar.
 *
 * @param {Event} evt - Event-objektet från klicket
 * @param {HTMLDivElement} hamburgerIcon - Ikon för meny (hamburger)
 * @param {HTMLDivElement} closeIcon - Ikon för stäng (X)
 * @param {HTMLElement} nav - Navigering som togglas
 */

export function toggleNav(evt, hamburgerIcon, closeIcon, nav) {
    const btn = evt.target.closest("button")
    if (!btn) return
    hamburgerIcon.classList.toggle("icon-hidden");
    closeIcon.classList.toggle("icon-hidden");
    nav.classList.toggle("nav-hidden");
}