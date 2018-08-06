# ======================================================================= # 
#                         Least Common Multiple                           #
# ======================================================================= #
#                                                                         #
# Instructions:                                                           #
# ----------------------------------------------------------------------- #
# 2520 is the smallest number that can be divided by each of the numbers  #
# from 1 to 10 without any remainder.                                     #
#                                                                         #
# What is the smallest positive number that is evenly divisible by all of #
# the numbers from 1 to 20?                                               #
# ----------------------------------------------------------------------- #

def lcm(upto):
    result = 1
    for num in xrange(2, (upto + 1)):
        if result % num != 0:
            factor = 1
            while num > factor:
                factor += 1
                while num % factor == 0:
                    num /= factor
            result *= factor
    return result

print lcm(20)

# -------------------------------------- #
#          Alternative Solution          #
# -------------------------------------- #

def lcm(upto):
    step = upto
    number = upto
    for i in xrange(upto - 1, 1, -1):
        while number % i != 0:
            number += step
        step = number
    return step

print lcm(20)

# -------------------------------------- #
#          Alternative Solution          #
# -------------------------------------- #

from fractions import gcd

def lcm(n):
    ans = 1
    for i in xrange(2, n + 1):
        ans = (ans * i) / gcd(ans, i)
    return ans

print lcm(20)