//----------------------------------------------------------------------------------------------------------------------------------------
//
//BBBBBBBBBBBBBBBBB    YYYYYYY       YYYYYYY                 MMMMMMMM               MMMMMMMM FFFFFFFFFFFFFFFFFFFFFF RRRRRRRRRRRRRRRRR   
//B::::::::::::::::B   Y:::::Y       Y:::::Y                 M:::::::M             M:::::::M F::::::::::::::::::::F R::::::::::::::::R  
//B::::::BBBBBB:::::B  Y:::::Y       Y:::::Y                 M::::::::M           M::::::::M F::::::::::::::::::::F R::::::RRRRRR:::::R 
//BB:::::B     B:::::B Y::::::Y     Y::::::Y                 M:::::::::M         M:::::::::M FF::::::FFFFFFFFF::::F RR:::::R     R:::::R
//  B::::B     B:::::B YYY:::::Y   Y:::::YYY                 M::::::::::M       M::::::::::M  F:::::F       FFFFFF  R::::R     R:::::R
//  B::::B     B:::::B    Y:::::Y Y:::::Y                    M:::::::::::M     M:::::::::::M  F:::::F                R::::R     R:::::R
//  B::::BBBBBB:::::B      Y:::::Y:::::Y                     M:::::::M::::M   M::::M:::::::M  F::::::FFFFFFFFFF      R::::RRRRRR:::::R 
//  B:::::::::::::BB        Y:::::::::Y      --------------- M::::::M M::::M M::::M M::::::M  F:::::::::::::::F      R:::::::::::::RR  
// B::::BBBBBB:::::B        Y:::::::Y       -:::::::::::::- M::::::M  M::::M::::M  M::::::M  F:::::::::::::::F      R::::RRRRRR:::::R 
//  B::::B     B:::::B        Y:::::Y        --------------- M::::::M   M:::::::M   M::::::M  F::::::FFFFFFFFFF      R::::R     R:::::R
//  B::::B     B:::::B        Y:::::Y                        M::::::M    M:::::M    M::::::M  F:::::F                R::::R     R:::::R
//  B::::B     B:::::B        Y:::::Y                        M::::::M     MMMMM     M::::::M  F:::::F                R::::R     R:::::R
//BB:::::BBBBBB::::::B        Y:::::Y                        M::::::M               M::::::M FF:::::::FF            RR:::::R     R:::::R
//B:::::::::::::::::B      YYYY:::::YYYY                     M::::::M               M::::::M F::::::::FF            R::::::R     R:::::R
//B::::::::::::::::B       Y:::::::::::Y                     M::::::M               M::::::M F::::::::FF            R::::::R     R:::::R
//BBBBBBBBBBBBBBBBB        YYYYYYYYYYYYY                     MMMMMMMM               MMMMMMMM FFFFFFFFFFF            RRRRRRRR     RRRRRRR
//                                                                                             
//--------------------------------------------------------------------------------------------------------------------------------------->

function search_animal() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('bar');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}