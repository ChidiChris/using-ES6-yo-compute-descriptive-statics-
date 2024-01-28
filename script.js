/* The task defines a class named DescriptiveStatistics that has methods for calculating various descriptive statistics, including measures of central tendency and measures of dispersion. Here's how it works:

The class has two private methods:

_calculateMean: This method calculates the mean of a set of numbers.
_calculateSumOfSquares: This method calculates the sum of squares of the deviations from the mean for a set of numbers.
The class also has a number of public methods that each calculate a different descriptive statistic:

mean: This method returns the mean of a set of numbers.
median: This method returns the median of a set of numbers.
mode: This method returns the mode of a set of numbers.
variance: This method returns the variance of a set of numbers.
standardDeviation: This method returns the standard deviation of a set of numbers.
range: This method returns the range of a set of numbers.
minimum: This method returns the minimum value in a set of numbers.
maximum: This method returns the maximum value in a set of numbers.
To use the DescriptiveStatistics class, you can create an instance of the class and then call the appropriate methods to calculate the desired descriptive statistics. For example, the following code would calculate the mean, median, and mode of a set of numbers: */

const data = [1, 2, 3, 4, 5];
const stats = new DescriptiveStatistics(data);

const mean = stats.mean();
const median = stats.median();
const mode = stats.mode();

console.log(`Mean: ${mean}`);
console.log(`Median: ${median}`);
console.log(`Mode: ${mode}`);
