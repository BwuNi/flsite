let
    moveListener = null,
    endListener = null,
    beginPositon = null

const
    closeStart = (_this) => e => {
        if (_this.close || !_this.open) return

        moveListener = closeMove(_this)
        endListener = closeEnd(_this)

        document.body.addEventListener('touchmove', moveListener)
        document.body.addEventListener('touchend', endListener)

        beginPositon = e.touches[0].screenX / (document.body.clientWidth / 100)


        // 为了开始时 transition 仍有效
        setTimeout(() => {
            _this.open = false
        }, 0);

    },
    closeMove = (_this) => (e) => {

        let position = 80 + ((e.touches[0].screenX / (document.body.clientWidth / 100)) - beginPositon)

        console.log(position)
        _this.moveTo(position)

    },

    closeEnd = (_this) => (e) => {
        if (moveListener) {
            document.body.removeEventListener('touchmove', moveListener)
            moveListener = null
        }

        if (endListener) {
            document.body.removeEventListener('touchend', endListener)
            endListener = null
        }

        if (_this.right < 55)(_this.open = false, _this.close = true)
        else(_this.open = true, _this.close = false)

    }

export default closeStart