#include <iostream>
using namespace std;

class Loft {
    public:
        int rooms;
        string homeAddress;
        int space;

        void intro() {
            cout << "My 1-home in " << homeAddress << " has " << rooms << " rooms " << " with a " << space << "sq.meters space." << endl;
        }

        void intro2();
};

void Loft::intro2(){
    cout << "My 2-home in " << homeAddress << " has " << rooms << " rooms " << " with a " << space << "sq.meters space." << endl;

    cout << "Hi!" << endl;
};

int main(){

    cout << "Classes" << endl;

    Loft gutenbergstr;
    gutenbergstr.rooms=1;
    gutenbergstr.homeAddress="Gutenbergstr 20a";
    gutenbergstr.space=31;

    // cout << "My home in " << gutenbergstr.homeAddress << " has " << gutenbergstr.rooms << " rooms " << " with a " << gutenbergstr.space << "sq.meters space." << endl;

    gutenbergstr.intro();
    gutenbergstr.intro2();
    

    
    return 0;
}