import { useAuth } from "../context/AuthContext";
import { calculateCurrentCaffeineLevel, getCaffeineAmount, timeSinceConsumption } from "../utils";

export default function History() {
    const { globalData } = useAuth();

    // Check if globalData exists and is not empty
    if (!globalData || Object.keys(globalData).length === 0) {
        return <p>No coffee history available.</p>;
    }

    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-timeline" />
                <h2>History</h2>
            </div>
            <p><i>Hover for more information!</i></p>
            <div className="coffee-history">
                {Object.keys(globalData)
                    .sort((a, b) => new Date(b) - new Date(a)) // Sort keys based on the date (convert to Date objects)
                    .map((utcTime) => {
                        const coffee = globalData[utcTime];
                        const timeSinceConsume = timeSinceConsumption(utcTime);
                        const originalAmount = getCaffeineAmount(coffee.name);
                        const remainingAmount = calculateCurrentCaffeineLevel({
                            [utcTime]: coffee
                        });

                        const summary = `${coffee.name} | ${timeSinceConsume} | $${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`;

                        return (
                            <div title={summary} key={utcTime}>
                                <i className="fa-solid fa-mug-hot" />
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
