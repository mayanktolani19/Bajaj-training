package com.bajaj.helloworld;
import java.util.*;

public class Program2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter two integers");
		int a = sc.nextInt();
		int b = sc.nextInt();
		int ans = addTwoIntegers(a,b);
		System.out.println("Result "+ans);
	}
	
	static int addTwoIntegers(int a, int b) {
		return a+b;
	}

}
