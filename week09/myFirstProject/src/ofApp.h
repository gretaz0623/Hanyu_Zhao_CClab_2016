#pragma once

#include "ofMain.h"


class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();
    
    float calculateArea(float a, float b);
    
		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void mouseEntered(int x, int y);
		void mouseExited(int x, int y);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
    
    float test;
    
 
    ofVec2f mPos;
    ofVec2f velocity;
    ofVec2f mPosSmall[100];
    ofVec2f vel[100];

    float friction;
    float gravity;
    
    int size;
    int size2;
    int alpha = 255;
    bool pressing;
    bool clicking;

};
