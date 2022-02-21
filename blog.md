---
layout: default
title: Blog
css: assets/css/blog.css
---

<div class="content">
	<div class="heading">Blog</div>

<div class="posts">

	{% for post in site.posts %}
		<div class="post">
			<a href="{{ post.url }}">
			<img class='thumbnail' src="{{post.thumbnail}}"/>
			</a>
			<!-- <h2><a href="{{ post.url }}">{{ post.long_title }}</a></h2> -->
		</div>
	{% endfor %}
<!--

		<div class="post">
			<img class='thumbnail' src="/assets/posts/mistakes/thumbnail.png"/>
		</div>
		<div class="post">
			<img class='thumbnail' src="/assets/posts/mistakes/thumbnail.png"/>
		</div>
		<div class="post">
			<img class='thumbnail' src="/assets/posts/mistakes/thumbnail.png"/>
		</div>
		<div class="post">
			<img class='thumbnail' src="/assets/posts/mistakes/thumbnail.png"/>
		</div>
-->

<!--
	<div class="post">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</div>

	<div class="post">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</div>

	<div class="post">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</div>

	<div class="post">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</div>

	<div class="post">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</div>

	<div class="post">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</div>
-->
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