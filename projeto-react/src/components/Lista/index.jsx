function Lista({lista}){
    return(
        <div>
            <h2>Rederização por lista</h2>
            { lista.length > 0 ?
              (lista.map((item, index) => (
                <p key={index}>O item é: {item}</p>
              ))) : (
                <p>Não há itens cadastrados</p>
              )
            }
        </div>
    )
}

export default Lista