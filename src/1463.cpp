#define _CRT_SECURE_NO_WARNINGS
/* 
����
���� X�� ����� �� �ִ� ������ ������ ���� �� ���� �̴�.

X�� 3���� ������ ��������, 3���� ������.
X�� 2�� ������ ��������, 2�� ������.
1�� ����.
���� N�� �־����� ��, ���� ���� ���� �� ���� ������ ����ؼ� 1�� ������� �Ѵ�. ������ ����ϴ� Ƚ���� �ּڰ��� ����Ͻÿ�.

�Է�
ù° �ٿ� 1���� ũ�ų� ����, 106���� �۰ų� ���� ���� N�� �־�����.

���
ù° �ٿ� ������ �ϴ� Ƚ���� �ּڰ��� ����Ѵ�.
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