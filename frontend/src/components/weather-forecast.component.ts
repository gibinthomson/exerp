import WeatherService from "@/services/weather-service.service";
import store from "@/store";
import { Options, Vue } from "vue-class-component";
import { Inject, Watch } from "vue-property-decorator";

@Options({
  props: {},
})
export default class WeatherForecast extends Vue {
  @Inject("weatherService")
  public weatherService!: WeatherService;
  get placeLocation() {
    return store.state.placeLocation;
  }
  loading = false;
  weatherData: any = null;
  dataError = false;

  @Watch("placeLocation")
  watchPlaceLocation(newValue: { lat: number; lng: number }) {
    if (newValue) {
      this.loading = true;
      this.weatherService
        .getWeatherForecast(newValue.lat, newValue.lng)
        .then((res) => {
          this.weatherData = res.result;
          if (res.result.status === "nok") this.dataError = true;
          else this.dataError = false;
        })
        .catch((err) => {
          this.dataError = true;
          console.error("Error fetching weather data:", err);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
