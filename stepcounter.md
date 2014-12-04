---
layout: project
title: Step Counter and Navigator
color: "#A4C639"
permalink: /projects/stepcounter/
categories:
- android
- java
description: Step Counter and Navigator is an Android app (in Java of course) developed for an Embedded Systems course group project.
preview_image: "/images/projects/stepcounter/stepcounter.png"
---

<div class="row">
    <div class="col-sm-4">
        <img src="/images/projects/stepcounter/stepcounter.png" width="350px" title="Step Counter and Navigator" alt="Step Counter and Navigator"/>
    </div>

    <div class="col-sm-8">
        <p><strong>Step Counter and Navigator</strong> is an Android app (in Java of course) developed for an Embedded Systems course group project. This was my first foray into Android app development.</p>

        <p>There were two components to calculating user displacement:</p>

        <ul>
            <li><strong>Step Counter:</strong> A basic state machine was used on the device's accelerometer data to determine if the user has made a step. Despite its simplicity, we were actually able to get really accurate step counts from our algorithm.</li>
            <li><strong>Magnetometer:</strong> The magnetometer was used to get the user's bearing in relation to the real world. Due to noise, this gave us wildly inaccurate data, which gave us a lot of headaches.</li>
        </ul>

        <p>With these two combined, we were able to get the user's displacement around an area. When testing in a magnetic noise free, environment, we were able to get extremely accurate results.</p>

        <p>Using this displacement data and a provided map, we could show the user's current location in a room. When the user enters any destination in the room, we used the A* pathfinding algorithm to find the shortest path from the user's location to the destination. For simplicity, we assumed that the user cannot move diagonally.</p>

        <p>The trickiest part to all of this was actually providing directions for the user as there were many factors to consider. My solution for this was to get the nearest route line segment and compare its direction to the user's current bearing. Using this system, we could tell the user by how much to turn and when to step forward.</p>
    </div>
</div>