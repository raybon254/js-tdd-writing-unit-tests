// Your tests here
import {pointsForWord} from '../utils.js';

describe("pointsForWord", () => {
    it("calculate the total points for a word (1 point per vowel, 2 per consonant)", () =>{
        const word = "test";
        const points = pointsForWord(word);

        expect(points).toBe(7)
    })
})