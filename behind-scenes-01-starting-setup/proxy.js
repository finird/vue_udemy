const initialData = {
  value: "",
  message: "",
}

const handler = {
  set(target, key, value) {
    console.info(`set ${key} to ${value} on: `, target);
    if (key === "value") {
      target.message = "Value: " + value;
    }
    target[key] = value;
  },

  get(target, key) {
    if (key === "message") {
      return "The message is: \"" + target[key] + "\"";
    }
    return target[key];
  }
}

const proxy = new Proxy(initialData, handler);

console.log(proxy.value);
console.log(proxy.message);

proxy.value = "Hello World";

console.log(proxy.value);
console.log(proxy.message);
