import {cars} from "../../../db/data"
import LatestCar from "./LatestCar"

const LatestCars = () => {
  return (
    <div className="text-center">
      <h2 className="text-[48.7px] font-bold pb-[47px]">Latest Cars</h2>
      <LatestCar cars = {cars} />
    </div>
  )
}

export default LatestCars
