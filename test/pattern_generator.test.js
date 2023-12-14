const { expect } = require("chai");
const PatternGenerator = require("../lib/pattern_generator");

describe("PatternGenerator", () => {
  let pg;

  beforeEach(() => {
    pg = new PatternGenerator();
  });

  describe.skip("Part 1: Verify Pattern Compliance", () => {
    describe(".verify", () => {
      it("Given a generated serial number, return true or false based on whether or not the input matches the pattern", () => {
        const pattern = ".#.@";

        expect(pg.verify("A3B1", pattern)).to.be.true;
        expect(pg.verify("AABA", pattern)).to.be.false;
      });
    });
  });

  describe.skip("Part 2: Generate The Nth Value In the Pattern", () => {
    describe(".generate", () => {
      it("Given a specific pattern, assuming that incrementing happens from right to left (like normal numbers), generate the Nth value in the sequence", () => {
        const pattern = "@.#.";

        expect(pg.generate(0, pattern)).to.equal("0A0A");
        expect(pg.generate(27, pattern)).to.equal("0A1B");
        expect(pg.generate(60, pattern)).to.equal("0A2I");
        expect(pg.generate(999, pattern)).to.equal("0D8L");
      });
    });
  });

  describe.skip("Part 3: Possibilities", () => {
    describe(".totalAvailable", () => {
      it("Given a specific pattern, determine how many total numbers are in the set", () => {
        let pattern = ".#.";
        expect(pg.totalAvailable(pattern)).to.equal(6760);

        pattern = "@.#.";
        expect(pg.totalAvailable(pattern)).to.equal(243360);

        pattern = "";
        expect(pg.totalAvailable(pattern)).to.equal(0);
      });
    });
  });

  describe.skip("Part 4: Deduction", () => {
    describe(".findPatternFor", () => {
      it("Given a sample of three serial numbers, output a pattern that could generate them. Prefer . and # over @ if they fit the sample serial numbers", () => {
        const inputs = ["0A1B", "5C2Z", "9R9B"];
        expect(pg.findPatternFor(inputs)).to.equal("#.#.");

        const inputs2 = ["0A1B", "5C2Z", "AR9B"];
        expect(pg.findPatternFor(inputs2)).to.equal("@.#.");
      });
    });
  });
});
