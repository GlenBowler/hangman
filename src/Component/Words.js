import React from 'react'

const Words = ({ selectedWord, correctLetters }) => {

    return (
      <div className="word">
        {/*Splitting the word that user need to guess into letters */}
        {selectedWord.split('').map((letter, i) => {
          return (
            <span className="letter" key={i}>
              {correctLetters.includes(letter) ? letter : ''}
            </span>
          )
        })}
      </div>
    )
}

export default Words
