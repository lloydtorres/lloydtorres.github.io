---
layout: page
title: Projects
permalink: /projects/
---

* [Angel Beats! Paint](#paint-project)
* [The Front](#the-front)
* [Keypress Parade](#kp-parade)
* [lloydtorres.com](#website)
* [Rocketry Data Acquisition](#rocketry-daq)
* [Space Invaders Recreated](#space-invaders)
* [Step Counter and Navigator](#stepcounter)
* [VHDL Controllers for Altera DE2 Board](#digital-circuits) 

<h2 id="paint-project">Angel Beats! Paint</h2>

<img src="/images/paintproject.png" width="350px" title="Angel Beats! Paint" alt="Angel Beats! Paint"/>

* An [anime-themed](http://en.wikipedia.org/wiki/Angel_Beats!) app implemented with Python and pygame.
* 15 paint tools with various options (pencil, brush, "pen", eraser, colour picker, fill bucket, spray, crop, flip, resize, text, 
and four different shapes), stickers, and backgrounds.
* Four theme options allow users to choose between different backgrounds and music for the app.
* Supports undo/redo using a stack, and file I/O to save and load images.
* Various UI enhancements such as a help dialog and an exit confirmation dialog.

<a href="#" class="subscript">Back to top</a>

<h2 id="the-front">The Front</h2>

<img src="/images/thefront.png" width="250px" title="The Front" alt="The Front"/>

* Two-player turn-based strategy game inspired by [Advanced Wars](http://en.wikipedia.org/wiki/Wars_(series)), implemented with Python and pygame.
* Players can choose from three different teams, each with its own unique team, and play in three different maps.
* Six units available for purchase in factories with varying strength, defence and mobility.
* Skirmish system allows units to combat other units or capture points on the map.
* Revenue system allows users to gain money based on number of captured buildings and purchase units.

**Interesting notes:**

* Unit range is determined by its own mobility value and its surrounding terrain (e.g. some units cannot cross rivers or mountains, 
  units are slowed down by forests).
* A non-recursive flood fill algorithm on the terrain then returns the spaces where a unit can move.
* A non-recursive algorithm was used due to concerns with memory issues.

<a href="#" class="subscript">Back to top</a>

<h2 id="kp-parade">Keypress Parade</h2>

<img src="/images/kpparade.png" width="350px" title="Keypress Parade" alt="Keypress Parade"/>

* Simple app built in Java using Swing and AWT. (check it out on [GitHub](https://github.com/lloydtorres/keypress-parade)!)
* Displays current keyboard input and a list of previous inputs.
* Mostly used to test other apps that output keyboard events.

<a href="#" class="subscript">Back to top</a>

<h2 id="website">lloydtorres.com</h2>

<img src="/images/website.png" width="350px" title="lloydtorres.com" alt="lloydtorres.com"/>

* Personal website built from scratch using Jekyll. (check it out on [GitHub](https://github.com/lloydtorres/lloydtorres.github.io)!)
* Uses custom CSS and HTML/Liquid templates used by Jekyll to build each page.
* Uses some JavaScript for site functionality (e.g. closable mobile menu).
* Designed with both desktop and mobile users in mind.

<a href="#" class="subscript">Back to top</a>

<h2 id="rocketry-daq">Rocketry Data Acquisition</h2>

<img src="/images/rocketry_daq.png" width="350px" title="Rocketry DAQ" alt="Rocketry DAQ"/>

* Created a utility in LabVIEW to read sensor data from a National Instruments DAQ device for rocketry engine tests.
* Read filtered strain gauge and pressure data and displayed graphs, averages and maximums to the user.
* Worked with upper-year electrical engineering students to debug and fix DAQ hardware issues.
* Attended a National Instruments seminar to learn more about data acquisition techniques.

<a href="#" class="subscript">Back to top</a>

<h2 id="space-invaders">Space Invaders Recreated</h2>

<img src="/images/spaceinvaders1.png" width="350px" title="Space Invaders Recreated" alt="Space Invaders Recreated"/>

* Space Invaders Recreated in Java using Swing and AWT. ([check it out](https://github.com/lloydtorres/space-invaders-recreated) on GitHub!)
* Core game developed as a school project, but overall app and features grew into a personal project.
* Features a main menu, high score tracking, sounds, animations in addition to core gameplay.
* Lua script using Myo Script API add-on allows users to play game using Thalmic Labs's Myo armband.

<a href="#" class="subscript">Back to top</a>

<h2 id="stepcounter">Step Counter and Navigator</h2>

<img src="/images/stepcounter.png" width="300px" title="Step Counter and Navigator App" alt="Step Counter and Navigator"/>

* Android app developed for an Embedded Systems course group project.
* Uses basic state machine on acceleration data to detect footsteps.
* Uses magnetometer data and step count to track user bearing and displacement.
* A* pathfinding algorithm plots route from user position to any point on map.
* Calculates user position and bearing in relation to route to provide directions.

<a href="#" class="subscript">Back to top</a>

<h2 id="digital-circuits">VHDL Controllers for Altera DE2 Board</h2>

* Simple controllers in VHDL for the [Altera DE2 board](http://www.altera.com/education/univ/materials/boards/de2/unv-de2-board.html) 
(Cyclone II FPGA) for a Digital Circuits group project.
* Developed two main combinatorial circuits - ALU and elevator controller.
* Developed a large traffic controller sequential circuit with different modes based on user input.
* Used various techniques to simplify logic (e.g. Karnaugh maps, De Morgan's laws, implicants, state diagrams).

**Interesting notes:**

* This projects showed me the difference between coding for normal computers and embedded systems - embedded systems tend to be 
  more fickle when it comes to how you implement things.

<a href="#" class="subscript">Back to top</a>