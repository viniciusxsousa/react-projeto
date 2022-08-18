import { useState } from 'react'

function Rederizasao(){

    const [email, setEmail] = useState();
    const [emailUser, setEmailUser] = useState();

    function enviarEmail(e){
        e.preventDefault()
        setEmailUser(email);
    }

    function limparEmail(){
        setEmailUser('')
    }

    return(
        <div>
            <h1>Rederização por condicional</h1>
            <form>
                <input type='email' placeholder='Digite seu e-mail...' onChange={(e) => setEmail(e.target.value)} ></input>
                <button type='submit' onClick={enviarEmail}>Enviar</button>
                {emailUser && (
                    <div>
                        <p>O e-mail do usuário é: {emailUser}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Rederizasao