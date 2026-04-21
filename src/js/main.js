import '../../src/style.css';

// Moduler
import { toggleNav } from './modules/toggleNav';
import { ApiRequests } from './modules/ApiRequests';
import { generateTable } from './modules/generateTable';
import { generateForm } from './modules/generateForm';
import { workexperienceObj } from './modules/workexperienceObj';
import { validateForm } from './modules/validateForm';
import { resetFormFields } from './modules/resetFormfields';
import { formErrorMessages } from './modules/formErrorMessages';
import { populateFormFromRow } from './modules/populateFormFromRow';
import { updateTableRow } from './modules/updateTableRow';
import { toast } from './modules/toast';

// Global DOM referens
const main = document.querySelector("main");

// Toggla primärnavigation (inte desktop)
const iconsParent = document.querySelector("#icons-parent");
const hamburgerIcon = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");
const nav = document.querySelector("nav");

iconsParent.addEventListener("click", (evt) => {
    toggleNav(evt, hamburgerIcon, closeIcon, nav)
})
//

// Skapa instans för API-requests och ladda data från databas
const fetchMethods = new ApiRequests("http://localhost:5000/api/v1/workexperiences");
const allWorkexperiences = await fetchMethods.get();

// Logik för "DINA ARBETEN"-sidan (index.html)
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    // Ladda data från API
    console.log(allWorkexperiences.message);
    toast(allWorkexperiences.message)
    const wks = allWorkexperiences.data;
    // Tabell wrapper
    const tableParent = document.querySelector("#table-container")
    function load() {
        if (wks.length === 0) {
            tableParent.innerHTML = "Du har inga sparade arbeten 🙁"
            return
        }
        // Skapar och visar tabell
        const table = generateTable(wks)
        tableParent.appendChild(table);
        // Skapar formulär (dolt initialt)
        const sectionForm = generateForm("uppdatera arbete", "uppdatera", "form-hidden");
        main.append(sectionForm)
    }
    load();

    // Hantering av uppdatera och radera
    tableParent.addEventListener("click", async (evt) => {
        const btn = evt.target;
        if (btn.tagName !== "BUTTON") return
        const trEl = btn.closest("tr");
        const rowCells = trEl.querySelectorAll("td:not(:last-child)");
        const id = trEl.id;
        const action = btn.dataset.action;
        // Radera arbetserfarenhet (DOM & databas)
        if (action === "delete") {
            const serverResponse = await fetchMethods.delete(id);
            if (serverResponse.success) trEl.remove();
            console.log(serverResponse.message);
            toast(serverResponse.message);
            return
        }
        // Uppdatera arbetserfarenhet (DOM & databas)
        if (action === "update") {
            // Dom referenser
            const sectionForm = document.querySelector(".form");
            const form = sectionForm.querySelector("form");
            const inputs = form.querySelectorAll("input, textarea");
            const errorDivs = form.querySelectorAll("div > div:last-child");
            const formBtn = document.querySelector("#formBtn");
            const overlay = document.querySelector("#overlay");
            // Visa form och overlay
            sectionForm.classList.remove("form-hidden");
            overlay.classList.remove("form-hidden");
            // Fyll formulär med data från tabellrad
            populateFormFromRow(rowCells, inputs);
            // Stäng form + overlay vid klick på overlay
            overlay.addEventListener("click", () => {
                sectionForm.classList.add("form-hidden");
                overlay.classList.add("form-hidden");
                resetFormFields(inputs);
            })
            // Uppdatera arbetserfarenhet i (DOM & databas)
            formBtn.addEventListener("click", async () => {
                const inps = form.querySelectorAll("input, textarea");
                const wkObj = { companyname: inps[0].value, jobtitle: inps[1].value, location: inps[2].value, description: inps[3].value }
                // Validera formulär
                const formOutput = validateForm(inps, wkObj);
                const hasEmptyFields = Object.values(formOutput).includes("");
                // Hantera felmeddelanden
                formErrorMessages(errorDivs, formOutput, "* Detta fält får inte vara tomt")
                if (hasEmptyFields) return
                // Dölj form och overlay
                sectionForm.classList.add("form-hidden");
                overlay.classList.add("form-hidden");
                // Återställ formfält
                resetFormFields(inps);
                // Uppdatera arbetserfarenhet i (DOM & databas)
                const serverResponse = await fetchMethods.put(id, formOutput);
                if (serverResponse.success) updateTableRow(rowCells, formOutput);
                console.log(serverResponse.message);
                toast(serverResponse.message);
            })
        }
    })
}

/**
 * Hanterar logik för POST-förfrågan till API:et
 */
if (window.location.pathname.includes("add.html")) {
    // Skapa formulär
    const sectionForm = generateForm("lägg till arbete", "spara");
    main.appendChild(sectionForm);
    // DOM referenser
    const inputs = document.querySelectorAll("input, textarea");
    const formBtn = document.querySelector("#formBtn");
    const errorDivs = document.querySelectorAll("form > div > div:last-child");

    formBtn.addEventListener("click", async () => {
        // Validera formulär
        const formOutput = validateForm(inputs, workexperienceObj);
        const hasEmptyFields = Object.values(formOutput).includes("");
        // Hantera felmeddelande
        formErrorMessages(errorDivs, formOutput, "* Detta fält får inte vara tomt")
        if (hasEmptyFields) return
        // Återställ formfält
        resetFormFields(inputs);
        // Spara arbetserfarenhet i databs
        const serverResponse = await fetchMethods.post(formOutput);
        console.log(serverResponse.message);
        toast(serverResponse.message);

    })
}