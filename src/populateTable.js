const allCharactersUrl = 'http://localhost:3000/characters'

async function fetchAndDisplay (url = allCharactersUrl) {
  try {
    await fetch(url).then(res => {
      res.json().then(jsonData => {
        const table = document.getElementById('table')
        jsonData.forEach(entry => {
          const tableRow = table.insertRow()

          const nameRow = tableRow.insertCell(0)
          nameRow.innerHTML = entry.characterName

          const actorNameRow = tableRow.insertCell(1)
          actorNameRow.innerHTML = entry.actorName

          const siblingRow = tableRow.insertCell(2)
          siblingRow.innerHTML = entry.siblings?.join(', ') || 'No siblings'

          const killedRow = tableRow.insertCell(3)
          killedRow.innerHTML = entry.killed?.join(', ') || 'No kills'
        })
      })
    })
  } catch (e) {
    window.alert(e.message)
  }
}

module.exports = fetchAndDisplay
