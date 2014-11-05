---
layout: project
title: The Front
header: "/images/projects/thefront/thefront-header.png"
permalink: /projects/thefront/
categories:
- python
- pygame
---

<script>
$(function() {
    $(".rslides").responsiveSlides({timeout: 3500, maxwidth:500});
});
</script>

<div class="row">
    <div class="col-sm-4">
        <ul class="rslides">
            <li>
                <img src="/images/projects/thefront/thefront-1.png"/>
                <p class="caption">The Front</p>
            </li>
            <li>
                <img src="/images/projects/thefront/thefront-2.png" alt=""/>
                <p class="caption">Unit range movement demo</p>
            </li>
            <li>
                <img src="/images/projects/thefront/thefront-3.png" alt=""/>
                <p class="caption">A skirmish in progress.</p>
            </li>
        </ul>
    </div>

    <div class="col-sm-8">
        <p><strong>The Front</strong> is a two-player strategy game inspired by the <a href="http://en.wikipedia.org/wiki/Wars_(series)">Advanced Wars</a> series.</p>

        <p>Players can choose from three different teams, each with its own unique theme, and play in three different maps. The skirmish system then allows players to battle other units or capture points on the map each turn.</p>

        <p>The revenue system allows players to make money from captured points and spend money on more units. Six units are available for purchase in factories with varying strength, defence and mobility.</p>

        <p><strong>Interesting notes:</strong></p>

        <ul>
            <li>Unit range is determined by its own mobility value and its surrounding terrain (e.g. some units cannot cross rivers or mountains, units are slowed down by forests).</li>
            <li>A non-recursive flood fill algorithm on the terrain then returns the spaces where a unit can move.</li>
            <li>A non-recursive algorithm was used due to concerns with memory issues.</li>
        </ul>

    </div>

</div>