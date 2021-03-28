#str
#collection of unicode and default encoding is UTF8
#A literal string at the start of a module, class, or function that is not assigned to a variable is treatedas documentation anddisplayed as part of the built‐in help() output for that object. 
string1 = 'single quotes'
string2 = "double quotes"
string3 = '''triple single quotes'''
string4 = """triple double quotes"""
# quotes inside another type of quotes will be interpreted as a literal character
string5 = """'He said: "Hi!"'"""
string6 = r'raw string without special characters like \n' #\n is interpreted as literal string instead of line break.
string7 = '\x1A' # Nonprintable characters can be included in a string using a backslash followed by their hex code

#string operations
"123" + "456" # '123456'
"123" * 3 # '123123123'
"asd".upper() # 'ASD'
"asd".capitalize() # 'Asd'
'ASD'.lower() # 'asd'
#strip() strips whitespace (the default) or the specifi ed characters from the ends of the string.
'   haha look at these    white space    !    '.strip() # 'haha look at these    white space    !'


#bool
boolean = True
boolean2 = False



#int doesn't have a maximum value unlike other languages
int1 = 15432487654324537435432465374354321564534357342343576543
#cast string values into int
int2 = int('123') #123
#cast bool value into int
int3 = int(True) #1
int4 = int(False) #0
#cast string as hexadecimal number
int5 = int("0xAB34", 16) #43828



#float
float1 = 1.0
# float casting doesn't support anything other than base 10
float2 = float(20)




#None
'''TypeTheNone type represents a null object. There is only one None object in the Python environment,andall referencestoNone use that same single instance.'''
none = None
none is None #true
none == None #true


####collections####
#string is a collection
str_col = '0123456789'
str_col[1] # '1'

#Lists
list1 = ['0', '1', '2']
#list support arithmetic-style operations for concatenating and copying similar to strings
list1*3 # ['0', '1', '2', '0', '1', '2', '0', '1', '2']
list1 + ['3', '4'] #['0', '1', '2', '3', '4']
#list comprehensions. [*inserted_value* for *item* in *iteratble* if *insert_condition*]
[n for n in range(1, 11) if n%2] # [1, 3, 5, 7, 9]

#Tuples, Tuples are immutable
tuple1 = ('1', '2')
#unpacking a tuple
str1, str2 = tuple1
str1 # '1'
str2 # '2'

#Dictionaries
dict1 = {'key': 'value', 1: "value2"}
dict1['key'] # 'value'
dict1[1] # 'value2
dict1.keys() # dict_keys(['key', 1, 'default value'])
dict1.values() # dict_values(['value', 'value2'])
dict1.items() # dict_items([('key', 'value'), (1, 'value2')])

#Sets elements must be unique, set is mutable
set1 = {1, 2, 3, 4, 5, 5}
set1 # {1, 2, 3, 4, 5}
emptySet = set()
emptySet # set()
set2 = {1, 2, 3}
#subset and superset
set1 > set2 # true
set1 > {1, 5, 6} # false
set2 > {1, 2, 3} # false
set2 >= {1, 2, 3} # true
#union, intersection, difference, symmetric_difference
set2 | {4, 5 , 6} # {1, 2, 3, 4, 5, 6}
set2 & {1, 3, 5} # {1, 3}
set2 - {1, 2, 5} # {3}
set2 ^ {1, 2, 5} # {3, 5}

#slicing: str_col[start:end(exclusive):step]
str_col[3:8:2] #'357'
#the sorted function return value is a sorted list containing the original collection elements
sorted('iterable') # ['a', 'b', 'e', 'e', 'i', 'l', 'r', 't']
#In general, empty collections are treated as False in Boolean expressions and True otherwise.
'' == False # False
'' == True # False
#this print false
if '':
    print('true')
else:
    print('flase') # prints false
#this print true
if 'a':
    print('true') # prints true
else:
    print('flase')
#any() and all()
any(['1', '']) # true
all(['1', '']) # false


#byte string
#accessing an character in a byteString result in an integer
b'CAFEBABE'[0] # 67