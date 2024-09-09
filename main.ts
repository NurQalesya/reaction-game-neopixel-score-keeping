function showP1score () {
    range = strip.range(0, P1score)
    strip.clear()
    range.showColor(neopixel.colors(NeoPixelColors.Blue))
}
function showP2score () {
    range2 = strip2.range(0, P2score)
    strip2.clear()
    range2.showColor(neopixel.colors(NeoPixelColors.Purple))
}
input.onPinPressed(TouchPin.P2, function () {
    if (start == true) {
        start = false
        P2score += 1
        basic.clearScreen()
        basic.showString("P2")
        showP2score()
    } else {
        no_heart = true
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . # .
            . . # . #
            . . . . .
            `)
    }
    if (P2score > 9) {
        strip2.clear()
        basic.clearScreen()
        strip2.showRainbow(1, 360)
        strip2.show()
        basic.showString("P2 wins")
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.pause(5000)
        control.reset()
    }
})
input.onButtonPressed(Button.AB, function () {
    start = false
    no_heart = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(1000, 3000))
    if (!(no_heart)) {
        start = true
        basic.showIcon(IconNames.Giraffe)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (start == true) {
        start = false
        P1score += 1
        basic.clearScreen()
        basic.showString("P1")
        showP1score()
    } else {
        no_heart = true
        basic.showLeds(`
            . . . . .
            # . # . .
            . # . . .
            # . # . .
            . . . . .
            `)
    }
    if (P1score > 9) {
        strip.clear()
        basic.clearScreen()
        strip.showRainbow(1, 360)
        strip.show()
        basic.showString("P1 wins")
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.pause(5000)
        control.reset()
    }
})
let no_heart = false
let start = false
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let P2score = 0
let P1score = 0
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P4, 10, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P5, 10, NeoPixelMode.RGB)
P1score = 0
P2score = 0
