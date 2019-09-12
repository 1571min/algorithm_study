#include<iostream>
#include<string>

using namespace std;

int main() {
	string s;
	cin >> s;
	int arr[26] = {0,};
	for (int i = 0; i < s.length(); i++)
		s[i]=toupper(s[i]);
	for (int i = 0; i < s.length(); i++) {
		arr[s[i] - 65]++;
	}
	int max = 0;
	int temp = 0;
	for (int i = 0;  i < 26; i++) {
		if (max < arr[i]) {
			max = arr[i];
			temp = i;
		}
	}
	int count = 0;
	for (int i = 0;  i < 26; i++) {
		if (max == arr[i]) count++;
	}
	if (count == 1) printf("%c", temp + 65);
	else printf("?");

	return 0;
}