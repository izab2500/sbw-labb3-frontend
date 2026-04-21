/**
 * Genererar ett formulär och lägger det i ett section-element.
 * Används vid laddning av index.html (initialt display: none)
 * och på add.html.
 *
 * @param {string} heading - Text till formulärets rubrik (h1)
 * @param {string} btnText - Text som visas på knappen
 * @param {string} formClass - Klass för att styra om formuläret ska vara dolt eller synligt
 * @returns {HTMLSectionElement} Section-element som innehåller hela formuläret
 */
export function generateForm(heading, btnText, formClass) {
    const section = document.createElement("section");
    section.classList.add("form");
    if(formClass) section.classList.add(formClass);
    const h1 = document.createElement("h1");
    h1.textContent = heading;
    const form = document.createElement("form");
    form.autocomplete = "off";
    // Div1
    const div1 = createDiv();
    const label1 = createLabel("Vilket företag arbetade du på", "companyname");
    const input1 = createInput("text", "companyname", "Skriv namn på företag...");
    const errorDiv1 = createDiv();
    div1.append(label1, input1, errorDiv1)
    // Div2
    const div2 = createDiv();
    const label2 = createLabel("Vad hade du för position", "jobtitle");
    const input2 = createInput("text", "jobtitle", "Skriv din titel...");
    const errorDiv2 = createDiv();
    div2.append(label2, input2, errorDiv2)
    // Div3
    const div3 = createDiv();
    const label3 = createLabel("var låg arbetet", "location");
    const input3 = createInput("text", "location", "Skriv var arbetsplatsen låg...");
    const errorDiv3 = createDiv();
    div3.append(label3, input3, errorDiv3)
    // Div4
    const div4 = createDiv();
    const label4 = createLabel("Beskriv din arbetsuppgift", "description");
    const input4 = createTextArea("description", "Beskriv din arbetsuppgift...");
    const errorDiv4 = createDiv();
    div4.append(label4, input4, errorDiv4)
    // Button
    const btn = createButton("button")
    btn.id = "formBtn";
    btn.textContent = btnText;
    //
    form.append(div1, div2, div3, div4, btn);
    section.append(h1, form)
    return section

}

function createDiv() {
    return document.createElement("div");
}

function createLabel(text, forText) {
    const label = document.createElement("label")
    label.htmlFor = forText;
    label.textContent = text
    return label
}

function createInput(type, name, placeholder) {
    const input = document.createElement("input");
    input.name = name;
    input.id = name;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

function createTextArea(name, placeholder) {
    const textArea = document.createElement("textarea");
    textArea.name = name;
    textArea.id = name;
    textArea.placeholder = placeholder;
    return textArea;
}


function createButton(type) {
    const btn = document.createElement("button");
    btn.type = type;
    return btn
}