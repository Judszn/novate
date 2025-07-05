const ProgrammingFundamentals = {
  exam_details: {
    university: "Level 100 Semester 2",
    course_code: "Programming Fundamentals",
    course_name: "PROGRAMMING FUNDAMENTALS",
  },
  multiple_choice_questions: [
    {
      question_number: 1,
      question_text:
        "What are the three main types of computer programming languages?",
      options: {
        A: "COBOL, Fortran-77, C++",
        B: "machine language, assembly language, high level language",
        C: "imperative language, functional language, declarative language",
        D: "None of the above",
      },
      correct_answer: "B",
      explanation:
        "The three main types of computer programming languages are classified based on their level of abstraction: machine language (binary code), assembly language (low-level symbolic representation), and high-level language (human-readable programming languages like C++, Java, Python).",
    },
    {
      question_number: 2,
      question_text: "C++ is a _______ language.",
      options: {
        A: "High level",
        B: "Machine",
        C: "Low level",
        D: "Fourth Generation",
      },
      correct_answer: "A",
      explanation:
        "C++ is a high-level programming language because it provides abstractions that are closer to human language and mathematics, making it easier to read, write, and maintain compared to machine or assembly languages.",
    },
    {
      question_number: 3,
      question_text:
        "Informal high level description of an algorithm in english is called",
      options: {
        A: "Function",
        B: "Pseudocode",
        C: "Class",
        D: "none of the above",
      },
      correct_answer: "B",
      explanation:
        "Pseudocode is an informal high-level description of an algorithm written in plain English or a mixture of English and programming language constructs. It helps programmers plan and design algorithms before writing actual code.",
    },
    {
      question_number: 7,
      question_text:
        "Which operator is used for input stream in the C++ language?",
      options: {
        A: ">",
        B: "<",
        C: ">>",
        D: "«",
      },
      correct_answer: "C",
      explanation:
        "The >> operator is the extraction operator used for input stream in C++. It is used with cin to read input from the user, for example: cin >> variable_name;",
    },
    {
      question_number: 8,
      question_text: "Which is used to get C++ input during runtime?",
      options: {
        A: "cout",
        B: "cin",
        C: "coi",
        D: "None of the above",
      },
      correct_answer: "B",
      explanation:
        "cin is the standard input stream object in C++ used to get input from the user during runtime. It's part of the iostream library and is typically used with the >> operator.",
    },
    {
      question_number: 9,
      question_text:
        'What is the output of this program?\n#include <iostream>\nusing namespace std;\nint main()\n{\nint i;\ncout << "Please enter an integer value:";\ncin >> i + 4;\nreturn 0;\n}',
      options: {
        A: "73",
        B: "Error",
        C: "your value + 4",
        D: "None of the mentioned",
      },
      correct_answer: "B",
      explanation:
        "This program will result in a compilation error because 'cin >> i + 4;' is invalid syntax. You cannot use an expression (i + 4) as the target of the input operation. The correct syntax would be 'cin >> i;'",
    },
    {
      question_number: 10,
      question_text: "Pick the odd one out",
      options: {
        A: "array type",
        B: "boolean type",
        C: "character type",
        D: "integer type",
      },
      correct_answer: "A",
      explanation:
        "Array type is the odd one out because it's a composite/derived data type, while boolean, character, and integer are fundamental/primitive data types in C++.",
    },
    {
      question_number: 11,
      question_text: "Which type is best suited to represent logical values?",
      options: {
        A: "integer",
        B: "character",
        C: "Boolean",
        D: "all of the above",
      },
      correct_answer: "C",
      explanation:
        "Boolean type is specifically designed to represent logical values (true/false). While other types can be used to represent logical states, boolean is the most appropriate and clear choice for logical operations.",
    },
    {
      question_number: 12,
      question_text:
        "Which of the following statement is true about int f(float)?",
      options: {
        A: "f is a function taking an argument of type int and returning a floating point number",
        B: "f is a function taking an argument of type float and returning a integer.",
        C: "f is a function of type float",
        D: "none of the mentioned",
      },
      correct_answer: "B",
      explanation:
        "In the function declaration 'int f(float)', 'int' is the return type, 'f' is the function name, and 'float' is the parameter type. Therefore, f is a function that takes a float argument and returns an integer.",
    },
    {
      question_number: 13,
      question_text:
        "The value 132.54 can be represented in a program using which data type?",
      options: {
        A: "double",
        B: "int",
        C: "void",
        D: "bool",
      },
      correct_answer: "A",
      explanation:
        "The value 132.54 is a floating-point number with decimal places, so it can be represented using the double data type (or float). Int can only store whole numbers, void represents no value, and bool represents true/false.",
    },
    {
      question_number: 14,
      question_text: "Pick the odd one out.",
      options: {
        A: "integer, character, boolean, floating",
        B: "integer, enum, void",
        C: "enumeration, classes",
        D: "arrays, pointer, classes",
      },
      correct_answer: "A",
      explanation:
        "Option A contains all fundamental data types, while the other options contain a mix of fundamental and derived/user-defined types. This makes A the odd one out as it's the only group of purely fundamental types.",
    },
    {
      question_number: 15,
      question_text: "What is the value of the bool? bool is_int(789.54)",
      options: {
        A: "True",
        B: "1",
        C: "False",
        D: "none of the above",
      },
      correct_answer: "C",
      explanation:
        "The function is_int(789.54) would return False because 789.54 is a floating-point number, not an integer. The function appears to check if the given value is an integer.",
    },
    {
      question_number: 16,
      question_text:
        "For what values of the expression is an if-statement block not executed?",
      options: {
        A: "0 and all negative values",
        B: "0 and -1",
        C: "0",
        D: "0, all negative values, all positive values except 1",
      },
      correct_answer: "C",
      explanation:
        "In C++, an if-statement block is not executed only when the condition evaluates to false. In boolean context, only 0 (zero) is considered false, while all other values (positive, negative, or non-zero) are considered true.",
    },
    {
      question_number: 17,
      question_text: "How many characters are specified in the ASCII scheme?",
      options: {
        A: "64",
        B: "256",
        C: "128",
        D: "218",
      },
      correct_answer: "C",
      explanation:
        "The ASCII (American Standard Code for Information Interchange) scheme specifies 128 characters, numbered from 0 to 127. This includes control characters, digits, uppercase and lowercase letters, and various symbols.",
    },
    {
      question_number: 18,
      question_text:
        "Which of the following is not one of the sizes of the floating point types?",
      options: {
        A: "short float",
        B: "long double",
        C: "float",
        D: "double",
      },
      correct_answer: "A",
      explanation:
        "There is no 'short float' data type in C++. The floating-point types are float, double, and long double. 'short' is only used with integer types, not floating-point types.",
    },
    {
      question_number: 19,
      question_text:
        "What is the index number of the last element of an array with nine (9) elements?",
      options: {
        A: "9",
        B: "0",
        C: "8",
        D: "Programmer-defined",
      },
      correct_answer: "C",
      explanation:
        "Array indexing in C++ starts from 0. So an array with 9 elements has indices 0, 1, 2, 3, 4, 5, 6, 7, 8. The last element is at index 8 (which is 9-1).",
    },
    {
      question_number: 20,
      question_text: "What is an array?",
      options: {
        A: "An array is a series of elements of the same type in contiguous memory locations",
        B: "An array is a series of element",
        C: "An array is a series of elements of the same type placed in non-contiguous memory locations",
        D: "None of the mentioned",
      },
      correct_answer: "A",
      explanation:
        "An array is a collection of elements of the same data type stored in contiguous memory locations. This allows for efficient access using indices and enables pointer arithmetic.",
    },
    {
      question_number: 21,
      question_text:
        "Which of the following gives the memory address of the first element in array?",
      options: {
        A: "array[0];",
        B: "array(2);",
        C: "array[1];",
        D: "array;",
      },
      correct_answer: "D",
      explanation:
        "In C++, the array name without brackets (array) gives the memory address of the first element. array[0] gives the value of the first element, not its address.",
    },
    {
      question_number: 22,
      question_text:
        "What will be the output of the following program?\n#include <stdio.h>\nusing namespace std;\nint main()\n{\nint array[] = {0, 2, 4, 6, 7, 5, 3};\nint n, result = 0;\nfor (n = 0; n < 7; n++) {\nresult += array[n];\n}\ncout << result;\nreturn 0;\n}",
      options: {
        A: "25",
        B: "27",
        C: "26",
        D: "None of the above",
      },
      correct_answer: "B",
      explanation:
        "The program sums all elements of the array: 0 + 2 + 4 + 6 + 7 + 5 + 3 = 27. The loop iterates through all 7 elements and adds each to the result variable.",
    },
    {
      question_number: 23,
      question_text:
        "A function is a block of statements that can be defined once and used",
      options: {
        A: "One time",
        B: "Three times",
        C: "Two times",
        D: "As many times as user wants",
      },
      correct_answer: "D",
      explanation:
        "A function can be called (used) as many times as needed in a program. This reusability is one of the main advantages of functions - they promote code reuse and modularity.",
    },
    {
      question_number: 24,
      question_text:
        "Which of the following is used to write multi line comments in c++?",
      options: {
        A: "/* .... */",
        B: "//",
        C: "/$ .... $/",
        D: "none of the above",
      },
      correct_answer: "A",
      explanation:
        "Multi-line comments in C++ are written using /* at the beginning and */ at the end. The // is used for single-line comments only.",
    },
    {
      question_number: 25,
      question_text: "Where does the execution of a C++ program start?",
      options: {
        A: "user-defined function",
        B: "void function",
        C: "main function",
        D: "none of the mentioned",
      },
      correct_answer: "C",
      explanation:
        "The execution of a C++ program always starts from the main() function. This is the entry point of every C++ program, and the operating system calls this function when the program is executed.",
    },
    {
      question_number: 26,
      question_text: "All the preprocessors directives start with",
      options: {
        A: ".",
        B: "$",
        C: "&",
        D: "#",
      },
      correct_answer: "D",
      explanation:
        "All preprocessor directives in C++ start with the # symbol. Examples include #include, #define, #ifdef, #ifndef, etc. These are processed before the actual compilation begins.",
    },
    {
      question_number: 27,
      question_text: "Machine language is also called",
      options: {
        A: "Assembly Language",
        B: "Binary Language",
        C: "High Level Language",
        D: "HTML Language",
      },
      correct_answer: "B",
      explanation:
        "Machine language is also called binary language because it consists entirely of binary digits (0s and 1s). It's the lowest-level programming language that the computer's processor can directly execute.",
    },
    {
      question_number: 28,
      question_text: "Which of the following is NOT an Application Software.",
      options: {
        A: "Word Processor",
        B: "Web Browser",
        C: "Windows XP",
        D: "MS Excel",
      },
      correct_answer: "C",
      explanation:
        "Windows XP is an operating system (system software), not application software. Word processors, web browsers, and MS Excel are all application software designed for end-users to accomplish specific tasks.",
    },
    {
      question_number: 29,
      question_text:
        "A truth table defines the _______ of a logic function for all possible _______",
      options: {
        A: "Input -- Outputs",
        B: "Output — Inputs",
        C: "Process -- Inputs",
        D: "Input -- Processes",
      },
      correct_answer: "B",
      explanation:
        "A truth table defines the output of a logic function for all possible inputs. It systematically lists all possible input combinations and their corresponding outputs for a logical operation.",
    },
    {
      question_number: 30,
      question_text: "Which is correct with respect to size of the datatypes?",
      options: {
        A: "char > int < float",
        B: "int < char > float",
        C: "char < int < float",
        D: "char < int < double",
      },
      correct_answer: "C",
      explanation:
        "The typical size hierarchy is: char (1 byte) < int (4 bytes) < float (4 bytes) < double (8 bytes). However, char < int < float is the most commonly correct relationship, though float and int can sometimes be the same size.",
    },
    {
      question_number: 31,
      question_text:
        "Which of the following accesses the seventh element stored in array?",
      options: {
        A: "array[6]",
        B: "array[7]",
        C: "array(6)",
        D: "array(7)",
      },
      correct_answer: "A",
      explanation:
        "Arrays in C++ use zero-based indexing, so the seventh element is accessed using array[6]. The first element is at index 0, second at index 1, and so on.",
    },
    {
      question_number: 32,
      question_text: "What are mandatory parts in function declaration?",
      options: {
        A: "return type, function name",
        B: "return type, function name, parameters",
        C: "function name only",
        D: "parameters only",
      },
      correct_answer: "A",
      explanation:
        "The mandatory parts in a function declaration are the return type and function name. Parameters are optional (a function can have no parameters), but return type and name are always required.",
    },
    {
      question_number: 33,
      question_text:
        "What is the scope of the variable declared in the user defined function?",
      options: {
        A: "whole program",
        B: "only inside the {} block",
        C: "both a and b",
        D: "none of the mentioned",
      },
      correct_answer: "B",
      explanation:
        "Variables declared inside a user-defined function have local scope, meaning they are only accessible within the function's block (between the curly braces {}). They are not accessible outside the function.",
    },
    {
      question_number: 34,
      question_text: "Which keyword is used to handle exception?",
      options: {
        A: "try",
        B: "throw",
        C: "catch",
        D: "none of the mentioned",
      },
      correct_answer: "C",
      explanation:
        "The 'catch' keyword is used to handle exceptions in C++. It's used in conjunction with 'try' blocks to catch and handle exceptions that are thrown during program execution.",
    },
    {
      question_number: 35,
      question_text:
        "Which of the following keyword is used to declare the header file?",
      options: {
        A: "include",
        B: "exclude",
        C: "string",
        D: "namespace",
      },
      correct_answer: "A",
      explanation:
        "The 'include' keyword (used as #include) is used to declare/include header files in C++. For example, #include <iostream> includes the iostream header file.",
    },
    {
      question_number: 36,
      question_text:
        "Which of the following header files is required for creating and reading data files?",
      options: {
        A: "ofstream",
        B: "fstream",
        C: "ifstream",
        D: "console",
      },
      correct_answer: "B",
      explanation:
        "The <fstream> header file is required for file operations in C++. It provides classes like ifstream (for reading), ofstream (for writing), and fstream (for both reading and writing) files.",
    },
    {
      question_number: 37,
      question_text: "Which of the following is not a standard data type?",
      options: {
        A: "int",
        B: "char",
        C: "float",
        D: "date",
      },
      correct_answer: "D",
      explanation:
        "'date' is not a standard data type in C++. The standard fundamental data types include int, char, float, double, bool, etc. Date functionality typically requires libraries or user-defined classes.",
    },
    {
      question_number: 38,
      question_text: "In C++ language, which one is not the integer value?",
      options: {
        A: "12",
        B: "'23'",
        C: "10",
        D: "100",
      },
      correct_answer: "B",
      explanation:
        "'23' (with single quotes) is a character literal, not an integer value. Single quotes denote character literals in C++, while the others (12, 10, 100) are integer literals.",
    },
    {
      question_number: 39,
      question_text: "What is a comment in C++?",
      options: {
        A: "comments are parts of the source code disregarded by the compiler",
        B: "comments are executed by compiler to find the meaning of the comment",
        C: "comments are executable",
        D: "none of the mentioned",
      },
      correct_answer: "A",
      explanation:
        "Comments in C++ are parts of the source code that are completely ignored by the compiler. They are used for documentation and explanation purposes and do not affect the program's execution.",
    },
    {
      question_number: 40,
      question_text: "What type of comments does C++ support?",
      options: {
        A: "single line",
        B: "multi line",
        C: "single line and multi line",
        D: "none of the mentioned",
      },
      correct_answer: "C",
      explanation:
        "C++ supports both single-line comments (using //) and multi-line comments (using /* */). This gives programmers flexibility in how they document their code.",
    },
    {
      question_number: 41,
      question_text: "The constants are also known as",
      options: {
        A: "const",
        B: "preprocessor",
        C: "literals",
        D: "none of the mentioned",
      },
      correct_answer: "C",
      explanation:
        "Constants in C++ are also known as literals. Literals are fixed values that cannot be changed during program execution, such as 42 (integer literal), 3.14 (floating-point literal), or 'A' (character literal).",
    },
    {
      question_number: 42,
      question_text: "The switch statement is also called as?",
      options: {
        A: "choosing structure",
        B: "selective structure",
        C: "certain structure",
        D: "none of the mentioned",
      },
      correct_answer: "B",
      explanation:
        "The switch statement is also called a selective structure because it allows the program to select one of many code blocks to execute based on the value of an expression.",
    },
    {
      question_number: 43,
      question_text:
        "When the logical operator OR (||) combine two expressions exp1 and exp2 then the result will be false only,",
      options: {
        A: "When both exp1 and exp2 are true",
        B: "When both exp1 and exp2 are false",
        C: "When exp1 is true and exp2 is false",
        D: "When exp1 is false and exp2 is true",
      },
      correct_answer: "B",
      explanation:
        "The logical OR operator (||) returns false only when both operands are false. In all other cases (true||true, true||false, false||true), it returns true.",
    },
    {
      question_number: 44,
      question_text: "Truth tables are used for analyzing",
      options: {
        A: "logical expressions",
        B: "arithmetic expressions",
        C: "both logical and arithmetic",
        D: "none of the mentioned",
      },
      correct_answer: "A",
      explanation:
        "Truth tables are specifically used for analyzing logical expressions. They show all possible combinations of inputs and their corresponding outputs for logical operations like AND, OR, NOT, etc.",
    },
    {
      question_number: 45,
      question_text: "C++ string constant is enclosed in",
      options: {
        A: "Small braces",
        B: "Curly braces",
        C: "Double quotes",
        D: "Single quotes",
      },
      correct_answer: "C",
      explanation:
        'In C++, string constants (string literals) are enclosed in double quotes ("). Single quotes are used for character literals, while double quotes are used for string literals.',
    },
    {
      question_number: 46,
      question_text: "X is an integer variable; what does X++ means,",
      options: {
        A: "Add 1 two times to X value",
        B: "Add 1 to X value",
        C: "Subtract 1 from X value",
        D: "Multiply X by 2",
      },
      correct_answer: "B",
      explanation:
        "X++ is the post-increment operator that adds 1 to the value of X. It increments X by 1 after using its current value in the expression.",
    },
    {
      question_number: 47,
      question_text: "The most suitable data type for number 325.25 is",
      options: {
        A: "char",
        B: "int",
        C: "float",
        D: "bool",
      },
      correct_answer: "C",
      explanation:
        "The number 325.25 contains a decimal point, making it a floating-point number. The most suitable data type would be float (or double) to store this value accurately.",
    },
  ],
};

export default ProgrammingFundamentals;
