function calculateWacthTime(times) {
  if (!Array.isArray(times)) {
    return "INVALID";
  }

  let totalSeconds = 0;
  for (let i = 0; i < times.length; i += 1) {
    totalSeconds = totalSeconds + times[i];
  }

  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds % 3600) / 60);
  let second = totalSeconds % 60;
  return {
    hour: hour,
    minute: minute,
    second: second,
  };
}

console.log(calculateWacthTime([5000, 500, 6000, 300]));
