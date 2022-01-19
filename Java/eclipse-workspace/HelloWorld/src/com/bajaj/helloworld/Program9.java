package com.bajaj.helloworld;
import java.util.*;

public class Program9 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a year");
		int year = sc.nextInt();
		if(year%400==0)
			System.out.println(year+" is a leap year");
		else if(year%4==0 && year%100!=0)
			System.out.println(year+" is a leap year");
		else
			System.out.println(year+" is not a leap year");
	}
}
