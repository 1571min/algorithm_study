#define _CRT_SECURE_NO_WARNINGS
/*
문제
N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

출력
입력으로 주어진 숫자 N개의 합을 출력한다.
*/
#include <stdio.h>

int main() {
	int n = 0;
	int temp=0,sum = 0;
	scanf("%d", &n);
	while (n--) {
		scanf("%1d", &temp);
		sum += temp;
	}
	printf("%d", sum);
	
	return 0;
}