import {placeholderHeightGenerator} from './placeholderHeightGenerator';

describe("placeholderHeightGenerator", () => {
    it("always returns median or quartile of pre-measured image proportions", () => {
        let results = [];
        for (let i=0; i < 100; i++) {
            results.push(placeholderHeightGenerator.next());
        }
        expect(results.filter(e => [0.75, 1, 1, 1.33].indexOf(e) > -1)).toEqual(results);
    })
})