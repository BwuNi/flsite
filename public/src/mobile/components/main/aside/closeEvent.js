let moveListener = null,
    endListener = null,
    beginPositon = null

const
    distance = (px, p) => (
        p
            ? px / (document.body.clientWidth / 100) 
            : 100 - (px / (document.body.clientWidth / 100)) 
    ),
    closeStart = _this => e => {
        if (_this.close || !_this.open) return

        moveListener = closeMove(_this)
        endListener = closeEnd(_this)

        document.body.addEventListener('touchmove', moveListener)
        document.body.addEventListener('touchend', endListener)

        beginPositon =  distance(e.touches[0].screenX, _this.p)

        // 为了开始时 transition 仍有效
        setTimeout(() => {
            _this.open = false
        }, 0)
    },
    closeMove = _this => e => {
        let position = 80 + (distance(e.touches[0].screenX, _this.p) - beginPositon)

        _this.moveTo(position)
    },
    closeEnd = _this => () => {
        if (moveListener) {
            document.body.removeEventListener('touchmove', moveListener)
            moveListener = null
        }

        if (endListener) {
            document.body.removeEventListener('touchend', endListener)
            endListener = null
        }

        if (_this.right < 55)(_this.open = false), (_this.close = true)
        else(_this.open = true), (_this.close = false)
    }

export default closeStart