const insert = num => {
    document.form.textview.value = document.form.textview.value + num
    console.log("Ejecutando INSERT");
    
} 

const equal = () => {
    let exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp)
        console.log("Ejecutando EQUAL");
        
    }
}

const clean = () => {
    document.form.textview.value = ""
    console.log("Ejecutando CLEAR");
    
}

const back = () => {
    let exp = document.form.textview.value
    document.form.textview.value = exp.substring(0,exp.length-1)
}
