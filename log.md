---
layout: page
title: Adventure Log
permalink: /log/
---

<ul class="post-list">
{% for post in site.posts %}
  <li>
	<h2>
	  <a class="page-heading" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a> <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
	</h2>
	{{ post.excerpt }} <a href="{{ post.url }}">Read more...</a>
  </li>
{% endfor %}
</ul>