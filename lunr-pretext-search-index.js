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
  "id": "ws-rational-expressions",
  "level": "1",
  "url": "ws-rational-expressions.html",
  "type": "Section",
  "number": "2.1",
  "title": "Functions and Transformations Worksheet",
  "body": " Functions and Transformations Worksheet    Insert objective here.    Functions are an essential part of mathematics and have a wide range of applications in the real world. In this worksheet, we will explore the concept of functions and their transformations. We will learn how to graph different types of functions and how to apply various transformations to them.    Does the following image illustrate a function?         Does the following image illustrate a function?         Does the following image illustrate a function?         Does the following image illustrate a function?         Does the following equation represent a function?    "
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
  "id": "exercise-1",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-3",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-4",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": " Does the following image illustrate a function?       "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "ws-rational-expressions.html#exercise-5",
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
