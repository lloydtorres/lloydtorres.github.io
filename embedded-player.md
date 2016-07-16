---
layout: project
title: Embedded Music Player
header: "/images/projects/embedded-player/altera-header.jpg"
permalink: /projects/embedded-player/
categories:
- projects
tags:
- altera de2
- c
description: WAV player for the Altera DE2 board, built with C for an embedded systems course.
preview: "/images/projects/embedded-player/altera-preview.jpg"
prev_banner: "/images/projects/embedded-player/altera-preview.jpg"
sequence: -11
redirect_from:
- "/projects/vhdl/"
- "/projects/altera-de2/"
---

One of the major projects for my second-year embedded systems course (ECE 224) was programming a music player in C for the [Altera DE2 board](http://www.altera.com/education/univ/materials/boards/de2/unv-de2-board.html) (Cyclone II FPGA). We were given the hardware setup and function calls to initialize and read the board's SD card and audio codec.

Once we initialized a WAV file from the SD card, we could read through it sector-by-sector and byte-by-byte. The WAV file's data stream alternated between two bytes of left-channel audio and two bytes of right-channel audio. We can then write these bytes to the audio codec, which switched between outputting to the left and right channel for every write.

We then implemented five different playback modes for the player: normal speed, double speed, half speed, reverse and delay (one channel is one second ahead of the other). We also displayed the current mode on the LCD. We were able to take advantage of delay without using a timer by taking advantage of WAV's bitrate of 44.1 kHz. This means that 44.1k samples would need to be buffered from one channel before we started playing it.

In programming the music player, we used concepts such as interrupt service routines, tight polling, buffering, flags and bit manipulation. We also structured program in a way that made it clean, efficient and easy to debug. Building the music player was extremely fun and challenging at times, and made me appreciate the effort engineers and developers put in to make our music players work perfectly.

<div class="embed-responsive embed-responsive-16by9 col-center" style="margin-bottom: 17px;">
    <iframe src="https://www.youtube.com/embed/i0J22zAzPFw" frameborder="0" allowfullscreen></iframe>
</div>