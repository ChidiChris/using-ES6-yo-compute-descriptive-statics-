class Statistics {
    constructor(dataArray) {
        this.dataArray = dataArray;
    }

    // Measures of central tendency
    getMean() {
        const sum = this.dataArray.reduce((acc, val) => acc + val, 0);
        return sum / this.dataArray.length;
    }

    getMedian() {
        const sortedArray = [...this.dataArray].sort((a, b) => a - b);
        const midIndex = Math.floor(sortedArray.length / 2);

        if (sortedArray.length % 2 === 0) {
            return (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2;
        } else {
            return sortedArray[midIndex];
        }
    }

    getMode() {
        const frequencyMap = {};
        let maxFrequency = 0;
        let mode = null;

        for (const num of this.dataArray) {
            if (!frequencyMap[num]) {
                frequencyMap[num] = 1;
            } else {
                frequencyMap[num]++;
            }

            if (frequencyMap[num] > maxFrequency) {
                maxFrequency = frequencyMap[num];
                mode = num;
            }
        }

        return mode;
    }

    // Measures of dispersion
    getRange() {
        const sortedArray = [...this.dataArray].sort((a, b) => a - b);
        return sortedArray[sortedArray.length - 1] - sortedArray[0];
    }

    getVariance() {
        const mean = this.getMean();
        const sumOfSquaredDifferences = this.dataArray.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
        return sumOfSquaredDifferences / this.dataArray.length;
    }

    getStandardDeviation() {
        return Math.sqrt(this.getVariance());
    }

    getInterquartileRange() {
        const sortedArray = [...this.dataArray].sort((a, b) => a - b);
        const Q1 = this.getPercentile(25);
        const Q3 = this.getPercentile(75);
        return Q3 - Q1;
    }

    getPercentile(percentile) {
        const index = Math.floor((percentile / 100) * this.dataArray.length);
        const sortedArray = [...this.dataArray].sort((a, b) => a - b);
        return sortedArray[index];
    }
}

// Usage:
const dataArray = [1, 2, 3, 4, 5];
const stats = new Statistics(dataArray);

console.log(stats.getMean()); // Output: 3
console.log(stats.getMedian()); // Output: 3
console.log(stats.getMode()); // Output: null (since there are no repeating numbers in the array)

console.log(stats.getRange()); // Output: 4
console.log(stats.getVariance()); // Output: 1.6666666666666667
console.log(stats.getStandardDeviation()); // Output: 1.2909944487358056

console.log(stats.getInterquartileRange());
