<template>
  <div class="main">
    <div class="twitter">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAAFWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7js058cAAAD/dFJOUwAC/QX8BPv+AQP6+Af57QoOKSAL9uoiBhaCEODvNBHoGvFoDPUu1OvzEuW/3/ce2iHi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"
        alt="twitter"
      >
      <a
        href="https://twitter.com/ray_kovalev"
        class="twitter-btn"
        data-back="Alex Kovalev"
        data-front="Author"
      />
    </div>
    <div class="searchbox-wrapper">
      <div class="searchbox">
        <div class="title">
          StarWall
        </div>
        <div class="container">
          <div class="input-container">
            <input
              ref="search_box"
              v-model="searchValue"
              placeholder="Search"
              spellcheck="false"
              title="Search"
              @keyup="search()"
            >
            <div v-if="searchValue.length" class="clear-search-box" @click="clearSearchBox">✖</div>
          </div>
        </div>
      </div>
    </div>
    <el-table
      v-if="searchResults.length"
      :data="searchResults"
      stripe
      class="stars-table"
    >
      <el-table-column
        prop="stargazers_count"
        label="Stars"
        width="100"
      >
        <template #default="scope">
          ⭐&nbsp;{{ formatStars.format(scope.row.stargazers_count) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="pushed_at"
        label="Updated"
        width="160"
      >
        <template #default="scope">
          {{ timeSince(scope.row.pushed_at) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180"
      >
        <template #default="scope">
          <el-link
            :href="scope.row.html_url"
            target="_blank"
          >
            {{ scope.row.name }}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description"
      />
    </el-table>
    <div
      v-else-if="tags.length"
      class="tags"
    >
      <ul
        class="cloud"
        aria-label="stars tag cloud"
      >
        <li
          v-for="tag in tags"
          :key="tag"
        >
          <a
            href="#"
            :data-weight="tag.count"
            @click.stop.prevent="searchByTag(tag.name)"
          >
            {{ tag.name }}
          </a>
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="options-info">Options allow you to access your GitHub starred repositories</div>
      <div @click="setUpOptions" class="set-up-options">Options</div>
    </div>
  </div>
</template>

<script setup>
import 'styles/starwall.scss'
import 'styles/tagscloud.scss'
import { onMounted, watch, ref } from 'vue'
import { ElNotification } from 'element-plus'
import tinykeys from 'tinykeys'
import MiniSearch from 'minisearch'

let data = ref([])
let tags = ref([])
const apiKey = ref('')
const defaultUser = ref('')

const search_box = ref(null)
let searchValue = ref('')
const searchResults = ref([])

const formatStars = new Intl.NumberFormat('en', {
  notation: 'compact',
})

// MiniSearch initialization
const miniSearch = new MiniSearch({
  fields: ['name', 'description', 'language', 'topics'], // fields to index for full-text search
  storeFields: ['name', 'description', 'html_url', 'stargazers_count', 'pushed_at'] // fields to return with search results
})

/**
 * Watch for api token and fetch user followers stars
 */
watch(apiKey, async () => {
  if (apiKey.value !== '' && defaultUser.value !== '') {
    const followers = await fetchFollowers(defaultUser.value)
    await Promise.all(followers.map(async (user) => {
      const usrData = await fetchUserStars(user.login)
      data.value = [...new Set([...data.value, ...usrData])]
    }))
    indexData()
  }
})

/**
 * Watch for default user to be set and fetch his stars
 */
watch(defaultUser, async () => {
  if (defaultUser.value !== '') {
    const starsData = await fetchUserStars(defaultUser.value)
    data.value = [...new Set([...data.value, ...starsData])]
    indexData()
    retrieveTags()
  }
})

/**
 * Perform search
 */
function search() {
  if (defaultUser.value === '') {
    ElNotification({
      title: 'Warning',
      message: 'Please, set up default github user in options',
      type: 'warning',
      duration: 2500,
    })
    return
  }
  searchResults.value = miniSearch.search(searchValue.value, { fuzzy: 0.2 })
}

/**
 * Fetch stars of provided user
 * @param user
 * @returns {Promise<Response>}
 */
async function fetchUserStars(user) {
  const per_page = 300
  const response = await fetch(`https://api.github.com/users/${user}/starred?&per_page=${per_page}`)
  return response.json()
}

/**
 * Fetch followers of the provided user
 * @param user
 * @returns {Promise<Response>}
 */
async function fetchFollowers(user) {
  const response = await fetch(`https://api.github.com/users/${user}/following`, {
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${apiKey.value}`,
      'Content-Type': 'application/json'
    },
  })
  return response.json()
}

onMounted(() => {
  getDefaultUser()
  getApiKey()
  initHotKeys()
})

/**
 * HotKeys initialization
 * @returns {() => void}
 */
function initHotKeys() {
  return tinykeys(window, {
    'Slash': (e) => {
      if (search_box.value !== document.activeElement) {
        e.preventDefault()
        search_box.value.focus()
      }
    },
  })
}

/**
 * Retrieve Tags Cloud
 */
function retrieveTags() {
  let topics= []
  for (const repo of data.value){
    topics.push(...repo['topics'])
  }

  let weights = {}
  for (let i = 0; i < topics.length; i++) {
    weights[topics[i]] = weights[topics[i]] != null ? weights[topics[i]] + 1 : 1

  }
  for (const [key, value] of Object.entries(weights)) {
    tags.value.push({
      'name': key,
      'count': value,
    })
  }
}

/**
 * Get user's github api token from options
 */
function getApiKey() {
  chrome.storage.sync.get({
    githubApiToken: '',
  }, function (items) {
    apiKey.value = items.githubApiToken
  })
}

/**
 * Get default github user from options
 */
function getDefaultUser() {
  chrome.storage.sync.get({
    defaultGithubUser: '',
  }, function (items) {
    defaultUser.value = items.defaultGithubUser
  })
}

/**
 * Index fetched data
 */
function indexData() {
  // remove duplicates
  data.value = data.value.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.id === value.id && t.name === value.name
      ))
  )
  miniSearch.removeAll()
  miniSearch.addAll(data.value)
}

/**
 * Save data to localstorage
 * @param key
 * @param data
 */
function cacheData(key, data) {
  localStorage.removeItem(key)
  localStorage.setItem(key, JSON.stringify(data))
}

/**
 * Retrieve data from localstorage
 * @param key
 * @returns {string}
 */
function getCachedData(key) {
  return localStorage.getItem(key)
}

/**
 * Clear cached data in localstorage
 * @param key
 */
function clearCache(key) {
  localStorage.removeItem(key)
}

const epochs = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

const getDuration = (timeAgoInSeconds) => {
  for (let [name, seconds] of epochs) {
    const interval = Math.floor(timeAgoInSeconds / seconds)
    if (interval >= 1) {
      return {
        interval: interval,
        epoch: name
      }
    }
  }
}

const timeSince = (date) => {
  const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000)
  const { interval, epoch } = getDuration(timeAgoInSeconds)
  const suffix = interval === 1 ? '' : 's'
  return `${interval} ${epoch}${suffix} ago`
}

/**
 * Clear search box
 */
function clearSearchBox() {
  searchValue.value = ''
  searchResults.value = []
}

/**
 * Search By Tag
 * @param tag
 */
function searchByTag(tag) {
  searchValue.value = tag
  search()
}

/**
 * Setup GitHub options
 */
function setUpOptions() {
  let url = chrome.runtime.getURL('options.html')
  chrome.tabs.create({ url })
}

</script>