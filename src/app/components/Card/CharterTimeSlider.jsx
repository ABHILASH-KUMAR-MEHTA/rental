import Slider from "@mui/material/Slider";
const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHour}:${mins.toString().padStart(2, "0")} ${period}`;
};

export default function CharterTimeSlider({ timeRange, onTimeChange }) {
    const handleSliderChange = (event, newValue) => {
        onTimeChange(newValue); // Use the handler passed from the parent
    };

    return (
        <div className="charter-time-slider">
            <div className="time-labels">
                {/* Display formatted time for min and max */}
                <span>{formatTime(timeRange[0])}</span>
                <span>{formatTime(timeRange[1])}</span>
            </div>
            <Slider
                track="inverted"
                aria-labelledby="track-inverted-range-slider"
                value={timeRange}
                onChange={handleSliderChange}
                className="custom-slider"
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => formatTime(value)} // Show formatted time on the label
                min={0} // Start of the day (12:00 AM)
                max={1439} // End of the day (11:59 PM)
                step={15} // 15-minute increments
                marks={false} // No intermediate dots/marks
            />
        </div>
    );
}
