require('./helpers.js');

describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;
      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAddCatToEnd(name)', function () {
      it('adds a cat to the end of the cats array', function () {
        cats.push('Ralph'); // Using .push()
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    describe('destructivelyAddCatToStart(name)', function () {
      it('adds a cat to the beginning of the cats array', function () {
        cats.splice(0, 0, 'Bob'); // Using .splice()
        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', function () {
        cats.pop(); // Using .pop()
        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', function () {
        cats.splice(0, 1); // Using .splice()
        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });

    describe('nonDestructiveAddCatToEnd(name)', function () {
      it('returns a new array with a cat added to the end, leaving the original array unchanged', function () {
        const newCats = cats.slice(); // Using .slice()
        newCats.push('Broom'); // Using .push()
        expect(newCats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('nonDestructiveAddCatToStart(name)', function () {
      it('returns a new array with a cat added to the beginning, leaving the original array unchanged', function () {
        const newCats = ['Arnold', ...cats]; // Using spread operator
        expect(newCats).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('nonDestructiveRemoveLastCat()', function () {
      it('returns a new array with the last cat removed, leaving the original array unchanged', function () {
        const newCats = cats.slice(0, -1); // Using .slice()
        expect(newCats).to.have.ordered.members(["Milo", "Otis"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('nonDestructiveRemoveFirstCat()', function () {
      it('returns a new array with the first cat removed, leaving the original array unchanged', function () {
        const newCats = cats.slice(1); // Using .slice()
        expect(newCats).to.have.ordered.members(["Otis", "Garfield"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});
