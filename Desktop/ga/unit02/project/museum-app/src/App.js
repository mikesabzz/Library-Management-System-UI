import React from 'react';
import Header from './component/Header'
import ArtistInput from './component/ArtistInput'
import ArtistList from './component/ArtistList'
import Footer from './component/Footer'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      inputValue: ''

    }
  }

  handleFilterChange = (event) => {
    event.preventDefault()
    this.setState({
      inputValue: event.target.value
    })
    const inputArtistList = this.state.artists.filter(artist => {
      return artist.displayname.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })
    if (this.state.inputValue.length < 2) {
      return this.fetchData()
    }
    this.setState({ artists: inputArtistList })
  }
  
  fetchData = async () => {
    const APP_KEY = process.env.APP_TOKEN
    await axios.get(`https://api.harvardartmuseums.org/person?q=pablo picasso&apikey=${APP_KEY}`)
      .then(res => {
        this.setState({
          artists: res.data.records
        })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className="App">
        <Header title="Museum Artists" />
        <ArtistInput name={this.state} onChange={this.handleFilterChange} />
        {this.state.artists.map(artist => {
          return <ArtistList name={artist.displayname} artist={artist} />
        })}
        <Footer footer />
      </div>
    )
  };
}

export default App;
