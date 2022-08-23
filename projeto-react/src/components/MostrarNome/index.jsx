function MostrarNome({nome}){
    return(
        <div>
            {nome ? (<p>Olá {nome}, seja muito bem vindo!</p>) : (<p>Não foi digitado nem um nome.</p>)}
        </div>
    )
}

export default MostrarNome