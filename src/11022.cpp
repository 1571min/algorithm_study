#include<iostream>
using namespace std;

int main() {

	int n = 0;
	cin >> n;
	int a, b;
	for (int i = 0; i < n; i++) {
		cin >> a >> b;
		cout << "Case #"<<i+1<<": " << a << " + " << b << " = " << a + b << endl;
	}

	return 0;
}