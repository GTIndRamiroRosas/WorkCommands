<template>
  <div class="shortCutContainer">
    <h1>{{ this.title }}</h1>
    <pre @click="copyToClip" class="sc-command">{{ this.command }}</pre>
    <p class="sc-comment">{{ this.comment }}</p>
  </div>
</template>

<script>
export default {
  name: "ShortCutComponent",
  data() {
    return {
      title: "OTA con ACL",
      command: "Como \n es que se \ntiene que hacer \n para equis",
      comment: "Este es un commentario que la verdad da igual",
    };
  },
  methods: {
    copyToClip() {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(this.command)
          .then(() => {
            console.log("Text copied to clipboard");
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
          });
      } else {
        console.error("Clipboard API not available");
      }
    },
  },
};
</script>
