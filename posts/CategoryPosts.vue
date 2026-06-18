<template>
  <div class="category-posts-container">
    <div class="category-info">
      <p><slot></slot></p>
    </div>

    <div class="post-list">
      <a v-for="post in posts" :key="post.url" :href="withBase(post.url)" class="post-item">
        <!-- 封面图区域 -->
        <div v-if="post.cover" class="post-cover-wrapper">
          <img :src="post.cover" :alt="post.title" class="post-cover" loading="lazy" />
        </div>
        <!-- 占位图区域（若无封面） -->
        <div v-else class="post-cover-wrapper placeholder-cover">
          <span class="placeholder-icon">📄</span>
        </div>

        <div class="post-content">
          <h3 class="post-item-title">{{ post.title }}</h3>
          <div class="post-item-footer">
            <span class="read-more-text">阅读教程</span>
            <span class="post-item-arrow">→</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'

defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.category-posts-container {
  margin-top: 24px;
}
.category-info {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
  line-height: 1.6;
}
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
.post-item {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  text-decoration: none !important;
  color: var(--vp-c-text-1) !important;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
}
.post-item:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-6px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
}
.post-cover-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  background-color: var(--vp-c-bg-mute);
}
.post-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.post-item:hover .post-cover {
  transform: scale(1.05);
}
.placeholder-cover {
  display: flex;
  align-items: center;
  justify-content: center;
}
.placeholder-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  opacity: 0.3;
}
.post-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px;
}
.post-item-title {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 16px 0 !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 3.0em; /* 限制2行的高度，对齐卡片 */
  color: var(--vp-c-text-1);
}
.post-item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}
.read-more-text {
  opacity: 0.85;
  transition: opacity 0.25s ease;
}
.post-item:hover .read-more-text {
  opacity: 1;
}
.post-item-arrow {
  transition: transform 0.25s ease;
}
.post-item:hover .post-item-arrow {
  transform: translateX(4px);
}
</style>
