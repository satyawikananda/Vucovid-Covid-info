import { API_URL } from "@/const.js";
import moment from "moment";
export const getGlobalData = {
  data() {
    return {
      tbody: [],
      isLoading: false
    };
  },
  methods: {
    async getData() {
      try {
        this.isLoading = true;
        const { data } = await this.$http.request({
          method: "GET",
          url: `${API_URL}confirmed`
        });
        this.tbody = data;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        throw new err();
      }
    },
    getNull(provinceState) {
      if (provinceState == null) return "N/a";
      else return provinceState;
    },
    getDate(lastUpdate) {
      return moment(lastUpdate).format("DD/MM/YYYY HH:mm:ss ZZ");
    }
  },
  created() {
    this.getData();
  }
};
