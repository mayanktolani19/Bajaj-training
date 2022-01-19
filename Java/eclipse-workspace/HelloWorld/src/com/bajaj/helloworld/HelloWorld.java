package com.bajaj.helloworld;

// Access specifier - It tells access level of our class file
/*
 * public - anyone can access it.
 * private - no outside world can access it.
 * default - within package
 * protected - within package and inner class.
 */
public class HelloWorld {
	/* static - you can access this method using class name.
	 * it is stored in the static area.
	 * 
	 * void - return type. In this case it is nothing.
	 * 
	*/
	public static void main(String abc[]) {
		System.out.println("Hello world");
		System.out.println(abc[1]);
	}
}
