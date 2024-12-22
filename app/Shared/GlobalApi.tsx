import {create} from "apisauce";

const api= create({
    baseURL: 'https://192.168.1.36:1337/api', //admin ıp4 ile değiştirdim - slider için wifi ıp4 girilmeli
    headers: { 
        "X-API-Key":"50d165c0ce8a7e84cba99ac7bd9a08aec09f439dd718e6dcc5e204eb2dc679b33f3b823944dbbc081c2551986fd98fc5944861395b05ff58c9316150b4be07084f05ce6b2b3ff80192bbf9b370fb37ee7e40c11d3e416218d1e579ec00122f6429060ea9a0d6bf70941eb623f428016daf694af0778661711246d0a8eefdfb17"
    }
})

const getSlider=()=>api.get('/sliders?populate=*');

export default{
    getSlider
}