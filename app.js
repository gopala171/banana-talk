var buttonTranslate = document.querySelector("#button-main");
var textInput = document.querySelector("#input-txt")
var outputDiv= document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/minion.json"

function translatedURL(text) {
    return serverURL+"?text=" + text
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}



function clickHandler() {
    var inputText = textInput.value;
    
    fetch(translatedURL(inputText))
        .then(answer => answer.json())
        .then(out => {
            var translatedText = out.contents.translated;
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
}

buttonTranslate.addEventListener("click", clickHandler);

