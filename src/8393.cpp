#define _CRT_SECURE_NO_WARNINGS

/*
����
n�� �־����� ��, 1���� n���� ���� ���ϴ� ���α׷��� �ۼ��Ͻÿ�.

�Է�
ù° �ٿ� n (1 �� n �� 10,000)�� �־�����.

���
1���� n���� ���� ����Ѵ�

*/
#include <cstdio>

int main() {
	int n;
	scanf("%d", &n);
	
	int sum = 0;
	for (int i = 1; i <= n; i++) {
		sum += i;
	}
	printf("%d", sum);
}