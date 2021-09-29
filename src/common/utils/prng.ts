// https://gist.github.com/blixt/f17b47c62508be59987b
/**
 * A seeded random number generator that produces a random number within the set range
 */
const prng = (range: number = 2147483647, seed: number = Date.now()) => Math.abs(seed % range) * 16807 % range;

export default prng;
