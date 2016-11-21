//
//  Particle.hpp
//  mySecondWork
//
//  Created by Zhao Hanyu on 7/11/2016.
//
//

#pragma once
#include "ofMain.h"

class Particle {

public:
    
    Particle(ofVec2f pos);
    
    void setup();
    void resetForce();
    void applyForce(ofVec2f force);
    void update(float multiplier);
    void draw();
    
    ofVec2f mPosition, mVelocity, mAcceleration;
    float mListSpan;
    float alpha = 255;
};


