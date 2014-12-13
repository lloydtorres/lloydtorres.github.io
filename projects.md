---
layout: feature
title: Projects
header: "/images/headers/projects-header.png"
permalink: /projects/
---

{% assign pages = site.pages | sort: 'sequence' %}

<div class="row">

    {% for file in pages %}
        {% for cat in file.categories %}
            {% if cat == 'projects' %}
                <div class="col-sm-6 col-md-4">
                    <div class="project-entry">
                        <a href="{{ file.url }}"><img src="{{ file.prev_banner }}" title="{{ file.title }}" alt="{{ file.title }}"/></a>
                        <div class="project-desc">
                            <h2><a href="{{ file.url }}">{{ file.title }}</a></h2>
                            <p>{{ file.description }}</p>
                        </div>
                        <div class="lefticons">
                            {% if file.google_play %}
                                <a href="{{ file.google_play }}" title="{{ file.title }} on Google Play"><span class="fa fa-android"></span></a>
                            {% endif %}
                            {% if file.github %}
                                <a href="{{ file.github }}" title="{{ file.title }} on GitHub"><span class="fa fa-github"></span></a>
                            {% endif %}
                        </div>
                        
                        <a href="{{ file.url }}" class="more">Read more <span class="fa fa-chevron-circle-right"></span></a>
                    </div>
                </div>
            {% endif %}
        {% endfor %}
    {% endfor %}

</div>