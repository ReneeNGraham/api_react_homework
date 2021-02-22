import React from "react";

const CharacterDetails = ({character, onFavouriteToggle, setRedirectToFalse}) => {
      
    setRedirectToFalse()

    if(!character){
        return(null)
    }

    const occupations = character.occupation.map((occupation) => {
        return occupation
    }).join(", ")

    return (

        <>
        <div className="character-details">
            <h2> {character.name}</h2>
            <p>Nickname: { character.nickname }</p>
            <p>Birthday: { character.birthday }</p>
            <p>Portrayed by: { character.portrayed }</p>
            <p> Occupation: { occupations }</p>
            <p> Status: { character.status }</p>
            <div>
            <img src={ character.img } height="300"/>
            <button onClick={() => {onFavouriteToggle(character)}}>
            {character.favourite ? 'Delete from Favourites' : 'Add to favourites'}
            </button>
            </div>
         
        </div>
        </>


 )      
}

export default CharacterDetails;