module.exports = function toReadable (number) {
   let b = number%10, a = (number-b)/10, c=number%100,d=(number-c)/100,z=c%10,x=(c-z)/10;
        A1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'],
        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        if (number ==0) return 'zero';
        if (number > 10 && number < 20) return A2[number-11];
        if (b == 0 && number<100) return A3[a-1];
        if (number < 10 ) return A1[b-1];
        if (number > 20 && number<100)return A3[a-1]+' '+A1[b-1];
        if (c>10 && c<20) return A1[d-1]+' '+'hundred'+' '+ A2[c-11];// одиннадцатые
        if (c == 0 ) return A1[d-1]+' '+'hundred';// тысячные
        if (c>=10 && x>0 && z==0 ) return A1[d-1]+' '+'hundred'+' '+ A3[x-1];//сотые
        if (c<10 ) return A1[d-1]+' '+'hundred'+' '+ A1[c-1];// удиничные
        if (c<100 && c>20) return A1[d-1]+' '+'hundred'+' '+ A3[x-1]+' '+A1[z-1];//все остальные числа
}
