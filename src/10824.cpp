/*
����
�� �ڿ��� A, B, C, D�� �־�����. �̶�, A�� B�� ���� ���� C�� D�� ���� ���� ���� ���ϴ� ���α׷��� �ۼ��Ͻÿ�.

�� �� A�� B�� ��ġ�� ���� A�� �ڿ� B�� ���̴� ���� �ǹ��Ѵ�. ��, 20�� 30�� ���̸� 2030�� �ȴ�.

�Է�
ù° �ٿ� �� �ڿ��� A, B, C, D�� �־�����. (1 �� A, B, C, D �� 1,000,000)

���
A�� B�� ���� ���� C�� D�� ���� ���� ���� ����Ѵ�.
*/

#include<iostream>
#include<string>

using namespace std;

int main() {
	int a, b, c, d;
	string str1, str2;
	cin >> a >> b >> c >> d;
	str1 = to_string(a) + to_string(b);
	str2 = to_string(c) + to_string(d);

	long long s1 = stoll(str1);
	long long s2 = stoll(str2);
	cout << s1+s2;
	return 0;
}