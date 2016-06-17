---
layout: project
title: Turbo Avenger
header: "/images/projects/turboavenger/turboavenger-header.jpg"
link: https://turboavenger.herokuapp.com
permalink: /projects/turboavenger/
github: https://github.com/lloydtorres/turbo-avenger
categories:
- projects
tags:
- jquery
- bootstrap
- angularjs
- node.js
- mongodb
description: Gamified to-do lists. Web app developed at the 2015 Kik Hackathon.
preview: "/images/projects/turboavenger/turboavenger1.png"
prev_banner: "/images/projects/turboavenger/turboavenger-preview.png"
sequence: -11
---

<script>
$(function() {
    $(".rslides").responsiveSlides({timeout: 5000, maxwidth:500});
});
</script>

<ul class="rslides">
    <li>
        <img src="/images/projects/turboavenger/turboavenger1.png"/>
        <p class="caption">Login to Turbo Avenger with your Google account!</p>
    </li>
    <li>
        <img src="/images/projects/turboavenger/turboavenger2.png"/>
        <p class="caption">Get ahead on your quests with Turbo Avenger!</p>
    </li>
    <li>
        <img src="/images/projects/turboavenger/turboavenger3.png"/>
        <p class="caption">Create new quests and tasks for you and your friends!</p>
    </li>
</ul>

<p><strong>Turbo Avenger</strong> is a web app (try it out <a href="https://turboavenger.herokuapp.com">here</a>!) built for the 2015 Kik Hackathon (sponsored by Kik!), held from 30 January—1 February at the University of Waterloo. It made it to the top 10 (out of 30+ submissions) after pitching it to a panel of judges. It was a group effort by Navjot Panesar, Andy Liang and myself. I worked on the project's frontend while Navjot and Andy worked on the backend. The full stack consists of AngularJS for the front end and Node.js and MongoDB for the backend. Google OAuth was used to authenticate and register users.</p>

<p>The app was inspired by the one problem every student has faced: procrastination. As humans, we are naturally tempted to [finish later]</p>

<p>To solve this, Turbo Avenger lets users to sign up for quests (i.e. lists of to-dos) with their friends. Each quest is split up into tasks. Users gain points when they finish their tasks ahead of time. Users can then compete with each other to see who can conquer challenges the fastest. In fact, users can see how everyone is doing on a global leaderboard. Thus, Turbo Avenger fights the great temptation of procrastination with another human trait: competition.</p>

<p>I built the frontend of the site from scratch with the help of Bootstrap. Once the site's static templates and formatting were done, I had a crash course on AngularJS, which we used to interact with the backend database. I also used bits of pieces of jQuery to make the site more responsive to user actions. AngularJS and jQuery allowed me to bring life to a static website, and it was a fun (and occasionally frustrating) learning experience to use them both on the fly.</p>