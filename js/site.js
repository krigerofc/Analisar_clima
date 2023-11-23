const key = '???'
const countryurl ="https://flagsapi.com/BR/flat/64.png"

//variaveis

let cidade_input = document.querySelector('#city')
const botao = document.querySelector('#search')

// informações

let cidade_name = document.querySelector('#cidade2')
let bandeira = document.querySelector('#country')

let temperatura = document.querySelector('#temperature span')
let clima = document.querySelector('#description')
let icon_clima = document.querySelector('#weather-icon')

let umidade = document.querySelector('#umidity span')
let vento = document.querySelector('#wind span')




//eventos
botao.addEventListener("click", pesquisar)
cidade_input.addEventListener('keyup', function(evento){
    if (evento.keyCode === 13){
        pesquisar()
    }
})


//função

async function pesquisar(){

    const apiWe = `https://api.openweathermap.org/data/2.5/weather?q=${cidade_input.value}&units=metric&appid=${key}&lang=pt_br`

    const response = await fetch(apiWe);
    const data = await response.json();

    console.log(data)
    //dados da interface
    cidade_name.innerText = cidade_input.value
    pais = data.sys.country
    bandeira.setAttribute('src',`https://flagsapi.com/${pais.toUpperCase()}/flat/64.png`)

    //
    clima.innerText = data.weather[0].description
    icon_clima.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    temperatura.innerText = `${Math.floor(data.main.temp)} °C`

    //ultimos dados
    umidade.innerText = `${data.main.humidity}%`
    vento.innerText = `${Math.floor(data.wind.speed)}km/h`


 

}