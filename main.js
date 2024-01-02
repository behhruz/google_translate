let enter_text = document.querySelector('#enter_text')
let result_text = document.querySelector('#result_text')
let button = document.querySelector('button')


let result = '';
const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

function DeleteValues() {
    if (enter_text.value == '') {
        return result_text.value == ''
    }
}

button.addEventListener("click", () => {
    let enter = enter_text.value;
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '324c89ac43mshee1c84cb1288596p1e25cajsne55b025c30c3',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: enter,
            target: 'uz'
        })
    };

    fetch(url, options).then(data => data.json())
        .then(data => {
            result_text.textContent = data.data.translations[0].translatedText;
            console.log(data);
            result_text.value = data.data.translations[0].translatedText

        })
})
