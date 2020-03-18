import { API_URL } from "@/const.js";
export const getMapData = {
  data() {
    return {
      center: [-0.7893, 113.9213],
      markerLatLng: [-0.7893, 113.9213],
      zoom: 8,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    };
  },
  methods: {
    async getMapsData() {
      try {
        const { data } = await this.$http.request({
          method: "GET",
          url: `${API_URL}countries/` + this.searchCountry + "/" + "confirmed"
        });
        this.center = [parseFloat(data[0].lat), parseFloat(data[0].long)];
        this.markerLatLng = [parseFloat(data[0].lat), parseFloat(data[0].long)];
        this.data.confirmed = data[0].confirmed;
        this.data.recovered = data[0].recovered;
        this.data.deaths = data[0].deaths;
        this.data.lat = data[0].lat;
        this.data.long = data[0].long;
        this.data.lastupd = data[0].lastUpdate;
      } catch (err) {
        throw new err();
      }
    }
  },
  created() {
    this.getMapsData();
  }
};
