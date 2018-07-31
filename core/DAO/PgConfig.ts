import { ClientConfig } from 'pg'

export default class implements ClientConfig {
    user: string
    host: string
    database: string
    password: string
    port: number

    constructor(config:{
        user: string,
        host: string,
        database: string,
        password: string,
        port: number,
    }){
        this.user = config.user
        this.host = config.host
        this.database = config.database
        this.password = config.password
        this.port = config.port
    }
}