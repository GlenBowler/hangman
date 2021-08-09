import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

    return (
      <div className="wrong-letters-container">
        <div>
          {wrongLetters.length > 0 && 
            <p>Wrong</p>
          }
          {/*Map that will add all the wrong letters and let user know if word already been used*/}
          {wrongLetters
            .map((letter, i) => <span key={i}>{letter}</span>)
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
      </div>
    )
}

export default WrongLetters
