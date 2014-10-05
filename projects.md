---
layout: page
title: Projects
permalink: /projects/
---

<h2 id="stepcounter">Step Counter and Navigator App</h2>

<img src="/images/stepcounter.png" width="200px" title="Step Counter and Navigator App" alt="Step Counter and Navigator App"/>

This is an Android app developed for a group project in an Embedded Systems course. It uses a basic state machine for acceleration 
data to detect footsteps, and combines that with magnetometer data to determine the user's bearing and displacement. Finally, by 
using all of this data, we can track the user's movement on a map, and with A* pathfinding, we can plot a route between any two 
points in the room. A separate algorithm calculates the user's current position and bearing in relation to the next waypoint, 
and provides the dappropriate instructions to get there.

<h2 id="digital-circuits">VHDL Controllers for Altera DE2 Board</h2>

We developed various simple controllers in VHDL for the [Altera DE2 board](http://www.altera.com/education/univ/materials/boards/de2/unv-de2-board.html) 
(Cyclone II FPGA) as a group project for a Digital Circuits course. Over the course of the term, we notably developed two 
combinational circuits - an arithmetic logic unit and an elevator controller, as well as a sequential circuit for a traffic 
light controller, which had two modes that operated differently. We used various boolean algebra techniques to simplify our 
expressions, such as Karnaugh maps and finding  implicants. For the traffic light controller, we planned out its operation by 
using a state diagram.

The sequential traffic light controller was an interesting challenge for me due to its complexity. It needed to transition between 
two different states depending on the current user input, and had to reset and activate a counter only once when the user 
activated a switch. My success in implementing this, and seeing the board function properly, was a truly rewarding experience.

<h2 id="space-invaders">Space Invaders Recreated</h2>

<img src="/images/space_screenshot.png" width="300px" title="Space Invaders Recreated" alt="Space Invaders Recreated"/>

A recreation of **Space Invaders** in Java. Originally started as a school project, I have made major improvements to it over the 
past few months as a personal project. The game now features a main menu, high score tracking, sounds, and better animations, 
in addition to the core gameplay itself. A Lua script addon included with the source allows users to control the game with gesture 
control using Thalmic Labs's Myo gesture armband.

Space Invaders is copyrighted by Taito Corporation. The code is provided by me on a [GNU GPL v3.0 license](https://raw.githubusercontent.com/lloydtorres/space-invaders-recreated/master/LICENSE.txt). 
You can [check it out](https://github.com/lloydtorres/space-invaders-recreated) on GitHub!

<h2 id="the-front">The Front</h2>

<img src="/images/thefront.png" width="200px" title="The Front" alt="The Front"/>

**The Front** is a two-player turn-based strategy game inspired by [Advanced Wars](http://en.wikipedia.org/wiki/Wars_(series)) 
(copyrighted by Intelligent Systems and Nintendo) created in Python using pygame. Players can choose from three different teams 
(each with its own unique theme) and play in three different maps. There are six units available, each with varying mobility, 
strength and defence. There is also a revenue system where players can capture more buildings to earn more money for purchasing 
units.

In terms of implementation, player data was tracked through various 2D-arrays as I had not looked into object-oriented programming 
when I developed this project. One interesting feature to note is how the game determines a unit's moving range. It considers 
the unit's own mobility values and considers terrain factors such as forests, mountains and rivers (for example, mechanized units 
cannot cross the last two terrain types). Using these factors, it uses a non-recursive flood fill algorithm on the terrain array 
to obtain possible locations. While the algorithm could have been done recursively, I was concerned about memory issues so I opted 
to use a non-recursive method instead.

<h2 id="paint-project">Angel Beats! Paint</h2>

<img src="/images/paintproject.png" width="300px" title="Angel Beats! Paint" alt="Angel Beats! Paint"/>

**Angel Beats! Paint** is an anime-themed paint app created in Python using pygame. It has 15 adjustable paint tools (pencil, 
brush, "pen", eraser, colour picker, fill bucket, spray, crop, flip, resize, text, and four shape options), stickers, backgrounds, 
left- and right-click support, and theme options. It also supports undo and redo (implemented using a simple stack) as well as 
file I/O to save and load images. It also has some UI enhancements such as a help dialog and a exit confirmation dialog.

This was my first major programming project, and I enjoyed going above and beyond in implementing the various features described 
above.

[Angel Beats!](http://en.wikipedia.org/wiki/Angel_Beats!) is an anime used as an inspiration for this project, and is copyrighted 
by Visual Art's and Key.