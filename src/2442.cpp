/*
����
ù° �ٿ��� �� 1��, ��° �ٿ��� �� 3��, ..., N��° �ٿ��� �� 2��N-1���� ��� ����

���� ����� �������� ��Ī�̾�� �Ѵ�.

�Է�
ù° �ٿ� N(1 �� N �� 100)�� �־�����.

���
ù° �ٺ��� N��° �ٱ��� ���ʴ�� ���� ����Ѵ�.
*/

#include<iostream>

using namespace std;

int main() {
	int n;
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = n-1; j > i; j--)
			printf(" ");
		for (int j = 0; j < 2 * i + 1; j++)
			printf("*");
		printf("\n");
	}
	return 0;
}