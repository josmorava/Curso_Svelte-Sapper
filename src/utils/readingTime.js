//tiempo en el que se tarda una persona leyendo uno de los post

const readingTime = text => {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  const minutes = numberOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `📖 ${readTime} Min.`;
}

export default readingTime;