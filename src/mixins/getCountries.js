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
        this.states = Object.keys(this.states);
      } catch (err) {
        throw new err();
      }
    }
  },
  created() {
    this.getCountry();
  }
};
