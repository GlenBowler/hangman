import React from 'react'

function Help() {
    return (
        <div className="help">
            <h4>How to play  game:</h4>
            <p>Enter a letter. If the letter is correct will be above the blue lines and can only use 
                letter once,<br/>if you try to use again we will let you know that you already used it.
                If wrong letter is entered<br/> user will be aware since letter will be posted on right hand side
                of the hanger saying wrong<br/> word as well as element of human body will be added to hanger.
                User will be advised if won <br/>or lost by end of game and ask if want to play again. </p>
        </div>
    )
}

export default Help
