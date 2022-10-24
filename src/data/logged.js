import { reactive } from "vue";

export const logged = reactive({
  value: false,
  changeLang() {
    if(this.value == true){localStorage.removeItem('CurrentUser');localStorage.removeItem('CurrentUser');}
    this.value == false ? (this.value = true) : (this.value = false);
    
  },
});