// Code your solutions in this file

function countDown(num){
    while (num >= 0){
        console.log(num);
        num--;
    }
}
countDown(10);

 function writeCards(arrNames, eventName) {
    let thankMessage = []
    for (let i = 0; i < arrNames.length; i++) {
  
      const message = `Thank you, ${arrNames[i]}, for the wonderful ${eventName} gift!`;
       thankMessage.push(message);
    }   
    return thankMessage;
  }
 

  const arrNames = ["Guadalupe", "Ollie", "Aki"];
  const eventName = "Surprise";
  const output = writeCards(arrNames, eventName);
console.log(output);