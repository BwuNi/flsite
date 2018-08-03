export default {
    name: ['get', 'GET'],
    config: {
        type: 'GET',
        dataType: null,
        contentType: 'text/plain'
    },
    func(path) {
        this.option.type = "GET"
        this.option.path = path
        return this
    }
}