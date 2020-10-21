import React, { useState } from 'react';
import { Card } from 'antd';
import DataVisualization from './DataVisualization';
import Plot from 'react-plotly.js';

import { FusionTablesLayer } from 'react-google-maps';

const MetricCard = props => {
  //change widths to look better
  const metricCardLayout = {
    display: 'flex',
    flexDirection: 'column',
    width: 600,
  };
  //housing history
  const [city1HH, setcity1HH] = useState(false);
  const [city2HH, setcity2HH] = useState(false);
  const [city3HH, setcity3HH] = useState(false);
  //income history
  const [city1IH, setcity1IH] = useState(false);
  const [city2IH, setcity2IH] = useState(false);
  const [city3IH, setcity3IH] = useState(false);

  console.log(props);
  // console.log("keys:", Object.keys(props.data[0].home_hist))
  // console.log("values:", Object.values(props.data[0].home_hist))

  return (
    <>
      <div className="search-cities" style={metricCardLayout}>
        {/* //population */}
        <h2>Population Metrics</h2>
        <Plot
          data={[
            {
              y: [props.data[0].pop],
              x: [props.data[0].city],
              type: 'bar',
              mode: 'lines+markers',
              marker: { color: 'red' },
              name: props.data[0].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length >= 2 && {
              y: [props.data[1].pop],
              x: [props.data[1].city],
              type: 'bar',
              marker: { color: 'blue' },
              name: props.data[1].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length == 3 && {
              y: [props.data[2].pop],
              x: [props.data[2].city],
              type: 'bar',
              marker: { color: 'green' },
              name: props.data[2].city,
              automargin: true,
              orientation: 'v',
            },
            // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{
            xaxis: { title: { text: 'City' } },
            yaxis: { tite: { text: 'Population' } },
            title: 'Population Total',
            showlegend: false,
          }}
        />
        <Plot
          data={[
            {
              y: [props.data[0].density_mi_sq],
              x: [props.data[0].city],
              type: 'bar',
              mode: 'lines+markers',
              marker: { color: 'red' },
              name: props.data[0].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length >= 2 && {
              y: [props.data[1].density_mi_sq],
              x: [props.data[1].city],
              type: 'bar',
              marker: { color: 'blue' },
              name: props.data[1].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length == 3 && {
              y: [props.data[2].density_mi_sq],
              x: [props.data[2].city],
              type: 'bar',
              marker: { color: 'green' },
              name: props.data[2].city,
              automargin: true,
              orientation: 'v',
            },
            // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{
            xaxis: { title: { text: 'City' } },
            yaxis: { tite: { text: 'Population' } },
            title: 'Population Density by Square Mile',
            showlegend: false,
          }}
        />
        <h2 style={{ textAlign: 'center' }}>Income</h2>
        <Plot
          data={[
            {
              y: [props.data[0].individual],
              x: [props.data[0].city],
              type: 'bar',
              mode: 'lines+markers',
              marker: { color: 'red' },
              name: props.data[0].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length >= 2 && {
              y: [props.data[1].individual],
              x: [props.data[1].city],
              type: 'bar',
              marker: { color: 'blue' },
              name: props.data[1].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length == 3 && {
              y: [props.data[2].individual],
              x: [props.data[2].city],
              type: 'bar',
              marker: { color: 'green' },
              name: props.data[2].city,
              automargin: true,
              orientation: 'v',
            },
            // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{
            xaxis: { title: { text: 'City' } },
            yaxis: { tite: { text: 'Income in Dollars' } },
            title: 'Income by Individual',
            showlegend: false,
          }}
        />
        <Plot
          data={[
            {
              y: [props.data[0].household],
              x: [props.data[0].city],
              type: 'bar',
              mode: 'lines+markers',
              marker: { color: 'red' },
              name: props.data[0].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length >= 2 && {
              y: [props.data[1].household],
              x: [props.data[1].city],
              type: 'bar',
              marker: { color: 'blue' },
              name: props.data[1].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length == 3 && {
              y: [props.data[2].household],
              x: [props.data[2].city],
              type: 'bar',
              marker: { color: 'green' },
              name: props.data[2].city,
              automargin: true,
              orientation: 'v',
            },
            // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{
            xaxis: { title: { text: 'City' } },
            yaxis: { tite: { text: 'Income in Dollars' } },
            title: 'Income by Household',
            showlegend: false,
          }}
        />
        <button
          style={{ background: '#9dc4bb' }}
          onClick={e => {
            e.preventDefault();
            setcity1IH(!city1IH);
          }}
        >
          Show Income History for {props.data[0].city}?
        </button>
        {city1IH == true && (
          <Plot
            data={[
              {
                y: Object.values(props.data[0].income_hist),
                x: Object.keys(props.data[0].income_hist),
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
                name: props.data[0].city,
                automargin: true,
                orientation: 'v',
              },
            ]}
            layout={{
              xaxis: { title: { text: 'City' } },
              yaxis: { tite: { text: 'Price in Dollars' } },
              title: 'Income History',
              showlegend: false,
            }}
          />
        )}
        {props.data.length >= 2 && (
          <button
            style={{ background: '#9dc4bb' }}
            onClick={e => {
              e.preventDefault();
              setcity2IH(!city2IH);
            }}
          >
            Show Income History for {props.data[1].city}?
          </button>
        )}
        {city2IH == true && (
          <Plot
            data={[
              {
                y: Object.values(props.data[1].income_hist),
                x: Object.keys(props.data[1].income_hist),
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
                name: props.data[0].city,
                automargin: true,
                orientation: 'v',
              },
            ]}
            layout={{
              xaxis: { title: { text: 'City' } },
              yaxis: { tite: { text: 'Price in Dollars' } },
              title: 'Income History',
              showlegend: false,
            }}
          />
        )}
        {props.data.length >= 3 && (
          <button
            style={{ background: '#9dc4bb' }}
            onClick={e => {
              e.preventDefault();
              setcity3IH(!city3IH);
            }}
          >
            Show Income History for {props.data[2].city}?
          </button>
        )}
        {city3IH == true && (
          <Plot
            data={[
              {
                y: Object.values(props.data[2].income_hist),
                x: Object.keys(props.data[2].income_hist),
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
                name: props.data[0].city,
                automargin: true,
                orientation: 'v',
              },
            ]}
            layout={{
              xaxis: { title: { text: 'City' } },
              yaxis: { tite: { text: 'Price in Dollars' } },
              title: 'Income History',
              showlegend: false,
            }}
          />
        )}
        <h3>Living Costs</h3>
        <Plot
          data={[
            {
              y: [props.data[0].house],
              x: [props.data[0].city],
              type: 'bar',
              mode: 'lines+markers',
              marker: { color: 'red' },
              name: props.data[0].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length >= 2 && {
              y: [props.data[1].house],
              x: [props.data[1].city],
              type: 'bar',
              marker: { color: 'blue' },
              name: props.data[1].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length == 3 && {
              y: [props.data[2].house],
              x: [props.data[2].city],
              type: 'bar',
              marker: { color: 'green' },
              name: props.data[2].city,
              automargin: true,
              orientation: 'v',
            },
          ]}
          layout={{
            xaxis: { title: { text: 'City' } },
            yaxis: { tite: { text: '$' } },
            title: 'Average House Pricing',
            showlegend: false,
          }}
        />
        <button
          style={{ background: '#9dc4bb' }}
          onClick={e => {
            e.preventDefault();
            setcity1HH(!city1HH);
          }}
        >
          Show Housing Price History for {props.data[0].city}?
        </button>
        {city1IH == true && (
          <Plot
            data={[
              {
                y: Object.values(props.data[0].home_hist),
                x: Object.keys(props.data[0].home_hist),
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
                name: props.data[0].city,
                automargin: true,
                orientation: 'v',
              },
            ]}
            layout={{
              xaxis: { title: { text: 'City' } },
              yaxis: { tite: { text: 'Price in Dollars' } },
              title: 'House Price History',
              showlegend: false,
            }}
          />
        )}
        {props.data.length >= 2 && (
          <button
            style={{ background: '#9dc4bb' }}
            onClick={e => {
              e.preventDefault();
              setcity2HH(!city2HH);
            }}
          >
            Show Housing Price History for {props.data[1].city}?
          </button>
        )}
        {city2IH == true && (
          <Plot
            data={[
              {
                y: Object.values(props.data[1].home_hist),
                x: Object.keys(props.data[1].home_hist),
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
                name: props.data[0].city,
                automargin: true,
                orientation: 'v',
              },
            ]}
            layout={{
              xaxis: { title: { text: 'City' } },
              yaxis: { tite: { text: 'Price in Dollars' } },
              title: 'House Price History',
              showlegend: false,
            }}
          />
        )}
        {props.data.length >= 3 && (
          <button
            style={{ background: '#9dc4bb' }}
            onClick={e => {
              e.preventDefault();
              setcity3HH(!city3HH);
            }}
          >
            Show Housing Price History for {props.data[2].city}?
          </button>
        )}
        {city3IH == true && (
          <Plot
            data={[
              {
                y: Object.values(props.data[2].home_hist),
                x: Object.keys(props.data[2].home_hist),
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
                name: props.data[0].city,
                automargin: true,
                orientation: 'v',
              },
            ]}
            layout={{
              xaxis: { title: { text: 'City' } },
              yaxis: { tite: { text: 'Price in Dollars' } },
              title: 'House Price History',
              showlegend: false,
            }}
          />
        )}
        <h3>Cost of Living Index</h3>
        <p>
          This index is retreived from{' '}
          <a href="http://coli.org/quarter-1-2019-cost-of-living-index-released-3/">
            COLI Organization
          </a>
        </p>
        <Plot
          data={[
            {
              y: [props.data[0].COLI],
              x: [props.data[0].city],
              type: 'bar',
              mode: 'lines+markers',
              marker: { color: 'red' },
              name: props.data[0].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length >= 2 && {
              y: [props.data[1].COLI],
              x: [props.data[1].city],
              type: 'bar',
              marker: { color: 'blue' },
              name: props.data[1].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length == 3 && {
              y: [props.data[2].COLI],
              x: [props.data[2].city],
              type: 'bar',
              marker: { color: 'green' },
              name: props.data[2].city,
              automargin: true,
              orientation: 'v',
            },
            // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{
            xaxis: { title: { text: 'City' } },
            yaxis: { tite: { text: '%' } },
            title: 'Cost of Living Index',
            showlegend: false,
          }}
        />
        <Plot
          data={[
            {
              y: [props.data[0].rent],
              x: [props.data[0].city],
              type: 'bar',
              mode: 'lines+markers',
              marker: { color: 'red' },
              name: props.data[0].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length >= 2 && {
              y: [props.data[1].rent],
              x: [props.data[1].city],
              type: 'bar',
              marker: { color: 'blue' },
              name: props.data[1].city,
              automargin: true,
              orientation: 'v',
            },
            props.data.length == 3 && {
              y: [props.data[2].rent],
              x: [props.data[2].city],
              type: 'bar',
              marker: { color: 'green' },
              name: props.data[2].city,
              automargin: true,
              orientation: 'v',
            },
            // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{
            xaxis: { title: { text: 'City' } },
            yaxis: { tite: { text: '$' } },
            title: 'Rent',
            showlegend: false,
          }}
        />
      </div>
    </>
  );
};
export default MetricCard;
