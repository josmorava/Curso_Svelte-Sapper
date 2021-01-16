//funcion para mostrar un emoji random que se muestre en el título
const randomEmoji = () =>{
  const emojis= [
    '👏','✌','👌','🤞','👍','🙌'
  ];
  //elemento de forma aleatoria
  return emojis[Math.floor(Math.random() * emojis.length)];
}

export default randomEmoji;