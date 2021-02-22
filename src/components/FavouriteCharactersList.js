import React from 'react';

const FavouriteCharactersList = ({characters, onSelectCharacter}) => {

    if(!characters) {
       return(null)
    }

    const filteredCharacters = characters.filter((character) => {
        return character.favourite

    })

    const listNodes = filteredCharacters.map((character, index) => {
        return (
            <div key={index}>
           
            <img src={character.img} height="200" onClick={() => {onSelectCharacter(character)}}/>
          
            </div>
        )
    })

    return (
        <>
        <h2>Favourite Characters</h2>
        <div className="favourite-characters">
            
          {listNodes}
        
        </div>

        </>


    )

}



export default FavouriteCharactersList;