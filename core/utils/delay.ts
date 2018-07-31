export default function delay(timeout:number) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res()
        }, timeout);
    })
}