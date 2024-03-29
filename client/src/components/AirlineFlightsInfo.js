import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { CircleToBlockLoading } from 'react-loadingg';
export default class AirlineFlightsInfo extends Component {
  colors = ["#003545", "#2F99A3", "#ABC74A", "#96DDCF", "#0E6488", "#424F62"];

  state = {
    airline_delays: [],
    delays_comparison: [],
    airline_delays_loading: false,
    delays_comparison_loading: false,
    testVisibility: "Chart is showing",
  };

  componentDidMount() {
    if (
      this.props !== null &&
      this.props.origin !== null &&
      this.props.destination !== null &&
      this.props.airline !== null
    ) {
      this.load(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps !== null &&
      nextProps.origin !== null &&
      nextProps.destination !== null &&
      nextProps.airline !== null
    ) {
      this.load(nextProps);
    }
  }

  async load(props) {
    const origin = props.origin.code;
    const dest = props.destination.code;
    const airline = props.airline.code;
    const yearFrom = props.yearFrom;
    const yearTo = props.yearTo;
    const month = props.month;
    const day = props.day;
    this.setState({delays_comparison_loading: true});
    this.setState({airline_delays_loading: true});

    await this.getAirlineDelays(
      origin,
      dest,
      airline,
      yearFrom,
      yearTo,
      month,
      day
    ).then((res) => {
        var other =
          100 -
          (res.carrier_delay_pct +
            res.weather_delay_pct +
            res.security_delay_pct +
            res.late_aircraft_delay_pct +
            res.nas_delay_pct);
        var airline_delays = [
          { name: "Carrier", value: res.carrier_delay_pct },
          { name: "Late Aircraft", value: res.late_aircraft_delay_pct },
          { name: "NAS", value: res.nas_delay_pct },
          { name: "Security", value: res.security_delay_pct },
          { name: "Weather", value: res.weather_delay_pct },
          { name: "Other", value: other.toFixed(2) }];
        this.setState({ airline_delays });
      })
      .catch((err) => console.log("AirlineFlightsInfo -> load -> err", err));

    await this.getDelaysComparison(
      origin,
      dest,
      airline,
      yearFrom,
      yearTo,
      month,
      day
    )
      .then((res) => {
        var delays_comparison = [
          { name: "Carrier", Target: res[0].carrier, Average: res[1].carrier },
          {
            name: "Late Aircraft",
            Target: res[0].late_aircraft,
            Average: res[1].late_aircraft,
          },
          { name: "NAS", Target: res[0].nas, Average: res[1].nas },
          { name: "Security", Target: res[0].sec, Average: res[1].sec },
          { name: "Weather", Target: res[0].weather, Average: res[1].weather }];
        this.setState({ delays_comparison });
      })
      .catch((err) => console.log("AirlineFlightsInfo -> load -> err", err));
  }

  async getAirlineDelays(origin, dest, airline, yearFrom, yearTo, month, day) {
    var url =
      "/api/flights/airline_delays?o=" +
      origin +
      "&dst=" +
      dest +
      "&a=" +
      airline +
      "&yf=" +
      yearFrom +
      "&yt=" +
      yearTo;
    
    if (month != null) {
      url += "&m=" + month;
    }

    if (month != null) {
      url += "&d=" + day;
    }

    var response = await fetch(url);
    var body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    this.setState({airline_delays_loading: false});
    console.log("Get airline delays", body);
    return body;
  }

  async getDelaysComparison(
    origin,
    dest,
    airline,
    yearFrom,
    yearTo,
    month,
    day
  ) {
    var url =
      "/api/flights/delays_comparison?o=" +
      origin +
      "&dst=" +
      dest +
      "&a=" +
      airline +
      "&yf=" +
      yearFrom +
      "&yt=" +
      yearTo;

    if (month != null) {
      url += "&m=" + month;
    }

    if (month != null) {
      url += "&d=" + day;
    }

    var response = await fetch(url);
    var body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    this.setState({delays_comparison_loading: false});
    console.log("Get delays comparison", body);
    return body;
  }

  render() {
    const { airline_delays, delays_comparison, airline_delays_loading, delays_comparison_loading } = this.state;

    return (
      <div className="charts-main">
        <div className="form-sub-header">
          {!!this.props.airline ? this.props.airline.name : ""}
        </div>
        <div>
        {airline_delays_loading || delays_comparison_loading?
          <CircleToBlockLoading color='#003545'/>
          :
          <div className="row">
            <div className="column">
              <div align="center">
                <p class="charts-title">Delay % By Type</p>
                <PieChart className="form-content" width={window.innerWidth > 400 ? 400 : 300} height={300} >
                  {console.log(this.state.testVisibility)}
                  <Pie
                    isAnimationActive={false}
                    data={airline_delays}
                    cx={window.innerWidth > 400 ? 200 :150}
                    cy={window.innerWidth > 400 ? 125 : 94}
                    outerRadius={window.innerWidth > 400 ? 80 : 65}
                    fill="#8884d8"
                    label
                  >
                    {airline_delays.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={this.colors[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend align="center"/>
                </PieChart>
              </div>
          </div>
          <div className="column">
          <div align="center">
            <p class="charts-title">
              Airline (avg minutes) delays vs. All (avg minutes) delays{" "}
            </p>
            <BarChart
              className="form-content"
              width={window.innerWidth > 400 ? 400 : 250}
              height={window.innerWidth > 400 ? 300: 200}
              data={delays_comparison}
            >
              {console.log(this.state.testVisibility)}
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend align="center" />
              <Bar dataKey="Target" fill="#96DDCF" />
              <Bar dataKey="Average" fill="#0E6488" />
            </BarChart>
          </div>
          </div>
        </div>
        }
        </div>
      </div>
    );
  }
}

AirlineFlightsInfo.propTypes = {
  origin: PropTypes.object.isRequired,
  destination: PropTypes.object.isRequired,
  airline: PropTypes.string.isRequired,
  yearFrom: PropTypes.number.isRequired,
  yearTo: PropTypes.number.isRequired,
  month: PropTypes.number,
  day: PropTypes.number,
};