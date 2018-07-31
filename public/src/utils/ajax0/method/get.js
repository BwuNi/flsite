export default {
    name: ['get', 'GET'],
    config: {
        type: 'GET',
        dataType: null,
        contentType: 'text/plain'
    },
    func(path) {
        this.config.path = path
        return this
    }
}