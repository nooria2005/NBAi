import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
  const BarChart = () => {
    const {purchases } = useSelector((state) => state.stock)
    const totalPurchases = purchases?.map((item)=>(item.amount)) || []
    const date = purchases?.map((item)=>new Date(item.createdAt).toLocaleDateString("tr-TR"))
    const chartConfig = {
        type: "bar",
        height: 240,
        series: [
          {
            name: "Sales",
            data: totalPurchases,
          },
        ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#ABFB60"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: date,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  return (
    <Card className="shadow-lg flex-1">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem libero voluptates, quis accusamus iste.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0 ">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    )
  }
  
  export default BarChart
