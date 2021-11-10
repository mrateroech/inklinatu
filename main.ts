basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        led.plot(0, 2)
    } else {
        led.unplot(0, 2)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        led.plot(4, 2)
    } else {
        led.unplot(4, 2)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        led.plot(0, 2)
    } else {
        led.unplot(0, 2)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        led.plot(4, 2)
    } else {
        led.unplot(4, 2)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        led.plot(2, 2)
    } else {
        led.unplot(2, 2)
    }
})
