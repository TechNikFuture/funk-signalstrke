enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("A")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendString("B")
})
radio.onReceivedString(function (receivedString) {
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
radio.setGroup(4)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
	
})
