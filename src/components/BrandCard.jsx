import { deleteIcon, editIcon } from "../helper/icons"; // Ensure icons are relevant
import useStockCalls from "../service/useStockCalls";

const TeamCard = ({ setData, team, handleOpen }) => {
  const { deleteStocks } = useStockCalls();
  const { teamName, logo, _id } = team; // Renamed fields
