package com.bajaj.helloworld;

import java.util.Scanner;

public class Program8 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter three integers");
		int a = sc.nextInt();
		int b = sc.nextInt();
		int c = sc.nextInt();
		if(a>b && a>c)
			System.out.println(a+" is largest");
		else if(b>a && b>c)
			System.out.println(b+" is largest");
		else if(c>a && c>b)
			System.out.println(c+" is largest");
		else
			System.out.println("Two or more numbers have the same value.");
	}
}
