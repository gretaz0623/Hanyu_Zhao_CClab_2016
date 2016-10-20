import processing.serial.*;
import cc.arduino.*;

Arduino arduino;  // Create a new Arduino object, so that we can control/read its pins later on
void setup() {
  
  size(255,255);
  printArray(Arduino.list());  // This will print out all available ports with their numbers, find the one with "usb" in it (on the Mac)
  arduino = new Arduino(this, Arduino.list()[1], 57600);  // Initialize the Arduino object, make sure that the number
                                                          // in Arduino.list()[x], corresponds to the correct serial port on your machine
}
  
void draw() {
     
  background(mouseX, mouseY, mouseX + mouseY);
  
  /* the pins for the LEDs are like this: 
  red_LED = 9
  blue_LED = 10
  green_LED = 11
  
  Now assign the color values from the sliders to them: 
  */

  arduino.analogWrite(9, mouseX);
  arduino.analogWrite(10, mouseY);
  arduino.analogWrite(11, mouseX + mouseY);
  
  
}   