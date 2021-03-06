import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Pokedata from './Pokedata'
import './Pokedex.css'


class Pokedex extends Component {
    state = {
        pokemon: '',
    }
    handleChange = (ev) => {
        this.setState({pokemon: ev.target.value})
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/pokedex/${this.state.pokemon}`)
    }
    render(){
        return(
            <div className="Pokedex">
                <img
                    src="https://vignette.wikia.nocookie.net/sonicpokemon/images/b/b8/Kanto_Pok%C3%A9dex_Infobox.png/revision/latest?cb=20131015160654"
                    alt="Pokedex"
                />    

             <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter a Pokemon"
                        value={this.state.pokemon}
                        onChange={this.handleChange}
                     />
                </div>
                <div>
                    <button type="submit">
                         Look up Pokemon
                    </button>
                </div>
             </form>

             <Route path="/pokemon/:pokemon" component={Pokedata} />
            </div>

        )
    }
}
export default Pokedex
