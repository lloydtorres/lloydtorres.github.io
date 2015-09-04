---
layout: canvas
title: "The Girl Who Leapt Through Time"
permalink: /makoto/
---

<div class="makoto-bg" data-parallax="scroll" data-image-src="/images/labs/makoto/slide1.jpg">
    <div class="makoto-title">
        <p><span id="makoto-title-1">The Girl</span></p>
        <p class="bringup"><span id="makoto-title-2">Who Leapt</span></p>
        <p class="bringup"><span class="last-underline" id="makoto-title-3">Through Time</span></p>
    </div>
</div>

<div class="makoto-bg" data-parallax="scroll" data-image-src="/images/labs/makoto/slide2.jpg" id="start">
</div>

<div class="makoto-bg" data-parallax="scroll" data-image-src="/images/labs/makoto/slide3.jpg">
    <p class="inner-text mid-quote">time</p>
</div>

<div class="makoto-bg" data-parallax="scroll" data-image-src="/images/labs/makoto/slide4.jpg">
    <p class="inner-text mid-quote">waits</p>
</div>

<div class="makoto-bg" data-parallax="scroll" data-image-src="/images/labs/makoto/slide5.jpg">
    <p class="inner-text mid-quote">for</p>
</div>

<div class="makoto-bg" data-parallax="scroll" data-image-src="/images/labs/makoto/slide6.jpg">
    <p class="inner-text mid-quote">no</p>
</div>

<div class="makoto-bg" data-parallax="scroll" data-image-src="/images/labs/makoto/slide7.jpg">
    <p class="inner-text mid-quote">one</p>
</div>

<div class="makoto-bg" data-parallax="scroll" data-image-src="/images/labs/makoto/slide8.jpg" id="finish">
</div>

<div class="makoto-bg" style="background-color: #000000;">
    <p class="inner-text final-quote">time waits for no one</p>
</div>

<div class="makoto-container" id="makoto">
    <img src="/images/labs/makoto/makoto.png" class="makoto"/>
</div>

<script type="text/javascript">
    $(document).ready(function() {
        $( "#makoto-title-1" ).show( "slow" );
        $( "#makoto-title-2" ).delay(300).show( "slow" );
        $( "#makoto-title-3" ).delay(600).show( "slow" );
        
        $(document).scroll(function() {
            var y = $(this).scrollTop();
            var startDiv = $("#start").offset().top;
            var finishDiv = $("#finish").offset().top;
            var refHeight = $("#start").height();

            if (startDiv - refHeight/4 <= y && finishDiv - refHeight/1.15 > y && $("#makoto").is(":hidden") ) {
                $("#makoto").fadeIn(200);
            }
            
            if (startDiv - refHeight/4 > y && $("#makoto").is(":visible")) {
                $("#makoto").fadeOut(200);
            }

            if (finishDiv - refHeight/1.15 <= y && $("#makoto").is(":visible") ) {
                $("#makoto").fadeOut(200);
            }

            var makotop = 20 + 30 * (y/finishDiv);
            $("#makoto").css("top", makotop + "%");

        });
    });
</script>