import Botao from '../Botao'

function Evento(){

    function evento01(){
       console.log('Evento 01')
    }

    function evento02(){
        console.log('Evento 02')
    }

    return(
        <div>
            <p>Click no botão para disparar o evento.</p>
            <Botao evento={evento01} texto='Evento 01'></Botao>
            <Botao evento={evento02} texto='Evento 02'></Botao>
        </div>
    )
}

export default Evento