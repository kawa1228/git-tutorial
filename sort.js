const sortNumber = function (number) {
   number.sort(function (a, b) {
       if (a == b) {
           return 0;
       }
       return a < b ? -1 : 1;
   });
};

sortNumber(num);
const num = [19, 3, 81, 1, 24, 21]
console.log(num)
