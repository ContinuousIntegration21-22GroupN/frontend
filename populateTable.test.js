/**
 * @jest-environment jsdom
 */

const fetchAndDisplay = require('./populateTable');
const allCharactersUrl = "http://localhost:3000/characters";
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
        "siblings": ["Robb Stark", "Sansa Stark", "Bran Stark", "Rickon Stark"],
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
        "parents": ["Eddard Stark", "Catelyn Stark"],
        "guardedBy": ["Nymeria"]
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
        "killed": ["Soldier Tom", "Stannis Baratheon", "Bolton Officer"],
        "serves": ["Renly Baratheon", "Catelyn Stark", "Sansa Stark", "Bran Stark"],
        "servedBy": ["Podrick Payne"]
    },
    {
        "id": "3",
        "characterName": "Cersei Lannister",
        "houseName": ["Lannister", "Baratheon"],
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzNTAxNjExMl5BMl5BanBnXkFtZTcwMDEwNzI4OQ@@._V1._CR954,56,605,670._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzNTAxNjExMl5BMl5BanBnXkFtZTcwMDEwNzI4OQ@@._V1._CR954,56,605,670_.jpg",
        "characterLink": "/character/ch0159526/",
        "actorName": "Lena Headey",
        "actorLink": "/name/nm0372176/",
        "parents": ["Tywin Lannister"],
        "parentOf": ["Joffrey Baratheon", "Myrcella Baratheon", "Tommen Baratheon"],
        "royal": true,
        "siblings": ["Jaime Lannister", "Tyrion Lannister"],
        "marriedEngaged": ["Robert Baratheon"],
        "killed": [
            "Lancel Lannister",
            "High Sparrow",
            "Loras Tyrell",
            "Mace Tyrell",
            "Margaery Tyrell",
            "Kevan Lannister",
            "Tyene Sand"
        ],
        "killedBy": ["Roof collapse"]
    },
    {
        "id": "4",
        "characterName": "Daenerys Targaryen",
        "houseName": "Targaryen",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MzIxMTQwMF5BMl5BanBnXkFtZTcwMzY2NDg1Nw@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MzIxMTQwMF5BMl5BanBnXkFtZTcwMzY2NDg1Nw@@._V1_SY1000_CR0,0,810,1000_AL_.jpg",
        "characterLink": "/character/ch0158597/",
        "actorName": "Emilia Clarke",
        "actorLink": "/name/nm3592338/",
        "royal": true,
        "parents": ["Aerys II Targaryen", "Rhaella Targaryen"],
        "siblings": ["Rhaegar Targaryen", "Viserys Targaryen"],
        "killed": [
            "Khal Drogo",
            "Mirri Maz Duur",
            "Doreah",
            "Xaro Xhoan Daxos",
            "Khal Rhalko",
            "Khal Brozho",
            "Khal Qorro",
            "Khal Forzho",
            "Khal Moro",
            "Dothraki Bloodrider #1",
            "Dothraki Bloodrider #2",
            "Randyll Tarly",
            "Dickon Tarly",
            "Eleanor",
            "Eleanor's Daughter",
            "Lord Varys"
        ],
        "servedBy": [
            "Barristan Selmy",
            "Daario Naharis",
            "Grey Worm",
            "Jorah Mormont",
            "Missandei",
            "Tyrion Lannister"
        ],
        "parentOf": ["Rhaego"],
        "marriedEngaged": ["Khal Drogo"],
        "guardedBy": ["Drogon", "Rhaegal", "Viserion"],
        "killedBy": ["Jon Snow"]
    },
    {
        "id": "5",
        "characterName": "Eddard Stark",
        "houseName": "Stark",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BODcwMjg0MDQ5MF5BMl5BanBnXkFtZTcwMTk2NDk4OQ@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BODcwMjg0MDQ5MF5BMl5BanBnXkFtZTcwMTk2NDk4OQ@@._V1_SY1000_CR0,0,827,1000_AL_.jpg",
        "characterLink": "/character/ch0154681/",
        "actorName": "Sean Bean",
        "actorLink": "/name/nm0000293/",
        "nickname": "Ned",
        "guardianOf": ["Jon Snow"],
        "siblings": ["Brandon Stark", "Benjen Stark", "Lyanna Stark"],
        "parents": ["Rickard Stark"],
        "killed": ["Arthur Dayne", "Will", "Lady", "Gerold Hightower"],
        "allies": ["Howland Reed", "Robert Baratheon"],
        "guardedBy": ["Jon Arryn"],
        "killedBy": ["Ilyn Payne"],
        "marriedEngaged": ["Catelyn Stark"],
        "parentOf": ["Robb Stark", "Sansa Stark", "Arya Stark", "Bran Stark", "Rickon Stark"]
    },
    {
        "id": "6",
        "characterName": "Jaime Lannister",
        "houseName": "Lannister",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMzU1NjM1MF5BMl5BanBnXkFtZTcwMzIxODg4OQ@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMzU1NjM1MF5BMl5BanBnXkFtZTcwMzIxODg4OQ@@._V1_.jpg",
        "characterLink": "/character/ch0158527/",
        "actorName": "Nikolaj Coster-Waldau",
        "actorLink": "/name/nm0182666/",
        "nickname": "The Kingslayer",
        "kingsguard": true,
        "parents": ["Tywin Lannister"],
        "parentOf": ["Joffrey Baratheon", "Myrcella Baratheon", "Tommen Baratheon"],
        "guardianOf": ["Aerys II Targaryen", "Robert Baratheon", "Joffrey Baratheon"],
        "killed": [
            "Aerys II Targaryen",
            "Jory Cassel",
            "Alton Lannister",
            "Torrhen Karstark",
            "Olenna Tyrell",
            "Euron Greyjoy"
        ],
        "siblings": ["Cersei Lannister", "Tyrion Lannister"],
        "killedBy": ["Roof collapse"]
    },
    {
        "id": "7",
        "characterName": "Jaqen H'ghar",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA1MjI5MzYwNzNeQTJeQWpwZ15BbWU3MDkxNDcxOTk@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA1MjI5MzYwNzNeQTJeQWpwZ15BbWU3MDkxNDcxOTk@._V1_.jpg",
        "characterLink": "/character/ch0259179/",
        "actorName": "Tom Wlaschiha",
        "actorLink": "/name/nm0937239/",
        "killed": ["The Tickler", "Amory Lorch", "Despondent Man"]
    },
    {
        "id": "8",
        "characterName": "Jon Snow",
        "houseName": ["Stark", "Targaryen"],
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwMjUxMDk2OV5BMl5BanBnXkFtZTcwMzg3MTg4OQ@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwMjUxMDk2OV5BMl5BanBnXkFtZTcwMzg3MTg4OQ@@._V1_.jpg",
        "characterLink": "/character/ch0155777/",
        "actorName": "Kit Harington",
        "actorLink": "/name/nm3229685/",
        "royal": true,
        "parents": ["Rhaegar Targaryen", "Lyanna Stark"],
        "guardedBy": ["Eddard Stark", "Ghost"],
        "killed": [
            "Othor",
            "Qhorin Halfhand",
            "Orell",
            "Karl Tanner",
            "Styr",
            "Mance Rayder",
            "Janos Slynt",
            "White Walker",
            "Alliser Thorne",
            "Othell Yarwyck",
            "Bowen Marsh",
            "Olly",
            "Lyanna Stark",
            "Daenerys Targaryen"
        ],
        "killedBy": ["Alliser Thorne", "Othell Yarwyck", "Bowen Marsh", "Olly"],
        "marriedEngaged": ["Ygritte"]
    },
    {
        "id": "9",
        "characterName": "Margaery Tyrell",
        "houseName": "Tyrell",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODQ1MDg3NV5BMl5BanBnXkFtZTcwODA4NDk4OQ@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODQ1MDg3NV5BMl5BanBnXkFtZTcwODA4NDk4OQ@@._V1_.jpg",
        "characterLink": "/character/ch0251974/",
        "actorName": "Natalie Dormer",
        "actorLink": "/name/nm1754059/",
        "marriedEngaged": ["Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon"],
        "killedBy": ["Cersei Lannister"],
        "siblings": ["Loras Tyrell"],
        "parents": ["Mace Tyrell"]
    },
    {
        "id": "10",
        "characterName": "Melisandre",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MjI5NjQ2OV5BMl5BanBnXkFtZTcwODI4NDk4OQ@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MjI5NjQ2OV5BMl5BanBnXkFtZTcwODI4NDk4OQ@@._V1_.jpg",
        "characterLink": "/character/ch0287523/",
        "actorName": "Carice van Houten",
        "actorLink": "/name/nm0396924/",
        "killed": ["Renly Baratheon", "Axell Florent", "Mance Rayder", "Shireen Baratheon"],
        "killedBy": ["Old Age"]
    },
    {
        "id": "11",
        "characterName": "Oberyn Martell",
        "houseName": "Martell",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTJmYjViYjctYTU0My00NTJiLWE2YzUtOWZkNTg4MTZkZmEyXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTJmYjViYjctYTU0My00NTJiLWE2YzUtOWZkNTg4MTZkZmEyXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
        "characterLink": "/character/ch0392307/",
        "actorName": "Pedro Pascal",
        "actorLink": "/name/nm0050959/",
        "killedBy": ["Gregor Clegane"],
        "marriedEngaged": ["Ellaria Sand"],
        "parentOf": ["Obara Sand", "Nymeria Sand", "Tyene Sand"],
        "siblings": ["Doran Martell", "Elia Martell"]
    },
    {
        "id": "12",
        "characterName": "Petyr Baelish",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1MjE3OTc3M15BMl5BanBnXkFtZTcwODgzODg4OQ@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1MjE3OTc3M15BMl5BanBnXkFtZTcwODgzODg4OQ@@._V1_.jpg",
        "characterLink": "/character/ch0245982/",
        "actorName": "Aidan Gillen",
        "actorLink": "/name/nm0318821/",
        "nickname": "Littlefinger",
        "killed": ["Joffrey Baratheon", "Dontos Hollard", "Lysa Arryn"],
        "marriedEngaged": ["Lysa Arryn"],
        "killedBy": ["Arya Stark"]
    },
    {
        "id": "13",
        "characterName": "Robb Stark",
        "houseName": "Stark",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2NDE1NzczNF5BMl5BanBnXkFtZTcwNjcwODg4OQ@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2NDE1NzczNF5BMl5BanBnXkFtZTcwNjcwODg4OQ@@._V1_SY1000_CR0,0,845,1000_AL_.jpg",
        "characterLink": "/character/ch0158596/",
        "actorName": "Richard Madden",
        "actorLink": "/name/nm0534635/",
        "royal": true,
        "siblings": ["Sansa Stark", "Arya Stark", "Bran Stark", "Rickon Stark"],
        "killed": ["Wallen", "Rickard Karstark"],
        "marriedEngaged": ["Roslin Frey", "Talisa Maegyr"],
        "killedBy": ["Roose Bolton"],
        "parents": ["Eddard Stark", "Catelyn Stark"],
        "guardedBy": ["Grey Wind"]
    },
    {
        "id": "14",
        "characterName": "Sansa Stark",
        "houseName": "Stark",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjAwMjE2NDExNF5BMl5BanBnXkFtZTcwODAwODg4OQ@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjAwMjE2NDExNF5BMl5BanBnXkFtZTcwODAwODg4OQ@@._V1_SY1000_CR0,0,806,1000_AL_.jpg",
        "characterLink": "/character/ch0158137/",
        "actorName": "Sophie Turner",
        "actorLink": "/name/nm3849842/",
        "royal": true,
        "siblings": ["Robb Stark", "Arya Stark", "Bran Stark", "Rickon Stark"],
        "marriedEngaged": ["Joffrey Baratheon", "Tyrion Lannister", "Ramsay Snow"],
        "guardedBy": ["Lady"],
        "parents": ["Eddard Stark", "Catelyn Stark"]
    },
    {
        "id": "15",
        "characterName": "Tyrion Lannister",
        "houseName": "Lannister",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2MDAwOTI0OV5BMl5BanBnXkFtZTcwNjA3NDg1Nw@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2MDAwOTI0OV5BMl5BanBnXkFtZTcwNjA3NDg1Nw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "characterLink": "/character/ch0146096/",
        "actorName": "Peter Dinklage",
        "actorLink": "/name/nm0227759/",
        "marriedEngaged": ["Sansa Stark"],
        "killed": ["Shae", "Tywin Lannister"],
        "parents": ["Tywin Lannister"],
        "siblings": ["Cersei Lannister", "Jaime Lannister"],
        "serves": ["Daenerys Targaryen"]
    },
    {
        "id": "16",
        "characterName": "Ygritte",
        "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0NDA1Njk3Nl5BMl5BanBnXkFtZTcwOTQ2NDk4OQ@@._V1._SX100_SY140_.jpg",
        "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0NDA1Njk3Nl5BMl5BanBnXkFtZTcwOTQ2NDk4OQ@@._V1_SY1000_CR0,0,724,1000_AL_.jpg",
        "characterLink": "/character/ch0304492/",
        "actorName": "Rose Leslie",
        "actorLink": "/name/nm3310211/",
        "killed": ["Old Man", "Guymon", "Mole's Town Whore", "Pypar"],
        "killedBy": ["Olly"],
        "marriedEngaged": ["Jon Snow"]
    }
];



