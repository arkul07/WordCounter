const submit=$("button")
const input_text=$("textarea")
const word_counter=$("h1")[1]
const char_counter=$("h1")[2]
const char_counter_spaces=$("h1")[3]
const readingTime=$("h1")[4]
const speakingTime=$("h1")[5]

let text=""
let noOfwords=0
let wordsTotal=word_counter.textContent
let charsTotal=char_counter.textContent
let charsTotal_spaces=char_counter_spaces.textContent
let reading_time=readingTime.textContent
let speaking_time=speakingTime.textContent


submit.click(function() {
    text=input_text.val()
    text.trim()
    if(text.length>100000) {
        alert("Text too long. Page will reload automatically")
        location.reload(true)
    }
    else {
        let count=0,charCount=0,charCount_spaces

    for(let i=0;i<text.length;i++) {
        let ch=text[i]
        if(ch === ' ') {
            count++
        }
        else {
            charCount++

        }
    }
    charCount_spaces=count+charCount

    if(text === "") {
        noOfwords=0
    }
    else {
    noOfwords=count+1
    }
    word_counter.textContent=wordsTotal+noOfwords
    char_counter.textContent=charsTotal+charCount
    char_counter_spaces.textContent=charsTotal_spaces+charCount_spaces


    //Speaking time calculation
    let difference

    let noOfMinutes=(noOfwords/150).toFixed(2)
    difference=noOfMinutes-Math.floor(noOfMinutes)



    let noOfSeconds=Math.floor(difference*60)
    speakingTime.textContent=speaking_time+`Total time is approximately ${Math.floor(noOfMinutes)} minutes and ${noOfSeconds} seconds`


    //reading time calculation
    let difference1

    let noOfMinutes1=(noOfwords/250).toFixed(2)
    difference1=noOfMinutes1-Math.floor(noOfMinutes1)



    let noOfSeconds1=Math.floor(difference1*60)
    readingTime.textContent=reading_time+`Total time is approximately ${Math.floor(noOfMinutes1)} minutes and ${noOfSeconds1} seconds`
}
})

