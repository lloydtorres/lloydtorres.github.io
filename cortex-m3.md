---
layout: project
title: Cortex-M3 Processor Programming
header: "/images/projects/cortex-m3/cortex-m3-header.jpg"
permalink: /projects/cortex-m3/
categories:
- projects
tags:
- cortex m3
- rl-rtx
- c
- arm assembly (thumb)
description: Low-level programming coursework on the NXP Cortex M3 processor with ARM Assembly.
preview: "/images/projects/cortex-m3/cortex-m3-preview.jpg"
prev_banner: "/images/projects/cortex-m3/cortex-m3-preview.jpg"
sequence: -5
redirect_from: "/projects/assembly/"
---

As part of our coursework at Waterloo ECE, we have hands-on labs where we program the NXP Cortex M3 processor (on the [MCB1700](http://www.keil.com/mcb1700/) board) to accomplish certain tasks and complete projects. This page lists the work I have completed over the course of my undergraduate degree.

## ECE 254: Operating Systems - C

For my second-year operating systems course, we used the Cortex M3 to learn about basic OS concepts. We took the RL-RTX kernel and added our own system calls to accomplish certain tasks, such as getting the total number of active tasks running and getting the status of a certain task.

We also wrote memory allocation and deallocation calls which either 1) returned a memory block to the calling task if memory is available, or 2) blocked the task if no memory is available and placed it in a queue to wait until memory becomes available.

To test these calls, we created tasks to run on the RL-RTX OS and made tests to check edge cases and confirm the proper operation of each call.

## ECE 222: Digital Computers - ARM (THUMB) Assembly

For my second-year Digital Computers course (ECE 222), we had to create programs using ARM Assembly (THUMB). This was my first exposure to a low-level language, and I learned a lot of Assembly concepts on the fly while implementing certain functions.

One of the programs we created in the course was a reaction time tester. The program toggles between four sets of LEDs at a rate of 4 Hz before flashing all LEDs at 20 Hz. At this point, the user must press the input button as quickly as possible. The LEDs then display the reaction time in milliseconds (represented as a 32-bit integer) one byte at a time, starting from the least significant bits. At this point the program restarts from the beginning.

In my implementation of the program, I used concepts such as subroutines, program counters and link registers to manage the flow of a program, bit operations and masking to manipulate bits to activate specific pins on the board, and polling and interrupt handling to deal with user actions. I found coding in Assembly to be challenging but ultimately rewarding.

<div class="embed-responsive embed-responsive-16by9 col-center" style="margin-bottom: 17px;">
    <iframe src="https://www.youtube.com/embed/9cHzSLg4TP8" frameborder="0" allowfullscreen></iframe>
</div>