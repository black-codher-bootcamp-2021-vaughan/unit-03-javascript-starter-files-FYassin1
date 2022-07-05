function getGrade(total) {
    let message = "Your grade is"  ;

    
   if (total > 80 && total <= 90 ) { 
    message = " Your grades is A"
   }

   if (total > 70 && total <= 80) { 
    message = " Your grades is B"
   }

   if (total > 60 && total <=70) { 
    message = " Your grades is C"
   }

   if (total >50 && total <=60) { 
    message = " Your grades is D"
   }

   if (total >40 && total <=50) { 
    message = " Your grades is E"
   }

   if (total >30 && total <=40) { 
    message = " Your grades is F"
   }

   if (total <30) { 
    message = "Failed"
   }

  
   

           //



           function getGradeSwitch(total) {
            let message = "You got a grade of";
        
          switch (total) { 
            case total > 90:
                message = "You got a grade of A+"
                break;

            case total >= 80 && total <= 90:
                message = "You got a grade of A"
                break;

            case total >= 70 && total <= 80:
                message = "You got a grade of B"
                break;

                case total >= 60 && total <= 70 :
                    message = "You got a grade of c"
                    break;
                    
                    case total >= 50 && total <= 60:
                        message = "You got a grade of D"
                        break;

                        case total >= 40 && total <= 50:
                        message = "You got a grade of E"
                        break;

                        case total >= 30 && total <= 40:
                        message = "You got a grade of F"
                        break;

                        case total <30:
                        message = "Failed"
                        break;

          }
          
                        
                        return message; 

                
                   

                }

                console.log(getGradeSwitch(55))
          




      
        

 

    
    
}