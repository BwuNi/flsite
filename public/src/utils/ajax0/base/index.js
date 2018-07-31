import { get, post } from '../method'
import send from './send'

export default class Ajax {

    constructor(config) {
        if (config) this.config = config
        else this.config = {}
    }

    send(){
        return send(this.config)
    }


    get(...arg) {
        get.func.apply(this, arg)
        return this.send()
    }


    post(...arg) {
        post.func.apply(this, arg)
        return this.send()
    }

    // 配置项

    type(str) {
        this.config.type = str
        return this
    }

    path(str) {
        this.config.path = str
        return this
    }


    isAsync(str) {
        this.config.async = str
        return this
    }


    data(str) {
        this.config.data = str
        return this
    }


    system(str) {
        this.config.system = str
        return this
    }


    encrypt(str) {
        this.config.encrypt = str
        return this
    }

    contentType(str) {
        this.config.contentType = str
        return this
    }

    dataType(str) {
        this.config.dataType = str
        return this
    }

}