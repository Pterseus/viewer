<script setup>
const data = await queryContent('/').find()
</script>

<template>
  <header>
    <h1>Pterseus</h1>
    <h2>Content viewer</h2>
  </header>
  <main>
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            {{ link._path }}
            <ul>
              <li v-for="link of link.children" :key="link._path">
                <NuxtLink :to="link._path">{{ link._path }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
    <p>
      <a href="https://github.com/Pterseus/content/tree/main/data"
        >View on GitHub</a
      >
    </p>
  </main>
</template>
