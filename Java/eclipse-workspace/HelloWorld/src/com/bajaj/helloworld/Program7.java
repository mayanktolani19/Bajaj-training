package com.bajaj.helloworld;

import java.util.Scanner;

public class Program7 {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a character");
		String s = sc.next();
		s = s.toLowerCase();
		char ch = s.charAt(0);
		switch(ch) {
		case 'a':
			System.out.println("Vowel");
			break;
		case 'e':
			System.out.println("Vowel");
			break;
		case 'i':
			System.out.println("Vowel");
			break;
		case 'o':
			System.out.println("Vowel");
			break;
		case 'u':
			System.out.println("Vowel");
			break;
		default:
			System.out.println("Consonant");
		}
	}
}
