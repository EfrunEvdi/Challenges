export const longestWord = (sen) => {
  const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ");

  arr.sort((a, b) => {
    return b.length - a.length;
  });

  return arr[0];

  // Noktalama işaretlerini kaldırma
  // Cümleyi boşluklardan bölüp, kelimelerle bir array oluşturma
  // Kelimelerle oluşturduğumuz arrayi, kelimelerin karakterler sayılarına göre azalan bir şekilde sıralamak
  // En başta yani 0. indekste yer alan kelimeyi return etmek
};

/*

Longest Word

- Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.

- If there are two or more words that are the same length, return the first word from the string with that lengt.

- Ignore punctuation and assume sen will not be empty.

*/

/*

En uzun kelime

- JavaScript dilini kullanarak, LongestWord(sen) fonksiyonunun iletilen sen parametresini almasını ve dizgedeki en büyük kelimeyi döndürmesini sağlayın.

- Aynı uzunlukta iki veya daha fazla kelime varsa, dizeden bu uzunluktaki ilk kelimeyi döndürün.

- Noktalama işaretlerini dikkate almayın ve sen'in boş olmayacağını varsayın.

*/
