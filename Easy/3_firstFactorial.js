export const firstFactorial = (num) => {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
};

/*

First Factorial

Ucins the JavaScript language, have the function FirstFactorial(num) take the num paramater being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

*/

/*

İlk Faktöriyel

JavaScript dilini kullanırsanız, FirstFactory(num) işlevinin geçirilen sayı parametresini almasını ve faktöriyelini döndürmesini sağlayın (yani, sayı = 4 ise, dönüş (4 * 3 * 2 * 1)). Test senaryoları için aralık 1 ile 18 arasında olacaktır.

*/
