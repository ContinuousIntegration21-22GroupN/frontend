fetch("http://localhost:3000/characters").then(data => {
    data.json().then(jsonData => {
        let table = document.getElementById("table");

        jsonData.forEach(entry => {
            let tableRow = table.insertRow();

            let nameRow = tableRow.insertCell(0);
            nameRow.innerHTML = entry.characterName;

            let actorNameRow = tableRow.insertCell(1);
            actorNameRow.innerHTML = entry.actorName;

            let siblingRow = tableRow.insertCell(2);
            siblingRow.innerHTML = entry.siblings?.join(', ') || 'No siblings';

            let killedRow = tableRow.insertCell(3);
            killedRow.innerHTML = entry.killed?.join(', ') || 'No kills'
        })
    });
});