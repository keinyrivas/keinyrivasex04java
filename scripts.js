function Pessoa(nome, email) {
    console.log("Pessoa")

    this.nome = nome
    this.email = email
    this.tipoEmail = comparaEmail(email)
}
function comparaEmail(email) {
    console.log("comparaEmail")

    if (email.includes("gmail")){
        return "gmail"
    }else if(email.includes("hotmail")){
        return "hotmail"
    }
    return "outros"
    
    // let tipo
    // let emailHotmail;
    
    // for (let pessoa of pessoas) {
    //     if (typeof emailGmail == 'undefined') {
    //         emailGmail = pessoa.email
    //         emailHotmail = pessoa
    //     } else {
    //         if (pessoa.email > emailGmail) {
    //             emailGmail = pessoa.gmail
    //             emailHotmail = pessoa
    //         }
    //      }
    // }
    //     return emailHotmail;
}

function listaRegistros(registros) {
    console.log("listaRegistros")
    
    let intro = document.createElement('div');
    intro.innerHTML += '<p>Pessoas Cadastradas:</p>'
    let lista = document.createElement('ul')

    registros.forEach( registro => {
        let item = document.createElement('li')
        item.textContent = `${registro.nome} possui ${registro.email}`
        lista.appendChild(item)
    } )

    intro.appendChild(lista)

    adicionaResultado(intro)
}

function registraPessoa(event) {
    console.log("registraPessoa")
    event.preventDefault()

    let form = event.target
    let dados = new FormData(form)

    let nome = dados.get('nome')
    let email = dados.get('email')

    form.querySelectorAll('input[type=text]').forEach( campo => campo.value = '')

    let registro = new Pessoa(nome, email)

    registros.push(registro)
}

function limpaResultados() {
    console.log("limpaResultados")
    document.querySelector('#resultados').innerHTML = ''
}

function adicionaResultado(elemento) {
    console.log("adicionaResultado")
    document.querySelector('#resultados').appendChild(elemento)
}

document.querySelector('form').addEventListener('submit', (e) => {
    console.log("submit")
    registraPessoa(e)
    limpaResultados()
    listaRegistros(registros)

    // let correosEmails = comparaEmail(registros)
    // Ultima pessoa
    let pessoa = registros.slice(-1)[0]
    let comparAcao = document.createElement('p')
    comparAcao.textContent = `${pessoa.nome} usa um email do tipo: ${pessoa.tipoEmail} no email: ${pessoa.email}`
    adicionaResultado(comparAcao)

})


let registros = []

