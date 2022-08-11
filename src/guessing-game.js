class GuessingGame {
    constructor() {}

    setRange(min, max) {
			this.min = min;
			this.max = max;
    }

    guess() {
			this.binSearch = Math.round((this.min + this.max) / 2);
			return this.binSearch;
    }

    lower() {
			this.max = this.guess();
    }

    greater() {
			this.min = this.guess();
    }
}
module.exports = GuessingGame;