document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById("inputbox");
    let buttons = document.querySelectorAll(".button, .plus, .equalbtn"); // Adjusted classes

    let string = "";
    let arr = Array.from(buttons);
    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                input.value = string;
            }
            else if (e.target.innerHTML == 'AC') {
                // Clear the input
                string = "";
                input.value = string;
            }
            else if (e.target.innerHTML == 'DEL') {
                // Delete the last character
                string = string.substring(0, string.length - 1);
                input.value = string;
            } 
            else if(e.target.innerHTML =='X'){
                string += '*';
                input.value=string;



            }
            else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });
});
