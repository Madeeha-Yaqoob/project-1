"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, title, tracks) {
    const album = {
        artist_name: artist_name,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("The Beatles", "Abbey Road");
console.log(album1);
const album2 = make_album("Pink Floyd", "Dark Side of the Moon", 10);
console.log(album2);
const album3 = make_album("Led Zeppelin", "IV", 8);
console.log(album3);
