class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, callId) {
        // console.log(callId);
        // console.log(this.alarmCollection + ' до вызова метода')
        if (callId === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        }
        if (this.alarmCollection.find(item => item.id === callId)) {
            console.error('Будильник с таким id уже существует.');
            return
        } else { 
            
            this.alarmCollection.push({time, callback, id}); //должен добавлять звонок в массив в массив
            // console.log(this.alarmCollection + ' после вызова метода')
        } 

         
    }

    
    removeClock(deletedId) {
        console.log(this.alarmCollection.length + ' -  до');
        const result = this.alarmCollection.filter(item => item.id !== deletedId); 
        
        console.log(result + ' -  после');
        if (result.length === this.alarmCollection.length) {
            return false;
        } else {
            this.alarmCollection = result;
            return true;
        }
    }

    getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
    return `${hours}:${minutes}`;
    }

   checkClock(call) { //функция проверяет есть ли такое время в звонке
    //  console.log(callback + ' проверка');
            if (this.getCurrentFormattedTime() === call.time) {
              
                call.callback();              //должен браться колбэк и выдаваться из коллекции сообщение
            } 

        } 

  
    start () {

        

        if (this.timerId = null) {
            this.timerId = setInterval( () => {
              this.alarmCollection.foreach((call) => this.checkClock(call))
            }, 1000) //перебирать все звонки, и для каждого вызывать функцию checkClock
            console.log(this.timerId + 'таймер');
        }
    }

    stop() {
      if (this.timerId != null) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
      
    }

    printAlarms() {
        this.alarmCollection.forEach((item) =>
          console.log(`Будильник №${item.id} его время: ${item.time}`),
        );
        console.log(`Количество: ${this.alarmCollection.length}`);
      }


    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}



function testCase() {
    const testCall = new AlarmClock();

    const currTime = new Date();
    function NeedTime(currTime, min) {
        currTime.setMinutes(currTime.getMinutes() + min);
        return currTime.getHours() + ":" + currTime.getMinutes();
    }
   
   
    testCall.addClock(NeedTime(currTime, 0), () => console.log(`Первый будильник`), 1); 
    testCall.addClock(NeedTime(currTime, 1), () => console.log(`Второй будильник`), 2);
    testCall.addClock(NeedTime(currTime, 1), () => console.log(`Второй лишний будильник`), 2);
    testCall.addClock(NeedTime(currTime, 2), () => console.log(`Третий будильник, который удалим`), 3);
    testCall.removeClock(3);
    testCall.addClock(NeedTime(currTime, 2), () => console.log(`Третий будильник`), 3);
    testCall.printAlarms();
    testCall.stop();
    testCall.clearAlarms();
    testCall.start();



    

   
    
    
  };

  testCase();