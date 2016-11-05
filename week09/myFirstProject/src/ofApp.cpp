#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    mPos = ofVec2f(ofGetWindowWidth() * 0.5, ofGetWindowHeight() * 0.5 - 10);
    velocity = ofVec2f(ofRandom(-1,1), 0);
    friction = 0.99f;
    pressing = false;
    clicking = false;
    
    
}



//--------------------------------------------------------------
void ofApp::update(){
    velocity *= friction;
    velocity.y += gravity;
    for (int i = 0; i < 100; i++) {
        vel[i] *= friction;
        vel[i].y += gravity;
        mPosSmall[i] += vel[i];
    }
    alpha -= 0.00001;
    mPos += velocity;
    if (mPos.y > ofGetWindowHeight() + 300) {
        mPos = ofVec2f(ofGetWindowWidth() / 2 + ofRandom(-300, 300), ofGetWindowHeight() + 50);
        gravity = 0.003;
        velocity = ofVec2f(ofRandom(-1, 1), -2);
        pressing = false;
    }
}

void ofApp::draw(){
    size = 60;
    size2 = 10;
    ofSetBackgroundColor(ofColor(0));
    ofSetColor(0,255,255);
    ofSetCircleResolution(100);
    
    if (clicking) {
        ofDrawCircle(ofGetMouseX(), ofGetMouseY(), 2);
    }
    
    if (pressing == false) {
        ofDrawCircle(mPos, size);
    }
    else if (pressing == true) {
        for (int i = 0; i < 100; i++) {
            ofSetColor(187, 68, 114,alpha-i *0.7);
            ofDrawCircle(mPosSmall[i], size2 + i);
            ofSetColor(236, 0, 140,alpha-i*0.8);
            ofDrawCircle(mPosSmall[i], size2/4 + i);
            ofSetColor(130, 149, 159,alpha-i*0.9);
            ofDrawCircle(mPosSmall[i], size2/8 + i);
            ofSetColor(255, 255, 255 ,alpha-i);
            ofDrawCircle(mPosSmall[i], size2/10 + i);

        }
    }
}

  

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

 
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    clicking = true;
    ofVec2f mousePos = ofVec2f(x, y);
    int distance = ofDist(mousePos.x,mousePos.y, mPos.x, mPos.y);
    if (distance < 40 && pressing == false) {
        pressing = true;
        for (int i = 0; i < 100; i++) {
            mPosSmall[i].x = mPos.x + 20 * sin( 0.8 * i );
            mPosSmall[i].y = mPos.y + 20 * cos( 0.8 * i );
            vel[i].x = i * sin( i * 0.1 )/20;
            vel[i].y = i * cos( i * 0.1 )/20;
        }
    }
    
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
	clicking = false;

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
