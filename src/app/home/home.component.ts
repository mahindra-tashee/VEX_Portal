import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexNonAxisChartSeries, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill:ApexFill;
  grid: ApexGrid;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions1: Partial<ChartOptions>={
    chart: {
      type: 'bar',
      height : 250,
      toolbar : {
        show: false
      }
    },
    series: [
      {
        name: 'Data Series',
        data: [31, 40, 28, 51, 42, 109, 100],
      }
    ],
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','June','July','August']
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      show: false,
    }
  };
  public chartOptions2: Partial<ChartOptions>={
    chart: {
      type: 'area',
      height : 250,
      toolbar : {
        show: false
      }
    },
    series: [
      {
        name: 'Data Series',
        data: [31, 40, 28, 51,45,72]
      }
    ],
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','June'],
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false 
      }
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#FFA500'] 
    },
    fill: {
      type: 'gradient',
      colors: ['#FFBD73'] 
    },
  };
  public chartOptions3: Partial<ChartOptions>={ series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "straight"
  },
  grid: {show:true
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  }
  };
  chartSeries: ApexNonAxisChartSeries =[40,32,28,55];

  chartDetails:ApexChart={
    type:'pie',
  }

  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: 19.0760, lng: 72.8777 },
    zoom: 4,
  };
  constructor() {

   }

  ngOnInit(): void {

  }

}
