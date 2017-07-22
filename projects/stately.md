---
layout: project
title: Stately
picoverlay: "/images/projects/stately/stately-logo.png"
color: "#2E7D32"
google_play: https://play.google.com/store/apps/details?id=com.lloydtorres.stately
github: https://github.com/lloydtorres/stately
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
sequence: -15
---

<div class="row">
    <div class="col-sm-8">
        <p class="featuretext-lg"><strong class="green-emph">Stately</strong> is an unofficial NationStates app for Android.</p>

        <p class="featuretext-sm">
            <ul>
                <li>Browse your nation's data and stats.</li>
                <li>Respond to issues encountered by your nation.</li>
                <li>Discover trends in national, regional and world census statistics.</li>
                <li>Login and switch between different nations.</li>
                <li>Read, organize, write and reply to telegrams.</li>
                <li>Browse through regional factbooks and communities.</li>
                <li>Read, quote, post and do more in RMBs.</li>
                <li>Observe and vote on current World Assembly resolutions.</li>
                <li>Explore, endorse nations and move to different regions in NationStates.</li>
                <li>Compile all your happenings together with the Activity Feed.</li>
                <li>Get notified and stay up to date on new issues, telegrams and other events.</li>
                <li>Make it your own: choose between five different themes and more.</li>
            </ul>
        </p>
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
            <li>
                <img src="/images/projects/stately/stately-6.png"/>
            </li>
            <li>
                <img src="/images/projects/stately/stately-7.png"/>
            </li>
        </ul>
    </div>
</div>

<div class="col-center paddup">
    <a href="https://play.google.com/store/apps/details?id=com.lloydtorres.stately"><img src="/images/icons/ps_badge.png" class="market-badges-large"/></a> <a href="http://www.amazon.com/gp/product/B01E4R7T1C/ref=mas_pm_stately_for_nationstates"><img src="/images/icons/amazon_badge.png" class="market-badges-large"/></a>

    <p class="market-disclaimer pushdown">Android, Google Play and the Google Play logo are trademarks of Google Inc.</p>
</div>

<p><a href="http://www.nationstates.net/">NationStates</a> is an online nation-simulation game by <a href="http://maxbarry.com/">Max Barry</a>. He's the author of <em><a href="http://www.amazon.ca/Jennifer-Government-Max-Barry/dp/1400030927">Jennifer Government</a></em> (a great read!), which is the novel NationStates is based on.</p>

<p>Stately's Privacy Policy can be found <a href="https://www.iubenda.com/privacy-policy/7793041">here</a>.</p>

<div class="row"><div class="col-md-offset-2 col-md-8"><div class="divider"><div class="inner"></div></div></div></div>

<h2>Technical Details</h2>

<p><strong>Stately</strong> was built from the ground up with the <a href="http://developer.android.com/tools/support-library/index.html">Android Support Library</a> in order to use the latest Material Design elements and tools as a basis for the app. Stately uses <a href="http://developer.android.com/training/volley/index.html">Volley</a> to communicate with NationStates and its API through a secure connection. It then processess the data with <a href="http://jsoup.org/">jsoup</a> and <a href="http://simple.sourceforge.net/">SimpleXML</a>.</p>

<p>Stately also uses the following open-source libraries:</p>

<ul>
    <li><a href="https://github.com/atteo/evo-inflector">Evo Reflector</a></li>
    <li><a href="https://github.com/SufficientlySecure/html-textview">HtmlTextView</a></li>
    <li><a href="https://github.com/PhilJay/MPAndroidChart">MPAndroidChart</a></li>
    <li><a href="https://github.com/jpardogo/PagerSlidingTabStrip">PagerSlidingTabStrip</a></li>
    <li><a href="https://github.com/square/picasso">Picasso</a></li>
    <li><a href="https://github.com/booncol/Pulsator4Droid">Pulsator4Droid</a></li>
    <li><a href="https://github.com/r0adkll/Slidr">Slidr</a></li>
    <li><a href="https://github.com/satyan/sugar">Sugar ORM</a></li>
    <li><a href="https://github.com/omadahealth/SwipyRefreshLayout">SwipyRefreshLayout</a></li>
</ul>

<p>Stately uses the following proprietary libraries:</p>

<ul>
    <li><a href="https://try.crashlytics.com/">Crashlytics</a></li>
</ul>

<p>Stately uses Creative Commons-licensed content from the following sources:</p>

<ul>
  <li><a href="https://android-material-icon-generator.bitdroid.de/">Android Material Icon Generator (CC BY-NC 3.0)</a></li>
  <li><a href="http://www.flaticon.com/packs/medical-icons">Medical Icons Pack (CC BY 3.0)</a></li>
</ul>

<script>
$(function() {
    $(".rslides").responsiveSlides({timeout: 5000, maxwidth:450});
});
</script>