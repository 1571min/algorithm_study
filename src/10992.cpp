#define _CRT_SECURE_NO_WARNINGS

/*
����
ù° �ٿ��� �� 1��, ��° �ٿ��� �� 2��, N��° �ٿ��� �� N���� ��� ����

�Է�
ù° �ٿ� N(1 �� N �� 100)�� �־�����.

���
ù° �ٺ��� N��° �ٱ��� ���ʴ�� ���� ����Ѵ�.

*/
#include <cstdio>

int main() {
	int t,n=0;
	scanf("%d", &t);
	for (int i = 0; i < t-1; i++) {
		for (int j = 0; j < t+i; j++) {
			if (t == j + i+1) printf("*");
			else if (j+1 == t + i) printf("*");
			else printf(" ");
		}
		printf("\n");
	}
	
	for (int j = 0; j < 2 * t - 1; j++) {
		printf("*");
	}
	
	
	return 0;
}