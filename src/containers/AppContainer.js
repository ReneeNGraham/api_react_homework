import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import CharacterList from "../components/CharacterList";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import CharacterDetails from "../components/CharacterDetails";
import FavouriteCharactersList from "../components/FavouriteCharactersList";



const AppContainer = () => {

      const [characters, setCharacters] = useState([]);
      const [selectCharacter, setSelectCharacter] = useState (null);
      const [redirect, setRedirect] = useState(false);

      const getCharacters = () => {
          console.log("fetching characters")
          const promises = [1,].map((number) => {
            return fetch (
              `https://breakingbadapi.com/api/characters?pages=${number}&per_page=80`)
              .then(res => res.json())
              
            
            })
            Promise.all(promises)
            .then(data => setCharacters(data.flat()))

      }

      useEffect(() => {
        getCharacters()
      }, [])

      const handleSelectedCharacter = (character) => {
            setSelectCharacter(character)
            setRedirect(true)
     }

      const handleFavouriteToggle = (updatedCharacter) => {
        const updatedCharacters = characters.map((character) => {
         if (character.name === updatedCharacter.name) {
           character.favourite = !character.favourite
         }
         return character
       })
       setCharacters(updatedCharacters)

     }

     const setRedirectToFalse = () => {
      setRedirect(false)
    }

    return (
         <Router>
        <>
        <NavBar/>
          <div className="app-container">
        <Route exact path="/" component={Home}/>
        <Route exact path="/characterlist" render={() =><CharacterList characters={characters} onSelectedCharacter={handleSelectedCharacter}/> }/> 
        {redirect && <Redirect to="/single-character" />}
        <Route exact path="/single-character" render={ () => <CharacterDetails character={selectCharacter} onFavouriteToggle={handleFavouriteToggle} setRedirectToFalse={setRedirectToFalse}/> }/>
        </div>
        <Route exact path="/favourites" render={ () => <FavouriteCharactersList characters={characters} onSelectCharacter={handleSelectedCharacter}/> } />

        </>
        </Router>

    )
}

export default AppContainer;



