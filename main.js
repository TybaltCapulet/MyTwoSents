function checkSentiment() {
    let sentimentInputText = document.getElementById("sentiment-input").value;
    console.log(sentimentInputText);
}

var performSentimentBtn = document.getElementById("perform-sentiment");
performSentimentBtn.onclick = function() {
    fetchSentimentResult()
};

// Fetch request for sentiment analysis

function fetchSentimentResult() {
    // let resultObject;
    let resultPolarity = fetch('https://sentim-api.herokuapp.com/api/v1/', {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({ text: document.getElementById("sentiment-input").value, }),
    })
        .then(response => response.json()) 
        .then((data) => data.result.polarity)
        .then(resultPolarity => {
    console.log(resultPolarity);
    // let resultPolarity = resultObject.result.polarity;

    let sentimentResultText = document.getElementById("sentiment-result");
    // let PolarityTextResult = document.getElementById("further-details").innerHTML.value;
    
    if (resultPolarity == 0) {
            sentimentResultText.innerHTML = "Your text is neutral in sentiment";
        } else if (resultPolarity > 0 && resultPolarity < 0.5) {
            sentimentResultText.innerHTML = "Your text is moderately positive in sentiment";
        } else if (resultPolarity > 0.5) {
            sentimentResultText.innerHTML = "Your text is very positive in sentiment";
        } else if (resultPolarity < 0 && resultPolarity > -0.5) {
            sentimentResultText.innerHTML = "Your text is moderately negative in sentiment";
        } else if (resultPolarity < -0.5) {
            sentimentResultText.innerHTML = "Your text is very negative in sentiment"
    }
})
}    

