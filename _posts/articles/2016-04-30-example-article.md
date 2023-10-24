---
layout: post
title: Discussing Security 
date: 2023-10-23 18:00:00
categories: articles
comments: false
en: true
description: Discussing the Philosophy Behind Security
pt: /articles/example-article-pt-br/
description_pt: Um artigo de exemplo para esse tema
keywords: "security, talks, ideas, resources"
authors:
    - slano-ls 
---

### Introductory Thoughts

When talking about security, a multitude of ideas are raised. And not just simple ideas, complex, vast ideas which harbour much bias and personal experience. If you ever decide to hop onto any security-based forum, before you find content, you will find hate-filled comments. Comments which respond to the "newbie" skills of various security professionals, and comments which discuss the "god-like" skills of other. 

While all these various ideas, are a part of the hacking culture which we all partake in; it becomes very difficult to truly analyze ourselves, security, and code from an objective standpoint. Because of this, as a community, we must begin creating far more sustainable ideals, criteria, and goals; the goal to create the unbreakable system. 

### Unbreakable Systems
When considering the "Unbreakable System" idea, I am often pointed to the "*Omnipotence Paradox*", where one raises the question:

>  Can an Omnipotent being create a stone so heavy, that it cannot lift it? 

This inherently produces a dillema, as the being  can either create a stone it cannot lift, or cannot lift a stone that it created. Both of these, cause for the being to lose their "**Omnipotence**" pass. 

While this philosophical idea may not seem directly correlated to the inner-workings of security, it poses an important question: 

> "Can one create an unbreakable system?"

If we are truly able to create an unbreakable system, then we have ultimately acheived the end-all goal of security. But to create an unbreakable system in and of itself creates a paradox. If we are talented enough to create an unbreakable system, we also in turn must be skilled enough to create [said] unbreakable system, and in turn must be able to break that system. 

Because of this idea, it becomes incredibly necessary to self-reflect when working on security projects. To create an unbreakable software, means to create something greater than hacking; an undertaking which is not simple by any means. 

Therefore, let us delve into this ideology of creating an unbreakable system

### Building Unbreakable Systems

If you have any experience in building unbreakable systems, you will realize that the core essence creating unbreakable systems is away from true progamming, and often falls into more of a mathematical pursuit. While this is incredibly true, there is still some precedence of understanding an unbreakable system in a programmatic sense. For this, let us start with something simple 

========== C Unbreakable System ===========

printf("hello world");

=====================================

Well this is underwhelming, the true unbreakable system is something which prints output onto the screen?

As ideal as this would be, this fact that a simple line of code like this is "hackable", provides key insight into creating unbreakable systems. While "*printf*", is one of the basic C library functions, there is still much room for exploitation of this simple idea. 

One of the most primitive ways of breaking the security of printf, lies in the **memory management** of this function. As we all know, had printf been taking in a user input using then scanf function, it would be incredibly easy to exploit this using various techniques (i.e buffer overflow etc), but since there is no user **input**, it becomes increasingly difficult to formulate a desired **output**. 

Put simply, the act of printf itself, may be an "unhackable system" (it is not, but let's consider it for this example), the thing which makes printf able to be hacked, is not the function itself; rather the **environment** of the function. 



