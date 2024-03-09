
const getRandEvent =() =>{
    const random = Math.floor(Math.random()*3);
    if(random === 0){
        return 'Marathon';
    }else if (random === 1) {
        return 'Triathlon';
         } else if (random === 2) {
        return 'Pentathlon';
         }
        };
 const getTrainingDays = event =>{
    let days;
    if(event === 'Marathon'){
         days = 50;
    }else if(event === 'Triathlon'){
         days = 100;
    }else if(event === 'Pentathlon'){
         days = 200;
    } return days;
 } ;
 let logEvent =(name,event) =>{
 console.log(`${name}'s event is : ${event}`);
 }

 const logTime = (name,days) =>{
     console.log(`${name}'s time to train is:${days}`);

 }
 const event =  getRandEvent();
 const days = getTrainingDays(event);
 const name = 'EVENTHOUGH';
 logEvent(name,event);
 logTime(name,days);

 const event2 = getRandEvent();
 const days2 = getTrainingDays(event2);
 const name2 = 'timing';

 logEvent (name2,event2);
 logTime(name2,days2);

const event3 = getRandEvent();
const days3 = getTrainingDays(event2);
const name3 = 'Warren';

 logEvent(name3, event3);
 logTime(name3, days3); 