---
layout: post
title: "Watch and Learn Week 3"
date: 2019-01-26 14:00:00
categories: project
---

# week 3

## [Inheritance, Composition, Ruby and You by Cody Stringham](https://www.youtube.com/watch?v=_f2LYPpueAY)

Method Lookup:

Need to use $stdout.puts in the parent, otherwise you will get stack level too deep error. 

In Ruby - the last one wins.

Every object you create has an inheritance tree, in that inheritance tree is Kernel.

Inheritance:

Should be used for "is a" relationship. ex: A Duck is a Bird where Duck would inherit from a Bird.

You should use inheritance when you want to specialize an object.  

Cons: coupling, reduce readability, easy to abuse, complicates unit testing.

Composition:

"has a" relationship. ex: A Car has an Engine.  

Use it often: small classes and methods. 

---

## [Testing Controllers with RSpec](https://www.youtube.com/watch?v=mYhhKlz8Qmk)

Mock model & views, controller should be tested separately.

Stub objects with mocha.

Doing a request in the controller spec is an expensive action.

---

## [The Games Developers Play by Andy Croll](https://www.youtube.com/watch?v=IANnPHieT84)

[The Righteous Mind: Why Good People Are Divided by Politics and Religion Jonathan Haidt](https://www.amazon.com/dp/B0052FF7YM/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

We are driven by our emotions, no matter how much we think otherwise. 

[Games People Play by Eric Berne](https://www.amazon.com/dp/B005C6E76U/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1) 

Temporary psychological states: parent, adult, child.  

Take a fucking minute to yourself. 

Possibly the shittiest book ever written: [The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life (Before 8AM) by Hal Elrod](https://www.amazon.com/dp/B00AKKS278/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1) 

Pick up Meditations by Marcus Aurelius instead.  

[https://onerubything.com](https://onerubything.com/)

---

## [The Problem with Time & Timezones](https://www.youtube.com/watch?v=-5wpm-gesOY)

Countries change their timezones (even days, calendars, seconds) more than you think. So you might have to keep up with current, past and future timezone changes, good luck with that. So just use a library. Google uses a leap smear for leap second by increasing time by small micro seconds through the day.

---

## [Internationalis(z)ing Code](https://www.youtube.com/watch?v=0j74jcxSunY)

So many rules in all the languages. It's crazy. Different pluralizations based on number of objects, spelling based on what other words in a sentence. Geographical spellings that are different. Dates, clocks, numbers, beginning of a week. You can't really use a library here, so you just have to pick your audience. 

---

## [The Dark Art of Product Innovation](https://www.youtube.com/watch?v=59IeIeS8Hdk)

"...spend more time being smart, and less time pushing pixels"

Reframe, Understand, and Leverage. 

Reframe the challenge. Break things into smaller problems. Unpack your assumptions.

Understand what you have. View your work through others eyes.

Not every company needs their own design system (approach to patterns), you could use Google Material, Microsoft Fluent, or Apple's Human Interface Guidelines.

Focus & invest in people and processes. Get leadership support.

---

## [Image Search at Facebook: Making Sense of One of the Largest Image Databases in the World](https://www.youtube.com/watch?v=fe1x_tli7to)

Social photos and public photos. (over 1 billion image searches a day)

Unicorn: Infrastructure Search. Top aggregator → vertical aggregator → index server 

Algorithms used: 

CNN for large scale classification

NN & GBDT for ranking

Image clustering, tagging, quering. 

Optical Character Recognition Systems for memes.