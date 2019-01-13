---
layout: post
title: "Watch and Learn Week 2"
date: 2019-01-12 21:00:00
categories: project
---

## [On Writing Software Well #4: Not every model is backed by a database](https://www.youtube.com/watch?v=MQw9zF9IehI)

You can use model composition and mixins on a vanilla Ruby class that can provide you with easier access of methods, and aggregation of all the considerations/qualities of something. (ex: User Notifications can come from a sender and receiver, where the model user notifications holds the methods that are shared by the later). This is a good pattern for a cleaner API calls.

---

## [10 Things I Regret About Node.js - Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA)

- Not sticking with Promises, they are necessary for async/await abstractions.
- Security, could have utilized v8 out of box security more.
- Build System (GYP), it's a non-JSON, python adaptation of JSON.
- package.json, because it's required and creates boilerplate noise.
- node_modules, it's too big and complex.
- The need to include extension in require.
- index.js, unnecessarily cute

[Deno](https://github.com/denoland/deno) is pretty good

---

## [Streaming from RubyKaigi with Matz!](https://www.youtube.com/watch?v=zEf6iUIkjf4)

Nominal typing (focusing on behavior vs strict type) - compiler has to be smarter.

Matz uses Emacs 🤪 and he didn't want to do TDD.

watching Matz working on this was awesome 🥴

---

## [Surgically Refactoring Ruby with Suture by Justin Searls](https://www.youtube.com/watch?v=pBginuIW2WU)

Legacy code - code we don't understand enough to change with confidence 💜

Refactoring is hard to sell to business people because it's a higher risk and low business priority. Habitual refactoring is nice, except it requires a lot of discipline from the team.

[Refactoring patterns](https://www.amazon.com/Refactoring-Ruby-Addison-Wesley-Professional/dp/0321984137/ref=sr_1_1?s=books&ie=UTF8&qid=1547174493&sr=1-1&keywords=Refactoring+ruby):

- extract method
- pull up/push down
- split loop

 [Characterization Testing](https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052)

A/B Testing/Experiment (Scientist  gem)

So the middle ground is [Suture](https://github.com/testdouble/suture)

1. Plan the refactor
2. Cut
3. Record
4.  Validate against old code
5. Refactor
6. Verify
7. Compare (run side by side)
8. Fallback (prod)
9. Delete

🌟 [99 Bottles of OP](https://www.sandimetz.com/99bottles/)

Judge libraries by their error messages.

[Scythe](https://github.com/michaelfeathers/scythe) - see what code has not been used

---

## [Keynote: Unlearning - The Challenge of Change by Jessie Shternshus](https://www.youtube.com/watch?v=M0yO5sPxp-w)

Three levels of unlearning: individual, group, organization

Unlearning is much harder as you grow older, but it is possible. It helps to  be curious, to experiment, to look up and not be hyperfocused.

> Transformation is not a transactional activity, it's ongoing changes over time. - Dan North

How can  I help my team make changes?

Surface the resistance

Hear what they have to say

Identify the value for them to change

Find ways to break down barriers

Train them with experiential methods day by day

Escape thinking, conduct unlearning reviews, try improv, practice unlearning.

Walk shop

---

## [Humans Aren't APIs And Your Request Is 400 Denied by Jennifer Tu](https://www.youtube.com/watch?v=jnC-JvbqnlA)

When your message doesn't land the first time, that is not a failure, it's the beginning of a dialog.

If you receive feedback on your idea, and the person doesn't totally agree with it, take this as a gift because that person trusted you to share it with you. Next time they might not feel comfortable doing so if you don't appreciate it.

Don't procrastinate on an agreement.

If someone disagrees with you, take a paus to understand what that means, some questions to ask yourself:

- Is it really worth it?
- Why is this important? What will happen if we don't go through with this?
- How will other people feel if it succeeds?
- Why do they feel the way they do?
- How will I look back on this in a year?

Perhaps share some of those answers with the person.

If they are unwilling and disagree - then Stop, Drop and Listen. (start the conversation when they are ready to listen, agree on some time)

> Make the change easy, then make the easy change.

To be a better listener:

If someone is not ready to talk, don't push it.

Do they want to be persuaded? Could they be persuaded?

Show that you care.

---

## [Branch in Time by Tekin Suleyman](https://www.youtube.com/watch?v=8OOTVxKDwe0)

`git log -S "name" —patch —reverse`

Your software is more than the code. We build institutional knowledge when we work on a software and shift code to satisfy new requirements, bug fixes.  Programmers have to hold mental models, and git provides us a way to help us with it because teams constantly change.

[git.wtf](http://git.wtf) and [tekin.co.uk](http://tekin.co.uk)

- Don't commit with -m
- commit verbose mode = true
- Capture why not what
- If you want to write a comment in the code - put it in the commit
- Create minimum viable commit
- Treat commit as mutable
- Don't fear rebase
- Use pickaxe instead of blame