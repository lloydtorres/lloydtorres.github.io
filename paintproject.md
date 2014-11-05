---
layout: project
title: Angel Beats! Paint
header: "/images/projects/paintproject/paintproject-header.png"
permalink: /projects/paintproject/
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
                <img src="/images/projects/paintproject/paintproject-1.png"/>
                <p class="caption">Angel Beats! Paint</p>
            </li>
            <li>
                <img src="/images/projects/paintproject/paintproject-2.png" alt=""/>
                <p class="caption">Brushes, stickers, backgrounds and more!</p>
            </li>
            <li>
                <img src="/images/projects/paintproject/paintproject-3.png" alt=""/>
                <p class="caption">Flood-fill bucket demo</p>
            </li>
        </ul>
    </div>

    <div class="col-sm-8">
        <p><strong>Angel Beats! Paint</strong> is an <a href="http://en.wikipedia.org/wiki/Angel_Beats!">anime-themed</a> paint app built in Python with
        pygame.</p>

        <p>It has 15 paint tools with customizable options (pencil, brush, "pen", eraser, colour picker, fill bucket, spray, crop, flip, resize, text, and four different shapes), stickers, and backgrounds. Four theme options allow users to choose between different backgrounds and music for the app.</p>

        <p>It supports undo/redo using a stack, and file I/O to save and load images. Finally, it has various UX enhancements such as keyboard shortcuts, a help dialog and an exit confirmation dialog.</p>

        <p><strong>Interesting notes:</strong></p>

        <ul>
            <li>A non-recursive flood fill algorithm is used for the fill bucket, which fills large areas quickly.</li>
            <li>A non-recursive algorithm was used due to concerns with speed and memory issues.</li>
        </ul>
    </div>

</div>