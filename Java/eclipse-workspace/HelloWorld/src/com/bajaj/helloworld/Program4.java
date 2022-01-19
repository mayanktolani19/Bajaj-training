package com.bajaj.helloworld;
import java.util.*;

public class Program4 {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a character");
		String s = sc.next();
		char ch = s.charAt(0);
		int x = ch;
		System.out.println("ASCII value of character "+x);
	}
}
