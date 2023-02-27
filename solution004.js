// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

const myArray = "My love for beans and bread is so impulsive"

const newArray = (myArray.split(" "))

for (i = 0; i <= newArray.length - 1; i++){
    newArray[i] = newArray[i][0].toUpperCase() + newArray[i].substring(1);
}


console.log(newArray.join(' '));

