#include <iostream>
#include<algorithm>
#include<vector>

using namespace std;

bool fn(const string &s1,const string &s2){
	if(s1.size()==s2.size()){
		return s1<s2;
	}
	return s1.size()<s2.size();
}

int main(){
	
	int n;
	vector<string> arr;
	string str;
	cin>>n;
	
	vector<string>::iterator it;
	vector<string>::iterator et;
	
	
	for(int i=0;i<n;i++){
		cin>>str;
		arr.push_back(str);
	}
	
	sort(arr.begin(),arr.end(),fn);
	et=unique(arr.begin(),arr.end());
	
	for(it=arr.begin();it!=et;it++){
		cout<<*it<<endl;
	}
	
	return 0;	
}