import React from 'react'
import InputRange from 'react-input-range';
import Slider from '@material-ui/core/Slider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const marks = [
  {
    value: 0,
    label: '00:00',
  },
  {
    value: 360,
    label: '06:00',
  },
  {
    value: 720,
    label: '12:00',
  },
  {
    value: 1080,
    label: '18:00',
  },
  {
    value: 1439,
    label: '23:59',
  },
];

export default function TimeSlider() {
  const [timeRange, setTimeRange] = React.useState([360,1080])
  const [timeText,setTimeText] = React.useState(['06:00','18:00'])

  const handleChange = (event, newValue) => {
    setTimeRange(newValue);
    const startTime = minuteToTime(newValue[0])
    const endTime = minuteToTime(newValue[1])
    const startTimeText =`${startTime.hours}:${startTime.minutes}`
    const endTimeText = `${endTime.hours}:${endTime.minutes}`
    setTimeText([startTimeText, endTimeText])
  };

  const minuteToTime = (timePoint) => {
    let hours = Math.floor(timePoint / 60);
    let minutes = timePoint - (hours * 60);
    if (hours < 10) {
      hours = '0' + hours
      console.log(hours,'hours')
    }
    if (minutes < 10 ) minutes = '0' + minutes;
    if (minutes == 0) minutes = '00';
    return {hours: hours, minutes: minutes};
  }

  return (
    <>
    <Typography >{timeText[0]} - {timeText[1]}</Typography>
    <Slider
      value={timeRange}
      min={0}
      step={1}
      max={1439}
      onChange={handleChange}
      marks={marks}
      aria-labelledby="range-slider"
      style={{width:'80%'}}
    />
    </>
  )
}
