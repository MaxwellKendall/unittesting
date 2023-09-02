// https://www.chaijs.com/api/bdd/
import { assert, expect, should } from 'chai';

import { add } from '../src/app.js';

describe('add fn', () => {
    it('should add 1 + 2', () => {
        const result = add(1, 2);
        
        assert.equal(result, 3);
        expect(result).to.equal(3);        
        should().equal(result, 3);
    });
})

