function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(','); 

     let objectInCache = cache.find((item) => item.hash === hash); 
      console.log(objectInCache)
      if (objectInCache) { 
          console.log("Из кэша: " + objectInCache.result); 
          return "Из кэша: " + objectInCache.result;

      } 
     
      
      let result = func.call(this, ...args); 
      console.log(result + ' результат')
      cache.push({hash, result}) ; 
      console.log(cache, 'пушим в кэш');
      
      
      if (cache.length >= 5) { 
        cache.shift() 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
  }


  const addThree = (a, b, c) => a + b + c;
  const upgradedAddThree = cachingDecoratorNew(addThree);
  upgradedAddThree(1, 2, 3); // вычисляем: 6
  upgradedAddThree(1, 2, 3); // из кэша: 6
  upgradedAddThree(2, 2, 3); // вычисляем: 7
  upgradedAddThree(3, 2, 3); // вычисляем: 8
  upgradedAddThree(4, 2, 3); // вычисляем: 9
  upgradedAddThree(5, 2, 3); // вычисляем: 10
  upgradedAddThree(6, 2, 3); // вычисляем: 11 (при этом кэш для 1, 2, 3 уничтожается)
  upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)
upgradedAddThree(5, 2, 5); // вычисляем: 
upgradedAddThree(5, 5, 5); // вычисляем:






function debounceDecoratorNew(f, ms) {
    let timerID;

    let count = true;

    return function wrapper(...args) {
      
      if (count) {
      wrapper.allCount = 1;
      wrapper.count = 1;
      count = false;
      f.apply(this, args)
      return ;
    }



      clearTimeout(timerID);
      wrapper.allCount += 1;
      timerID = setTimeout( () => {
        f.apply(this, args);
        wrapper.count += 1;
      }, ms);
    
    
    

    }
}


const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован так как следующий сигнал отменит предыдущий (300 - 0 < 2000)
setTimeout(() => upgradedSendSignal(2, 300), 300); // проигнорировано так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
setTimeout(() => upgradedSendSignal(4, 1200), 1200); // проигнорировано так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)
setTimeout(() => upgradedSendSignal(5, 2300), 2300); // Сигнал отправлен так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)
setTimeout(() => upgradedSendSignal(6, 4400), 4400); // проигнорировано так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)
setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(() => {
  console.log(upgradedSendSignal.count); // было выполнено 3 отправки сигнала
  console.log(upgradedSendSignal.allCount); // было выполнено 6 вызовов декорированной функции
}, 7000)




