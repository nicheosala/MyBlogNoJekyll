let text = `
[
    {
      "title": "Ottimizzare Windows 10",
      "summary": "Windows è pieno di funzionalità obsolete, inutili, alcune nocive. Rendiamolo migliore.",
      "date": "1 maggio 2020",
      "url": "/pages/00001.html"
    },
    {
      "title": "Article title",
      "summary": "Article summary",
      "date": "Article date",
      "url": "/pages/#"
    }
]
`

let json = JSON.parse(text);
let previews = document
    .querySelector("main")
    .appendChild(document.createElement("ul"));

json.forEach(item => {
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
    });

/*
for (let i = 0; i < json.length; i++) {

    let preview = document.createElement("li");
    let {title, summary, date, url} = json[i];
    preview.innerHTML = \`
    <a class="preview" href=${url}>
        <h2 class="title">${title}</h2>
        <p class="summary">${summary}</p>
        <p class="date">${date}</p>
    </a>
    \`
    previews.appendChild(preview);
}*/
