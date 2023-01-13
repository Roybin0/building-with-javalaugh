const { game, newGame, showScore, addTurn, lightsOn, showTurns } = require("../game");
const { beforeAll, expect } = require("@jest/globals");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open(); 
    document.write(fileContents); 
    document.close();  
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true); 
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true); 
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true); 
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true); 
    });
    test("choices contains correct IDs", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works properly", () => {
    beforeAll(() => {
        game.score = 42; 
        game.currentGame = [1, 2, 3, 4, 5];
        game.playerMoves = [1, 2, 3, 4, 5];
        document.getElementById("score").innerHTML = "42";
        newGame();
    });

    test("should set game score to zero", () => {
        expect(game.score).toEqual(0); 
    });
    test("should clear playerMoves array", () => {
        expect(game.playerMoves).toStrictEqual([]); 
    });
    test("should be one move in the computer game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("should display 0 for id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});

describe("gameplay works properly", () => {
    beforeEach(() => {
        game.score = 0; 
        game.currentGame = []; 
        game.playerMoves = []; 
        addTurn(); 
    }); 
    afterEach(() => {
        game.score = 0; 
        game.currentGame = []; 
        game.playerMoves = [];
    });
    test("addTurn adds a new turn to the game", () => {
        addTurn(); 
        expect(game.currentGame.length).toBe(2); 
    });
    test("should add correct class to light up the button", () => {
        let button = document.getElementById(game.currentGame[0]); 
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    });
    test("showTurns should update game.turnNumber", () => {
        game.turnNumber = 42; 
        showTurns(); 
        expect(game.turnNumber).toBe(0); 
    })
});

describe("showTurns works properly", () => {
    describe("iterates through array of currentGame", () => {

    });
    describe("turns lights on", () => {

    });
    describe("turns lights off", () => {

    });
})