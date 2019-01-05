---
layout: post
title: "Watch and Learn Week 1"
date: 2018-01-05 18:00:30
categories: project
comments: yes
---

In 2019 my goal is to watch at least one tech video a day in hopes to get inspired to work on projects, learn new things, and give talks. I will post my summary of the videos on Saturday.

---

## [Retrospectives for Humans by Courtney Eckhardt](https://www.youtube.com/watch?v=s7R7V5wC0wA)

In case of the bridge in Seattle there was a social problem because there is a reason people were working on short schedule. When someone screws up it's probably more complicated then the explanation on the surface is. There is no one root cause.

> To understand what another person is saying, you must assume that it is true and try to imagine what it could be true of. - George Miller

Don't start a question with "you" or "why". Do not say "you should", "you never", "you always"

Try imagining a better world collectively.

Human error should be the start of the investigation.

"Try harder" is not a solution.

Have an agenda for a good meeting and stay with it.

Pay attention, take notes.

Don't make jokes that might make someone at least the slitest bit uncomfortable.

If you mess up, apologize, correct yourself and move on.

You don't have to be witty, clever. Be kind.

> organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations. - Conway's Law

🌟

- **[The Gentle Art of Verbal Self-Defense Hardcover** by Suzette H Elgin](https://www.amazon.com/Gentle-Art-Verbal-Self-Defense/dp/0880290307)

---

## [Cache is King: Get the Most Bang for Your Buck From Ruby by Molly Struve](https://www.youtube.com/watch?v=vEi-vYcyTT8)

Quantity of datastore hits might be the actual problem with timeouts.

Active Model Serializers extend from Active Record. Optimize serializations by bulking them.

One MySQL call to get 1,000 ids will be faster than 1,000 calls for 1 id.

Local cache will always be faster than Redis (the external requests add up).

ActiveRecord::Base.connection storing db.

Know your gems.

`User.where(:id ⇒ {})` will make one query ⇒ [] do `return unless` `user_ids.any?`

`none scope will help process empty dataset`

Log your stuff, read what you can optimize.

Remove datastore hits, framework cache, hash cache, database guards, process in bulk.

---

## [VS Code Top-Ten Pro Tips](https://www.youtube.com/watch?v=u21W_tfPVrY)

Use bookmark plugin

Use snippets

Use integrated terminal

Use @ in the pallet for types, interfaces, methods

Paste JSON as code

Use Zen mode & Spotify extension

Take the time to setup the debugger

---

## [Writing Ruby Like it's 2018 by David A. Black](https://www.youtube.com/watch?v=29APWWTI3Bc)

Go learn a new language and bring it back home (ex. go learn Haskell and bring those functional concepts to Ruby). This has already been happening in newer versions and gems.

[sorbet.run](http://sorbet.run) is pretty awesome, so is Ruby Guilds

🌟

- The Well-Grounded Rubyist, Second Edition

---

## [MapReduce - Computerphile](https://www.youtube.com/watch?v=cvhKoniK5Uo)

Each node does its own computation 🤯  Not great for a lot of data.