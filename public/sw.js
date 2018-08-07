const cacheName = 'test'

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
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