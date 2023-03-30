export const checkNums = (num1, num2) => {
  // Soruda basitçe bize verilen 2 adet sayının büyüklük, küçüklük ve eşitlik durumunlarını değerlendirip sırayla true, false ve -1 değerlerini return ettik.
  if (num1 === num2) {
    return -1;
  } else if (num2 > num1) {
    return true;
  } else {
    return false;
  }
};

/*

Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed ad return the string true if num2 is greater than num1, otherwise return the string false.

If the parameter values are equal to each other then return the string -1.

*/

/*

JavaScript dilini kullanarak, CheckNums(num1,num2) işlevinin iletilen her iki parametreyi de almasını sağlayın ve num2 num1'den büyükse true dizesini döndürün, aksi takdirde false dizesini döndürün.

Parametre değerleri birbirine eşitse, -1 dizisini döndürün.

*/
