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
      return "Master Vue!";
    },
  },
});

app.mount("#user-goal");
