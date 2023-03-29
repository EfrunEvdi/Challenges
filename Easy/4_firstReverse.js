export const firstReverse = (str) => {
  // .split() -- Array oluşturur.
  // .reverse() -- Ters düz eder.
  // .join() -- Arrayı stringe çevirir.

  //   const arr = str.split("");
  //   const reverseArr = arr.reverse();
  //   const newStr = reverseArr.join(""); // 1.Yol

  return str.split("").reverse().join(""); // 2.Yol (Kısa)
};

/* 

First Reverse

Have the function FirstReverse() take the str parameter being passed and return the string in reversed order.

*/

/*

İlk Ters

FirstReverse() işlevinin iletilen str parametresini almasını ve dizeyi ters sırada döndürmesini sağlayın.

*/
