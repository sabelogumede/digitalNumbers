function separateNumbers(num){
var numbers = [];
while(num >=10){
 numbers.unshift(num % 10);
 num =Math.floor(num/10);

}
numbers.unshift(num);
console.log(numbers);
//return numbers;


var zeros = {
    6: "000000",
    5: "00000",
    4: "0000",
    3: "000",
    2: "00",
    1: null

}



var numberLength = numbers.length;
   for (var a = 0; a < numberLength; a++){
//     console.log("lenght of a num " +numberLength);
//     console.log("index " +a);

   var calculate = numberLength - a;
   //console.log("calculate "+ calculate)
   var NumberOfZeros = calculate - 1;
   //console.log("number of zeros " + NumberOfZeros)


        for (var key in zeros){
        //   console.log("key: ",key)
          console.log(NumberOfZeros + zeros[key]);
        }



   }


}
separateNumbers(28948);
