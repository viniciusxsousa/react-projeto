function Evento({numero}){

    function disparar(){
        alert('Disparouu! ' + numero )
    }

    return(
        <div>
            <p>Click no botão para disparar o evento.</p>
            <button onClick={disparar} >Ativar</button>
        </div>
    )
}

export default Evento