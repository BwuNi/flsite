const cacheName = 'test'

self.addEventListener('install', async event => {

 

    event.waitUntil(
        caches.open(cacheName).then(async cache => {
            const keys = await cache.keys();
      
            await Promise.all(keys.map(v=>{
                console.log(v)
                return cache.delete(v)
            }))

            let res = cache.addAll([
                './dist/main.js',
                './index.html',
                './manifest.json'
            ])
            return res
        })
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        // caches.match() always resolves
        // but in case of success response will have value
        if (response !== undefined) {
            return response
        } else {
            return fetch(event.request).then(function(response) {
                // response may be used only once
                // we need to save clone to put one copy in cache
                // and serve second one
                let responseClone = response.clone()

                caches.open(cacheName).then(function(cache) {
                    cache.put(event.request, responseClone)
                })
                return response
            })
        }
    }))
})