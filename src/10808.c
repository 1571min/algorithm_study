#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<string.h>

int main() {
	char str[100];
	int count[26] = { 0, };
	int i = 0;
	scanf("%s", str);
	for (i = 0; i<strlen(str); i++) {
		count[str[i] - 97] += 1;
	}
	for (i = 0; i < 26; i++) {
		printf("%d ", count[i]);
	}
	return 0;
}