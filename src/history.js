import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { checkStorage, getStorage, setStorage } from './helpers/localStorage'
import { useSongStore } from './stores/SongStore'

const songStore = useSongStore()
const { getSong } = storeToRefs(songStore)

watch(() => getSong.value, updateHistory())

function updateHistory() {
    if (checkStorage('ncs-history')) {
        let history = [...getStorage('ncs-history'), getSong.value]
        setStorage('ncs-history', history)
        console.log({ history })
    } else {
        let history = [getSong.value]
        setStorage('ncs-history', history)
        console.log({ history })
    }
}