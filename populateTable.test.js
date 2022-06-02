const fetchAndDisplay = require('./populateTable');
const allCharactersUrl = "http://localhost:3000/characters";
const oneCharacterUrl = "http://localhost:3000/character/";
const mockCharacterData = [
    {
        "id": "1",
        "characterName": "Arya Stark",
        "houseName": "Stark",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5MTYwNDc0OF5BMl5BanBnXkFtZTcwOTg2NDg1Nw@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5MTYwNDc0OF5BMl5BanBnXkFtZTcwOTg2NDg1Nw@@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
        "characterLink": "/character/ch0158604/",
        "actorName": "Maisie Williams",
        "actorLink": "/name/nm3586035/",
        "siblings": [
            "Robb Stark",
            "Sansa Stark",
            "Bran Stark",
            "Rickon Stark"
        ],
        "killed": [
            "Red Keep Stableboy",
            "Frey Soldier #1",
            "Polliver",
            "Rorge",
            "Ghita",
            "Meryn Trant",
            "The Waif",
            "Black Walder Rivers",
            "Lothar Frey",
            "Walder Frey",
            "Petyr Baelish",
            "The Night King",
            "White Walker",
            "Viserion"
        ],
        "parents": [
            "Eddard Stark",
            "Catelyn Stark"
        ],
        "guardedBy": [
            "Nymeria"
        ]
    },
    {
        "id": "2",
        "characterName": "Brienne of Tarth",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDY4NzgzOV5BMl5BanBnXkFtZTcwNDM5ODg4OQ@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDY4NzgzOV5BMl5BanBnXkFtZTcwNDM5ODg4OQ@@._V1_.jpg",
        "characterLink": "/character/ch0254503/",
        "actorName": "Gwendoline Christie",
        "actorLink": "/name/nm3729225/",
        "kingsguard": true,
        "killed": [
            "Soldier Tom",
            "Stannis Baratheon",
            "Bolton Officer"
        ],
        "serves": [
            "Renly Baratheon",
            "Catelyn Stark",
            "Sansa Stark",
            "Bran Stark"
        ],
        "servedBy": [
            "Podrick Payne"
        ]
    }];

test('fetches data', async () => {
    let receivedMessage = null;

    Object.defineProperty(global, "window", {
        value: {
            alert: jest.fn()
        }
    });


    jest.spyOn(window, 'alert').mockImplementation(message => receivedMessage = message);
    await fetchAndDisplay(allCharactersUrl);
    expect(window.alert).toHaveBeenCalledTimes(1);
})