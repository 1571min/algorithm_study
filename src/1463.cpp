#define _CRT_SECURE_NO_WARNINGS
/* 
문제
정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

X가 3으로 나누어 떨어지면, 3으로 나눈다.
X가 2로 나누어 떨어지면, 2로 나눈다.
1을 뺀다.
정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

입력
첫째 줄에 1보다 크거나 같고, 106보다 작거나 같은 정수 N이 주어진다.

출력
첫째 줄에 연산을 하는 횟수의 최솟값을 출력한다.
*/

#include<iostream>

using namespace std;

int d[1000000];
int d2[1000000];

//top_down
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

//bottom_up
int min_operator2(int z) {
	d2[1] = 0;
	for (int n = 2; n <= z; n++) {
		d2[n] = d2[n-1] + 1;
		if (n % 2 == 0&&d2[n]>d2[n/2]+1) {
			d2[n] = d2[n / 2] + 1;
		}
		if (n % 3 == 0 && d2[n] > d2[n / 3] + 1) {
			d2[n] = d2[n / 3] + 1;
		}
	}
	return d2[z];
}


int main() {

	int n;
	scanf("%d", &n);

	printf("%d", min_operator2(n));

	return 0;
}