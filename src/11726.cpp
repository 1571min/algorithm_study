#define _CRT_SECURE_NO_WARNINGS
/*
문제
2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

아래 그림은 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다.
입력
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

출력
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.
*/

#include<iostream>

using namespace std;

int d[1001];


int min_rect(int n) {
	
	if (n <= 1) {
		return 1;
	}
	else {
		if (d[n] > 0) return d[n];
		d[n] = min_rect(n - 1) + min_rect(n - 2);
		return d[n];
	}
}


int main() {

	int n;
	cin >> n;
	cout << min_rect(n)%10007 << endl;

	return 0;
}
