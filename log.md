---
layout: feature
title: Adventure Log
header: "/images/headers/log-header.png"
permalink: /log/
---

<ul class="post-list">
    {% for post in site.posts %}
        <li>
            <h2>
                <a class="page-heading" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a> <span class="post-meta">{{ post.date | date_to_string }}</span>
            </h2>
            <p class="post-blurb">{{ post.excerpt | strip_html }} <a href="{{ post.url }}"><i><small>Read more...</small></i></a></p>
        </li>
    {% endfor %}
</ul>
