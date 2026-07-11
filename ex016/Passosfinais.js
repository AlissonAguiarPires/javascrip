let amigo =  {nome: 'Alisson', 
    sexo:'Masculino',
     peso:'40.6', 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
    amigo.engordar(2)
    console.log(`${amigo.nome} peso ${amigo.peso}kg`)
    
