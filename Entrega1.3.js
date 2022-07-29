// Entrega 1.3
const hasMeeting = false
const meeting = new Promise((resolve, reject) =>{
  if(!hasMeeting) {
    const meetingDetails = {
      name: 'Marketing Meeting',
      location: 'Skype',
      time: '13:00'
    }
    resolve(meetingDetails);
  } else {
    reject(new Error('Meeting already scheduled'))
  }
})

meeting.then( res => {
  console.log('Meeting Scheduled');
  console.log(res);
}).catch(err => {
  console.log(err.message);
})


//Nivel 1 - Ejercicio 1
console.log("Nivel 1 - Ejercicio 1");


//Nivel 2 - Ejercicio 1
console.log("Nivel 2 - Ejercicio 1");

//Nivel 2 - Ejercicio 2
console.log("Nivel 2 - Ejercicio 2");

//Nivel 3 - Ejercicio 1
console.log("Nivel 3 - Ejercicio 1");
