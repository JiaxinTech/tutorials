---
layout: page
---

<script setup>
import { data as allPosts } from '../posts.data.mts'
import { categoriesConfig } from '../categories'
import CategoryPosts from '../CategoryPosts.vue'

const category = categoriesConfig.agent
</script>

<h1>{{ category.title }}</h1>

<CategoryPosts :posts="allPosts.agent"></CategoryPosts>
