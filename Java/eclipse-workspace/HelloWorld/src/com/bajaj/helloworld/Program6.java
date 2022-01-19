package com.bajaj.helloworld;

import java.util.Scanner;

public class Program6 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter an integer");
		int a = sc.nextInt();
		checkEvenOrOdd(a);
		}
	
	static void checkEvenOrOdd(int a) {
		if(a%2==0)
			System.out.println("Number is even");
		else
			System.out.println("Number is odd");
	}
}
