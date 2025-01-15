<template>
  <div class="CommandCompoCont">
    <h1 @click="copyToClip">{{ this.command }}</h1>
    <a href="">Output</a>
    <p>Este comando muestra la configuración de la interfaz inalámbrica.</p>
    <div class="topicCont">
      <div class="topic">
        <p>Multicast</p>
      </div>
      <div class="topic">
        <p>AP join</p>
      </div>
      <div class="topic">
        <p>RF</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommandComponent",
  data() {
    return {
      command: "show dot11 wan",
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
