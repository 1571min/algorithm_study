/*
����
����� ���� ���ٰ� �̻��� ������ �߰��ߴ�. �� �������� ��ȣ�� ���� �־��µ�, �ȶ��� ����� ��ȣ�� �������� �ص��ȴٴ� ���� �߰��ߴ�.

�� ��ȣ�� �ص��ϴ� ���α׷��� �ۼ��Ͻÿ�.

�Է�
�� �ٿ� �ϳ��� ��ȣ�� �־�����. ��ȣ�� ���̴� 500�� ���� �ʴ´�.

������ �ٿ��� "END"�� �־�����. (END�� �ص����� �ʴ´�.)

���
�� ��ȣ�� �ص��� ���� �� �ٿ� �ϳ��� ����Ѵ�.
*/

#define _CRT_SECURE_NO_WARNINGS
#include<iostream>
#include<string>

using namespace std;

int main() {

	string s;

	while (1) {
		getline(cin, s);
		if (s == "END") break;
		reverse(s.begin(), s.end());
		cout << s << endl;
	}

	return 0;
}