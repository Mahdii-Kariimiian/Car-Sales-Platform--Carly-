import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CarCardSkeleton = () => {
    return (
        <div>
            <div className="container">
                {Array(12)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index} className="card">
                            <Skeleton
                                baseColor="#C1C1BF"
                                highlightColor="#999B9D"
                                height={200}
                            />
                            <div className="px-9">
                                <p className="text-xl text-left pt-5 pb-8">
                                    <Skeleton
                                        baseColor="#C1C1BF"
                                        highlightColor="#999B9D"
                                        height={20}
                                        width={200}
                                    />
                                </p>
                                <div className="card-info">
                                    <div className="text-center">
                                        <Skeleton
                                            baseColor="#C1C1BF"
                                            highlightColor="#999B9D"
                                            height={50}
                                            width={50}
                                        />
                                        <p>
                                            <Skeleton
                                                baseColor="#C1C1BF"
                                                highlightColor="#999B9D"
                                                height={20}
                                                width={50}
                                            />
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <Skeleton
                                            baseColor="#C1C1BF"
                                            highlightColor="#999B9D"
                                            height={50}
                                            width={50}
                                        />
                                        <p>
                                            <Skeleton
                                                baseColor="#C1C1BF"
                                                highlightColor="#999B9D"
                                                height={20}
                                                width={50}
                                            />
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <Skeleton
                                            baseColor="#C1C1BF"
                                            highlightColor="#999B9D"
                                            height={50}
                                            width={50}
                                        />
                                        <p>
                                            <Skeleton
                                                baseColor="#C1C1BF"
                                                highlightColor="#999B9D"
                                                height={20}
                                                width={50}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className="flex pt-5 items-end">
                                    <Skeleton
                                        baseColor="#C1C1BF"
                                        highlightColor="#999B9D"
                                        height={30}
                                        width={100}
                                    />
                                    <Skeleton
                                        baseColor="#C1C1BF"
                                        highlightColor="#999B9D"
                                        height={30}
                                        width={100}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CarCardSkeleton;
