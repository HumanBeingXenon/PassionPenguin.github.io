#include <iostream>
using namespace std;
int main(){
for(int i=1;i<23;i++)
    cout << ".font-Line"<<i<<"-GZ{\n\tcolor:var(--GZL"<<i<<");\n}\n";
}