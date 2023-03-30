export const timeConvert = (num) => {
  // 1- Verilen sayıdan Math.floor() kullanılarak saat ve % kullanarak da dakika hesaplanmıştır.
  // 2- Hesaplanan değerler hour+":"+min şekilnde return edilmiştir.

  const min = num % 60; // 3
  const hour = Math.floor(num / 60); // Tam sayı 1
  return hour + ":" + min;

  //İkinci Yöntemde ise Template Literals'dan faydalanılmış ve direk cümle içerisinde hesaplamalar yapılarak return edilmiştir.
  return `${Math.floor(num / 60)}:${num % 60}`; // 2. yol
};

/*

Time Convert

Using the JavaScript language, have the function TimeConvert parameter being passed anr return the number of hours and minute convert to (ie. if num = 63 then the output should be 1:03) of hours and minutes with a colon.

*/

/*

Zaman Dönüştürme

JavaScript dilini kullanarak, TimeConvert parametresinin geçirilmesini sağlayın ve saat ve dakika sayısını döndürün (yani, num = 63 ise, çıktı 1:3 olmalıdır) iki nokta üst üste ile saat ve dakika.

*/
