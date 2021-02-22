import React from 'react';

const CharacterList = ({characters, onSelectedCharacter}) => {

 const characterListItems = characters.map((character, index) => {


      return <li onClick={()=> {onSelectedCharacter(character)}} key={index}>{character.name}</li>

 })


 return ( 
 
    <>
     <div className="character-list"> 
     <ul> 
      {characterListItems} 
    </ul> 
    </div> 
    </>
 )}



export default CharacterList;