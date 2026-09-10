// DOM
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const dias = document.querySelector('#dias')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')

const dataCompleta = document.querySelector('#data-completa')
const mensagemPeriodo = document.querySelector('#mensagem-periodo')
const iconePeriodo = document.querySelector('#icone-periodo')

// Executa imediatamente e agenda a atualização a cada 1s
relogio()
setInterval(relogio, 1000)

// Ação
function relogio() {
    const hoje = new Date()

    let h = hoje.getHours()
    let m = hoje.getMinutes()
    let s = hoje.getSeconds()

    let d = hoje.getDate()
    let mo = hoje.getMonth() + 1
    let y = hoje.getFullYear()

    // Lógica do período do dia (utilizando apenas IF / ELSE IF conforme regra)
    if (h >= 5 && h < 12) {
        mensagemPeriodo.textContent = "BOM DIA!"
        iconePeriodo.textContent = "☀️"
    } else if (h >= 12 && h < 18) {
        mensagemPeriodo.textContent = "BOA TARDE!"
        iconePeriodo.textContent = "☀️"
    } else {
        mensagemPeriodo.textContent = "BOA NOITE!"
        iconePeriodo.textContent = "🌙"
    }

    // Formatação de zero à esquerda
    if (h < 10) h = '0' + h
    if (m < 10) m = '0' + m
    if (s < 10) s = '0' + s
    if (d < 10) d = '0' + d
    if (mo < 10) mo = '0' + mo

    // Atualização do HTML
    hours.textContent = h
    minutes.textContent = m
    seconds.textContent = s
    
    dias.textContent = d
    mes.textContent = mo
    ano.textContent = y

    // Montagem manual da data formatada (DD/MM/AAAA)
    dataCompleta.textContent = d + '/' + mo + '/' + y
}