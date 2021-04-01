/**
 * Write a function that takes two string as arguments, s and p
 * and return a boolean dnoting whether s matches p.
 * 
 * p is a sequence of any number of the following:
 *  1. a-z - which stands for itself
 *  2. . - which matches any character
 *  3. * - which matches 0 or more occurrences of the previous single character
 * 
 *  s = 'aba',  p = 'ab'    => false
 *  s = 'aa',   p = 'a*'    => true
 *  s = 'ab',   p = '.*'    => true
 *  s = 'aab',  p = 'c*a*b' => true
 *  s = 'aaa',  p = 'a*.'   => true
 */