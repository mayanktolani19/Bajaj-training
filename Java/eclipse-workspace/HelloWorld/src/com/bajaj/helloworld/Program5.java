package com.bajaj.helloworld;

import java.util.Scanner;

public class Program5 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter two integers");
		int a = sc.nextInt();
		int b = sc.nextInt();
		System.out.println("Value before swap:\n"+"a = "+a+"\nb = "+b);
		int x = a;
		a = b;
		b = x;
		System.out.println("Value after swap:\n"+"a = "+a+"\nb = "+b);
	}

}
