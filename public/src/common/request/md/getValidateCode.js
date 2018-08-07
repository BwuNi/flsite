export default (Ajax) => async () => {
    const res = {
        src: null,
        vcode_id: (vidrandom => new Array(5)
            .fill('')
            .map(() =>
                (vidrandom[Math.floor(Math.random() * vidrandom.length)]))
            .join('')
        )(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f',
            'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W',
            'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H',
            'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'
        ])
    }

    try {
        res.src = (await Ajax().data(null).get(`GetValidateCode/%7B%22data%22:%22${res.vcode_id}%22%7D`)).data
    } catch (e) {
        res.src = `http://127.0.0.1:1102/WCKJAPI_MD/GetValidateCode/` + encodeURIComponent(`{"data":"${res.vcode_id}"}`)
    }

    return res
}