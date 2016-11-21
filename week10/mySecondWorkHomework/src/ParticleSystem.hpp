//
//  ParticleSystem.hpp
//  mySecondWork
//
//  Created by Zhao Hanyu on 7/11/2016.
//
//

#pragma once
#include "ofMain.h"
#include "Particle.hpp"

class ParticleSystem{

    public:
    
    ParticleSystem(ofVec2f position);
    void update(ofVec2f force);
    void draw();
    
    vector<Particle> mParticleList;
    
    ofVec2f          mPosition;

    
    int              mEmitRate;
    bool             mIsAddingParticle;
    
    

};