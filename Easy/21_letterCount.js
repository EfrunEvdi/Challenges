export const letterCount = (str) => {
  // Soruda .test() metodunu tanıtmak adına uzun bir yol izlenmiştir. Ancak videonun sonunda alternatif bir çözüm ve ayrıca da izlenebilecek farklı bir yoldan bahsedilmiştir.
  // 1 - Bizden sadece harflerin sayısı üzerinden değerlendirme yapmamız istendiği için, harf ve boşluk dışındaki karakterleri siliyoruz.
  // 2 - Daha sonradan karışıklık olmaması içine harfleri toLowerCase metodu ile küçük harfle dönüştürüyoruz.
  // 3 - Oluşturduğumuz yeni string'i .split() metodu ile array'e dönüştürüyoruz.
  const arr = str.replace(/[^a-zA-Z]/g, " ").toLowerCase().split(" ");

  let kelimeNesneleri = [];

  // 4 - Oluşturduğumuz array üzerinde for döngüsü uyguluyoruz ve bu sayede her bir kelimeye ayrı ayrı ulaşmış oluyoruz.
  // 5 - Her bir kelime içerisindeki her bir harfi oluşturduğumuz boş bir nesne üzerinden kontrol ediyoruz. Eğer harf nesne içerisinde varsa value değerini 1 arttırıyoruz, aksi durumda ise harf:1 şekilnde key:value çiftini nesneye ekliyoruz.
  for (let i = 0; i < arr.length; i++) {
    let obj = {};

    arr[i].split('').forEach(char => {
      char in obj ? obj[char] += 1 : obj[char] = 1
    });
    kelimeNesneleri.push(obj);
  }

  // 6 - Oluşan kelimelere ait nesneleri, bir array içerisine ekliyoruz.
  // 7 - Object.Values metodu yardımıya her bir kelime için oluşturduğumuz nesneden sadece value yani değerleri çekiyoruz ve bu değerlerin en yükseğini ise oluşturduğumuz bir array içerisine ekliyoruz. Böylece her bir kelimenin max tekerrür sayısını, kelime sırasına göre elde etmiş oluyoruz.
  let maxFrequencies = [];

  kelimeNesneleri.forEach((nesne) => {
    maxFrequencies.push(Math.max(...Object.values(nesne)));
  });
  // 8 - Maksimum tekerrür değerleri içerisindeki max değerin index'ini buluyoruz. Bu bulduğumuz index'i ile ilk oluşturduğumuz array içerisinde arr[index] kullanarak, en çok tekerrüre sahip kelimeyi saptamış oluyoruz.
  let maxValue = Math.max(...maxFrequencies);
  //console.log(maxValue);
  return maxValue < 2
    ? -1
    : arr[maxFrequencies.indexOf(maxValue)]
    ? arr[maxFrequencies.indexOf(maxValue)]
    : -1;
};

/*
LetterCount I
Have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters.

For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.

If there are no words with repeating letters return <b>-1<b>.

Words will be separated by spaces.
*/

/*
HarfSayı I
LetterCount(str) işlevinin, iletilen str parametresini almasını ve en fazla tekrarlanan harf sayısına sahip ilk kelimeyi döndürmesini sağlayın.

Örneğin: "Today, is the greatest day ever!" 2 e'ye (ve 2 t'ye) sahip olduğu için greatest değeri döndürmeli ve yine 2 e'ye sahip olan her zamankinden daha önce gelir.

Yinelenen harflere sahip kelime yoksa <b>-1<b> değerini döndürün.

Kelimeler boşluklarla ayrılacaktır.
*/
