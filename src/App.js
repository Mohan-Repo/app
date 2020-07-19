import React from "react";
import { Cards, Chart, CountryPicker } from "./components/";
import styles from "./App.module.css";
import fetchData from "./api";
import coronaImage from "../src/image/image.png";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchDate = await fetchData();
    this.setState({ data: fetchDate });
  }

  handleChangeCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID_19" />=
        <Cards data={data} />
        <CountryPicker handleChangeCountry={this.handleChangeCountry} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
