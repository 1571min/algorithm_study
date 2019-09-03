#define _CRT_SECURE_NO_WARNINGS
#include<iostream>

using namespace std;

int d[1000000];

int min_operator(int n) {
	if (n == 1) return 0;
	if (d[n] > 0) return d[n];
	d[n] = min_operator(n - 1) + 1;
	if (n % 2 == 0) {
		int temp;
		temp = min_operator(n / 2) + 1;
		if (temp < d[n]) {
			d[n] = temp;
		}
	}
	if (n % 3 == 0) {
		int temp;
		temp = min_operator(n / 3) + 1;
		if (temp < d[n]) {
			d[n] = temp;
		}
	}
	return d[n];
}

int main() {

	int n;
	scanf("%d", &n);

	printf("%d", min_operator(n));

	return 0;
}