describe('fetchAndDisplay', function () {
    let tableObject;
    let fetchCode;
    const alertErrorMessage = "Error 404";

    beforeEach(function () {
        tableObject = {
            rows: [],
        };
    });

    beforeAll(() => {
        fetchCode = (characterData) => {
            return Promise.resolve({
                json: () => Promise.resolve(characterData),
            })
        }

        global.fetch = jest.fn((url) => {
            if (url !== allCharactersUrl) return Promise.reject({message: alertErrorMessage});

            return fetchCode(mockCharacterData)
        });

        let rowObject = {
            cells: [],
        }

        jest.spyOn(document, "getElementById").mockImplementation(() => {
            tableObject.insertRow = () => {
                let clonedRowObject = JSON.parse(JSON.stringify(rowObject))
                clonedRowObject.insertCell = (index) => {
                    let cellObject = {
                        cellIndex: index,
                        innerHTML: "",
                    };
                    clonedRowObject.cells.push(cellObject)
                    return cellObject
                }
                tableObject.rows.push(clonedRowObject);
                return clonedRowObject;
            };
            return tableObject;
        });

        window.alert = jest.fn();

        jest.spyOn(console, "log");
    })

    it('calls fetch with correct url', async () => {
        await fetchAndDisplay(allCharactersUrl);

        expect(fetch).toHaveBeenCalledWith(allCharactersUrl);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(window.alert).toHaveBeenCalledTimes(0);
    });

    it('should fill the table Object with correct amount of rows', async () => {
        await fetchAndDisplay();

        expect(tableObject.rows).toHaveLength(mockCharacterData.length);
    });

    it('should fill the rows and cells properly', async () => {
        await fetchAndDisplay();

        tableObject.rows.forEach((row, index) => {
            const cells = row.cells;
            const character = mockCharacterData[index];

            expect(cells).toHaveLength(4);
            expect(cells[0].innerHTML).toEqual(character.characterName);
            expect(cells[1].innerHTML).toEqual(character.actorName);
            expect(cells[2].innerHTML.split(', ')).toEqual(character.siblings || ["No siblings"]);
            expect(cells[3].innerHTML.split(', ')).toEqual(character.killed || ["No kills"]);
        })
    });

    it('should throw an alert if fetch is unsuccessful', async () => {
        await fetchAndDisplay('notAValidURL');

        expect(window.alert).toHaveBeenCalledTimes(1);
        expect(window.alert).toHaveBeenCalledWith(alertErrorMessage);
    });
});

