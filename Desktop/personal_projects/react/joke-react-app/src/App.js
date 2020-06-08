import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      jokes: [],
      jokeOfDay: [],
      loading: true
    }
  }
  componentDidMount() {
    this.fetchAllJokes()
    this.fetchJokeOfDay()
  }

  fetchJokeOfDay = () => {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            jokeOfDay: result,
            loading: false
          })
        }
      )
      .catch((error) => {
        console.log('Error: ', error)
      })
  }

  fetchAllJokes = () => {
    fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            jokes: result,
            loading: false
          })
        }
      )
      .catch((error) => {
        console.log('Error: ', error)
      })
  }

  render() {
    const { loading, jokes, jokeOfDay } = this.state
    return (
      <div>{loading ? <h1>Loading...</h1> :
        <div>
          <div>{jokeOfDay.map(joke => {
            return (
              <div>
                <h1>Todays Top Joke:</h1>
                <h1>{joke.setup}</h1>
                <h1>{joke.punchline}</h1>
                <br />
              </div>
            )
          })}</div>
          <div>{jokes.map(joke => {
            return (
              <div>
                <h3>{joke.setup}</h3>
                <h4>{joke.punchline}</h4>
                <br />
              </div>
            )
          })}</div></div>
      }</div>
    )
  }

}

export default App;
