---
layout: project
title: Stately
picoverlay: "/images/projects/stately/stately-logo.png"
color: "#2E7D32"
google_play: https://play.google.com/store/apps/details?id=com.lloydtorres.stately
permalink: /projects/stately/
categories:
- projects
tags:
- android
- nationstates
- material design
description: An unofficial NationStates app for Android.
preview: "/images/projects/stately/stately-cover.png"
prev_banner: "/images/projects/stately/stately-cover.png"
sequence: -14
---

<div class="row">
    <div class="col-sm-8">
        <p class="featuretext-lg"><strong class="green-emph">Stately</strong> is an unofficial NationStates app for Android.</p>

        <p class="featuretext-md">Quickly get stats about your nation, respond to daily issues, browse regional factbooks, post on your own region's RMB, and vote on World Assembly proceedings.</p>
    </div>

    <div class="col-sm-4">
        <ul class="rslides">
            <li>
                <img src="/images/projects/stately/stately-1.png"/>
            </li>
            <li>
                <img src="/images/projects/stately/stately-2.png"/>
            </li>
            <li>
                <img src="/images/projects/stately/stately-3.png"/>
            </li>
            <li>
                <img src="/images/projects/stately/stately-4.png"/>
            </li>
            <li>
                <img src="/images/projects/stately/stately-5.png"/>
            </li>
        </ul>
    </div>
</div>

<div class="col-center paddup">
    <a href="https://play.google.com/store/apps/details?id=com.lloydtorres.stately"><img src="/images/icons/ps_badge.png" class="market-badges-large"/></a>

    <p class="market-disclaimer pushdown">Android, Google Play and the Google Play logo are trademarks of Google Inc.</p>
</div>

<p><a href="http://www.nationstates.net/">NationStates</a> is an online nation-simulation game by <a href="http://maxbarry.com/">Max Barry</a>. He's the author of <em><a href="http://www.amazon.ca/Jennifer-Government-Max-Barry/dp/1400030927">Jennifer Government</a></em> (a great read!), which is the novel NationStates is based on.</p>

<div class="row"><div class="col-md-offset-2 col-md-8"><div class="divider"><div class="inner"></div></div></div></div>

<h2>Technical Details</h2>

<p><strong>Stately</strong> was built from the ground up with the <a href="http://developer.android.com/tools/support-library/index.html">Android Support Library</a> in order to use the latest Material Design elements and tools as a basis for the app. Stately uses <a href="https://github.com/mcxiaoke/android-volley">Volley</a> to communicate with NationStates and its API through a secure connection. It then processess the data with <a href="http://jsoup.org/">jsoup</a> and <a href="http://simple.sourceforge.net/">SimpleXML</a>.</p>

<p>Stately also uses the following open-source libraries:</p>

<ul>
    <li><a href="https://github.com/atteo/evo-inflector">Evo Reflector</a></li>
    <li><a href="https://github.com/google/guava">Guava</a></li>
    <li><a href="https://github.com/SufficientlySecure/html-textview">HtmlTextView</a></li>
    <li><a href="https://github.com/PhilJay/MPAndroidChart">MPAndroidChart</a></li>
    <li><a href="https://github.com/jpardogo/PagerSlidingTabStrip">PagerSlidingTabStrip</a></li>
    <li><a href="http://www.ocpsoft.org/prettytime/">PrettyTime</a></li>
    <li><a href="https://github.com/siyamed/android-shape-imageview">Shape Image View</a></li>
    <li><a href="https://github.com/satyan/sugar">SugarORM</a></li>
    <li><a href="https://github.com/OrangeGangsters/SwipyRefreshLayout">SwipyRefreshLayout</a></li>
    <li><a href="https://github.com/nostra13/Android-Universal-Image-Loader">Universal Image Loader</a></li>
</ul>

<script>
$(function() {
    $(".rslides").responsiveSlides({timeout: 5000, maxwidth:450});
});
</script>