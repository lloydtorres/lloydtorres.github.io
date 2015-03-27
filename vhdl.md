---
layout: project
title: VHDL Controllers for Altera DE2 Board
header: "/images/projects/vhdl/altera-header.jpg"
permalink: /projects/vhdl/
categories:
- projects
tags:
- vhdl
- altera
description: Simple VHDL controllers for the Altera DE2 board for a first-year Digital Circuits course.
preview: "/images/projects/vhdl/altera-preview.jpg"
prev_banner: "/images/projects/vhdl/altera-preview.jpg"
sequence: -3
---

* Programmed simple controllers in VHDL for the [Altera DE2 board](http://www.altera.com/education/univ/materials/boards/de2/unv-de2-board.html) 
(Cyclone II FPGA) for a first-year Digital Circuits and Systems (ECE 124) group project.
* Developed two main combinatorial circuits:
    * Arithmetic logic unit (which does bitwise AND, OR, XOR and addition operations).
    * Elevator controller.
* Developed a large traffic controller sequential circuit:
    * Utilized a state machine and modulus clocks to simulate traffic lights in an intersection cycling between red, yellow and green lights.
    * Implemented two different modes: day mode (where the lights cycled normally), and night mode (where only one set of lights would cycle through states until the user activated a switch).
    * Added wait counters to determine how long a car has been stopped waiting for their light to turn green.
* Used various techniques to simplify logic (e.g. Karnaugh maps, De Morgan's laws, implicants, state diagrams).

**Interesting notes:**

* This projects showed me the difference between coding for normal computers and embedded systems - embedded systems tend to be 
  more fickle when it comes to how you implement things.