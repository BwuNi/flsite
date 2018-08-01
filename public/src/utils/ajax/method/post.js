export default {
    name: ['post', 'POST'],
    config: {
        type: "POST",
        dataType: 'json',
        contentType: 'application/json',
    },
    func(path) {
        this.option.type = "POST"
        this.option.path = path
        return this
    }
}