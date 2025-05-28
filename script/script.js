let adc_taref = document.getElementById('adc_taref')

function adicionarTarefa() {
    if (adc_taref.style.display = 'none') {
        adc_taref.style.display = 'block'
    } 
}

const tarefa = []
let c = 0
let tot = 0

const tot_tar = document.getElementById('tot_tar')

function enviar() {
    let T = document.getElementById('dig_taref').value
    if (T === "") {
        window.alert('Valor inválido')
        return;
    }
    tarefa.push({nome: T,concluida: ''})
    
    let divbotoes = document.createElement("div") // Criei a div dos botões
    divbotoes.className = "botoes" // Botei a class: "botoes"
    
    document.querySelector("div.tarefas").appendChild(divbotoes) // Botei dentro da div de class: "tarefas"
    
    let botao1 = document.createElement("button") // Criei botão 1(check)
    let botao2 = document.createElement("button") // Criei botão 2(delete)
    
    divbotoes.appendChild(botao1) 
    divbotoes.appendChild(botao2) // Botei dentro da div de botões
    
    let span_check = document.createElement("span") // Criei o span do check
    let span_lixo = document.createElement("span") // Criei o span do delete
    
    span_check.style.color = 'rgb(22, 255, 22)'
    span_check.className = "material-symbols-outlined" // Botei class: "material-symbols-outlined"
    
    span_lixo.style.color = 'red'
    span_lixo.className = "material-symbols-outlined" // Botei class: "material-symbols-outlined"
    
    span_check.textContent = "check" // Escrevi dentro "check"
    span_lixo.textContent = "delete" // Escrevi dentro "delete"
    
    botao1.appendChild(span_check) // Botei a span do check no botão do check
    botao2.appendChild(span_lixo) // Botei a span do lixo no delete
    
    let divtar = document.createElement("div") // Criei a div de tarefas
    divtar.className = "tarefas" // Botei class: "tarefas"
    document.querySelector("section#box_tarefas").appendChild(divtar) // Botei a div de tarefas na section
    
    let divexib = document.createElement("div") // Criei a div onde vai aparecer as tarefas
    divexib.className = "taref" // Botei class: "taref"
    divtar.appendChild(divexib) // Botei na div de tarefas
    
    divtar.appendChild(divbotoes) // Botei a div de botões na div de tarefas
    
    divexib.textContent = tarefa[c].nome
    divtar.style.display = 'flex'
    
    function checkCheck(){
        divexib.style.textDecoration = 'line-through'
        botao1.removeEventListener("click", checkCheck)
    }

    function delDel(){
        divtar.remove()
        tot_tar.textContent = (`Total de tarefas: ${tot = tot - 1}`)
    }

    botao1.addEventListener("click", checkCheck)

    botao2.addEventListener("click", delDel)

    c++
    tot++
    tot_tar.textContent = (`Total de tarefas: ${tot}`)
}

