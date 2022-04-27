const JSON_PATH = 'https://yayinternet.github.io/lecture17/oo-albums/albums.json';

class App {
    loadAlbums() {
        fetch(JSON_PATH)
            .then(this._onResponse)
            .then(this._onJsonReady);
    }

    _onJsonReady(json) {
        const albums = json.albums;
        const albumContainer = document.getElementById('album-container');

        for (const info of albums) {
            const album = new Album(albumContainer, info.url);
        }
    }

    _onResponse(response) {
        return response.json();
    }
}

class Album {
    constructor(element, imageUrl){
        const image = new Image();
        image.src = imageUrl;
        element.append(image);
    }
}

const app = new App();
app.loadAlbums();