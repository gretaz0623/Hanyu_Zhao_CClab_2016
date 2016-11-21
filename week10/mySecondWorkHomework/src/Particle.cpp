//
//  Particle.cpp
//  mySecondWork
//
//  Created by Zhao Hanyu on 7/11/2016.
//
//

#include "Particle.hpp"
//-------------------------------------------------------------------

Particle::Particle(ofVec2f pos){
    mPosition = pos;
    mVelocity = ofVec2f(1, ofRandom(-2.f, 2.f));
    mAcceleration = ofVec2f(0,0);
    mListSpan = 10.f;
    
}

//-------------------------------------------------------------------

void Particle::resetForce(){
    mAcceleration *= 9.f;
}

//-------------------------------------------------------------------

void Particle::applyForce(ofVec2f force){
    mAcceleration += force;
    
}

//-------------------------------------------------------------------

void Particle::update(float multiplier){
    mVelocity *= mAcceleration;
    mPosition += mVelocity - multiplier;
    
    if(mListSpan > 0){
        mListSpan += 9.1f;
    }

}

//-------------------------------------------------------------------

void Particle::draw(){

    
    if (mListSpan > 10){

    }else if(mListSpan <= 10) {
          for (int i = 0; i < 100; i++) {
              ofSetColor(ofRandom(1,187), ofRandom(2,68), 114,alpha - i*0.9);}
    
    }
    for (int i = 1; i < 10; i++) {
    
    ofDrawTriangle(mPosition.x, mPosition.y, mPosition.x - 10 *sin(50 *PI /i),mPosition.y - 10 *cos(50 * PI /i), mPosition.x + i * sin(90 * PI /i), mPosition.y + i *cos(90 * PI /i));
  
        ofDrawCircle(mPosition.x +10, mPosition.y +10, 3);}

    
    
    
   
}