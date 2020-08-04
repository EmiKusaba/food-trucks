import React from 'react'
import mapboxgl from "mapbox-gl";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMap: false,
    }
  }

  componentDidMount() {
    this.fetchMap();
  }

  fetchMap() {
    const address = this.props.address;
    if(!address) {
      return;
    }

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?country=US&access_token=pk.eyJ1IjoiZW1pa3VzYWJhIiwiYSI6ImNrOWxudHVhaDBlNDIzZnFzZHk5YTlmeG8ifQ.tnFptw0938NlNdsem5LuRA`
    fetch(url)
      .then(res => res.json())
      .then(response => {
        this.createMap(response);
      });
  }

  createMap(geocode) {
    if (!geocode) {
      return;
    }

    if (!geocode.features) {
      return;
    }

    const feature = geocode.features[0];
    const lng = feature.center[0];
    const lat = feature.center[1];

    mapboxgl.accessToken = "pk.eyJ1IjoiZW1pa3VzYWJhIiwiYSI6ImNrOWxudHVhaDBlNDIzZnFzZHk5YTlmeG8ifQ.tnFptw0938NlNdsem5LuRA";
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: this.props.zoom || 16,
    });

    new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map);

    this.setState({
      hasMap: true,
    });
  }

  render() {
    if(!this.state.hasMap) {
      this.fetchMap();
    }

    const map = (
      <div>
        <div ref={el => this.mapContainer = el}
          style={{ height: "400px", width: "100%" }}
        />
      </div>
    );

    return map;
  }
}

export default Map;