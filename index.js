//"https://api.giphy.com/v1/gifs/search?api_key=738oc9U8lv5jSHxtnPrQKQWY76CYmpph&q= (querey) &limit=25&offset=0&rating=pg&lang=en"
// const apiKey = "738oc9U8lv5jSHxtnPrQKQWY76CYmpph"

// const URL1 = "https://api.giphy.com/v1/gifs/search?api_key=hcQ4W7NuRcM1yp5MyWqbhqUWroJZDG0s"
// const URL2 = "limit=25&offset=0&rating=g&lang=en"
// let queryInput = document.getElementById("search")

// let fullURL = `${URL1}&q=${queryInput}&${URL2}`

let random = Math.floor((Math.random() * 10) + 1)

let button = document.getElementById('submitButton').addEventListener('click', fetchFunction)

function fetchFunction(event) {
    event.preventDefault()
    const URL1 = "https://api.giphy.com/v1/gifs/search?api_key=hcQ4W7NuRcM1yp5MyWqbhqUWroJZDG0s"
    const URL2 = "limit=25&offset=0&rating=pg-13&lang=en"
    let queryInput = document.getElementById('search').value

    let fullURL = `${URL1}&q=${queryInput}&${URL2}`
    fetch(fullURL)

        .then(res => res.json())
        .then(json => {
            console.log(json)
            displayResults(json.data[random].images.original.url)
        })
}

function displayResults(json) {
    let gifList = document.getElementById('list')
    let form = document.getElementById('form')
    let gif = document.createElement('li')
    let gifImg = document.createElement('img')
    gifImg.src = json
    gifList.appendChild(gifImg)
    form.reset()
    gifList.removeChild(list.childNodes[0])
}