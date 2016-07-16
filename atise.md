---
layout: project
title: Atise
header: "/images/projects/atise/atise-background.jpg"
picoverlay: "/images/projects/atise/atise-logo.png"
link: http://devpost.com/software/atise
permalink: /projects/atise/
github: https://github.com/lloydtorres/atise
categories:
- projects
tags:
- android
- firebase
- braintree
- nfc
description: Shop with ease, use Atise! Improving your shopping experience by automating the checkout process.
preview: "/images/projects/atise/atise-preview.png"
prev_banner: "/images/projects/atise/atise-preview.png"
sequence: -13
---

<p>Have you ever been stuck in a long checkout line manned by one cashier? Frustrated with the sheer amount of time it takes to get what you need from the store? You've probably run into this situation more often than you'd like. The good news is that we now have the technology to get rid of this problem once and for all.</p>

<p class="featuretext-md"><strong class="purple-emph">Atise</strong> is an Android app built to make your shopping experience more convenient and efficient by automating the checkout process.</p>

<p>How does <strong class="purple-emph">Atise</strong> work? Watch the demo video to find out, or keep reading!</p>

<div class="embed-responsive embed-responsive-16by9 col-center paddup" style="margin-top: 17px;">
    <iframe src="//www.youtube.com/embed/TrEDZ7HuKqI" frameborder="0" allowfullscreen></iframe>
</div>

<div class="row paddup">
    <div class="col-sm-8">
        <p>Start your shopping experience by logging into <strong class="purple-emph">Atise</strong> with your account. Your account contains information on your preferred payment options to streamline the checkout process.</p>

        <p>You can then start shopping like you usually would — going around the store with a cart or a basket! Find anything you want to buy? Simply tap the item's NFC tag with your phone to add it to your cart. Can't find the tag? No problem! <strong class="purple-emph">Atise</strong> also supports barcode scanning for your convenience.</p>

        <p>As you add more items into your cart, you will see a beautifully-formatted list of what you have so far. Each item has details on its name, price and product image. <strong class="purple-emph">Atise</strong> also keeps track of your current spending, so you won't have to worry about overspending your budget. Want to know how much tax you'll be paying? Simply swipe up to get more info.</p>

        <p>Ready to checkout your cart? No need to line up! Simply tap the shopping bag icon on the top-right and <strong class="purple-emph">Atise</strong> will ring up your purchases for you. Your preferred payment option will be automatically charged, so you don't have to worry about being short on cash or forgetting your wallet. You can then leave the store without having to line up!</p>

        <p>With <strong class="purple-emph">Atise</strong>, lining up to a till is a thing of the past.</p>
    </div>

    <div class="col-sm-4">
        <ul class="rslides">
            <li>
                <img src="/images/projects/atise/atise-login.png"/>
                <p class="caption">Login into Atise to get started.</p>
            </li>
            <li>
                <img src="/images/projects/atise/atise-cart.png" alt=""/>
                <p class="caption">See what's in your cart anytime.</p>
            </li>
            <li>
                <img src="/images/projects/atise/atise-total.png" alt=""/>
                <p class="caption">Atise keeps you within budget.</p>
            </li>
            <li>
                <img src="/images/projects/atise/atise-success.png" alt=""/>
                <p class="caption">Checkout with one simple tap.</p>
            </li>
        </ul>
    </div>
</div>

<div class="col-center paddup">
    <p class="purple-emph" style="font-size: 30px;">Shop with ease, use Atise!</p>
</div>

## The Story

<p><strong>Atise</strong> was built over 30 hours at Hack the North 2015 by myself, <a href="http://davidvuong.ca/">David</a>, <a href="https://twitter.com/TheresaDeCola">Theresa</a> and Anas. Theresa and Anas focused on the Android frontend while David and I worked on the backend and integration.</p>

<p>Atise is powered by <a href="https://www.firebase.com/">Firebase</a> for its backend. Firebase allows us to easily store and retrieve data in real time, which allowed us to focus our efforts in building an amazing app experience instead of tinkering with the backend. The payment process is handled by <a href="https://www.braintreepayments.com/">Braintree</a>, which provides an easy-to-use API for charging accounts.</p>

<div class="padaround">
    <blockquote class="twitter-tweet" lang="en" align="center"><p lang="en" dir="ltr">Atise- an application that helps you purchase goods at a grocery store through NFC <a href="https://twitter.com/HackTheNorth">@HackTheNorth</a> using <a href="https://twitter.com/braintree_dev">@braintree_dev</a> <a href="http://t.co/qJDrp1VJMC">pic.twitter.com/qJDrp1VJMC</a></p>&mdash; braintree_dev (@braintree_dev) <a href="https://twitter.com/braintree_dev/status/645627350634364928">September 20, 2015</a></blockquote>
</div>

<p>A more detailed writeup on Atise is <a href="http://devpost.com/software/atise">available on Devpost</a>. Atise is open source and <a href="https://github.com/davidxvuong/atise">available on GitHub</a>.</p>

<script>
$(function() {
    $(".rslides").responsiveSlides({timeout: 3500, maxwidth:200});
});
</script>

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>