api_key = '0bb360333417f753a552c6a4e7799eb8'
api_key_backgroud_photos = '42274136-4ef3d3820513b92a8cb1f0efe'
//api_key_pexels = 'Qk5etWEpSaNfjdcROSR9fBqJ6KcBxZsN2sXu94Ngg69nnLAhN18OOw3W'

//Elementos https://api.pexels.com/v1/search?query=nature&per_page=1

const input = document.getElementById('input')
const button = document.getElementById('botão_enviar') 
const information_tempo = document.getElementById('information_tempo')
const information_cidade = document.getElementById('information_cidade') 
const img_tempo = document.getElementById('img-tempo')
const information_vento = document.getElementById('information_vento')
const information_chuva = document.getElementById('information_chuva') 
const information_temp = document.getElementById('information_temp')
const img_bandeira = document.getElementById('img-bandeira') 
const container_information_geral = document.getElementById('container_information_geral')
const main = document.getElementsByTagName('main')[0] 
const body = document.getElementsByTagName('body')[0] 
const caixa_input = document.getElementById('caixa_input')

//Evento

button.addEventListener('click',function(){

    fetch(`https://pixabay.com/api/?key=${api_key_backgroud_photos}&q=${input.value}&lang='pt'&orientation='horizontal'&image_type=photo`)
    .then(response => response.json())
    .then(dados => {
        document.body.style.backgroundImage = `url('${dados.hits[0].largeImageURL}')`
    })
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}&units=metric&lang=pt_br`)
    .then(response => response.json())
    .then(dados => {
        container_information_geral.style.display = 'Block'
        information_tempo.innerHTML = dados.weather[0].description
        information_cidade.innerHTML = dados.name
        caixa_input.style.borderBottom = 'solid 1px white'
        main.style.height = '400px'
        information_temp.innerHTML = parseInt(dados.main.temp) + "°C"
        img_bandeira.src = `https://flagsapi.com/${dados.sys.country}/shiny/64.png`
        img_tempo.src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
        information_chuva.innerHTML = dados.main.humidity + ' %'
        information_vento.innerHTML = (parseFloat(dados.wind.speed)*3.6).toFixed(2) + ' km/h'
    })
})





