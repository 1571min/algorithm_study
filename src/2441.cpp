/*
����
ù° �ٿ��� �� N��, ��° �ٿ��� �� N-1��, ..., N��° �ٿ��� �� 1���� ��� ����

������, �������� �������� ������ ��(���� ����)�� ����Ͻÿ�.

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
	for (int i = n; i > 0; i--) {
		for (int j = n; j > i; j--)
			printf(" ");
		for (int j = 0; j < i; j++)
			printf("*");
		printf("\n");
	}
	return 0;
}