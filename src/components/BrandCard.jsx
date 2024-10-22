import { deleteIcon, editIcon } from "../helper/icons"; // Ensure icons are relevant
import useStockCalls from "../service/useStockCalls";

const TeamCard = ({ setData, team, handleOpen }) => {
  const { deleteStocks } = useStockCalls();
  const { teamName, logo, _id } = team; // Renamed fields
  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 border-2 border-[#ABFB60]">
      <img
        alt="Team Logo"
        src={logo} // Changed to logo
        className="h-56 w-full rounded-md object-contain"
      />
      <div className="mt-2">
        <dl className="flex justify-between">
          <div>
            <dt className="sr-only">Team Name</dt>
            <dd className="text-md text-gray-500 font-bold">{teamName}</dd> {/* Changed to teamName */}
          </div>
        </dl>
        <div className="flex justify-end">
          <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
            <button
              className="inline-block border-e p-3 text-gray-900 bg-[#ABFB60] hover:bg-gray-200 focus:relative"
              title="Edit Team"
              onClick={() => { handleOpen(); setData(team); }} // Updated to team
            >
              {editIcon}
            </button>
            <button
              className="inline-block p-3 text-gray-900 bg-[#ABFB60] hover:bg-gray-200 focus:relative"
              title="Delete Team"
              onClick={() => deleteStocks("teams", _id)} // Updated to teams
            >