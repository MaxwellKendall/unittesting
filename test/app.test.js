import assert from 'assert';

import { add } from '../src/app.js';

describe('add fn', () => {
    it('should add 1 + 2', () => {
        const result = add(1, 2);
        assert.strictEqual(result, 3);        
    });
})

/**
 * Mocha Features
 * 1. Nested Describe Statements (or use context())
 * 2. Testing Async Code: https://mochajs.org/#hooks
 * 3. Hooks: https://mochajs.org/#hooks 
 * 4. Configuration
 *  a. Timeouts
 *  b. Reporting "Slow" tests
 *  c. Parallelism
 * 5. Pending Tests: https://mochajs.org/#pending-tests
 */

