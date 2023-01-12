module.exports = function toReadable (number) {
    const hundreds = ['', 'one' , 'two', 'three' , 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const simpleNum = ['', 'one' , 'two', 'three' , 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    // let newNum =  number.toString().split('');
          let newNum =  Array.from(String(number)).map(i => Number(i));
       if (number === 0) {
            return 'zero';
        } else if (newNum[1]===0 && number > 100 ) {
           return (`${hundreds[newNum[0]]} hundred ${simpleNum[newNum[2]]}`).trim(); 
        } else if  (newNum[1]===1 && number > 100)  {
        return  `${hundreds[newNum[0]]} hundred ${simpleNum[newNum[2]+10]}`;
    }

  else if ((number > 99 && number < 1000)) {
 let b = (`${hundreds[newNum[0]]} hundred ${teens[newNum[1]]} ${simpleNum[newNum[2]]}`).trim();  
    return b;
  } else if ((number >19) && (number <100)) {
    
    //   let newNum =  Array.from(String(number)).map(i=>Number(i))
    //   return newNum[i];
    // => newNum[0] newNum[1]

    return (`${teens[newNum[0]]} ${simpleNum[newNum[1]]}`).trim() ;
    }else if  (number < 20){
        return (simpleNum[number]);
    };
}





// module.exports = function toReadable (number) {
//     const hundreds = ['', 'one' , 'two', 'three' , 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     const teens = ['', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//     const simpleNum = ['', 'one' , 'two', 'three' , 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
//      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//     // let newNum =  number.toString().split('');
//           let newNum =  Array.from(String(number)).map(i => Number(i));
//         //   console.log(newNum);
//        if (number === 0) {
//             return 'zero';
//         } else if (newNum[1]===0 && number > 100 ) {
//            return (`${hundreds[newNum[0]]} hundred ${simpleNum[newNum[2]]}`).trim(); 
//         } else if  (newNum[1]===1 && number > 100)  {
//         return  `${hundreds[newNum[0]]} hundred ${simpleNum[newNum[2]+10]}`;
//     }
//     // else if (number > 100 && number < 110 ) {
//     //     return  `${hundreds[newNum[0]]} hundred ${simpleNum[newNum[2]]}`;
//     // else if ((number > 99 && number < 1000) && (newNum[1] ==0)) {
//     //     return (`${hundreds[newNum[0]]} hundred ${simpleNum[newNum[2]]}`);  
//     // }
// //     else if  ( (number > 99 && number < 1000) &&  (newNum[2]===0 && newNum[1]=== 0)) 
// //     //  (String(number).endsWith('00'))
// //      {
// //   return  `${hundreds[newNum[0]]} hundred`;

// //      }
//   else if ((number > 99 && number < 1000)) {
//  let b = (`${hundreds[newNum[0]]} hundred ${teens[newNum[1]]} ${simpleNum[newNum[2]]}`).trim();  
//     return b;
//   } else if ((number >19) && (number <100)) {
    
//     //   let newNum =  Array.from(String(number)).map(i=>Number(i))
//     //   return newNum[i];
//     // => newNum[0] newNum[1]

//     return (`${teens[newNum[0]]} ${simpleNum[newNum[1]]}`).trim() ;
//     }else if  (number < 20){
//         return (simpleNum[number]);
//     };
// }
   



   

