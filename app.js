var txtInput = document.querySelector("#inputbox");
var buttonTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var serverUrl="https://api.funtranslations.com/translate/shakespeare.json";

function translatedUrl(inputText){
    return serverUrl + "?" + "text="+inputText;
}

function errorHandler(error) {
    console.log("error occured",error);
    alert("server not responding");
};



buttonTranslate.addEventListener("click",clickEventHandler)


function clickEventHandler()
{
    var inputText=txtInput.value;
    fetch(translatedUrl(inputText))
        .then(response=>response.json())
        .then (json=>{
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

};
