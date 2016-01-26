---
layout: project
title: Hapi
picoverlay: "/images/projects/hapi/hapi-logo.png"
color: "#006064"
permalink: /projects/hapi/
github: https://github.com/lloydtorres/hapi-android
categories:
- projects
tags:
- android
- machine learning
- material design
description: Hapi is a journal of your well-being, powered by facial emotion recognition. Built at Waterloo Hacks 2016.
preview: "/images/projects/hapi/hapi-banner.png"
prev_banner: "/images/projects/hapi/hapi-banner.png"
sequence: -9
---

<div class="row">
    <div class="col-sm-4">
        <ul class="rslides">
            <li>
                <img src="/images/projects/hapi/hapi-main.png"/>
                <p class="caption">Take selfies to record your state.</p>
            </li>
            <li>
                <img src="/images/projects/hapi/hapi-journal.png" alt=""/>
                <p class="caption">Write about you in your journal.</p>
            </li>
            <li>
                <img src="/images/projects/hapi/hapi-score.png" alt=""/>
                <p class="caption">Get data on how you feel right now.</p>
            </li>
            <li>
                <img src="/images/projects/hapi/hapi-trends.png" alt=""/>
                <p class="caption">See your overall happiness trend.</p>
            </li>
        </ul>
    </div>

    <div class="col-sm-8">
        <p class="featuretext-md">Hapi is an app that focuses on your well-being.</p>

        <p>Hapi uses <a href="https://indico.io/">Indico's</a> powerful facial emotion recognition platform to determine your current emotional state. Simply take a selfie and Hapi will give you data on how well you're doing.</p>

        <p>After taking a selfie, Hapi will ask you a series of questions to know more about how your day went. Hapi then tracks your overall happiness trend and provides suggestions on what lifts you up and what brings you down. With Hapi, you can strive towards living a better life by doing more positive things and avoiding negativity.</p>

        <p>Hapi was built over 12 hours at <a href="https://waterloohacks.io/">Waterloo Hacks 2016</a>, sponsored by Communitech and Google Developers. Besides the Indico API, Hapi is powered by <a href="https://github.com/PhilJay/MPAndroidChart">MPAndroidChart</a> to present happiness trends in a meaningful way, and by <a href="https://realm.io/">Realm</a> to store all of our data. Hapi also uses the various Android support libraries in order to create a beautiful Material Design UI.</p>

        <p>One of our team members was <a href="https://vimeo.com/152918714">briefly interviewed by CTV News</a> during the hackathon.</p>
    </div>
</div>

<script>
$(function() {
    $(".rslides").responsiveSlides({timeout: 3500, maxwidth:200});
});
</script>
