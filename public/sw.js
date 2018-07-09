// index.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw/index.js').then(reg => {
        if(reg) console.log(reg)
        console.log('service worker registed!');
    }).catch(err => {
        if(err) console.log(err)
        console.log('Opooos, something wrong happend!');
    })
}

window.onload = function() {
    document.body.append('PWA!')
}
