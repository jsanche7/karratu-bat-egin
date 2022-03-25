input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        basic.pause(1800)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        basic.pause(560)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(1000)
    }
})
DFRobotMaqueenPlus.I2CInit()
