#define _CRT_SECURE_NO_WARNINGS
/*
����
N���� ���ڰ� ���� ���� �����ִ�. �� ���ڸ� ��� ���ؼ� ����ϴ� ���α׷��� �ۼ��Ͻÿ�.

�Է�
ù° �ٿ� ������ ���� N (1 �� N �� 100)�� �־�����. ��° �ٿ� ���� N���� ������� �־�����.

���
�Է����� �־��� ���� N���� ���� ����Ѵ�.
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