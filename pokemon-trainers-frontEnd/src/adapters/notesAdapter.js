class NotesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/pokemons'
    }

    getNotes() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}