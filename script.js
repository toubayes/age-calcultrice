const date_num=document.querySelector(".num_day");
const month_date=document.querySelector(".num_month");
const years_num=document.querySelector(".num_year");
const error=document.querySelectorAll(".error");
const paragraph=document.querySelectorAll(".day p");
const calcule=document.querySelector("button");

const res_date=document.querySelector(".res_date");
const res_years=document.querySelector(".res_years");
const res_month=document.querySelector(".res_month");


calcule.addEventListener("click",()=>{
    console.log("clicked");
    validate_empty(date_num,error[0]);
    validate_empty(month_date,error[1]);
    validate_empty(years_num,error[2]);

})
function validate_empty(input,error,p){
    if (input.value.trim() === "") {
        error.innerHTML = ` input cannot be empty`;
        input.style.borderColor = "red"; // Set the border color to red
     } else if (isNaN(input.value) || input.value <= 0) { // Check if the input is a valid number
            error.innerHTML = `Input must be a valid number`;
            input.style.borderColor = "red";
            return false;
        } else {
        error.innerHTML = ""; // Clear the error message if input is not empty
        input.style.borderColor = ""; // Reset the border 
            calcule_date();
            return true;
    }
}
function calcule_date(){
      // Get current date 01-10-2024
     const currentDate = new Date();
    
      // Get input values
      const day = parseInt(date_num.value);
      const month = parseInt(month_date.value) - 1; // JavaScript months are 0-indexed (0 for January)
      const year = parseInt(years_num.value);
  
      // Create a date object with the user input
      const givenDate = new Date(year, month, day);
  
      // Check if the date is valid
      if (givenDate > currentDate) {
        res_date.innerHTML="--";
      res_month.innerHTML="--";
      res_years.innerHTML="--";
          return;
      }
  
      // Calculate the difference
      const diffInTime = currentDate.getTime() - givenDate.getTime();
  
      // Calculate years, months, and days
      const diffDate = new Date(diffInTime);
      const yearsDiff = diffDate.getUTCFullYear() - 1970; // UTC base year 1970
      const monthsDiff = diffDate.getUTCMonth();
      const daysDiff = diffDate.getUTCDate() - 1;

      res_date.innerHTML=daysDiff;
      res_month.innerHTML=monthsDiff;
      res_years.innerHTML=yearsDiff;
  

}