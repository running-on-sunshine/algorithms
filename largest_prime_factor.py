# ======================================================================= # 
#                          Largest Prime Factor                           #
# ======================================================================= #
#                                                                         #
# Instructions:                                                           #
# ----------------------------------------------------------------------- #
# The prime factors of 13195 are 5, 7, 13 and 29.                         #
#                                                                         #
# What is the largest prime factor of the number 600851475143?            # 
#                                                                         #
# Answer: 6857                                                            #
# ----------------------------------------------------------------------- #

# --- edgecases: ---
# number = 2
# number = 18
# number = 45

def largest_prime_number(number):
    remainder = number
    factor = 2
    while remainder != 1:
        if remainder % factor == 0: 
            remainder /= factor
        else:
            factor += 1
    return factor

number = 600851475143
largest_prime_number = largest_prime_number(number)
print largest_prime_number

# Done when remainder = 1
# When the program exits, we will have discovered the largest factor.

# -------------------------------------------------------------------- #
#                          Alternate Solution                          #
# -------------------------------------------------------------------- #

def findprime(num):
    factors = []
    factor = 2
    while factor <= num:
        while num % factor == 0:
            num /= factor
            factors.append(factor)
        factor += 1
    return factors

number = 600851475143
prime_factors = findprime(number)
print prime_factors