input.onButtonPressed(Button.A, function () {
    timer = randint(5, 20)
})
let timer = 0
timer = -1
basic.forever(function () {
    if (timer > 0) {
        basic.pause(500)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(500)
        basic.showIcon(IconNames.Target)
        timer += -1
    }
    if (timer == 0) {
        basic.showIcon(IconNames.Skull)
        music.playMelody("B G A F C G C E ", 120)
        timer = -1
    }
    if (timer == -1) {
        basic.showIcon(IconNames.Yes)
    }
})
