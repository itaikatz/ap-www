---
layout: default
title: Blog
css: assets/css/blog.css
---

<div class="content">
	<div class="heading">Blog</div>

<div class="posts">
	{% for post in site.posts %}
		{% unless post.publish == false %}
			<div class="post">
				<a href="{{ post.url }}">
				<img class='thumbnail' src="{{post.thumbnail}}"/>
				</a>
				<!-- <h2><a href="{{ post.url }}">{{ post.long_title }}</a></h2> -->
			</div>
		{% endunless %}
	{% endfor %}
</div>

<!--
	<div class="posts">
	{% for post in site.posts %}
		<div class="post">
			<img class='thumbnail' src="{{post.thumbnail}}"/>
		<h2><a href="{{ post.url }}">{{ post.long_title }}</a></h2>
		</div>
	{% endfor %}
	</div>
-->
</div>