import { checkStorage, getStorage, setStorage } from './helpers/localStorage'

export const likeSong = async (song_id) => {
    if (checkStorage('liked-songs')) {
        let likedSongs = [...getStorage('liked-songs'), song_id]
        setStorage('liked-songs', likedSongs)
        console.log(likedSongs)
    } else {
        let likedSongs = [song_id]
        setStorage('liked-songs', likedSongs)
        console.log(likedSongs)
    }
}
