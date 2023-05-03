export const divisionStringified = (n1, n2) => {
  /*Bize verilen 2 adet sayının bölünmesi ve bölümün ise formatlanarak return edilmesi isteniyor.
  Formatlama Kriterleri;
  1- Ondalık kısmı verme,
  2- Eğer bölüm 3 basamaktan oluşuyorsa bölümü string'e çevir ve return et.
  3- Eğer bölüm 3'den fazla basamaktan oluşuyorsa,  binler basamağına virgül ekle, string'e çevir ve o şekilde return et.
 
  Sorunun Çözümü
  Soruyu bir kısa bir de uzun olmak üzere 2 farklı şekilde çözdük. 
  */

  //1. Uzun Çözüm
  //- Sayıları böl ve Math.floor ile ondalık kısımdan kurtul ve string'e çevir
  //- Eğer bölüm 3 basamaklı veya daha küçükse direk return et

  const division = Math.floor(n1 / n2).toString();
  if (division.length < 4) return division;

  //- String halde olan bölümü .split() ile array'e çevir
  //- Bölümden elde edilen array'i reverse() ile ters düz yap
  const divisionArr = division.split("");
  const backwordsArr = division.split("").reverse();
  //- Virgül ve sayıların ekleneceği boş bir array oluştur.
  let arr = [];
  let j = 0;
  //- For döngüsü içerisinde devamlı değeri 1 arttırılacak olan ve 3 ile bölünüp bölüm değerinin 0 olup olmadığı kontrol edilecek bir değişken tanımla. Bu değişken 3 döngüde bir 3 ile tam bölünebilecek ve bu anda döngüdeki değerin yanına bir ',' eklenecektir.
  for (let i = 0; i < backwordsArr.length; i++) {
    if (j != 0 && j % 3 === 0) {
      arr.push(backwordsArr[i] + ",");
    } else {
      arr.push(backwordsArr[i]);
    }
    j++;
  }

  //- Testen oluşturulan array üzerinde For döngüsü ile bindelik kısma virgül eklemesi
  //- Son olarak da içine sayı ve virgül eklenmiş array'in ilk önce reverse ile tekrar ters yüz edilmesi ve join ile birlekştirilip return edilmesi.
  //return arr.reverse().join("");

  //2. Kısa Çözüm
  //Regular Expression Sayesinde tek satırda sorunun replace kullanılarak çözümü.
  return Math.floor(n1 / n2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

/*
Division Stringfied
Using the JavaScript language, havet the function DivisionStringified(num1,num2) take the both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1").

For example:
if num1 is 123456789 and num2 is 10000 the output should be "12,345".
*/

/*
Bölüm Yaylı
JavaScript dilini kullanarak, DivisionStringified(num1,num2) işlevinin iletilen her iki parametreyi almasını, num1'i num2'ye bölmesini ve sonucu uygun biçimde biçimlendirilmiş virgüllerle bir dize olarak döndürmesini sağlayın. Yanıt yalnızca 3 basamak uzunluğundaysa, sayıyı virgül kullanmadan döndürün (yani 2 / 3 "1" olarak gösterilmelidir).

Örneğin:
num1 123456789 ve num2 10000 ise çıktı "12,345" olmalıdır.
*/
