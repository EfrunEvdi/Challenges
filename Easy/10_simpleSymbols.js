export const simpleSymbols = (str) => {
  // 1- Soruda forEach döngüsü kullanacağımız için ilk olarak bize verilen string'den .split() metodu ile yeni bir array oluşturduk.
  const arr = str.split("");
  // 2- Her bir harfin bizden istenilen koşulu sağlayıp sağlamadığının kayıt edileceği bir array oluşturduk.
  let controlArr = [];
  // 3- String'i kullanarak oluşturduğumuz array içerisindeki karakterler üzerinde forEach metodu kullanarak tarama yaptık.
  // 4- forEach içerisinde ilk olarak üzerinde bulunulan karakterin bir harf olup olmadığını .test metodu ile kontrol edip yalnızca harfler üzerinde kontroller gerçekleştirdik.
  // 5- .test metodu ile harf olduğunu belirlediğimiz karakterin index'ini indexOf metodu kullanarak belirledik. Sonra da karakterin index''inden 1 çıkartıp arkasındaki ve 1 toplayarak da önündeki karakterlere array üzerinden ulaştık ve de bu değerleri "+" sembolü olup olmadığına baktık.
  // 6- Eğer ilgili karakterin önü ve arkasındaki değer "+" sembolü ise kontrol array'ine .push() metodu ile 1 yazdık. Aksi bütün durumlar içinse kontrol array'ine 0 yazdık.
  arr.forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      if (
        arr[arr.indexOf(char) - 1] === "+" &&
        arr[arr.indexOf(char) + 1] === "+"
      ) {
        controlArr.push(1);
      } else {
        controlArr.push(0);
      }
    }
  });

  //console.log(controlArr);

  // 7- Son olarak da kontrol grubu içerisinde 0 olup olmadığını kontrol ettik. Eğer kontrol grubunda 0 varsa fonksiyonun false, yoksa da true dönmesini sağladık.
  if (controlArr.includes(0)) {
    return false;
  } else {
    return true;
  }
};

export const simpleSymbols2 = (str) => {
  var arr = str.toLowerCase().split("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= "a" && arr[i] <= "z") {
      if (i === 0 || i === arr.length) {
        return false;
      }
      if (arr[i - 1] !== "+" || arr[i + 1] !== "+") {
        return false;
      }
    }
  }
  return true;
};

/* 

Simple Symbols

Using the JavaScript language, have the function SimpleSybols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false.

The str parameter will be composed of + and + = symbols with several letters between them (ie. ++d+===+c++==a) and for string to be true each letter must be surrounded by a + symbol.

So the string to the left would be false.

The string will not be empty and will have at least one letter.

*/

/*
Basit Semboller

JavaScript dilini kullanarak, SimpleSybols(str) işlevinin iletilen str parametresini almasını ve true veya false dizesini döndürerek kabul edilebilir bir dizi olup olmadığını belirlemesini sağlayın.

str parametresi, aralarında birkaç harf bulunan + ve = sembollerinden oluşacaktır (örn. ++d+===+c++==a) ve dizenin doğru olması için her harfin bir + simgesiyle çevrelenmesi gerekir.

Yani soldaki dize yanlış olur.

Dize boş olmayacak ve en az bir harf içerecektir.

*/
