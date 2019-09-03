#define _CRT_SECURE_NO_WARNINGS
#include<cstdio>
#include<stack>
#include<cstring>
using namespace std;

char a[600000];

int main() {
	scanf("%s", a);
	stack<char> right, left;
	int n = strlen(a);
	for (int i = 0; i < n; i++) {
		left.push(a[i]);
	}

	int m;
	scanf("%d", &m);
	
	while (m--) {
		char s;
		scanf(" %c", &s);
		switch (s)
		{
		case 'L':
			if (!left.empty()) {
				right.push(left.top());
				left.pop();
			}
			break;
		case 'D':
			if (!right.empty()) {
				left.push(right.top());
				right.pop();
			}
			break;
		case 'B':
			if (!left.empty()) {
				left.pop();
			}
			break;
		case 'P':
			char temp;
			scanf(" %c", &temp);
			left.push(temp);
			break;
		default:
			break;
		}
	}
	int j = left.size();
	for (int i = 0; i < j; i++) {
		right.push(left.top());
		left.pop();
	}
	j = right.size();
	for (int i = 0; i < j; i++) {
		printf("%c", right.top());
		right.pop();
	}
	

	return 0;
}