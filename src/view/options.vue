<template>
  <div class="options">
    <h1>Options</h1>

    <el-row justify="center">
      <el-col
        :span="4"
        class="gh-user"
      >
        <span>
          Default GitHub user
        </span>
        <el-input
          v-model="defaultUser"
          placeholder="github username"
          spellcheck="false"
          title="default github user"
          @keyup.enter="saveDefaultUser()"
        />
      </el-col>
    </el-row>

    <el-row justify="center">
      <el-col
        :span="4"
        class="gh-apikey"
      >
        <span>
          GitHub API Token [<a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">generate</a>]
        </span>
        <el-input
          v-model="githubApiToken"
          placeholder="github api token"
          spellcheck="false"
          title="github api key"
          @keyup.enter="saveAPIToken()"
        />
      </el-col>
    </el-row>

    <el-row justify="center">
      <el-col :span="4">
        <el-button
          type="primary"
          @click="saveSettings"
        >
          Save
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import 'styles/options.scss'
import { onMounted, ref } from 'vue'
import { ElNotification } from 'element-plus'

const githubApiToken = ref('')
const defaultUser = ref('')

onMounted(() => {
  getApiKey()
  getDefaultUser()
})

function saveSettings() {
  saveAPIToken()
  saveDefaultUser()

  ElNotification({
    title: 'Success',
    message: 'Settings saved!',
    type: 'success',
    duration: 2500,
  })
}

/**
 * Get save API Key
 */
function getApiKey() {
  chrome.storage.sync.get({
    githubApiToken: '',
  }, function (items) {
    githubApiToken.value = items.githubApiToken
  })
}

/**
 * Save GitHub API Key
 */
function saveAPIToken() {
  chrome.storage.sync.set({
    githubApiToken: githubApiToken.value,
  }, function () {
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
 * Save provided user name as default for future requests
 */
function saveDefaultUser() {
  chrome.storage.sync.set({
    defaultGithubUser: defaultUser.value,
  }, async function () {
  })
}
</script>
