const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "<h1>Embedded HTML</h1>",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const value = Math.random();
      if (value < 0.5) {
        return "Master Vue!";
      }
      return "Go pro Vue!";
    },
  },
});

app.mount("#user-goal");
