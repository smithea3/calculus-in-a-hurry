var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Summation Notation",
  "body": " Summation Notation  The main idea of calculating integrals is simple: we want to calculate area. It is the execution of that simple idea that makes the concept of integrals more interesting and challenging to calculate. To calculate area under different functions, we will need to symbol that mean \"to add\". In mathematics, we use the capital letter \"S\" in Greek ( ) to denote summation.  We can use this summation notation to short hand summation in this way. Say we wanted to write the sum of the positive integers from 1 to 10. We can do this using summation notation in the following way   In this example, the letter is called the \"index\" of the summation. The value of is the initial value, and the value of is the terminal value. Expanded out, this summartion would look like this:   The index of the summation always increases by 1 each time. So, if you want to make it interesting and count another way, you would have to think of a way to do so. Let's look at the next example to see what this means.    Find the sum of the first 10 even numbers.   110   Since we want to add the first even numbers, we first need to figure out the expression that gives the even numbers. Using as the index again, if is the expression, where is the initial value and is the terminal value, then this would give use the first ten even numbers. As a summation, this would look like   If you look at this a little closer, then you see that we could factor out a 2 from the expanded part of the equation and have   This is an important property of summation that allows us to factor out common factors like to to make certain computations easier.    "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-1.html#example-1",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Find the sum of the first 10 even numbers.   110   Since we want to add the first even numbers, we first need to figure out the expression that gives the even numbers. Using as the index again, if is the expression, where is the initial value and is the terminal value, then this would give use the first ten even numbers. As a summation, this would look like   If you look at this a little closer, then you see that we could factor out a 2 from the expanded part of the equation and have   This is an important property of summation that allows us to factor out common factors like to to make certain computations easier.   "
},
{
  "id": "sec_differential-equations-chapter-review-test",
  "level": "1",
  "url": "sec_differential-equations-chapter-review-test.html",
  "type": "Section",
  "number": "2.1",
  "title": "Differential Equations Chapter Review Test",
  "body": " Differential Equations Chapter Review Test   This is a review for the differential equations section of a one-semester Calculus II course.    Consider the differential equation  Sketch the slope field for the differential equation using technology.         Solve the first order linear differential equation and find the particular solution through the initial value of .   Begin by writing the equation as . Now, we can identify the integrating factor , where .  Using the formula derived in class, we have   Using the initial condition given, we find that . Therefore, out specific solution is .   Sketch your answer from (b) on top of the slope field from (a).          Use Euler's Method to make a table of values for the approximate solution of the following differential equation with specified intitial value. Use 10 steps and a step size of 0.10.     Click here to go to the SageMathCell Applet that solves by Euler's Method.     Solve the differential equation.    Seperation of Variables technique results in a solution of     Write the differential equation that models the following statement, then solve the differential equation.  The rate of change with respect to time, , is proporitional to .   The differential equation would be written as . The general solution to the differential equation, again using Seperation of Variables, would produce     A culture of barteria obeys the law of uninhibited growth and follows a model . If 500 bacteria are present initially, and there are 800 after one hour, answer the following questions.   What is the uninhibited growth equation that models this growth?   Since there are initially 500 bacteria, we know that . This means we have the equation . Knowing that after one hour there are 800 bacteria, we also know that . Solving for give the value of . Substitution that back into the equation, and with some simplification, we find that    How many bacteria will be present in the culture after 5 hours?   Using the formula that we found in the last part, we have that    How long until thre are 20,000 bacteria? Round your answer to three decimal places.   To find the time, we set the growth equation equal to the number of bacteria and solve for .     How much money must be invested today at 12% interest compounded quarterly in order to have $20,000 in 10 years? Additionally, how long will it take for $5,000 to double if the $5,000 is invested at 7% compounded continously?   (1) For the first part of this question, since we want to determine an end amount, we should first look at the equation for this account, where the only unknown variable is the starting amount, which we'll call . Therefore, the growth equation for this investment is   Setting this equation equal to 20000 and using 10 for the years, we can solve for . I will use the version of the equation to ensure the greatest level of accuracy.   (2) To answer the second part of the question, we consider the formula for continous compounding, which is . Furthermore, since we want the investment to double to $10,000, and we start with $5,000, we set the equation equal to $10,000 with the given rate and solve for .     Environmentalists often capture an endangered species and transport the species to a controlled environment where the species can produce offspring and regenerate its population. Suppose that six American bald eagles are captured, transported to a wildlife reserve in Montana, and set free. Based on experience, the environmentalists expect the population to grow according to the model , where is measured in years.   Determine the carrying capacity of the environment.   The carrying capacity in the form this model is written is 500.   What is the growth rate of the bald eagle?   The inhibited growth rate of the bald eagle is 16.2%.   What is the population after 3 years?   The population of the bald eagle after 3 years is approximately 9.682 (rounded to three decimal places).   When will the population be 300 eagles?   Setting the equation equal to 300 and solving for results in approximately 29.73 years.   How long does it take for the population to reach one-half of the carrying capacity?   Setting the equation equal to 250 and solving for results in approximately 27.227 years.    Solve the homogeneous differential equation.    We can rewrite the differential equation by dividing everything by , which produces the new differential equation This differential equation can be written as . Dividing by converts the differential equation to the standard form of a first-order linear differential equation: Using an integrating factor of , We get that .  Using the formula derived in class, we obtain,     Find the particular solution for the first-order linear differential equation with the following initial condition.    Using an integrating factor and the formula dervied in class, along with back-substitution for solving, we get     Solve the Bernoulli differential equation.   Using the formula from the textbook (or Section 6.4 of WebAssign), we obtain the following.     "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec_differential-equations-chapter-review-test.html#exercise-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "Consider the differential equation  Sketch the slope field for the differential equation using technology.         Solve the first order linear differential equation and find the particular solution through the initial value of .   Begin by writing the equation as . Now, we can identify the integrating factor , where .  Using the formula derived in class, we have   Using the initial condition given, we find that . Therefore, out specific solution is .   Sketch your answer from (b) on top of the slope field from (a).        "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec_differential-equations-chapter-review-test.html#exercise-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " Use Euler's Method to make a table of values for the approximate solution of the following differential equation with specified intitial value. Use 10 steps and a step size of 0.10.     Click here to go to the SageMathCell Applet that solves by Euler's Method.   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec_differential-equations-chapter-review-test.html#exercise-3",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": " Solve the differential equation.    Seperation of Variables technique results in a solution of   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec_differential-equations-chapter-review-test.html#exercise-4",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": " Write the differential equation that models the following statement, then solve the differential equation.  The rate of change with respect to time, , is proporitional to .   The differential equation would be written as . The general solution to the differential equation, again using Seperation of Variables, would produce   "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec_differential-equations-chapter-review-test.html#exercise-5",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "",
  "body": " A culture of barteria obeys the law of uninhibited growth and follows a model . If 500 bacteria are present initially, and there are 800 after one hour, answer the following questions.   What is the uninhibited growth equation that models this growth?   Since there are initially 500 bacteria, we know that . This means we have the equation . Knowing that after one hour there are 800 bacteria, we also know that . Solving for give the value of . Substitution that back into the equation, and with some simplification, we find that    How many bacteria will be present in the culture after 5 hours?   Using the formula that we found in the last part, we have that    How long until thre are 20,000 bacteria? Round your answer to three decimal places.   To find the time, we set the growth equation equal to the number of bacteria and solve for .   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec_differential-equations-chapter-review-test.html#exercise-6",
  "type": "Exercise",
  "number": "2.1.6",
  "title": "",
  "body": " How much money must be invested today at 12% interest compounded quarterly in order to have $20,000 in 10 years? Additionally, how long will it take for $5,000 to double if the $5,000 is invested at 7% compounded continously?   (1) For the first part of this question, since we want to determine an end amount, we should first look at the equation for this account, where the only unknown variable is the starting amount, which we'll call . Therefore, the growth equation for this investment is   Setting this equation equal to 20000 and using 10 for the years, we can solve for . I will use the version of the equation to ensure the greatest level of accuracy.   (2) To answer the second part of the question, we consider the formula for continous compounding, which is . Furthermore, since we want the investment to double to $10,000, and we start with $5,000, we set the equation equal to $10,000 with the given rate and solve for .   "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec_differential-equations-chapter-review-test.html#exercise-7",
  "type": "Exercise",
  "number": "2.1.7",
  "title": "",
  "body": " Environmentalists often capture an endangered species and transport the species to a controlled environment where the species can produce offspring and regenerate its population. Suppose that six American bald eagles are captured, transported to a wildlife reserve in Montana, and set free. Based on experience, the environmentalists expect the population to grow according to the model , where is measured in years.   Determine the carrying capacity of the environment.   The carrying capacity in the form this model is written is 500.   What is the growth rate of the bald eagle?   The inhibited growth rate of the bald eagle is 16.2%.   What is the population after 3 years?   The population of the bald eagle after 3 years is approximately 9.682 (rounded to three decimal places).   When will the population be 300 eagles?   Setting the equation equal to 300 and solving for results in approximately 29.73 years.   How long does it take for the population to reach one-half of the carrying capacity?   Setting the equation equal to 250 and solving for results in approximately 27.227 years.  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec_differential-equations-chapter-review-test.html#exercise-8",
  "type": "Exercise",
  "number": "2.1.8",
  "title": "",
  "body": " Solve the homogeneous differential equation.    We can rewrite the differential equation by dividing everything by , which produces the new differential equation This differential equation can be written as . Dividing by converts the differential equation to the standard form of a first-order linear differential equation: Using an integrating factor of , We get that .  Using the formula derived in class, we obtain,   "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec_differential-equations-chapter-review-test.html#exercise-9",
  "type": "Exercise",
  "number": "2.1.9",
  "title": "",
  "body": " Find the particular solution for the first-order linear differential equation with the following initial condition.    Using an integrating factor and the formula dervied in class, along with back-substitution for solving, we get   "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec_differential-equations-chapter-review-test.html#exercise-10",
  "type": "Exercise",
  "number": "2.1.10",
  "title": "",
  "body": " Solve the Bernoulli differential equation.   Using the formula from the textbook (or Section 6.4 of WebAssign), we obtain the following.   "
},
{
  "id": "sec-intro-to-sequences",
  "level": "1",
  "url": "sec-intro-to-sequences.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Sequences",
  "body": " Introduction to Sequences   To begin our look at sequences and series, we start with the basics of a sequence. In this section we will develop the basic properties and notation for a sequence, look at different types of sequences, and use techniques from differential calculus to analyze if a sequence converges or diverges.     A sequence of real numbers , which we write as , is a function whose inputs are from the set of positive integers and their outputs are to the set of real numbers. The inputs are typically denoted with an or an and is called an index . The output, denoted or is called the th term of the sequence.  We can condense this definition using mathemtical notation by writing such that .    It is important to note that the index of the sequence is always , but the output is dependent upon the definition of the sequence. Let's begin by looking at a few examples.    Below are a few examples of various sequences. As you read them, see if you can determine the pattern that gives the next term in the sequence.     As you tried to determine the next term in , did you notice that some sequences looked like familar formulas and others were best described based on their previous term? For example, in the second sequence ( ), the next term is the sum of the previous two terms.  Sequences that are best describe by a close-form formula are explicitly defined and sequences defined by previous terms are implicitly defined . In fact, the sequence is a well-known sequence called the Fibonacci sequence .  We can write the Fibonacci sequence in the notation of sequences by writing . Notice here how the first two terms of the sequence is already defined. Another important recursively-defined sequence that we will utlize in this chapter is the factorial sequence .  To quickly review the concept of a factorial, consider the following scenario. You want to create a playlist of song. You have 10 songs from which to choose. How many different lists can you make if you cannot repeat songs on the playlist and the order of the playlist is important. Since you can choose from any of the 10 songs from the first choice, but only nine for the second, eight for the third, seven for the fourth, etc., you would calculate the total by multiplying these choices together. We condense this expression by writing , which we read aloud as \"10 factorial.\"  "
},
{
  "id": "def-sequence-of-reals",
  "level": "2",
  "url": "sec-intro-to-sequences.html#def-sequence-of-reals",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A sequence of real numbers , which we write as , is a function whose inputs are from the set of positive integers and their outputs are to the set of real numbers. The inputs are typically denoted with an or an and is called an index . The output, denoted or is called the th term of the sequence.  We can condense this definition using mathemtical notation by writing such that .   "
},
{
  "id": "ex-seq-1",
  "level": "2",
  "url": "sec-intro-to-sequences.html#ex-seq-1",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  Below are a few examples of various sequences. As you read them, see if you can determine the pattern that gives the next term in the sequence.    "
},
{
  "id": "sec_integral-test",
  "level": "1",
  "url": "sec_integral-test.html",
  "type": "Section",
  "number": "4.1",
  "title": "The Integral Test",
  "body": " The Integral Test  The previous sections in this chapter have shown the fundamentals of series. Now, the question that will be addressed is: does this series converge or diverge? To answer this question, mathematicians have created \"tests\" that help to determine if a series converges or diverges.   This will be said quite a few times in this section, but the results of the tests developed in this section DO NOT give the value to which a series converges. It is like a test you might take a doctor's office. For example, you might go to the doctor feeling under the weather and they test you for the flu. The test says you are positive for the flu, but the test does not tell you which specific strand of the flu you have. Testing for convergence is nearly the same idea: the test will determine if it converges, but it will not tell you the value to which it converges. For that, the idea of a power series is needed.     For each of the following series, determine if the series converges or diverges. You must use a test or a well-known series (i.e. geometric, telescoping, etc.) to prove the convergence AND divergence. If the series is a well-known series that the value of the convergence can be found, then find the value of convergence.        The series is geometric.   The series is geometric; therefore, it converges since , which is less than one. The value to which the series converges to is         The series is not geometric or telescoping and looks easily integrable.   First, we check if the Divergence Test provides any information about the series. Since the sequence is always positive and monotonically decreasing, we can apply the Integral Test. Consider the integral         The series involves a power function.   This series is a p-series with , and it converges since .        The series is a geometric series.   This series is geometric; therefore, it converges since , which is less than one. Therefore, the series converges to the value of         The series is always positive, eventually monotonically decreasing, and can be integrated using Integration by Parts.   To find convergence, we first check that conditions of the Divergence Test. Since the sequence of the summand goes to zero, the Divergence Test is inconclusive. Next, we consider the conditions of the Integral Test. The sequence is always positive, and if , then the sequence is monotonically decreasing. Therefore, we can apply the Integral Test. Since each piece of the antiderivative contains a term, the values at infinity will be zero. Therefore, the only parts that remain are when , which is . Since the integral converges, we can conclude that the series also converges by the Integral Test.        The series is always positive, eventually monotonically decreasing, and can be integrated using u-substitution.   To find convergence, we first check that conditions of the Divergence Test. Since the sequence of the summand goes to zero, the Divergence Test is inconclusive. Next, we consider the conditions of the Integral Test. The sequence is always positive and always monotonically decreasing. Therefore, we can apply the Integral Test. Since the values of the argument of the natrual logarithim are always increasing, the logarithim is, therefore, always increasing. So, this limit goes to infinity. This means that the improper integral diverges. Therefore, by the integral thest, the series also diverges.    "
},
{
  "id": "remark_test-of-convergence-does-not-give-value",
  "level": "2",
  "url": "sec_integral-test.html#remark_test-of-convergence-does-not-give-value",
  "type": "Remark",
  "number": "4.1.1",
  "title": "",
  "body": " This will be said quite a few times in this section, but the results of the tests developed in this section DO NOT give the value to which a series converges. It is like a test you might take a doctor's office. For example, you might go to the doctor feeling under the weather and they test you for the flu. The test says you are positive for the flu, but the test does not tell you which specific strand of the flu you have. Testing for convergence is nearly the same idea: the test will determine if it converges, but it will not tell you the value to which it converges. For that, the idea of a power series is needed.  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec_integral-test.html#exercise-11",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "     The series is geometric.   The series is geometric; therefore, it converges since , which is less than one. The value to which the series converges to is   "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec_integral-test.html#exercise-12",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "     The series is not geometric or telescoping and looks easily integrable.   First, we check if the Divergence Test provides any information about the series. Since the sequence is always positive and monotonically decreasing, we can apply the Integral Test. Consider the integral   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec_integral-test.html#exercise-13",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "     The series involves a power function.   This series is a p-series with , and it converges since .  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec_integral-test.html#exercise-14",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "     The series is a geometric series.   This series is geometric; therefore, it converges since , which is less than one. Therefore, the series converges to the value of   "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec_integral-test.html#exercise-15",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "     The series is always positive, eventually monotonically decreasing, and can be integrated using Integration by Parts.   To find convergence, we first check that conditions of the Divergence Test. Since the sequence of the summand goes to zero, the Divergence Test is inconclusive. Next, we consider the conditions of the Integral Test. The sequence is always positive, and if , then the sequence is monotonically decreasing. Therefore, we can apply the Integral Test. Since each piece of the antiderivative contains a term, the values at infinity will be zero. Therefore, the only parts that remain are when , which is . Since the integral converges, we can conclude that the series also converges by the Integral Test.  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec_integral-test.html#exercise-16",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "",
  "body": "     The series is always positive, eventually monotonically decreasing, and can be integrated using u-substitution.   To find convergence, we first check that conditions of the Divergence Test. Since the sequence of the summand goes to zero, the Divergence Test is inconclusive. Next, we consider the conditions of the Integral Test. The sequence is always positive and always monotonically decreasing. Therefore, we can apply the Integral Test. Since the values of the argument of the natrual logarithim are always increasing, the logarithim is, therefore, always increasing. So, this limit goes to infinity. This means that the improper integral diverges. Therefore, by the integral thest, the series also diverges.  "
},
{
  "id": "sec_comparison-test",
  "level": "1",
  "url": "sec_comparison-test.html",
  "type": "Section",
  "number": "4.2",
  "title": "The Comparison Tests",
  "body": " The Comparison Tests   Up to now, we have seen special, well-known series that we have shown to either converge or diverge based on specific conditions. This is not always the case. So, we must develop some more powerful tools in order to determine if a series converges or not.  A word of warning. In the next few sections, as we develop the different types of test for convergence, do not assume that if a test gives a specific number that the number you get is the summation of the series. That is rarely, if ever, the case for convergence tests.    Direct Comparison Test   Direct Comparison Test   Let and be infinite series where . If converges, then also converges. Contrapositively, we can say under the same conditions that if diverges, then also diverges.    It can be helpful to think of this type of comparison in one of two ways: when trying to show that a series converges, then try to find a convergent series that is just a little bit larger than the given series. This way, if the series is a little bit larger, and it is known to converge, then the smaller series must also converge.  Likewise, when trying to show that a series diverges, try to find a divergent series that is a little bit smaller than the given series. This way, if the series is smaller, but diverges to infinity, then the larger series (the given series), must also diverge.  This creates a stop-or-push relationship with the two series. For convergence, try to find a stoping point (larger series) that is known to converge. This will create an upper bound for the given series, and then the convergence can be concluded. For divergence, the goal is to find a series that is smaller and therefore pushing the given series off to infinity.   Use the Direct Comparison Test to show that converges.   To use the Direct Comparison Test to show convergence, the \"stop\" relationship must be considered. Therefore, a series that is larger than the given series, but converges must be found. Since it is true that for all , it is also true that and therefore, . The convergence of is known by the p-series test, and the relationship. So, it can be concluded that also converges by the Direct Comparison Test.     Determine if converges or diverges.   The summand of the given series can be rewritten as . This proves helpful because it is also true that . Therefore, it is true that for all . Additionally, since is known to converge by the p-series test, then the given series must converge also by the Direct Comparison Test.     Determine if converges or diverges using the Direct Comparison Test.   It is good to stop and take note that the summand looks a lot like a geometric series, especially if the denominator did not have the plus four in it. Also, it is true that , which implies that . Since the series is geometric and the common ratio is less than one and it can be concluded that the given series must also converge by the Direct Comparison Test.      Limit Comparison Test   Limit Comparison Test   Let and be series whose terms are positive. Then the following are true:   If , where is a positive real number, then both series either converge or diverge. In other words, they behave the same.    If and converges, then also converges.    If and diverges, then also diverges.        Use the limit comparison test to determine if converges or diverges.   First, it is important to note, and get in the habit of checking, that the divergence test is inconclusive here because the summand, as a sequence, goes to zero. To use the Limit Comparison Test, a sequence must be used that behaves in a similar way that the given series behaves. A closer look at the given series shows that at infinity, the terms of the summand will look a lot like . Therefore, the Harmonic Series is a great candidate to use for this series. So, consider the following limit: So, by the Limit Comparison Test, since the value of the limit is a positve real number, then the two series behave like each other. Since the series is known to diverges (Harmonic Series), then it can be concluded that the given series also diverges.       For each of the following series, determine if the series converges or diverges. You must use a test or a well-known series (i.e. geometric, telescoping, etc.) to prove the convergence AND divergence. If the series is a well-known series that the value of the convergence can be found, then find the value of convergence.        Use the direct comparison test to prove convergence. Note that for all .   Since the Divergence Test is inconclusive, and the series does not look to be easily integrable, we will consider the comparison tests. For this series, the direct comparison test is a good candidate because , which means that . Moreover, we know that converges because it is a geometric series where . Therefore, So, we can conclude by the direct comparison test that also converges.        Note that for all .   The Divergence Test is inconclusive since the summand goes to zero. We could check the convergence\/divergence of this series by the integral test, since the sequence is always positive and monotonically decreasing. However, it is easier to show that since , then . We know that converges because of the p-series test, therefore, by the direct comparison test, also converges.        Note that and use the direct comparison test to prove convergence.   Note that . This means that for all , . This also means that . It is known that converges because it is a geometric series. Therefore, by the Direct Comparison Test the given series also converges.        Use the recursive definition of the factorial to simplify the summand.   Using the recursive definition of the factorial, we can simplify the summand as follows: . Using this information, we can rewrite the series as . This series is a candidate for the : the Limit Comparison Test. Choose , then Therefore, since the limit is a positive real number, and the series diverges, then so does the given series.        What does the summand reduce to if you ignore the ?   We can begin by noticing that if we look only at the behavior of the summand at infinity, then we have a summand that looks like . This makes the series a candidate for using . Let , then Therefore, since the limit is a positive real number, and the series diverges, then so does the given series.        Note that is monotonically decreasing and . So, .  This allows you to consider either the Direct Comparison Test or Limit Comparison Test.   Note that is monotonically decreasing and . So, . Therefore, for all  . Since is the Harmonic Series, which is known to diverge, then the given series must also diverge by .        Use the limit comparison test to prove convergence.   To prove this, we can first show that converges, and then in to prove convergence of the given series.  To show that converges, we first note that for all  . We know that converges by the p-series test. Therefore, by         Use the limit comparison test to prove convergence.   Apply the limit comparison test by finding the limit of the ratio of the given series and a known convergent series.    "
},
{
  "id": "thm-direct-comparison-test",
  "level": "2",
  "url": "sec_comparison-test.html#thm-direct-comparison-test",
  "type": "Theorem",
  "number": "4.2.1",
  "title": "Direct Comparison Test.",
  "body": " Direct Comparison Test   Let and be infinite series where . If converges, then also converges. Contrapositively, we can say under the same conditions that if diverges, then also diverges.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec_comparison-test.html#example-3",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": " Use the Direct Comparison Test to show that converges.   To use the Direct Comparison Test to show convergence, the \"stop\" relationship must be considered. Therefore, a series that is larger than the given series, but converges must be found. Since it is true that for all , it is also true that and therefore, . The convergence of is known by the p-series test, and the relationship. So, it can be concluded that also converges by the Direct Comparison Test.   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec_comparison-test.html#example-4",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": " Determine if converges or diverges.   The summand of the given series can be rewritten as . This proves helpful because it is also true that . Therefore, it is true that for all . Additionally, since is known to converge by the p-series test, then the given series must converge also by the Direct Comparison Test.   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec_comparison-test.html#example-5",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": " Determine if converges or diverges using the Direct Comparison Test.   It is good to stop and take note that the summand looks a lot like a geometric series, especially if the denominator did not have the plus four in it. Also, it is true that , which implies that . Since the series is geometric and the common ratio is less than one and it can be concluded that the given series must also converge by the Direct Comparison Test.   "
},
{
  "id": "thm-limit-comparison-test",
  "level": "2",
  "url": "sec_comparison-test.html#thm-limit-comparison-test",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "Limit Comparison Test.",
  "body": " Limit Comparison Test   Let and be series whose terms are positive. Then the following are true:   If , where is a positive real number, then both series either converge or diverge. In other words, they behave the same.    If and converges, then also converges.    If and diverges, then also diverges.      "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec_comparison-test.html#example-6",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": " Use the limit comparison test to determine if converges or diverges.   First, it is important to note, and get in the habit of checking, that the divergence test is inconclusive here because the summand, as a sequence, goes to zero. To use the Limit Comparison Test, a sequence must be used that behaves in a similar way that the given series behaves. A closer look at the given series shows that at infinity, the terms of the summand will look a lot like . Therefore, the Harmonic Series is a great candidate to use for this series. So, consider the following limit: So, by the Limit Comparison Test, since the value of the limit is a positve real number, then the two series behave like each other. Since the series is known to diverges (Harmonic Series), then it can be concluded that the given series also diverges.   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "sec_comparison-test.html#exercise-17",
  "type": "Exercise",
  "number": "4.2.3.1",
  "title": "",
  "body": "     Use the direct comparison test to prove convergence. Note that for all .   Since the Divergence Test is inconclusive, and the series does not look to be easily integrable, we will consider the comparison tests. For this series, the direct comparison test is a good candidate because , which means that . Moreover, we know that converges because it is a geometric series where . Therefore, So, we can conclude by the direct comparison test that also converges.  "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "sec_comparison-test.html#exercise-18",
  "type": "Exercise",
  "number": "4.2.3.2",
  "title": "",
  "body": "     Note that for all .   The Divergence Test is inconclusive since the summand goes to zero. We could check the convergence\/divergence of this series by the integral test, since the sequence is always positive and monotonically decreasing. However, it is easier to show that since , then . We know that converges because of the p-series test, therefore, by the direct comparison test, also converges.  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec_comparison-test.html#exercise-19",
  "type": "Exercise",
  "number": "4.2.3.3",
  "title": "",
  "body": "     Note that and use the direct comparison test to prove convergence.   Note that . This means that for all , . This also means that . It is known that converges because it is a geometric series. Therefore, by the Direct Comparison Test the given series also converges.  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec_comparison-test.html#exercise-20",
  "type": "Exercise",
  "number": "4.2.3.4",
  "title": "",
  "body": "     Use the recursive definition of the factorial to simplify the summand.   Using the recursive definition of the factorial, we can simplify the summand as follows: . Using this information, we can rewrite the series as . This series is a candidate for the : the Limit Comparison Test. Choose , then Therefore, since the limit is a positive real number, and the series diverges, then so does the given series.  "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "sec_comparison-test.html#exercise-21",
  "type": "Exercise",
  "number": "4.2.3.5",
  "title": "",
  "body": "     What does the summand reduce to if you ignore the ?   We can begin by noticing that if we look only at the behavior of the summand at infinity, then we have a summand that looks like . This makes the series a candidate for using . Let , then Therefore, since the limit is a positive real number, and the series diverges, then so does the given series.  "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "sec_comparison-test.html#exercise-22",
  "type": "Exercise",
  "number": "4.2.3.6",
  "title": "",
  "body": "     Note that is monotonically decreasing and . So, .  This allows you to consider either the Direct Comparison Test or Limit Comparison Test.   Note that is monotonically decreasing and . So, . Therefore, for all  . Since is the Harmonic Series, which is known to diverge, then the given series must also diverge by .  "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "sec_comparison-test.html#exercise-23",
  "type": "Exercise",
  "number": "4.2.3.7",
  "title": "",
  "body": "     Use the limit comparison test to prove convergence.   To prove this, we can first show that converges, and then in to prove convergence of the given series.  To show that converges, we first note that for all  . We know that converges by the p-series test. Therefore, by   "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "sec_comparison-test.html#exercise-24",
  "type": "Exercise",
  "number": "4.2.3.8",
  "title": "",
  "body": "     Use the limit comparison test to prove convergence.   Apply the limit comparison test by finding the limit of the ratio of the given series and a known convergent series.  "
},
{
  "id": "sec-ratio-and-root-test",
  "level": "1",
  "url": "sec-ratio-and-root-test.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Ratio and Root Test",
  "body": " The Ratio and Root Test      For each of the following series, determine if the series converges or diverges. You must use a test or a well-known series (i.e. geometric, telescoping, etc.) to prove the convergence AND divergence. If the series is a well-known series that the value of the convergence can be found, then find the value of convergence.                                                                                                            "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "sec-ratio-and-root-test.html#exercise-25",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "sec-ratio-and-root-test.html#exercise-26",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec-ratio-and-root-test.html#exercise-27",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "sec-ratio-and-root-test.html#exercise-28",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "sec-ratio-and-root-test.html#exercise-29",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "sec-ratio-and-root-test.html#exercise-30",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "sec-ratio-and-root-test.html#exercise-31",
  "type": "Exercise",
  "number": "4.3.7",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "sec-ratio-and-root-test.html#exercise-32",
  "type": "Exercise",
  "number": "4.3.8",
  "title": "",
  "body": "            "
},
{
  "id": "section-7",
  "level": "1",
  "url": "section-7.html",
  "type": "Section",
  "number": "4.4",
  "title": "Alternating Series Test",
  "body": " Alternating Series Test    For each of the following series, determine if the series converges or diverges. You must use a test or a well-known series (i.e. geometric, telescoping, etc.) to prove the convergence AND divergence. If the series is a well-known series that the value of the convergence can be found, then find the value of convergence.                                                                                                            "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "section-7.html#exercise-33",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "section-7.html#exercise-34",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "section-7.html#exercise-35",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "section-7.html#exercise-36",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "section-7.html#exercise-37",
  "type": "Exercise",
  "number": "4.4.5",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "section-7.html#exercise-38",
  "type": "Exercise",
  "number": "4.4.6",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "section-7.html#exercise-39",
  "type": "Exercise",
  "number": "4.4.7",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "section-7.html#exercise-40",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "",
  "body": "            "
},
{
  "id": "sec-into-to-power-series",
  "level": "1",
  "url": "sec-into-to-power-series.html",
  "type": "Section",
  "number": "5.1",
  "title": "Introduction to Power Series",
  "body": " Introduction to Power Series   This section provides an introduction to the concept of a power series. A full definition of a Power Series is developed, along with the conditions under which a power series converges to a function.    Power Series Centered at Zero  Consider the following definition of a power series that is centered at zero.    Let be a sequence and be a variable, then is called a power series .     One of the most pabis power series (centered at zero) occurs when , which is the power series A closer look at this series shows that it is nearly identical to the geometric series, where the common ratio is the variable . Therefore, this series will converge when , which can also be written as or .  Furthermore, now only do we know that a geometric series converges when the conditions of the common ratio are satisfied, we also know to what the geometric series converges. In this case, we can then state that if , then    When studying power series, and later when we apply power series to other things, we want to determine for what values of x will the power series converge. We do this by connecting it back to the geometric series. Remember that the geometric series converges when . So, it would be only natural that we look at the absolute convergence of the power series and determine for what values of the power series converges absolutely.    Determine the value of for which the series converges.     "
},
{
  "id": "def-power-series-centered-at-zero",
  "level": "2",
  "url": "sec-into-to-power-series.html#def-power-series-centered-at-zero",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  Let be a sequence and be a variable, then is called a power series .   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-into-to-power-series.html#remark-2",
  "type": "Remark",
  "number": "5.1.2",
  "title": "",
  "body": " One of the most pabis power series (centered at zero) occurs when , which is the power series A closer look at this series shows that it is nearly identical to the geometric series, where the common ratio is the variable . Therefore, this series will converge when , which can also be written as or .  Furthermore, now only do we know that a geometric series converges when the conditions of the common ratio are satisfied, we also know to what the geometric series converges. In this case, we can then state that if , then   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-into-to-power-series.html#example-7",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "  Determine the value of for which the series converges.   "
},
{
  "id": "sec_taylor-and-maclaurin-series",
  "level": "1",
  "url": "sec_taylor-and-maclaurin-series.html",
  "type": "Section",
  "number": "5.2",
  "title": "Tylor and Maclaurin Series",
  "body": " Tylor and Maclaurin Series    Let be an -times differentiable function where all of the derivatives of are defined at a value . Then we can express the function as a series by     Although it looks a little complicated, the idea and process of calculating a Taylor series requires a bit of computation, but a lot of patter recognition. To start, it is easier to look at what is known as a Taylor Polynoimal, which is just a finite number of terms of the series, rather than the infinite series itself. To that end, consider the following example.    Construct a third-degree Taylor polynomial of centered at .    To construct the third-degree Taylor Polynomial for the function, it is perhaps best to consider a table of values that calculates , to easily determine the value of . These will be the coefficients of the polynomial.                                  Using this table, we can assemble the polynomial to be     "
},
{
  "id": "thm_taylors-series-theorem",
  "level": "2",
  "url": "sec_taylor-and-maclaurin-series.html#thm_taylors-series-theorem",
  "type": "Theorem",
  "number": "5.2.1",
  "title": "",
  "body": "  Let be an -times differentiable function where all of the derivatives of are defined at a value . Then we can express the function as a series by    "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec_taylor-and-maclaurin-series.html#example-8",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Construct a third-degree Taylor polynomial of centered at .    To construct the third-degree Taylor Polynomial for the function, it is perhaps best to consider a table of values that calculates , to easily determine the value of . These will be the coefficients of the polynomial.                                  Using this table, we can assemble the polynomial to be    "
},
{
  "id": "sec_polar-calculus-area-and-arc-length",
  "level": "1",
  "url": "sec_polar-calculus-area-and-arc-length.html",
  "type": "Section",
  "number": "6.1",
  "title": "Area and Arc Length of Polar Curves",
  "body": " Area and Arc Length of Polar Curves      Sketch the graph of and find the area of the region enclosed by it.   Below is the graph of the polar curve.     Notice tha the curve has symmetry about the rectangular -axis. Therefore, to calculate the area, the left or right area is sufficient and then can be multiplied by two. To find the angle for which the curve is at the lower apex and the cusp of the graph, the equations and need to be solved.  The resulting angles obtained from solving these equations are and . It is important to notice that the use of the angle in this case is avoided because of the clockwise way in which the graph of the polar curve is traveling.  Therefore, the integral that calculates the total area would be     Find the length of the polar curve from to .     Find the length of the polar curve from to .    Find the area inside the circle and outside the curve .    "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "sec_polar-calculus-area-and-arc-length.html#exercise-41",
  "type": "Exercise",
  "number": "6.1.1",
  "title": "",
  "body": " Sketch the graph of and find the area of the region enclosed by it.   Below is the graph of the polar curve.     Notice tha the curve has symmetry about the rectangular -axis. Therefore, to calculate the area, the left or right area is sufficient and then can be multiplied by two. To find the angle for which the curve is at the lower apex and the cusp of the graph, the equations and need to be solved.  The resulting angles obtained from solving these equations are and . It is important to notice that the use of the angle in this case is avoided because of the clockwise way in which the graph of the polar curve is traveling.  Therefore, the integral that calculates the total area would be   "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "sec_polar-calculus-area-and-arc-length.html#exercise-42",
  "type": "Exercise",
  "number": "6.1.2",
  "title": "",
  "body": " Find the length of the polar curve from to .   "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "sec_polar-calculus-area-and-arc-length.html#exercise-43",
  "type": "Exercise",
  "number": "6.1.3",
  "title": "",
  "body": " Find the length of the polar curve from to .  "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "sec_polar-calculus-area-and-arc-length.html#exercise-44",
  "type": "Exercise",
  "number": "6.1.4",
  "title": "",
  "body": " Find the area inside the circle and outside the curve .  "
},
{
  "id": "ws-rational-expressions",
  "level": "1",
  "url": "ws-rational-expressions.html",
  "type": "Worksheet",
  "number": "7.1",
  "title": "Functions and Transformations Worksheet",
  "body": " Functions and Transformations Worksheet    Insert objective here.    Functions are an essential part of mathematics and have a wide range of applications in the real world. In this worksheet, we will explore the concept of functions and their transformations. We will learn how to graph different types of functions and how to apply various transformations to them.    Does the following image illustrate a function?         Does the following image illustrate a function?         Does the following image illustrate a function?           Does the following image illustrate a function?         Does the following equation represent a function?    "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "ws-rational-expressions.html#objectives-1",
  "type": "Objectives",
  "number": "7.1",
  "title": "",
  "body": "  Insert objective here.   "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-45",
  "type": "Worksheet Exercise",
  "number": "7.1.1",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-46",
  "type": "Worksheet Exercise",
  "number": "7.1.2",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-47",
  "type": "Worksheet Exercise",
  "number": "7.1.3",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-48",
  "type": "Worksheet Exercise",
  "number": "7.1.4",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-49",
  "type": "Worksheet Exercise",
  "number": "7.1.5",
  "title": "",
  "body": " Does the following equation represent a function?  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
