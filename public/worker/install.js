if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./dist/sw.js').then(res => {
        console.log('success')
    }).catch(e => {
        console.log('error')
        console.log(e)
    })
} else {
    console.log('no')
}