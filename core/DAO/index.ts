import client from './client'

import _test from './test'
import _pdfzj from './pdfzj'

const
    test = _test(client),
    pdfzj = _pdfzj(client)

export {
    test,
    pdfzj
}