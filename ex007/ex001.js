var idade = 65
if ( idade < 16){
    console.log('Não vota')
}else{
    if ( idade >= 16 &&  idade <18 || idade > 65){
        console.log('Voto opicional')
    }else{
        if (idade >= 18){ //if opicional
            console.log('Voto obrigatório')
        }
    }
}
