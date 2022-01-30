let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // отдельная рекурсивная функция
    let li='';
    let ul;
    for(key in obj){
        li="<li>"+key+createTreeText(obj[key])+"</li>";
        console.log(li);
    }
    if(li){
       console.log(`li заполнено ${li}`);
    }
    return ul || '';
}

createTree(container, data);