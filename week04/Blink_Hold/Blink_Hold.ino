
const int buttonPin = 2;     // the number of the pushbutton pin
const int ledPin1 =  13;      // the number of the LED pin
const int ledPin2 =  12;      // the number of the LED pin 2
const int ledPin3 =  8;       // the number of the LED pin 3

// variables will change:
int buttonState = 0;    


void setup() {
    pinMode(ledPin1, OUTPUT);
    pinMode(ledPin2, OUTPUT);
    pinMode(ledPin3, OUTPUT);


  pinMode(buttonPin, INPUT);

  int delayTime = 500; 
    digitalWrite(ledPin1, LOW); 
  delay(delayTime *2);
  
  digitalWrite(ledPin1, HIGH); 
  delay(delayTime);           
  digitalWrite(ledPin2, HIGH);  
  delay(delayTime); 
  digitalWrite(ledPin3, HIGH);  
  delay(delayTime); 
  
  digitalWrite(ledPin3, LOW); 
  delay(delayTime);           
  digitalWrite(ledPin2, LOW);  
  delay(delayTime); 
  digitalWrite(ledPin1, LOW);  
  delay(delayTime); 
  digitalWrite(ledPin1, HIGH);          
  digitalWrite(ledPin2, HIGH);  
  digitalWrite(ledPin3, HIGH);
    delay(delayTime/5);  
  digitalWrite(ledPin1, LOW);          
  digitalWrite(ledPin2, LOW);  
  digitalWrite(ledPin3, LOW);   
  delay(delayTime); 
    digitalWrite(ledPin1, HIGH);          
  digitalWrite(ledPin2, HIGH);  
  digitalWrite(ledPin3, HIGH);
    delay(delayTime/5);  
  digitalWrite(ledPin1, LOW);          
  digitalWrite(ledPin2, LOW);  
  digitalWrite(ledPin3, LOW);   
  delay(delayTime); 

}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

if (buttonState == HIGH) {


  digitalWrite(ledPin1, HIGH); 
           
  digitalWrite(ledPin2, HIGH);  
 
  digitalWrite(ledPin3, HIGH);  


     }else{
  digitalWrite(ledPin1,LOW);
  digitalWrite(ledPin2,LOW);
  digitalWrite(ledPin3,LOW);
     }

 

}


