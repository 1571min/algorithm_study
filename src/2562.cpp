#include<iostream>

using namespace std;

int main() {
	int arr[9];
	int tag;
	for (int i = 0; i < 9; i++) cin >> arr[i];
	int max = 0;
	for (int i = 0; i < 9; i++) {
		if (max < arr[i]) { max = arr[i]; tag = i; }
	}
	cout << max << "\n" << tag+1 << endl;

	return 0;
}