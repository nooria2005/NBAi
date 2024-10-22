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