#include<iostream>
using namespace std;
int n, a, b, c;
long long arr[1000001];
long long sum = 0;

int main() {
	
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin>>arr[i];
	}
	cin >> b >> c;
	
	for (int i = 0; i < n; i++) {
		if (arr[i] > b) {
			if (((arr[i] - b) % c) == 0) {
				sum = sum + 1 + ((arr[i] - b) / c);
			}
			else {
				sum = sum + 1 + ((arr[i] - b) / c) + 1;
			}
		}
		else {
			sum += 1;
		}
		
	}
	cout << sum << endl;
	return 0;
}