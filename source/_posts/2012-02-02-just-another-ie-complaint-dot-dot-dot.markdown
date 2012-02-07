---
layout: post
title: "Just another IE complaint... Lorem ipsum dolor sit amet, consectetur adipisicing elit."
date: 2012-02-02 10:08
comments: true
categories: [IE, bug, html, CSS]
---

Yesterday, I found a pretty nasty CSS bug that completely shut down IE8. If you tried to view a page that had the CSS, the browser would completely freeze and would not recover. You had to ctrl+alt+del and kill it.

<!--more-->

There is a big difference between graceful degradation, and causing your browser to crash because of a CSS pseudo-selector. I don't want to sit here and complain about my issues with Internet Explorer; I'd rather just focus on a fix.

First, let's set up our Environment:
    <div class="container">
      <p>Some Text Here</p>
      <p>@powpow</p>
    </div>
 
 
Here's the CSS that enjoys sucking on your browser's bone marrow:
    .container:first-letter {
      color: blue;
      font-size: 24pt;
    }
 

Now, let's talk about what you need to do.

Add a class to the copy so you can target it specifically.
    <div class="container">
      <p class="copy">Some Text Here</p>
      <p>@powpow</p>
    </div>
 
The good CSS:
    .container .copy:first-letter {
      color: blue;
      font-size: 24pt;
    }

I know this seems simple, but little mistakes like this in your code are extremely easy to overlook. Not only that, but different patches to IE8 resolve, and then re-introduce the bug... Long story short, try to avoid using first letter for nested elements.