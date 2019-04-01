---
layout: post
title: "Watch and Learn Week 6"
date: 2019-04-1 08:00:00
categories: project
---

## [Tools to Scale Your Production Machine Learning](https://www.youtube.com/watch?v=e21fQtI5YlY)

Data & Model Provenence: abstracting individual steps. Libraries to watch: DVC, ModelDB, Pachyderm

Model Orchestration: computational resource allocation. Elastic services and server-less. Libraries to watch: MLeap, Seldon, Deepdetect

Explainability: explaining and understand the black box. Data analysis, model assessment, production monitoring. Libraries to watch:  ELI5, SHAP, XAI

---

## [Making Table Views Great Again!](https://www.youtube.com/watch?v=RQWUzQJtGA8)

Table views are the bread and butter of iOS developer. 

Propblems: 

1. Hardcoded strings
2. Repeated Information
3. Managing Data

---

## [How Linters, Compilers & Other Cool Things Work](https://www.youtube.com/watch?v=mNchKzd0I44)

Most compilers break down into three stages: parsing, transformation and code generation.

AST playgrounds are fun. Harness AST to help make API changes or library changes.

---

## [How Netflix Thinks of DevOps](https://www.youtube.com/watch?v=UTKIT6STSVM)

CDNs can be $$$ especially for video files. So Netflix built their own and they open sourced how they did that. This provided a way to people to have better access to the ISP near them. 

Completely cloud based. 

Freedom & Responsibility to production environment, so there are no schedules, policies and denied deploys. 

Praise velocity & innovation, even if that means having some downtime. 

Managers are encouraged to provide context to the developers, and don't force standards. 

---

## [MPJ - Anticipating problems](https://www.youtube.com/watch?v=mchoEOXGskU)

Humans think that they are super good at predicting the future, and what's going to go bad. In reality we are not actually that good at assessing threats, evolutionary we have had low complexity situations that are high risk. Software is high complexity, but in most cases low risk. So developers get stuck in premature optimization. 

Analyze instead of predict. Shit is going to happen, and you need to learn to deal with it, and be flexible. Quick turn around cycles, easy deployments, good logs. 

---

## [A New Web API - Background Fetch](https://www.youtube.com/watch?v=7tlKlmel72s)

Basically if you start a download in a browser and then close the tab it will still keep downloading. Even when you are switching between networks. Notification to user is mandatory, the user must know there is a file downloading so they can cancel it if they want to.

---

## [MPJ - Code Review: How can we do it better?](https://www.youtube.com/watch?v=GC_4lBFZl_Y)

Sometimes you are an asshole unintentionally, be so by habit, or by not thinking in the moment.

Don't suggest things that are outside of the scope of this PR.

Keep language positive, and inquisitive. Ask the person to teach you, give them the benefit of the doubt.

Squash your commits that are similar,  use interactive rebase. 

Review your own PR and do a refinement of your own code after a break.

Use a linter to call out commented out code and polluted code.

Use CSS variables for color, fonts, etc.

Organize styles alphabetically.