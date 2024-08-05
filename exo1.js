var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for (let i = 0; i < number.length; i++) {
    let num = number[i];
   if (num %3 ==0 && num %5 ==0) {
   console.log(num + 'muptipliable par  3 et 5') ;
      
   } else if(num %3 ==0 ) {
   console.log(num + 'mulitple de 3 ') ;
      
   }  else if(num %5 ==0 ) {
    console.log(num + 'mulitple de 5 ') ;
       
    }  else {
    console.log(num) ;
        
    }
    
}