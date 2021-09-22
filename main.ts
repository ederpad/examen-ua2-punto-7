let X = 0
let proporcion = 0
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P0)
    proporcion = pins.map(
    X,
    0,
    1000,
    0,
    100
    )
    pins.analogWritePin(AnalogPin.P1, proporcion)
})
