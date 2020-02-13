import React from 'react'
import InputRange from 'react-input-range';
import Slider from '@material-ui/core/Slider';

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
  const [timeRange, setTimeRange] = React.useState([20,100]);
  // const [min ]

  const handleChange = (event, newValue) => {
    setTimeRange(newValue);
  };
  function minuteToTime(timeRange){
    let hours = Math.floor(timeRange / 60);
    let minutes = timeRange - (hours * 60);

    if (hours.length == 1) hours = '0' + hours;
    if (minutes.length == 1) minutes = '0' + minutes;
    if (minutes == 0) minutes = '00';

    console.log(hours, minutes)
    return {hours: hours, minutes: minutes};
  }

  function onChange(value){
    let start = minuteToTime(value.min);
    let end = minuteToTime(value.max);
    let nStart = start.hours + ":" + start.minutes;
    let nEnd = end.hours + ":" + end.minutes;
    if(this.props.format == 12){
      nStart += " " + start.am_pm;
      nEnd += " " + end.am_pm;
    }
    this.props.onChange({
      start: nStart,
      end: nEnd
    });
  }

  function onChangeComplete(value){
    let start = minuteToTime(value.min),
    end = minuteToTime(value.max);
    this.props.onChangeComplete({
      start: start,
      end: end
    });
  }

  function onChangeStart(value){
    let start = minuteToTime(value.min),
    end = this.minuteToTime(value.max);
    this.props.onChangeStart({
      start: start,
      end: end
    });
  }

  return (
    <>
    <p></p>
    <Slider
      value={timeRange}
      min={0}
      step={1}
      max={1439}
      onChange={handleChange}
      marks={marks}
      aria-labelledby="range-slider"
    />
    </>
  )
}
