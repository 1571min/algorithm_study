/*
����
45656�̶� ���� ����.

�� ���� ������ ��� �ڸ����� ���̰� 1�� ����. �̷� ���� ��� ����� �Ѵ�.

�����̴� ���� ���̰� N�� ��� ���� �� �� �ִ��� �ñ�������.

N�� �־��� ��, ���̰� N�� ��� ���� �� �� �� �ִ��� ���ϴ� ���α׷��� �ۼ��Ͻÿ�. (0���� �����ϴ� ���� ����.)

�Է�
ù° �ٿ� N�� �־�����. N�� 1���� ũ�ų� ����, 100���� �۰ų� ���� �ڿ����̴�.

���
ù° �ٿ� ������ 1,000,000,000���� ���� �������� ����Ѵ�.
*/

#include<iostream>


using namespace std;

long long d[101];

long long search_stair(int n) {
	if (n <= 1) return 9;
	else if (n == 2) return 17;
	else {
		if (d[n] > 0) return d[n];
		d[n] = search_stair(n - 1) +8;
		return d[n];
	}
}

int main() {

	int n;
	cin >> n;
	
	cout << search_stair(n)/1000000000 << endl;

	return 0;
}