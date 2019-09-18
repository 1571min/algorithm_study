#define _CRT_SECURE_NO_WARNINGS
/*
����
2��n ũ���� ���簢���� 1��2, 2��1 Ÿ�Ϸ� ä��� ����� ���� ���ϴ� ���α׷��� �ۼ��Ͻÿ�.

�Ʒ� �׸��� 2��5 ũ���� ���簢���� ä�� �� ���� ����� ���̴�.
�Է�
ù° �ٿ� n�� �־�����. (1 �� n �� 1,000)

���
ù° �ٿ� 2��n ũ���� ���簢���� ä��� ����� ���� 10,007�� ���� �������� ����Ѵ�.
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
