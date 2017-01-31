---
layout: project
title: Kirsch Edge Detector Circuit
header: "/images/projects/kirsch/kirsch-header.jpg"
permalink: /projects/kirsch/
categories:
- projects
tags:
- altera de2
- vhdl
description: A Kirsch edge detector implemented in VHDL on the Altera DE2 board, built for a digital hardware systems course.
preview: "/images/projects/kirsch/kirsch-banner.jpg"
prev_banner: "/images/projects/kirsch/kirsch-banner.jpg"
sequence: -6
---

<div class="row">
    <div class="col-sm-8">
        <p>The final project for my third-year digital hardware systems course (ECE 327) involved building a Kirsch edge detector on the <a href="http://www.altera.com/education/univ/materials/boards/de2/unv-de2-board.html">Altera DE2 board</a> using VHDL.</p>

        <p>Given a 256x256 grayscale bitmap, we were to process the image using the <a href="https://en.wikipedia.org/wiki/Kirsch_operator">Kirsch algorithm</a> and output its edges and edge directions. In addition, the circuit had to meet certain speed, area and latency requirements. Our core Kirsch circuit would be implemented within the provided top-level circuit and test bench.</p>

        <p>Starting from the general Kirsch algorithm, optimizations were made to meet the project requirements (such as simplifying equations and pipelining). The optimized Kirsch algorithm was drawn on a dataflow diagram to aid in the circuit's implementation.</p>

        <p>For the actual circuit, both combinational logic and clocked processes were used to implement pipelining and other optimizations. Incoming pixels were sent to the circuit one at a time after some random number of clock cycles, which were then intelligently stored into a 3x256 memory array. The circuit began to calculate edges once enough pixels were available for the algorithm, and continued to calculate edges as new data came in. Thus, the circuit was able to accept incoming data and output edge data simultaneously.</p>

        <p>Our final Kirsch edge detector circuit was able to process all sample images with a ~0% error rate, a latency below the project requirements and a highly optimized speed and area.</p>
    </div>
    <div class="col-sm-4">
        <figure>
            <img src="/images/projects/kirsch/madoka.png" width="250px" />
            <img src="/images/projects/kirsch/madoka_edge.png" width="250px" />
            <figcaption>Kirsch edge detection on a grayscale image.</figcaption>
        </figure>
    </div>
</div>
