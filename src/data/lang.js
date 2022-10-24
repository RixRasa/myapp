import { reactive } from "vue";

export const lang = reactive({
  value: "srb",
  changeLang() {
    this.value == "eng" ? (this.value = "srb") : (this.value = "eng");
    
  },
});