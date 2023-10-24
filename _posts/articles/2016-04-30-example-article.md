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

Therefore it is simple to conclude, that an unhackable system can only be treated as unhackable, provided it's **environment is unhackable**. 

### Understanding Unhackable Environments

This is where our topic becomes far more complicated. In the realm of modern computing, the concept of an environment has become incredibly complex. Even just in the simple CPU there exist countless vulnerabilities. In the RAM, there exist countless more; and in the calls between the CPU and RAM, there exist a multitude. This increasing pattern of overlapping complexity, is a tough issue to be tackled when discussing an unhackable system. 

To begin even approaching this idea, it is necessary that we take a step back; and observe the millenia of evolution which surround us. Biology, provides to us, an incredibly solid framework to create unhackable systems. To be a good hacker, is to understand things *iteratively*. This is similar to the biological workings of our planet. As species and organisms evolve, they continue to grow "better", in an iterative (generational) manner. This provides for a (long) but detailed change in organisms as their existence grows. 

For many, security tends to fall into the opposite. The trend of our security is not "increasing" in (secureness), rather it is an increase of overcomplicated progams, and electronics; which in combination cause even more vulnerabilities. 

Therefore, to create an unhackable system, we must consider various concepts. 

The first of which, I will denote as "gene diversity". 

#### Genetic Diversity Algorithms

One of the most important things involved in keeping a species alive, is ensuring it's **genetic diversity**. When a disease populates a species, species which have far different genes tend to survive more, as there is more variety in the species, allowing some to escape the disease. 

In the same way, it is crucial to understand, that while the "standard" for computing involves having countless machines with similar softwares, hardwares, and security; it could be interesting to develop a system with a more "diverse" set of features. 

For any one who works on the offensive-side of security, it is undeniable that taking over a singular device is generally equivalent to taking over multiple devices at a company; because they share so many similarities, it is trivial to take over multiple devices (given one already penetrated). Why is this? Should each device not be of equivalent difficulty?

This is a fairly naive statement to make, but also is incredibly interesting to pursue. Could we have various computers with different types of hardware/security interconnected in a "network"? This would indefinitely create more work for offensive developers, leading to a more difficult hacking experience. But this would not mitigate every issue, it is already difficult enough to create **one** unbreakable device, creating many is almost impossible. 

Because of this, it is necessary to take our "hypothesis", and develop it into a more reasonable scenario. 

How one would go about doing this is incredibly varying, but let's take a simple example for explanatory senses. 

 ---------------------------------------
| Computer 1               |
| OS : DEBIAN              |
| Firewall : Active        |
| VPN : Active(PROTOCOL A) |
 ---------------------------------------

 ---------------------------------------
| Computer 2               |
| OS : DEBIAN              |
| Firewall : Active        |
| VPN : Active(PROTOCOL E) |
 ---------------------------------------

Given these two arbitrary systems, which share most similarities; they lack genetic diversity, but we have one specific variant amongst the two. This is the VPN protocol. Without going too far into the technical details, we can understand that to obtain "access" to some information on this device, there is a necessity to perform some action on both (different) protocols. 

This requires a longer time to crack, but also is not always implementable in a system. 

The implementation cost vs. reward is something which is always necessary to consider. Is it logical to create variety amongst a distributed system in order to create genetic diversity? 

In the basic sense, the answer could be no; but once we begin upgrading the philosophical ideas of this security, it will all begin to formulate into an answer which potentially could be yes. 

For now, the important consideration of this section, is to provide insight that a system should have **diversity**, in order to make it that one "large-scale" attack, isn't able to hack each and every device in a system. 

#### Iterative Responsiveness

This concept becomes slightly more mathematical in pursuit, in comparison to programmatic; but is still a necessary idea to be discussed in our system. While the goal is an unbreakable system, the (subjectively) secondary goal to this program is to create something which **IF HACKED**, is able to repair itself, and in-turn become unbreakable again. 

In a world where AI technologies are creating changes unparalleled, one can draw inspiration from the techniques used in AI; and also implement them in securities. While AI is a term thrown around fairly lightly, I will continue using it for simplicities sake, but when discussing AI it is important to understand I am primarily focusing on "Machine Learning", which involves the process of providing large amounts of data to a model which it syntheiszes, and extrapolates to provide conclusions. This is **MACHINE LEARNING**.

One of the beauties of machine learning, is that it lacks any complex systems involved in its "iterative/generational" approach to growth. Simply just "drawing a line of best fit", amongst two points in a coordinate system, could be generalized explanation to its mathematics. 

Scaled up, this creates a web of information which can be used effectively to obtain various conclusions. 

Security is no different. If we were to be "hacked", by some given exploit, the information obtained from that is invaluable; and in turn we would be able to use the information to create a fix to the problem. Sadly in the modern industry, this often involves "patchwork" solutions, where the vulnerability is temporarily fixed, and the core root of the issue is undeniably existent, but not solved. This is primarily because of poorly documented (old) code, as well as an incredibly complexity of systems which would need to be rewritten in order to restore security in the system. 

Because of that, it is necessary that we establish a "reverse-evolutionary" system in our unbreakable system. One that doesn't simply just "fix", the problem of the species at the onset of its creation; rather "recreates" the system based on its given vulnerability. 

What this would entail, is creating an incredibly detailed track record of each and every piece of software included from the origin of our system. This can be implemented in various ways, but one of the most important ways is in the **LIBRARY** concept used often in programming. In order to keep code simple, we oftentimes program "functions" which we store in alternative files (libraries), and then call upon them in a main file. We can continue this practice, but begin implementing a "linking" procedure, in where each iteration of a function call is linked to another function call (we will discuss this later in this article) and in turn allows for a far more "connected" string of information. 

This string of information can then be reused in "rebuilding" our system once it has been hacked, and instead of fixing up one definition of a function (which can be based upon multiple vulnerabilities), we can re-work on the system as a whole. 

If this currently just seems like speculation, completely understandable. The ideas in this paper are not complex, but rather require conceptual understanding once we put it into implementation; the theory is necessary to appreciate the intricacy of an unhackable system, which is why it is being focused on so heavily.

