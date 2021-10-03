import { learnLinear } from '.';

describe('learnLinear', () => {
    it('should return Y as greather than 38', async () => {
        const result = await learnLinear([20]);
        expect(result[0]).toBeGreaterThan(38);
    });
});
