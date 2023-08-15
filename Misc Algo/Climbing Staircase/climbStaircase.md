# Climbing Staircase

Problem: Given a Staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time

    n=1, climbingStaircase(1) = 1			| ( 1 )
    n=2, climbingStaircase(2) = 2			| ( 1, 1 ) and ( 2 )
    n=3, climbingStaircase(3) = 3			| ( 1, 1, 1 ) (1, 2 ) and ( 2, 1)
    n=4, climbingStaircase(4) = 4			| ( 1, 1, 1, 1 ) (1, 1, 2) (1,2,1) (2,1,1) and (2, 2)


# Climbing StairCase Idea

 - At any given time, you can climb either 1 step or 2 steps
 - If you have to climb to step 'n;, we can only climb from step 'n-1' or 'n-2'
 - Calculate the ways we can climb to 'n-1' and 'n-2' steps and addd the two

   **climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)**
