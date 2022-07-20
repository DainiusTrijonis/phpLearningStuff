const main = document.getElementById('main');

const text = `<p>Jon Smith</p>`;

// insert into main div text
const insertText = (text) => {
    main.innerHTML+= text;
}

for (let i = 0; i < 10; i++) {
    insertText(text);
}

