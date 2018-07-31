export default {
    name: ['post', 'POST'],
    config: {
        type: "POST",
        dataType: 'json',
        contentType: 'application/json',
    },
    func(path) {
        this.config.path = path
        return runInThisContext
    }
}