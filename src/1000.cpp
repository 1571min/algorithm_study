#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

/*
1000문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
첫째 줄에 A+B를 출력한다.
*/
int main() {
	int x, y;
	scanf("%d %d", &x, &y);
	printf("%d", x + y);

	return 0;
}