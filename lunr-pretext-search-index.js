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
  "id": "sec-differential-equations-test-review",
  "level": "1",
  "url": "sec-differential-equations-test-review.html",
  "type": "Section",
  "number": "1.2",
  "title": "Calculus II Differential Equations Exam Review",
  "body": " Calculus II Differential Equations Exam Review   This is a review for the differential equations section of a one-semester Calculus II course.    Consider the differential equation  Sketch the slope field for the differential equation using technology.         Solve the first order linear differential equation and find the particular solution through the initial value of .   Begin by writing the equation as . Now, we can identify the integrating factor , where .  Using the formula derived in class, we have   Using the initial condition given, we find that . Therefore, out specific solution is .   Sketch your answer from (b) on top of the slope field from (a).          Use Euler's Method to make a table of values for the approximate solution of the following differential equation with specified intitial value. Use 10 steps and a step size of 0.10.     Click here to go to the SageMathCell Applet that solves by Euler's Method.     Solve the differential equation.    Seperation of Variables technique results in a solution of     Write the differential equation that models the following statement, then solve the differential equation.  The rate of change with respect to time, , is proporitional to .   The differential equation would be written as . The general solution to the differential equation, again using Seperation of Variables, would produce     A culture of barteria obeys the law of uninhibited growth and follows a model . If 500 bacteria are present initially, and there are 800 after one hour, answer the following questions.   What is the uninhibited growth equation that models this growth?   Since there are initially 500 bacteria, we know that . This means we have the equation . Knowing that after one hour there are 800 bacteria, we also know that . Solving for give the value of . Substitution that back into the equation, and with some simplification, we find that    How many bacteria will be present in the culture after 5 hours?   Using the formula that we found in the last part, we have that    How long until thre are 20,000 bacteria? Round your answer to three decimal places.   To find the time, we set the growth equation equal to the number of bacteria and solve for .     How much money must be invested today at 12% interest compounded quarterly in order to have $20,000 in 10 years? Additionally, how long will it take for $5,000 to double if the $5,000 is invested at 7% compounded continously?   (1) For the first part of this question, since we want to determine an end amount, we should first look at the equation for this account, where the only unknown variable is the starting amount, which we'll call . Therefore, the growth equation for this investment is   Setting this equation equal to 20000 and using 10 for the years, we can solve for . I will use the version of the equation to ensure the greatest level of accuracy.   (2) To answer the second part of the question, we consider the formula for continous compounding, which is . Furthermore, since we want the investment to double to $10,000, and we start with $5,000, we set the equation equal to $10,000 with the given rate and solve for .     Environmentalists often capture an endangered species and transport the species to a controlled environment where the species can produce offspring and regenerate its population. Suppose that six American bald eagles are captured, transported to a wildlife reserve in Montana, and set free. Based on experience, the environmentalists expect the population to grow according to the model , where is measured in years.   Determine the carrying capacity of the environment.   The carrying capacity in the form this model is written is 500.   What is the growth rate of the bald eagle?   The inhibited growth rate of the bald eagle is 16.2%.   What is the population after 3 years?   The population of the bald eagle after 3 years is approximately 9.682 (rounded to three decimal places).   When will the population be 300 eagles?   Setting the equation equal to 300 and solving for results in approximately 29.73 years.   How long does it take for the population to reach one-half of the carrying capacity?   Setting the equation equal to 250 and solving for results in approximately 27.227 years.    Solve the homogeneous differential equation.    We can rewrite the differential equation by dividing everything by , which produces the new differential equation This differential equation can be written as . Dividing by converts the differential equation to the standard form of a first-order linear differential equation: Using an integrating factor of , We get that .  Using the formula derived in class, we obtain,     Find the particular solution for the first-order linear differential equation with the following initial condition.    Using an integrating factor and the formula dervied in class, along with back-substitution for solving, we get     Solve the Bernoulli differential equation.   Using the formula from the textbook (or Section 6.4 of WebAssign), we obtain the following.     "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec-differential-equations-test-review.html#exercise-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "Consider the differential equation  Sketch the slope field for the differential equation using technology.         Solve the first order linear differential equation and find the particular solution through the initial value of .   Begin by writing the equation as . Now, we can identify the integrating factor , where .  Using the formula derived in class, we have   Using the initial condition given, we find that . Therefore, out specific solution is .   Sketch your answer from (b) on top of the slope field from (a).        "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec-differential-equations-test-review.html#exercise-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": " Use Euler's Method to make a table of values for the approximate solution of the following differential equation with specified intitial value. Use 10 steps and a step size of 0.10.     Click here to go to the SageMathCell Applet that solves by Euler's Method.   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-differential-equations-test-review.html#exercise-3",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": " Solve the differential equation.    Seperation of Variables technique results in a solution of   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-differential-equations-test-review.html#exercise-4",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": " Write the differential equation that models the following statement, then solve the differential equation.  The rate of change with respect to time, , is proporitional to .   The differential equation would be written as . The general solution to the differential equation, again using Seperation of Variables, would produce   "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-differential-equations-test-review.html#exercise-5",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": " A culture of barteria obeys the law of uninhibited growth and follows a model . If 500 bacteria are present initially, and there are 800 after one hour, answer the following questions.   What is the uninhibited growth equation that models this growth?   Since there are initially 500 bacteria, we know that . This means we have the equation . Knowing that after one hour there are 800 bacteria, we also know that . Solving for give the value of . Substitution that back into the equation, and with some simplification, we find that    How many bacteria will be present in the culture after 5 hours?   Using the formula that we found in the last part, we have that    How long until thre are 20,000 bacteria? Round your answer to three decimal places.   To find the time, we set the growth equation equal to the number of bacteria and solve for .   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-differential-equations-test-review.html#exercise-6",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "",
  "body": " How much money must be invested today at 12% interest compounded quarterly in order to have $20,000 in 10 years? Additionally, how long will it take for $5,000 to double if the $5,000 is invested at 7% compounded continously?   (1) For the first part of this question, since we want to determine an end amount, we should first look at the equation for this account, where the only unknown variable is the starting amount, which we'll call . Therefore, the growth equation for this investment is   Setting this equation equal to 20000 and using 10 for the years, we can solve for . I will use the version of the equation to ensure the greatest level of accuracy.   (2) To answer the second part of the question, we consider the formula for continous compounding, which is . Furthermore, since we want the investment to double to $10,000, and we start with $5,000, we set the equation equal to $10,000 with the given rate and solve for .   "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-differential-equations-test-review.html#exercise-7",
  "type": "Exercise",
  "number": "1.2.7",
  "title": "",
  "body": " Environmentalists often capture an endangered species and transport the species to a controlled environment where the species can produce offspring and regenerate its population. Suppose that six American bald eagles are captured, transported to a wildlife reserve in Montana, and set free. Based on experience, the environmentalists expect the population to grow according to the model , where is measured in years.   Determine the carrying capacity of the environment.   The carrying capacity in the form this model is written is 500.   What is the growth rate of the bald eagle?   The inhibited growth rate of the bald eagle is 16.2%.   What is the population after 3 years?   The population of the bald eagle after 3 years is approximately 9.682 (rounded to three decimal places).   When will the population be 300 eagles?   Setting the equation equal to 300 and solving for results in approximately 29.73 years.   How long does it take for the population to reach one-half of the carrying capacity?   Setting the equation equal to 250 and solving for results in approximately 27.227 years.  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-differential-equations-test-review.html#exercise-8",
  "type": "Exercise",
  "number": "1.2.8",
  "title": "",
  "body": " Solve the homogeneous differential equation.    We can rewrite the differential equation by dividing everything by , which produces the new differential equation This differential equation can be written as . Dividing by converts the differential equation to the standard form of a first-order linear differential equation: Using an integrating factor of , We get that .  Using the formula derived in class, we obtain,   "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-differential-equations-test-review.html#exercise-9",
  "type": "Exercise",
  "number": "1.2.9",
  "title": "",
  "body": " Find the particular solution for the first-order linear differential equation with the following initial condition.    Using an integrating factor and the formula dervied in class, along with back-substitution for solving, we get   "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-differential-equations-test-review.html#exercise-10",
  "type": "Exercise",
  "number": "1.2.10",
  "title": "",
  "body": " Solve the Bernoulli differential equation.   Using the formula from the textbook (or Section 6.4 of WebAssign), we obtain the following.   "
},
{
  "id": "ws-rational-expressions",
  "level": "1",
  "url": "ws-rational-expressions.html",
  "type": "Section",
  "number": "2.1",
  "title": "Functions and Transformations Worksheet",
  "body": " Functions and Transformations Worksheet    Insert objective here.    Functions are an essential part of mathematics and have a wide range of applications in the real world. In this worksheet, we will explore the concept of functions and their transformations. We will learn how to graph different types of functions and how to apply various transformations to them.    Does the following image illustrate a function?        testing, hello world.    Does the following image illustrate a function?         Does the following image illustrate a function?         Does the following image illustrate a function?         Does the following equation represent a function?    "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "ws-rational-expressions.html#objectives-1",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "  Insert objective here.   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-11",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Does the following image illustrate a function?        testing, hello world.  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-12",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-13",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-14",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-15",
  "type": "Exercise",
  "number": "2.1.5",
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
