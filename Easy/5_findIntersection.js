export const findIntersection = (arr) => {
  // 1- Yeni bir array tipinde değişken tanımla
  let intersection = [];

  // 2- split(), replace(//boşlukları yok etmede)
  const cluster1 = arr[0].replace(/\s/g, "").split(","); // Boşluk varsa onu yok et demek.
  const cluster2 = arr[1].replace(/\s/g, "").split(",");

  // 3- forEach() kullanarak bütün array içerisindeki karakterlerin diğer array içerinde olup olmadığını kontrol edicez. Varsa tanımladığımız yeni array değişkeni içerisine bu değeri koyucaz.
  cluster2.forEach((item) => {
    if (cluster1.includes(item)) {
      intersection.push(item);
    }
  });

  // 4- Eğer tanımlamış olduğumuz değer boşsa return false, boş değilse de array içerisindeki değerleri string halinde return edicez.
  if (intersection.length != 0) {
    return intersection.toString();
  } else {
    return false;
  }
}; // ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]

/*

Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separeted numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

*/

/*

FindIntersection(strArr) işlevinin, strArr'da saklanan ve 2 öğe içerecek dize dizisini okumasını sağlayın: ilk öğe, artan düzende sıralanmış virgülle ayrılmış sayıların bir listesini temsil edecek, ikinci öğe, virgülle ayrılmış ikinci bir listeyi temsil edecek sayılar (ayrıca sıralanır). Amacınız, strArr öğelerinde oluşan sayıları sıralanmış düzende içeren virgülle ayrılmış bir dize döndürmektir. Kesişme yoksa, dizgeyi false olarak döndürün.

*/
