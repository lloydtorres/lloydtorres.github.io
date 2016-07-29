---
layout: project
title: Embedded Reaction Time Tester
header: "/images/projects/embedded-reaction/cortex-m3-header.jpg"
permalink: /projects/embedded-reaction/
youtube: https://www.youtube.com/watch?v=9cHzSLg4TP8
categories:
- projects
tags:
- cortex m3
- arm assembly (thumb)
description: A simple reaction time tester for the NXP Cortex M3 processor, built with ARM Assembly for a digital computers course.
preview: "/images/projects/embedded-reaction/cortex-m3-preview.jpg"
prev_banner: "/images/projects/embedded-reaction/cortex-m3-preview.jpg"
sequence: -10
redirect_from:
- "/projects/assembly/"
- "/projects/cortex-m3/"
---

For my second-year Digital Computers course (ECE 222), we had to create programs using the NXP Cortex M3 processor (on the [MCB1700](http://www.keil.com/mcb1700/) board) with ARM Assembly (THUMB). This was my first exposure to a low-level language, and I learned a lot of Assembly concepts on the fly while implementing certain functions.

One of the programs we created in the course was a simple reaction time tester. The program toggles between four sets of LEDs at a rate of 4 Hz before flashing all LEDs at 20 Hz. At this point, the user must press the input button as quickly as possible. The LEDs then display the reaction time in milliseconds (represented as a 32-bit integer) one byte at a time, starting from the least significant bits. At this point the program restarts from the beginning.

In my implementation of the program, I used concepts such as subroutines, program counters and link registers to manage the flow of a program, bit operations and masking to manipulate bits to activate specific pins on the board, and polling and interrupt handling to deal with user actions. I found coding in Assembly to be challenging but ultimately rewarding.

<div class="embed-responsive embed-responsive-16by9 col-center" style="margin-bottom: 17px;">
    <iframe src="https://www.youtube.com/embed/9cHzSLg4TP8" frameborder="0" allowfullscreen></iframe>
</div>