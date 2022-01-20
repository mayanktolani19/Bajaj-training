package com.java.test;

public class StringConcepts {

	public static void main(String[] args) {
		// Remember - String in java is an object.
		String s1 = "Mayank";
		String s2 = "May";
		String s3 = s2+"ank";
		System.out.println(s1==s3); // false because s3 comprises of a variable which is only formed at the runtime. 
		// Hence java cannot evaluate it from before and have the same memory location for both s1 and s3.
		System.out.println(s1.equals(s3)); // true
		
		String n1 = new String("Vinod");
		String n2 = new String("Vinod");
		System.out.println(n1==n2); // false because both objects are different
		
		String comp1 = "Shyam";
		String comp2 = "shyam";
		System.out.println(comp1.compareToIgnoreCase(comp2));
		String m1 = "M1";
		String m2 = m1.charAt(0)+"1";
		System.out.println(m1==m2);
	}

}
