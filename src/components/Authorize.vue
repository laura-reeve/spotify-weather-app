<template>
  <div>
    <!-- Nothing to see here, move along to /moodify -->
  </div>
</template>

<script>
export default {
  name: 'authorize',
  created: function() {
    console.log("Authorization token created");
  },
  data() {
    let hash2Obj = location.hash
      .split("&")
      .map(el => el.split("="))
      .reduce((pre, cur) => {
        pre[cur[0]] = cur[1];
        return pre;
      }, {});
    let accessCode = hash2Obj["#access_token"];
    this.$ls.set('accessToken', accessCode, 60 * 60 * 1000); // set auth token to expire in one hour
    this.$router.push({ path: `/moodify#${accessCode}`});
    return {};
  },
  methods: {}
  }
</script>