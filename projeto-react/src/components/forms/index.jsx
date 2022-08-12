import {useState} from 'react'

function Forms(){

    const [name, setName] = useState();
    const [pass, setPass] = useState();

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Usuário: ' + name)
        console.log('Senha: ' + pass)
    }

    return(
        <>
            <h1>Formulário de Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome:   ">Nome</label>
                    <input type="text" placeholder="Digite seu nome." id="nome" name="nome" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="pass">Senha</label>
                    <input type='password' placeholder="Digite sua senha."  onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value='Cadastrar' />
                </div>
            </form>
        </>
    )
}

export default Forms