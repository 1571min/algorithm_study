/*
����
���ڿ� N���� �־�����. �̶�, ���ڿ��� ���ԵǾ� �ִ� �ҹ���, �빮��, ����, ������ ������ ���ϴ� ���α׷��� �ۼ��Ͻÿ�.

�� ���ڿ��� ���ĺ� �ҹ���, �빮��, ����, �������θ� �̷���� �ִ�.

�Է�
ù° �ٺ��� N��° �ٱ��� ���ڿ��� �־�����. (1 �� N �� 100) ���ڿ��� ���̴� 100�� ���� �ʴ´�.

���
ù° �ٺ��� N��° �ٱ��� ������ ���ڿ��� ���ؼ� �ҹ���, �빮��, ����, ������ ������ �������� ������ ����Ѵ�.
*/

#include<iostream>
#include<string>

using namespace std;
int main() {
	string s;
	int count[4] = { 0, };
	while (getline(cin, s)) {
		for (int i = 0; i<s.length(); i++) {
			if (s[i] >= 97 && s[i] <= 122) count[0]++;
			else if (s[i] >= 65 && s[i] <= 90) count[1]++;
			else if (s[i] >= 48 && s[i] <= 57) count[2]++;
			else if (s[i] ==' ') count[3]++;
		}
		for (int i = 0; i < 4; i++) {
			cout << count[i] << ' ';
			count[i] = 0;
		}
		cout << endl;
	}


	return 0;
}