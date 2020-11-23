const axios = require('axios')

const getSong = (id) => {
  axios.get(`https://cassis-api.herokuapp.com/api/artists/${id}`)
    .then(payload => {
      this.artist = payload.data
    })
}

const getArtist = () => {
  axios.get(`https://cassis-api.herokuapp.com/api/artists/${this.album.artist}`)
    .then(payload => {
      this.artist = payload.data
    })
}

const getGenre = (id) => {
  axios.get(`https://cassis-api.herokuapp.com/api/artists/${id}`)
    .then(payload => {
      this.artist = payload.data
    })
}

const getLabel = () => {
  axios.get(`https://cassis-api.herokuapp.com/api/artists/${this.album.label}`)
    .then(payload => {
      this.artist = payload.data
    })
}

module.exports = {
  getArtist,
  getGenre,
  getSong,
  getLabel
}
