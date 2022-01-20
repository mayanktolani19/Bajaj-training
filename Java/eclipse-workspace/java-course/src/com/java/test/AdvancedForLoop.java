package com.java.test;

import java.util.*;

public class AdvancedForLoop {

	public static void main(String[] args) {
		String[] names = {"rohan","rahul","mak"};
		List<String> l = Arrays.asList(names);
		
		for(int i=0, len=l.size(); i<len; i++) {
			String name = l.get(i);
			System.out.println("Hello "+name+" Welcome!");
		}
		
		for(String n: l) {
			System.out.println("Welcome back "+n);
		}
	}

}
