// 1) js has a one call stack it can only  do one  at a time call stack present in the javaScript engine all the code of js is executed inside the call stack .whenever js code is run the globle execution context is created and it inside  push into the call stack. in gec(globle execution context) hold the code will run line by line over here .==>when call back function executed then console it then remove call back from the call stack 
// 2) all the code is executed the gec remove.
// 3) Callback queue waits until the call stack is empty. Afterwards, the codes in it are executed in First In, First Out (FIFO) order. As more functions or codes are added to the callback queue, they stay at the back and wait for the ones in the front to leave the queue first.
// 4) Image result for why do we need the callback queue Callback Queue: After the timer gets expired, the callback function is put inside the Callback Queue, and the Event Loop checks if the Call Stack is empty and if empty, pushes the callback function from Callback Queue to Call Stack and the callback function gets removed from the Callback Queue.t // Callback queue waits until the call stack is empty. Afterwards, the codes in it are executed in First In, First Out (FIFO) order. As more functions or codes are added to the callback queue, they stay at the back and wait for the ones in the front to leave the queue first.
//5) In JavaScript, the fetch() method is used to make asynchronous requests to the server and load the information that is returned by the server onto the web pages.The fetch() method returns a promise that can either be resolved or not. Thus, this method always returns a value and the only possible case where it may fail to return anything is a server error.
//6) A Microtask queue is a queue of tasks that are executed after the current task. The microtask queue is handled by the JavaScript engine before it moves on to the next task in the callback queue.In the example the ‘setTimeout’ callback is added to the callback queue. The ‘Promise.resolve’ is added to the microtask queue. The JavaScript engine will first execute all tasks in the microtask queue before moving on to the callback queue.
//7) event loop gives chance to microtask first before any one to callback queue task. suppose miocrotask create some microtask in  itself so callback queue have never chance to execute to long time  because microtask have more  priority to execute that's a starvation .


// the JavaScript event loop 
//java script is combination of synchronus(being one after aother) and asynchronus events  (like callback or promisses) js is single execution thread
 //synchronus event 
//  console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 1000)

// console.log('d')


// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 0)

// console.log('d')
console.log('a');

console.log('b');

setTimeout(() => console.log('e'), 1000)

setTimeout(() => console.log('c'), 0)

console.log('d')