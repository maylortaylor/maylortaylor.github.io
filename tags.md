---
layout: default
title: Tags
---

<div class="page-content wc-container">
	<div class="post">
		<h1 class="header">Tags</h1>  
		<ul class="tags">
			{% for tag in site.tags %}
			<li>
				<i class="fas fa-tag"></i>
				<a href="{{ '/tag/' | append:tag[0] | relative_url }}">
					{{ tag[0] }}
				</a>
			</li>
			{% endfor %}
		</ul>
	</div>
</div>
