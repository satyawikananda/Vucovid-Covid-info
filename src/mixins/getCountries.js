import { API_URL } from "@/const.js";
export const getContries = {
  data() {
    return {
      states: []
    };
  },
  methods: {
    async getCountry() {
      try {
        const { data } = await this.$http.request({
          method: "GET",
          url: `${API_URL}countries`
        });
        this.states = data.countries;
        this.states.forEach(res => {
          this.states.push(res.name);
        });
      } catch (err) {
        throw new err();
      }
    }
  },
  created() {
    this.getCountry();
  }
};
