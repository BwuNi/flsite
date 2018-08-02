import fs from "fs"
import path from 'path' 

let key = ''

// 异步读取
fs.readFile(path.resolve(__dirname, '../../../common/rsa/rsa_private_key.pem'), function(err, data) {
    if (err) {
        return console.error(err);
    }

    key = data.toString()
})

function getKey(func = i => {}) {
    if (key) func(key)
    else setTimeout(() => {
        getKey(func)
    }, 500);
}

export default function(params) {
    return new Promise((res, rej) => {
        getKey(res)
    })
}