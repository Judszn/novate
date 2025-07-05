const IntroBusinessStats = {
  exam_details: {
    university: "Level 100 Semester 2",
    course_code: "Introduction to Business Statistics",
    course_name: "INTRODUCTION TO BUSINESS STATISTICS",
  },
  multiple_choice_questions: [
    {
      question_number: 1,
      question_text:
        "In simple linear regression analysis, what does the coefficient 'a' represent in the equation Y = a + bX + ε?",
      options: {
        A: "The slope of the regression line",
        B: "The y-intercept of the regression line",
        C: "The correlation coefficient",
        D: "The error term",
      },
      correct_answer: "B",
      explanation:
        "In the simple linear regression equation Y = a + bX + ε, 'a' represents the y-intercept, which is the value of Y when X equals zero. It shows where the regression line crosses the y-axis.",
    },
    {
      question_number: 2,
      question_text:
        "What is the primary difference between correlation analysis and regression analysis?",
      options: {
        A: "Correlation measures the strength of relationship while regression predicts values",
        B: "Correlation is used for qualitative data while regression is for quantitative data",
        C: "Correlation requires more data points than regression",
        D: "There is no difference between them",
      },
      correct_answer: "A",
      explanation:
        "Correlation analysis measures the strength and direction of the linear relationship between two variables, while regression analysis is used to predict or estimate the value of one variable based on the value of another variable.",
    },
    {
      question_number: 3,
      question_text:
        "Which of the following is NOT a property of the correlation coefficient?",
      options: {
        A: "It ranges from -1 to +1",
        B: "It is unitless",
        C: "It can exceed +1 for strong positive relationships",
        D: "It measures the strength of linear relationship",
      },
      correct_answer: "C",
      explanation:
        "The correlation coefficient always ranges from -1 to +1, regardless of how strong the relationship is. It cannot exceed these bounds. Values closer to -1 or +1 indicate stronger relationships, while values closer to 0 indicate weaker relationships.",
    },
    {
      question_number: 4,
      question_text:
        "What does the coefficient of determination (R²) represent?",
      options: {
        A: "The percentage of variation in Y explained by X",
        B: "The correlation coefficient squared",
        C: "The strength of the linear relationship",
        D: "All of the above",
      },
      correct_answer: "D",
      explanation:
        "The coefficient of determination (R²) represents all of these: it is the correlation coefficient squared, it shows the percentage of variation in the dependent variable (Y) that is explained by the independent variable (X), and it indicates the strength of the linear relationship.",
    },
    {
      question_number: 5,
      question_text:
        "In frequency distribution analysis, what does the mean deviation measure?",
      options: {
        A: "The average of all values in the dataset",
        B: "The average absolute deviation from the mean",
        C: "The most frequently occurring value",
        D: "The middle value when data is arranged in order",
      },
      correct_answer: "B",
      explanation:
        "Mean deviation measures the average absolute deviation of all values from the mean. It provides information about the dispersion or spread of the data around the central tendency (mean).",
    },
    {
      question_number: 6,
      question_text: "What does the coefficient of variation measure?",
      options: {
        A: "The absolute variability in the data",
        B: "The relative variability expressed as a percentage",
        C: "The correlation between two variables",
        D: "The regression coefficient",
      },
      correct_answer: "B",
      explanation:
        "The coefficient of variation measures relative variability by expressing the standard deviation as a percentage of the mean. It allows comparison of variability between datasets with different units or scales.",
    },
    {
      question_number: 7,
      question_text:
        "In a normal distribution, what percentage of data falls within one standard deviation of the mean?",
      options: {
        A: "50%",
        B: "68%",
        C: "95%",
        D: "99.7%",
      },
      correct_answer: "B",
      explanation:
        "In a normal distribution, approximately 68% of the data falls within one standard deviation of the mean (μ ± σ). This is part of the empirical rule or 68-95-99.7 rule.",
    },
    {
      question_number: 8,
      question_text: "What is the standard normal distribution?",
      options: {
        A: "A normal distribution with mean = 0 and standard deviation = 1",
        B: "A normal distribution with mean = 1 and standard deviation = 0",
        C: "Any normal distribution",
        D: "A distribution that is not normal",
      },
      correct_answer: "A",
      explanation:
        "The standard normal distribution is a special case of the normal distribution with a mean of 0 and a standard deviation of 1. It is used to standardize normal distributions and find probabilities using Z-scores.",
    },
    {
      question_number: 9,
      question_text:
        "What is the difference between a population and a sample?",
      options: {
        A: "Population is smaller than sample",
        B: "Population includes all members while sample is a subset",
        C: "Sample is more accurate than population",
        D: "There is no difference",
      },
      correct_answer: "B",
      explanation:
        "A population includes all members of a defined group that we are studying, while a sample is a subset or portion of the population selected for analysis. Samples are used to make inferences about the population.",
    },
    {
      question_number: 10,
      question_text: "What characterizes primary data?",
      options: {
        A: "Data collected from existing sources",
        B: "Data collected firsthand for a specific purpose",
        C: "Data that has been previously analyzed",
        D: "Data from government publications",
      },
      correct_answer: "B",
      explanation:
        "Primary data is original data collected firsthand by the researcher for a specific research purpose. It is collected directly from the source through methods like surveys, interviews, or experiments.",
    },
    {
      question_number: 11,
      question_text:
        "What is the main difference between quantitative and qualitative data?",
      options: {
        A: "Quantitative data is numerical while qualitative data is categorical",
        B: "Quantitative data is categorical while qualitative data is numerical",
        C: "Both are the same type of data",
        D: "Quantitative data is always continuous",
      },
      correct_answer: "A",
      explanation:
        "Quantitative data consists of numerical values that can be measured and subjected to mathematical operations, while qualitative data consists of categories, labels, or descriptions that cannot be measured numerically.",
    },
    {
      question_number: 12,
      question_text:
        "What distinguishes simple random sampling from judgmental sampling?",
      options: {
        A: "Simple random sampling uses researcher's judgment while judgmental sampling is random",
        B: "Simple random sampling gives each member equal chance while judgmental sampling uses researcher's judgment",
        C: "Both methods are identical",
        D: "Simple random sampling is always biased",
      },
      correct_answer: "B",
      explanation:
        "Simple random sampling gives every member of the population an equal chance of being selected, ensuring unbiased representation. Judgmental sampling relies on the researcher's judgment to select participants, which may introduce bias but can be useful for specific research purposes.",
    },
    {
      question_number: 13,
      question_text: "In a histogram, what does the frequency represent?",
      options: {
        A: "The width of each bar",
        B: "The height of each bar showing count in each interval",
        C: "The total number of observations",
        D: "The range of the data",
      },
      correct_answer: "B",
      explanation:
        "In a histogram, the frequency represents the height of each bar, showing how many observations fall within each class interval or bin. The frequency indicates the count or number of data points in each category.",
    },
    {
      question_number: 14,
      question_text: "What does cumulative frequency show?",
      options: {
        A: "The frequency of each individual class",
        B: "The total of all frequencies up to and including a particular class",
        C: "The relative frequency of each class",
        D: "The average frequency across all classes",
      },
      correct_answer: "B",
      explanation:
        "Cumulative frequency shows the total number of observations that fall at or below a particular value or class. It is the running total of frequencies from the lowest class up to and including the current class.",
    },
    {
      question_number: 15,
      question_text:
        "In probability calculations using the normal distribution, what does the Z-score represent?",
      options: {
        A: "The original data value",
        B: "The number of standard deviations from the mean",
        C: "The probability itself",
        D: "The variance of the distribution",
      },
      correct_answer: "B",
      explanation:
        "The Z-score represents the number of standard deviations a particular value is from the mean. It standardizes values so they can be compared across different normal distributions and allows us to find probabilities using the standard normal distribution table.",
    },

    {
      question_number: 16,
      question_text:
        "What is the midpoint of the class interval 130 - 134 in a grouped frequency table?",
      options: {
        A: "132",
        B: "131.5",
        C: "130",
        D: "133",
      },
      correct_answer: "A",
      explanation:
        "The midpoint of a class interval is calculated by averaging the lower and upper class limits. For 130–134, midpoint = (130 + 134)/2 = 132.",
    },
    {
      question_number: 17,
      question_text:
        "In a distribution with a mean of 100 and a median of 90, what can be said about the shape of the distribution?",
      options: {
        A: "Symmetrical",
        B: "Uniform",
        C: "Negatively skewed",
        D: "Positively skewed",
      },
      correct_answer: "D",
      explanation:
        "When the mean is greater than the median, the distribution is positively skewed. This means the right tail is longer than the left.",
    },
    {
      question_number: 18,
      question_text:
        "Which of the following best describes the interpretation of the Pearson correlation coefficient r = -0.85?",
      options: {
        A: "There is a strong positive relationship",
        B: "There is a strong negative relationship",
        C: "There is a weak positive relationship",
        D: "There is no relationship",
      },
      correct_answer: "B",
      explanation:
        "A correlation coefficient of -0.85 indicates a strong negative linear relationship between two variables — as one increases, the other decreases.",
    },
    {
      question_number: 19,
      question_text:
        "If the mean of a normal distribution is 100 and the standard deviation is 50, what is the Z-score of a blood pressure reading of 150?",
      options: {
        A: "1.0",
        B: "0.5",
        C: "2.0",
        D: "1.5",
      },
      correct_answer: "A",
      explanation: "Z = (X - μ) / σ = (150 - 100) / 50 = 1.0",
    },
    {
      question_number: 20,
      question_text:
        "What is the probability of selecting a threatened species from Ghana based on the endangered species chart?",
      options: {
        A: "12/476",
        B: "59/476",
        C: "47/476",
        D: "49/476",
      },
      correct_answer: "D",
      explanation:
        "There are 12 threatened birds, 10 mammals, 25 reptiles, and 2 amphibians in Ghana = 49. Total species from the table = 476. Probability = 49/476.",
    },
    {
      question_number: 21,
      question_text:
        "A bag contains 5 red, 6 green, and 4 blue balls. What is the probability that two balls drawn without replacement are of the same color?",
      options: {
        A: "1/5",
        B: "74/182",
        C: "37/182",
        D: "25/182",
      },
      correct_answer: "B",
      explanation:
        "Use combinations: P(same color) = (5C2 + 6C2 + 4C2)/15C2 = (10 + 15 + 6)/105 = 31/105 = 74/182.",
    },
    {
      question_number: 22,
      question_text:
        "Which of the following is NOT a property of the normal distribution?",
      options: {
        A: "It is bell-shaped and symmetric",
        B: "Mean = Median = Mode",
        C: "Total area under the curve is 1",
        D: "It is skewed to the right",
      },
      correct_answer: "D",
      explanation:
        "The normal distribution is symmetric, not skewed. A right-skewed distribution is not normal.",
    },
    {
      question_number: 23,
      question_text:
        "In a normal distribution with mean = 50 and standard deviation = 5, what are the mode and median?",
      options: {
        A: "Mode = 45, Median = 50",
        B: "Mode = 50, Median = 50",
        C: "Mode = 50, Median = 45",
        D: "Mode = 55, Median = 50",
      },
      correct_answer: "B",
      explanation:
        "In a normal distribution, the mode, median, and mean are all equal.",
    },
    {
      question_number: 24,
      question_text:
        "Which of the following best defines a sample space in probability?",
      options: {
        A: "The process of collecting data",
        B: "A subset of the population",
        C: "All possible outcomes of an experiment",
        D: "The outcome of a single trial",
      },
      correct_answer: "C",
      explanation:
        "The sample space is the set of all possible outcomes of a probability experiment.",
    },
    {
      question_number: 25,
      question_text:
        "If the correlation coefficient between X and Y is -0.56, what happens to X when Y decreases?",
      options: {
        A: "X increases",
        B: "X remains constant",
        C: "X decreases",
        D: "No change can be determined",
      },
      correct_answer: "A",
      explanation:
        "A negative correlation implies that as one variable decreases, the other increases. So, if Y decreases, X tends to increase.",
    },
    {
      question_number: 26,
      question_text:
        "Which of the following best explains the meaning of the regression slope in a simple linear regression model?",
      options: {
        A: "The predicted value of Y when X is 0",
        B: "The change in Y for a one-unit change in X",
        C: "The strength of the relationship between X and Y",
        D: "The percentage of variation in Y explained by X",
      },
      correct_answer: "B",
      explanation:
        "The slope of the regression line (b) represents the change in the dependent variable Y for a one-unit change in the independent variable X.",
    },
    {
      question_number: 27,
      question_text:
        "The salaries of workers in a company are normally distributed with a mean of $220 and a standard deviation of $25. What is the probability that a worker earns more than $245?",
      options: {
        A: "0.8413",
        B: "0.3085",
        C: "0.1587",
        D: "0.6915",
      },
      correct_answer: "C",
      explanation:
        "Z = (245 - 220)/25 = 1. From the Z-table, P(Z > 1) = 1 - 0.8413 = 0.1587. So, the probability is 0.1587.",
    },
    {
      question_number: 28,
      question_text: "In grouped data, how is the mean calculated?",
      options: {
        A: "Sum of class boundaries divided by number of classes",
        B: "Sum of frequencies divided by number of intervals",
        C: "Sum of frequency × midpoint divided by total frequency",
        D: "Midpoint of the class with the highest frequency",
      },
      correct_answer: "C",
      explanation:
        "The formula for mean of grouped data is: Mean = Σ(f × x) / Σf, where x = class midpoint and f = frequency.",
    },
    {
      question_number: 29,
      question_text:
        "What is the probability of selecting at least one defective bulb when 3 are selected without replacement from a batch of 20 bulbs, 5 of which are defective?",
      options: {
        A: "0.456",
        B: "0.789",
        C: "0.125",
        D: "0.625",
      },
      correct_answer: "B",
      explanation:
        "First, find the probability that all 3 bulbs are non-defective: (15/20) × (14/19) × (13/18) ≈ 0.211. Then, P(at least one defective) = 1 - 0.211 = 0.789.",
    },
    {
      question_number: 30,
      question_text:
        "Which of the following is a disadvantage of using the census method in data collection?",
      options: {
        A: "Results are more accurate",
        B: "It is cost-effective",
        C: "It is suitable for small populations",
        D: "It is time-consuming and expensive",
      },
      correct_answer: "D",
      explanation:
        "The main disadvantages of the census method are high cost, time consumption, and complexity, especially for large populations.",
    },
    {
      question_number: 31,
      question_text:
        "Which of the following best describes the population in a study where blood glucose levels of St. Andrew High School students were measured?",
      options: {
        A: "All students in the school",
        B: "Only the diabetic students",
        C: "Only the male students",
        D: "All secondary schools in the region",
      },
      correct_answer: "A",
      explanation:
        "The population in this case refers to all students in St. Andrew High School from which the sample was drawn.",
    },
    {
      question_number: 32,
      question_text:
        "In constructing a grouped frequency table, what is the midpoint of the class 110 – 114?",
      options: {
        A: "111.5",
        B: "112",
        C: "112.5",
        D: "113",
      },
      correct_answer: "C",
      explanation:
        "Midpoint = (Lower limit + Upper limit) / 2 = (110 + 114) / 2 = 112.5",
    },
    {
      question_number: 33,
      question_text:
        "Which of the following is NOT a property of the normal distribution curve?",
      options: {
        A: "It is symmetric about the mean",
        B: "It is bell-shaped",
        C: "It is skewed to the right",
        D: "The total area under the curve is 1",
      },
      correct_answer: "C",
      explanation:
        "A normal distribution is symmetric, not skewed to the right.",
    },
    {
      question_number: 34,
      question_text:
        "The life of a component is normally distributed with mean 900 hours and standard deviation 80. What is the Z-score for 880 hours?",
      options: {
        A: "0.25",
        B: "1.25",
        C: "-0.25",
        D: "-1.25",
      },
      correct_answer: "C",
      explanation: "Z = (X - μ)/σ = (880 - 900)/80 = -20/80 = -0.25",
    },
    {
      question_number: 35,
      question_text:
        "What proportion of components last more than 750 hours if the mean is 900 and the standard deviation is 80 hours?",
      options: {
        A: "0.8944",
        B: "0.9938",
        C: "0.1056",
        D: "0.8023",
      },
      correct_answer: "A",
      explanation:
        "Z = (750 - 900)/80 = -1.875. From Z-table, P(Z > -1.875) ≈ 0.8944.",
    },
    {
      question_number: 36,
      question_text:
        "Which of the following best defines a probability experiment?",
      options: {
        A: "The expected result of a test",
        B: "A process with a random outcome",
        C: "The most likely outcome",
        D: "The sample space of a process",
      },
      correct_answer: "B",
      explanation:
        "A probability experiment is a procedure that produces outcomes that are uncertain.",
    },
    {
      question_number: 37,
      question_text:
        "From the species data, what is the probability of selecting an endangered species from the rest of the world (ROW)?",
      options: {
        A: "251/692",
        B: "70/692",
        C: "176/692",
        D: "147/692",
      },
      correct_answer: "A",
      explanation:
        "There are 251 endangered mammals from ROW. Total number of species is 692. So, probability = 251/692.",
    },
    {
      question_number: 38,
      question_text:
        "A bag contains 4 white, 4 green, and 7 blue balls. What is the probability that two balls selected without replacement are of the same colour?",
      options: {
        A: "67/182",
        B: "50/182",
        C: "82/182",
        D: "35/182",
      },
      correct_answer: "C",
      explanation:
        "Total same-colour combinations: 4C2 + 4C2 + 7C2 = 6 + 6 + 21 = 33. Total combinations: 15C2 = 105. So, 33/105 ≈ 0.3143 = 82/182.",
    },
    {
      question_number: 39,
      question_text:
        "Which of the following best explains the coefficient of determination (R²) in regression?",
      options: {
        A: "The correlation between X and Y",
        B: "The slope of the regression line",
        C: "The proportion of variation in Y explained by X",
        D: "The y-intercept of the line",
      },
      correct_answer: "C",
      explanation:
        "R² shows the percentage of the variance in the dependent variable that is predictable from the independent variable.",
    },
    {
      question_number: 40,
      question_text:
        "Which of the following correctly differentiates between primary and secondary data?",
      options: {
        A: "Primary data is already published; secondary is collected firsthand",
        B: "Primary data is collected firsthand; secondary is already published",
        C: "Both are collected directly from respondents",
        D: "Secondary data is more accurate than primary data",
      },
      correct_answer: "B",
      explanation:
        "Primary data is collected by the researcher directly; secondary data has already been gathered and published by others.",
    },
  ],
};

export default IntroBusinessStats;
