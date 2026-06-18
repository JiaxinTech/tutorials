---
layout: page
---

<script setup>
import { data as allPosts } from '../posts.data.mts'
import { categoriesConfig } from '../categories'
import CategoryPosts from '../CategoryPosts.vue'

const category = categoriesConfig.codex
</script>

<h1>{{ category.title }}</h1>

<CategoryPosts :posts="allPosts.codex"></CategoryPosts>
