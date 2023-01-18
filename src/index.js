module.exports = function toReadable (number) {
   let b = number%10, a = (number-b)/10,
        A1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'],
        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number > 10 && number < 20) return A2[number-11];
    if (b == 0) return A3[a-1];
    return A3[a-1]+' '+A1[b-1];
}
