const
    debounce = (timeout, callback, thisObj = null) => {
        let timeoutHandle = null
        return function(...arg) {
            if (timeoutHandle) clearTimeout(timeoutHandle)

            const _this = this

            timeoutHandle = setTimeout(() => {
                callback.call(_this, ...arg)
            }, timeout);
        }
    },