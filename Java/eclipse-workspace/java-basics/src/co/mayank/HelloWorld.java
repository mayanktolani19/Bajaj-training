package co.mayank;
import java.util.*;

public class HelloWorld {
	public static void main(String[] args) {
		
		System.out.println("Hello world");
		System.out.println("Enter an integer");
		Scanner sc = new Scanner(System.in);
		
		if(sc.hasNextInt()) {
			int x = sc.nextInt();
		}
		else {
			System.out.println("you were supposed to enter an integer");
		}
	}
}
