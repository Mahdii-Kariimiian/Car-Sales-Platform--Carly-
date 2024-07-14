import {cars} from "../../../db/data"
import LatestCar from "./LatestCar"

const LatestCars = () => {
  return (
    <div className="text-center pb-9">
      <h2 className="text-5xl font-bold pb-12">Latest Cars</h2>
      <LatestCar cars = {cars} />
    </div>
  )
}

export default LatestCars
