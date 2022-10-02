class calculadora{
// divisores de un numero 
divisores(){
    let num1,divisores="",i
    let inicio=document.getElementById("num")
    num1= parseInt(inicio.value)
    for(i=0;i<=num1;i++){ 
        if(num1%i==0){                                    
            divisores=divisores+i .toString()+","  
        }
    }
    if(isNaN(num1)){
        inicio.value = "INGRESE UN NUMERO !"
    }else{
        if(divisores){
            inicio.value ="Los divisores de "+num1+" son: "+divisores
        }
    }
    
}
// terminado :c

// invertir una cantidad de numero (SOLO NUMEROS)
inverti(){
    let num,digito,invertido=""
    let input=document.getElementById("num")
    num= parseInt(input.value)

    while(num > 0){
        digito = num%10  ///123
        num = Math.floor(num/10)
        invertido=invertido + digito.toString()
    }
    if(isNaN(num)){
        input.value = "INGRESE UN NUMERO!"
    }else{
        if(invertido=invertido){
            input.value = "El numero invertidos es:"+ invertido
        }
    }
}
//terminado :)


//ver si un numero es primo o no
primo(){
    let num,i,cont=0
    let num1 = document.getElementById("num") 
    num =parseInt(num1.value)
    if(num>0){
        for(i=1; i<=num;i++){
            if(num%i==0){
                cont=cont+1 
            }
        }
    }
    if(isNaN(num)){
        num1.value = "INGRESE UN NUMERO!!"
    }else{
        if(cont==2){
                num1.value = "El numero que ingreso es PRIMO"
        }else{
            if(cont != 2){
                num1.value = "NO ES PRIMO!!!!"
            }
        }
    }
}
//terminado :)


//ver si un numero es perfecto, para saber si es perfecto hay que hacer una suma de sus divisores
perfecto(){
    let num
    let perfec = document.getElementById("num")//6
    num=parseInt(perfec.value)
    let ac=0,r,i
    i=num-1
    while(i>0){
        r=num%i  
        if(r==0){  //  r = o  se va a acumular 1 + 2 + 3  = 6 
            ac = ac+i
        }
        i = i -1
    }
    if(isNaN(num)){
        perfec.value = "INGRESE UN NUMERO ! "
    }else{
        if(num==ac){
                perfec.value = "El numero que ingreso es perfecto"
        }else{
            if(num != ac){
                perfec.value = "NO ES PERFECTO"
            }
        }
    }
    
}
//terminado :)


//sumar el numero que le sigue ; ejemplo : 1+2=3   2+3= 5   3+5=8 
fibonacci(){
    let fibonacci = [],number

    let num = document.getElementById("num")
    fibonacci[0]= 0
    fibonacci[1] = 1
    number = num.value
    for (let i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    if(isNaN(number)){
        num.value= "SOLO NUMEROS!!"
    }else{
        if(fibonacci){
            num.value = " El fibonacci de "+ number + " es igual a " + fibonacci
        }
    
    }
}
//terminado :0


// combertir de la base 10 a la base 2 = binarios 
base10_2(){
    let digito,num,pos=0,numeros=[],base2=""
    let input = document.getElementById("num")
    num=parseInt(input.value)
    while(num > 0){
    digito = num % 2
    num = Math.floor(num / 2)
    numeros[pos] = digito
    pos = pos + 1
    }
    for(let ind = pos -1; ind>=0; ind--){
        base2=base2 + numeros[ind].toString()
    }
    if(isNaN(num)){
        input.value ="NO SE ACEPTAN LETRAS"
    }
    else{
        if(base2 == base2){
            input.value = "La base 2 es: " +base2
        }
        
    }
}
//terminado :p


//combertir de la base 10 a la base 16 
base10_16(){
    let arreglo=[],total=0,mynum
    let num = document.getElementById("num")
    mynum=parseInt(num.value)
    while ( mynum > 0){
        total = mynum % 16;
        mynum = Math.floor(mynum / 16);
        switch (total > 9 || total < 16){
            case total == 10:
                total = "A";
                break;
            case total == 11:
                total = "B";
                break;
            case total == 12:
                total = "C";
                break;
            case total == 13:
                total = "D";
                break;
            case total == 14:
                total = "E";
                break;
            case total == 15:
                total = "F";
                break; 
                
        }
        arreglo.unshift(total)
        
    }
    if(isFinite(num)){
    }
    else{
        if (mynum == mynum){
            num.value = "La base 16 es: " +arreglo.join('')
        }
        else{
            if(isNaN(num)){
                num.value = "ERROR INGRESA UN NUMERO !!!"
            }
        }
        
    }
}
// terminado :0



//combertir de la base 10 a la base 8 
base10_8(){
    let digito,num,pos=0,numeros=[],base8=""
    let input = document.getElementById("num")
    num = parseInt(input.value)
    while (num>0){
        digito = num % 8
        num = Math.floor(num/8)
        numeros[pos]= digito
        pos= pos + 1
    }
    for(let i=pos-1;i>=0;i--){
    base8= base8+numeros[i].toString()
    }
    if(isNaN(num)){
        input.value ="INGRESE UN NUMERO"
    }
    else{
        if(base8){
            input.value = "La base 8 es: " +base8
        }
        
    }
}
//terminado :(


//combertir de la base 2 a la base 10 
base2_10(){
    let  num,alm=[],i,cont=0
    let entrada = document.getElementById("num")
    num= entrada.value
    for(i=0;i<num.length;i++){
        alm[i]=num.charAt(i)
    }
    for(i=0;i<alm.length;i++){
        if(alm[i]==1){
            cont = cont+Math.pow(2, alm.length-i-1)
        }
        if(cont){
            entrada.value = "La base 10 es: "+cont
        }else{
            if(num>1){
                entrada.value = " Solo numeros binarios"
            }else{
                if(isNaN(num)){
                    entrada.value = "No se permite letras ni signos"
                }
            }
        }
        
    }
}
// terminado :)



//combertir de la base 2 a la base 16 
base2_16(){
    let  num,alm=[],i,cont=0,arreglo=[],total=0,pos=0,base8="",resp
    let entrada = document.getElementById("num")
    num= entrada.value

        for(i=0;i<num.length;i++){
            alm[i]=num.charAt(i)
        }
        for(i=0;i<alm.length;i++){
            if(alm[i]==1){
                cont = cont+Math.pow(2, alm.length-i-1)
            }
        }
    while ( cont > 0){
        total = cont % 16;
        cont = Math.floor(cont/ 16);
        switch (total > 9 || total < 16){
            case total == 10:
                total = "A";
                break;
            case total == 11:
                total = "B";
                break;
            case total == 12:
                total = "C";
                break;
            case total == 13:
                total = "D";
                break;
            case total == 14:
                total = "E";
                break;
            case total == 15:
                total = "F";
                break; 
                
        }
        arreglo.unshift(total)
    }
        if(total ){
            entrada.value = "La base 16 es: "+ arreglo.join('')
    }else{
        if(num>1){
            entrada.value = "INGRESE UN NUMERO BINARIO"
        }else{
            entrada.value = "No se aceptan letras ni signos"
        }
    }
}
// terminado el dolor de cabeza :)



//escribir una frase y contar solo las palabras sin los espacios, no se validan los numero 
contarpalabra(){
    let frase, cont=0
    let palabra =document.getElementById("num")
    frase= palabra.value

    if(isFinite(frase)){
        palabra.value = "Ingrese una frase no se permite numeros"
    }else{
        if(frase){
            for(let i = 0;i<frase.length;i++){
                if(frase[i]==" " && frase[i+1]!=" "){
                    cont=cont +1
                }
            }
            palabra.value=`La frase tiene ${cont+1} palabras`
        }
    }
}
// terminado :)



//dar una palabra o frase que se lee igual aun que este al revez, no se validan numeros
polindroma(){
    let frase,frase2="",frase3=""
    let entrada =document.getElementById("num")
    frase = entrada.value
    for(let i=frase.length-1;i>=0;i--){
        if(frase[i]!=" "){
            frase3=frase[i]+frase3
            frase2=frase2+frase[i]
        }
    }
    if(isFinite(frase)){
        entrada.value = "Introduzca una palabra"
    }else{
        if(frase3==frase2){
            entrada.value = "La palabra  "+ frase+ " es polindromo"
        }else{
            entrada.value = " La palabra "+ frase+ " no es polindromo"
        }
    }
}
//terminado :o



// dar una palabra o frase que se va a invertir 
invertirfrase(){
    let frase,cambio=""
    let palabra = document.getElementById("num")
    frase = palabra.value
    
    for(let i = frase.length-1;i>=0;i--){
        cambio = cambio + frase[i]
    }
    if(isFinite(frase)){
        palabra.value ="NO SE ACEPTAN NUMERO!"
    }
    else{
        if(cambio == cambio){
            palabra.value = "la frase o palabra invertida es: " +cambio
        }
        
    }
    
}
// terminado :)


// se ingresa caracters y este los cuenta segun el tipo que sean
contarcaracter(){
    let text,contvoc=0, contcons=0, contnum=0, countcaract=0, resp
    let input=document.getElementById("num")
    text=input.value;

    for(let i=0; i< text.length;i++){
    if(text[i]=="a"||text[i]=="e"||text[i]=="i"||text[i]=="o"||text[i]=="u"){
    contvoc++
    }else 
    if(text[i]== "0"||text[i]=="1"||text[i]=="2"||text[i]=="3"||text[i]=="4"||text[i]=="5"||text[i]=="6"||text[i]=="7"||text[i]=="8"||text[i]=="9"){
    contnum++
    }else 
    if(text[i]=="b"||text[i]=="c"||text[i]=="d"||text[i]=="f"||text[i]=="g"||text[i]=="h"||text[i]=="j"||text[i]=="k"||text[i]=="l"||text[i]=="m"||text[i]=="n"||text[i]=="p"||text[i]=="q"||text[i]=="r"||text[i]=="s"||text[i]=="t"||text[i]=="w"||text[i]=="x"||text[i]=="y"||text[i]=="z"){
    contcons++
    }else {
    countcaract++
}
    }
    resp="Existen " + contvoc + " vocales, " + contcons + " consonantes,  "+contnum+ " numeros y "  + countcaract + " caracteres especiales en el arreglo"
    input.value=resp;
}
//terminado 


// se da una palabra o frase y se verifica si se encuentra en la letra que se le indica 
buscarcadena(){
    let result = document.getElementById("num")
        let cadena = result.value
        let enco_cadena = prompt("Ingrese cadena a buscar")
        let bandera=false, ini=0, pos1 = 0, pos2 = 0 , cadena2="",ini_posicion = 0 
        while(ini < cadena.length && bandera == false){
            if( cadena[ini] == enco_cadena[0]){
                pos1 = ini 
                ini_posicion= pos1+1
                while(pos2 < enco_cadena.length){
                    if(cadena[pos1] == enco_cadena[pos2]){
                    cadena2 = cadena2 + cadena[pos1]
                    }
                    pos2++
                    pos1++ 
                }
                if(cadena2 == enco_cadena){
                    bandera= true 
                }
            }
            ini++
        }
        if(bandera == true){
            pos1 = pos1 
            result.value=`Inicia en la posición ${ini_posicion.toString()} y finaliza en la posición ${pos1.toString()}`
        }else{
            result.value=`La cadena no ha sido encontrada `
}
}
//terminado :c


//El mayor de un arreglo, no se validan letras
mayorarreglo(){
    let arreglo=[],mayor,dato,cont,i=0
    let entrada = document.getElementById("num")
    dato = entrada.value
    arreglo = dato.split(",")
    mayor = 0
    if(entrada.value =""){
        entrada.value = "Ingrese numero"
    }else {
        for(let i = 0; i < arreglo.length;i++){
            if (isNaN(arreglo[i])){
                entrada.value = "Solo se permiten números"
            }else{
                if(i == 0){
                    mayor = arreglo[i]
                }
                if(parseFloat(arreglo[i])> mayor){
                    mayor = parseFloat(arreglo[i])
                }
                entrada.value = " El  mayor del arreglo es = "+ mayor 
            }
    }
    }
}
//terminado :)



// El promedio de un arreglo, no se validan las letras 
promedio(){
    let entrada = document.getElementById("num")
    let suma= 0,int=0
    let num = entrada.value
    let num1 = num.split(",")

    if(num1){
        for(let cont = 0; cont < num1.length;cont++){
            suma = suma+parseFloat(num1[cont])
        }
        
    } 
    int = suma / num1.length
        entrada.value=`El promedio del arreglo dado ${JSON.stringify(num1)} es de: ${int}`
    if(int != suma / num1.length){
            entrada.value = " Ingrese una cantidad numerica "
        }
}
// terminado :o


//buscar un arreglo de la posicioon que se le indique
buscar(){
    let input = document.getElementById("num")
    let cadena = input.value,c=0,enc=false
    let arreglo = cadena.split(",")
    let buscado = prompt("Ingrese el valor a buscar")
    while(c < arreglo.length && enc == false){
        if(arreglo[c] == buscado){
            enc = true
        }
        else{
            c = c +1
        }
    }
    if (enc){
        input.value = `El dato: ${buscado} se encuentra en la posicion: ${c} del arreglo ${JSON.stringify(arreglo)}`
    }
    else{
        input.value = `El dato: ${buscado} no se encuentra en el arreglo ${JSON.stringify(arreglo)}`
    }
}
// terminado :)


// eliminar un arreglo de la posicion que se le indique 
eliminar(){
    let num1 = document.getElementById("num")
    let numero = num1.value
    let num2 = numero.split(",")
    let eliminar = prompt("que dato quiere eliminar")
    let i = num2.indexOf(eliminar)
    if (i>=0){
        num2.splice(i, 1)
        num1.value = `El dato: ${eliminar} se encontraba en la posicion: ${i} y fue eliminado ${JSON.stringify(num2)}`
    }else{
        num1.value="no se encuentra en los datos que ingreso"
    }
}
//termindo :)



//insertar un arreglo en la poscicion que se le indique
insertar(){
let arreglo,valor,posicion,arreglo2=[]
let entrada = document.getElementById("num")
arreglo = entrada.value
arreglo = arreglo.split(",")
valor = prompt("Ingrese el valor que va a insertar en el arreglo ")
posicion = prompt("Ingrese en la posicion que lo va a insertar")

if(posicion>arreglo.length){
    arreglo.length = posicion
}
for(let i = 0; i < arreglo.length;i++){
    if(i == posicion - 1){
        arreglo2[i]=valor
    }else{
        arreglo2[i] = arreglo[i]
    }
}
entrada.value = " El arreglo : " +  valor + " se inserto en  " + arreglo2
}
//terminado :o


// limpiar la pantalla :)  
limpiar(){
    let limpiar = document.getElementById("num")
    limpiar.value = ""
}
}
let cal = new calculadora()