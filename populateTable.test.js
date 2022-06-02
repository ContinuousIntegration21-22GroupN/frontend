const populateTable = require('./populateTable');
const allCharactersUrl = "http://localhost:3000/characters";

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