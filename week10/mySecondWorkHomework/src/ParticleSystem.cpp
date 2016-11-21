//
//  ParticleSystem.cpp
//  mySecondWork
//
//  Created by Zhao Hanyu on 7/11/2016.
//
//

#include "ParticleSystem.hpp"

ParticleSystem::ParticleSystem(ofVec2f position){
    mPosition = position;
    mEmitRate = 1;
    mIsAddingParticle = true;
}


//-------------------------------------------------------------------

void ParticleSystem::update(ofVec2f force){
    if (mIsAddingParticle){
        Particle particle(mPosition);
        mParticleList.push_back(particle);
    }
    
    for( int i =0; i < mParticleList.size(); i+= 6){
        ofVec2f diff = ofVec2f(abs(mParticleList[i].mPosition.x - mPosition.x), abs(- mParticleList[i].mPosition.y + mPosition.y));
        
        mParticleList[i].resetForce();
        mParticleList[i].applyForce(force);
        mParticleList[i].update(ofMap(diff.length(), mPosition.y, ofRandom(90,100), ofRandom(10,80),1));
        
        if (diff.length() >= ofRandom(100,200)){

            mIsAddingParticle = false;
        
        
        //erase this particle
        if(mParticleList.size() >0){
            mParticleList.erase(mParticleList.begin() + i);
        
        }
       }     
    
    }
    
}

//-------------------------------------------------------------------

void ParticleSystem::draw(){
    for(int i = 0; i < mParticleList.size(); i++){
        mParticleList[i].draw();
    }

}