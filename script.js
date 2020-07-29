function Pessoa(nome, email) {
    this.nome = nome
    this.email = email
}
    function comparaEmail(pessoas) {
        let emailGmail;
        let emailHotmail;
        
        for (let pessoa of pessoas) {
            if (typeof emailGmail == 'undefined') {
                emailGmail = pessoa.email
                emailHotmail = pessoa
            } else {
               if (pessoa.email > emailGmail) {
                emailGmail = pessoa.gmail
                emailHotmail = pessoa
            }
         }
    }
        return emailHotmail;
}

    function listaRegistros(registros) {
    
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

document.querySelector('form').addEventListener('submit', (e) => {
    registraPessoa(e)
    limpaResultados()
    listaRegistros(registros)
}

let correosEmails = comparaEmail(registros)
    let comparAcao = document.createElement('p')
    comparAcao.textContent = `A pessoa usa determinado email  ${correosEmails.nome} com ${correosEmails.nome}`
    adicionaResultado(comparAcao)

let registros = []

function registraPessoa(event) {
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
    document.querySelector('#resultados').innerHTML = ''
}

function adicionaResultado(elemento) {
    document.querySelector('#resultados').appendChild(elemento)
}
