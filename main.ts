// 1.每按一下Abutton计数+1
// 2.显示计数
input.onButtonPressed(Button.A, function () {
    计数 += 1
    basic.showNumber(计数)
})
// 1.每按一下Bbutton计数+2
// 2.显示计数
input.onButtonPressed(Button.AB, function () {
    计数 += 2
    basic.showNumber(计数)
})
// 1.每按一下Bbutton计数+2
// 2.显示计数
input.onButtonPressed(Button.B, function () {
    计数 += 2
    basic.showNumber(计数)
})
// 1.设置变量-计数、倒数
// 2.清空屏幕
let 计数 = 0
let 倒数 = 0
计数 = 0
basic.clearScreen()
