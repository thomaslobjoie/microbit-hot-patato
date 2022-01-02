input.onButtonPressed(Button.A, function () {
    timer = randint(5, 20)
})
let timer = 0
timer = -1
basic.forever(function () {
    if (timer > 0) {
        basic.showIcon(IconNames.SmallDiamond)
        music.playTone(392, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.Target)
        music.playTone(440, music.beat(BeatFraction.Half))
        timer += -1
    }
    if (timer == 0) {
        basic.showIcon(IconNames.Skull)
        soundExpression.sad.playUntilDone()
        timer = -1
    }
    if (timer == -1) {
        basic.showIcon(IconNames.Yes)
    }
})
