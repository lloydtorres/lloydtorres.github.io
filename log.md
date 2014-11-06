---
layout: feature
title: Adventure Log
header: "/images/headers/log-header.png"
permalink: /log/
---

<script>
var container = document.querySelector('.masonry');
var msnry = new Masonry( container, {
  itemSelector: '.col-sm-6',
  columnWidth: '.col-sm-6'
});
</script>

<div class="row js-masonry" data-masonry-options='{ "itemSelector": ".col-sm-6", "columnWidth": ".col-sm-6" }'>
    {% for post in site.posts %}
    <div class="masonry">
         <div class="col-sm-6">
            <div class="log-entry">
                <div class="log-desc">
                    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                    <p class="post-meta">{{ post.date | date_to_string }}</p>
                    <p>{{ post.excerpt | strip_html }}</p>
                    <a href="{{ post.url }}" class="more">Read more...</a>
                </div>
            </div>
        </div>
    </div>
    {% endfor %}
</div>