const  calculateTemp =()=>{
    const inputTemp=document.getElementById('temp').value;

    const tempSelected=document.getElementById('temp_diff');
    const valueTemp= temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) =>{
        let fahrenheit= ((cel*9/5)+32).toFixed(1);
        return fahrenheit;
    }
    const farToCel=(far) =>{
        let celsius =((fah-32)*9/5).toFixed(1);
        return celsius;
    }
    if (valueTemp =='cel'){
        document.getElementById('result').innerHTML = celToFah(inputTemp)+ "&#176; fahrenheit";

    }
    else{
        document.getElementById('result').innerHTML = farToCel(inputTemp)+ "&#176; Celsius";
    }

}