---
layout: post
title: "A Case for PropTypes"
date: 2018-11-25 22:00:00
categories: react
comments: yes
---

Here is a definition of data type, commonly referred as type:

> A data type is a classification of the type of data that a variable or object can hold in computer programming.

Most programming languages I encountered in school were strictly typed. Meaning that if you defined that variable as type string, it will be a string and nothing else. Unlike Javascript where you don't have to decide if a variable should be a boolean or a string, you can just change it at any time, or the interpreter will do so for you (see [wat](https://www.destroyallsoftware.com/talks/wat))

If you think about it, when you create a variable and call it isRed you sort of made a binding contract with yourself that it will return a boolean. So if you created that variable in a strictly types language you would say boolean isRed at it's definition, and if isRed is not a boolean then your program will warn you, yell at you, or simply give up.

Let's be clear, we make mistakes, so types help us make less of them. Now, you say - get to the point, the title said PropTypes!!!

This is the point - I am not terribly happy with Flow, in my opinion just go with TypeScript if you are going to go through the trouble. BUT - if you are working on a bigger project, or in teams, the minimal amount of effort you can put in avoiding type kind of mistakes/errors is to use PropTypes.

Because if I want to use the component Sidebar, we can look at the prop types which are `logo: string.isRequired; links: object; footer: instaceOf(Footer)`

At least to me this is enough for me to use the component without reading how it really works. It's kind of like a small wiki for that component.

We use Ruby on the backend and in our model files we have comments of what the database table looks like. I think it is a working contract we have on our team to keep those comments up to date, and I think that is what prop types are as well. Sometimes they will just make a lot of unnecessary noise, but if they save you from one big bug - to me that is worth it.
