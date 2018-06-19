import React, { Component } from 'react'

class Pokedata extends Component {
    constructor(props){
        super(props)

        this.state = {
            poke: {}
          }
      
          this.fetchPokeData()
        }
      
        componentDidUpdate(prevProps) {
          if (prevProps.match.params.pokemon !== this.props.match.params.pokemon) {
            this.fetchPokeData()
          }
        }
      
        fetchUserData = () => {
          const { params } = this.props.match
          fetch(`http://pokeapi.co/api/v2//evolution-chain/${params.pokemon}`)
            .then(response => response.json())
            .then(user => this.setState({ user }))
        }
      
        render() {
          const { poke } = this.state
      
          return (
            <div className="Pokedata">
              <img src={poke.avatar_url} alt="" />
              <h2>
                <a href={poke.html_url} target="_blank">
                  {poke.name} ({poke.login})
                </a>
              </h2>
              <h3>{poke.location}</h3>
            </div>
          )
        }
      }
      
      export default Pokedata