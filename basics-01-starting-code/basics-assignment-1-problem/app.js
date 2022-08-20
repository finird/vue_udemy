const app = Vue.createApp({
  data() {
    return {
      name: "TruongDL",
      age: 22,
      myImage: `https://lh3.googleusercontent.com/cSDJBnDhFmK5cFvzpkzBKU6jqwAfuEAyJ3ytchoaEYNRPlUHQ42PseUhd0aDPqQzq-1AHNLRk1y2hKX5H97E-fChbsJMOxLCA7kJpfOE8F0xGuhxemzLN9Et5FsNDRkDPFrgppmU`,
    };
  },
  methods: {
    calcAgeAfterNYears(years) {
      return this.age + (years || 0);
    },
    randomNumber: () => Math.random(),
  },
}).mount("#assignment");
