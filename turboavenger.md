---
layout: project
title: Turbo Avenger
header: "/images/projects/turboavenger/turboavenger-header.jpg"
link: https://turboavenger.herokuapp.com
permalink: /projects/turboavenger/
categories:
- projects
tags:
- jquery
- bootstrap
- angularjs
- node.js
- mongodb
description: Gamified to-do lists. Web app developed at the 2015 Kik Hackathon.
preview: "/images/projects/turboavenger/turboavenger-preview.png"
prev_banner: "/images/projects/turboavenger/turboavenger-preview.png"
sequence: -10
---

<script>
$(function() {
    $(".rslides").responsiveSlides({timeout: 3500, maxwidth:500});
});
</script>

<ul class="rslides">
    <li>
        <img src="/images/projects/turboavenger/turboavenger1.png"/>
        <p class="caption">Turbo Avenger's login page.</p>
    </li>
    <li>
        <img src="/images/projects/turboavenger/turboavenger2.png"/>
        <p class="caption">Getting ahead on Turbo Avenger!</p>
    </li>
</ul>

<p><strong>Turbo Avenger</strong> is a web app! Try it out <a href="https://turboavenger.herokuapp.com">here</a>!</p>

<p><strong>Turbo Avenger</strong> is a web app built for the 2015 Kik Hackathon (sponsored by Kik!), held from 30 January—1 February at the University of Waterloo. It was a group effort by Navjot Panesar, Andy Liang and myself. I worked on the project's frontend while Navjot and Andy worked on the backend. The full stack consists of AngularJS for the front end and Node.js and MongoDB for the backend. Google OAuth was used to authenticate and register users.</p>

<p>The app was inspired by the one problem every student has faced: procrastination. As humans, we are naturally tempted to [finish later]</p>

<p>To solve this, Turbo Avenger lets users to sign up for quests (i.e. tasks) with their friends. Each quest is split up into challenges. Users gain points when they finish their challenges ahead of time. Users can then compete with each other to see who can conquer challenges the fastest. In fact, users can see how everyone is doing on a global leaderboard. Thus, Turbo Avenger fights the great temptation of procrastination with another human trait: competition.</p>

<p>I built the frontend of the site from scratch with the help of Bootstrap. Once the site's static templates and formatting were done, I had a crash course on AngularJS, which we used to interact with the backend database. I also used bits of pieces of jQuery to make the site more responsive to user actions. AngularJS and jQuery allowed me to bring life to a static website, and it was a fun (and occasionally frustrating) learning experience to use them both on the fly.</p>