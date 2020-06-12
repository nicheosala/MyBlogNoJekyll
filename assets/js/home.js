let previews = document
    .querySelector("main")
    .appendChild(document.createElement("ul"));

fetch("/assets/json/previews.json")
    .then(response => response.json())
    .then(json => json.forEach(
        item => toHTML(item)
    ));

function toHTML(item) {
    let preview = document.createElement("li");
    let {title, summary, date, url} = item;
    preview.innerHTML = `
    <a class="preview" href=${url}>
        <h2 class="title">${title}</h2>
        <p class="summary">${summary}</p>
        <p class="date">${date}</p>
    </a>
    `
    previews.appendChild(preview);
}
