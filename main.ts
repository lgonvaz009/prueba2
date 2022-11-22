let distancia = 0
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 10)
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showNumber(distancia)
    if (distancia < 15) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
