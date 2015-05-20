---
layout: project
title: Icebreakr
header: "/images/projects/icebreakr/icebreakr-header.png"
picoverlay: "/images/projects/icebreakr/icebreakr-logo.png"
permalink: /projects/icebreakr/
categories:
- projects
tags:
- android
- estimote
- twitter
- node.js
- mongodb
description: Meet new and interesting people near you. Developed at WearHacks Toronto 2015.
preview: "/images/projects/icebreakr/icebreakr-1.png"
prev_banner: "/images/projects/icebreakr/icebreakr-preview.png"
sequence: -8.5
---

<script>
$(function() {
    $(".rslides").responsiveSlides({timeout: 3500, maxwidth:200});
});
</script>

<div class="row">
    <div class="col-sm-4">
        <ul class="rslides">
            <li>
                <img src="/images/projects/icebreakr/icebreakr-1.png"/>
                <p class="caption">Login to Icebreakr with Twitter!</p>
            </li>
            <li>
                <img src="/images/projects/icebreakr/icebreakr-2.png" alt=""/>
                <p class="caption">Meet new people around you!</p>
            </li>
            <li>
                <img src="/images/projects/icebreakr/icebreakr-3.png" alt=""/>
                <p class="caption">Tell the world about yourself!</p>
            </li>
            <li>
                <img src="/images/projects/icebreakr/icebreakr-4.png" alt=""/>
                <p class="caption">Send a message to the crowd!</p>
            </li>
        </ul>
    </div>

    <div class="col-sm-8">
        <p><strong>Icebreakr</strong> is an Android app that lets you meet new and interesting people around you!</p>

        <p>Powered by the <a href="http://estimote.com/">Estimote beacon</a>, Icebreakr lets you see other users nearby who'd like to meet up. Icebreakr lets you set a message and interests for other people to see, giving you the power to reach out to like-minded people. Using the Estimote, Icebreakr can let you know how far you are from everyone.</p>

        <p>Icebreakr is ideal for use in conventions, meetups and other crowded events where meeting people could be a hassle. With Icebreakr, awkward introductions are finally a thing of the past! Interested? Simply login with your Twitter account on the Icebreakr app to get started.</p>

        <p>Icebreakr was developed at WearHacks Toronto on the weekend of 8—10 May 2015. Icebreakr uses Android, the Estimote SDK and the Twitter SDK (via Fabric) for its frontend and Node.js and MongoDB for its backend. I was primarily responsible for the frontend.</p>

        <p>The Estimote itself broadcasts nothing but a unique ID, so we had a server that actually stored users' information. Our app communicated with the server using <a href="https://github.com/mcxiaoke/android-volley">Volley</a>. To build the UI itself, I used libraries such as jpardogo's <a href="https://github.com/jpardogo/PagerSlidingTabStrip">Pager Sliding Tab Strip</a> and afollestad's <a href="https://github.com/afollestad/material-dialogs">Material Dialogs</a>.</p>
    </div>

</div>