package com.bajaj.day3;

import java.util.Scanner;

public class MyMain {

	public static void main(String[] args) {
		System.out.println("Hello world");
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		sum(a,b);
	}
	
	public static void sum(int a, int b) {
		int c = a+b;
		System.out.println("c = " +c);
	}

}
