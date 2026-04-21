/**
 * Genererar en tabell med arbetserfarenheter när index.html laddas.
 *
 * @param {Object[]} workexperiencesArr - Lista med arbetserfarenheter
 * @returns {HTMLTableElement} Den skapade tabellen med data
 */

export function generateTable(workexperiencesArr) {
    const table = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = "arbetserfarenheter";
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    ["företag", "jobbtitel", "plats", "beskrivning", "hantering"].
        forEach(heading => {
            const th = document.createElement("th");
            th.textContent = heading;
            trHead.appendChild(th)
        })
        thead.appendChild(trHead);
    // Tbody
    const tbody = document.createElement("tbody");
    workexperiencesArr.forEach(wk => {
        const { _id, companyname, jobtitle, location, description } = wk;
        const row = createTr(_id);
        const td1 = createTd(companyname);
        const td2 = createTd(jobtitle);
        const td3 = createTd(location);
        const td4 = createTd(description);
        const tdLast = createTd(null);
        const updateBtn = createBtn("update", "uppdatera");
        const deleteBtn = createBtn("delete", "radera");
        tdLast.append(updateBtn, deleteBtn);
        row.append(td1, td2, td3, td4, tdLast);
        tbody.appendChild(row);
    })
    table.append(caption, thead, tbody);
    return table
}

function createTr(id) {
    const tr = document.createElement("tr");
    tr.id = id;
    return tr;
}

function createTd(workexperienceData) {
    const td = document.createElement("td");
    td.textContent = workexperienceData;
    return td
}

function createBtn(dataAttributeValue, text) {
    const btn = document.createElement("button");
    btn.dataset.action = dataAttributeValue;
    btn.textContent = text;
    return btn
}