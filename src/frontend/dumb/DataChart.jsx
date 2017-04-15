import React from 'react';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import { Link } from 'react-router';

charts(fusioncharts);

const styles = {
  bodyStyle : {
    overflow:'visible',
    width : '200%',
  },
  wrapper : {
    position : 'absolute',
    top : '50%',
    width : '125%',
    height : '200%',
    marginTop : '-100px',
  },
  header : {
    marginRight : '60px',
  }
};


    const myDataSource = (passedData, type) => {
        const dataSource = {
            chart : chartsType[type],
            data : passedData.map(doc => makeData(doc, type))
        };
        return dataSource;
    }

    const chartsType = {
        reservations : {
            caption: "Shoes Revservations Report",
            subCaption: "Top shoes being reserved by revenue",
            numberPrefix: "$",
            theme: "ocean",
        },
        purchases : {
            caption: "Shoes Purchase Report",
            subCaption: "Top 5 shoes being purchased by revenue",
            numberPrefix: "$",
            theme: "ocean"
        }
    }


    const makeData = (data, type) => {
        return {
            label : data.name,
            value : data[type].length,
        }
    }
    const revenueChartConfigs = (data, type) => {
        // console.log(data, ' ta data');
        const config = {
        id: "revenue-chart",
        type: "column2d",
        width: "80%",
        height: 400,
        dataFormat: "json",
        dataSource: myDataSource(data, type)
    }
        return config;
    }
    

    const shoesChart = ({data, type}) => (
        <div style={styles.wrapper}>
        <ReactFC {...revenueChartConfigs(data, type)} />
        </div>
    );

    export default shoesChart;