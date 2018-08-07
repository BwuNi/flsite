let
    moveListener = null,
    endListener = null

const
    distance = (px, p) => (
        p
            ? px / (document.body.clientWidth / 100) + 5
            : 100 - (px / (document.body.clientWidth / 100)) + 5
    ),
    openStart = (_this) => (e) => {
        if (_this.open) return


        moveListener = openMove(_this)
        endListener = openEnd(_this)

        document.body.addEventListener('touchmove', moveListener)
        document.body.addEventListener('touchend', endListener)

        _this.moveTo(distance(e.touches[0].clientX, _this.p))


        // 为了开始时 transition 仍有效
        setTimeout(() => {
            _this.close = false
        }, 0)

    },

    openMove = (_this) => (e) => {
        _this.moveTo(distance(e.touches[0].clientX, _this.p))

    },

    openEnd = (_this) => () => {
        if (moveListener) {
            document.body.removeEventListener('touchmove', moveListener)
            moveListener = null
        }

        if (endListener) {
            document.body.removeEventListener('touchend', endListener)
            endListener = null
        }

        if (_this.right < 40)(_this.open = false, _this.close = true)
        else(_this.open = true, _this.close = false)

    }

export default openStart