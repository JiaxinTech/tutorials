---
layout: page
---

<script setup>
import { data as allPosts } from '../posts.data.mts'
import { categoriesConfig } from '../categories'
import CategoryPosts from '../CategoryPosts.vue'

const category = categoriesConfig.app
</script>

<h1>{{ category.title }}</h1>

<CategoryPosts :posts="allPosts.app"></CategoryPosts>
