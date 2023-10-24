import React from "react";

function EmojiTime(minutes){
    let emojiTime 
    let emojiArray = []
    let tick = Math.ceil(minutes/5)
    console.log("click")
    if (minutes < 30){
        for(let i = 0; i<(tick); i++){
            emojiArray.push("☕️")
            console.log("bop")
        }
    }else{ 
        for(let i = 0; i<(tick/2); i++){
            emojiArray.push("🍱")
        }
    }

    emojiTime = emojiArray.join('')
    return emojiTime
}

function Article({title, date ="January 1, 1970" , preview, minutes}){

return (<article>
    <h3>{title}</h3>
    <small>{date} &bull; {EmojiTime(minutes)} {minutes} minute read</small>
    <p>{preview}</p>
</article>)
}

export default Article