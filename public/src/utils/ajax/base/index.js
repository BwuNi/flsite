import { get, post } from '../method'
import send from './send'

export default class Ajax {

    constructor(option) {
        if (option) this.option = option
        else this.option = {}
    }

    send(){
        return send(this.option)
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

    url(str){
        this.option.url = str;
        return this
    }

    type(str) {
        this.option.type = str
        return this
    }

    path(str) {
        this.option.path = str
        return this
    }


    isAsync(str) {
        this.option.async = str
        return this
    }


    data(str) {
        this.option.data = str
        return this
    }


    system(str) {
        this.option.system = str
        return this
    }


    encrypt(str) {
        this.option.encrypt = str
        return this
    }

    contentType(str) {
        this.option.contentType = str
        return this
    }

    dataType(str) {
        this.option.dataType = str
        return this
    }

}