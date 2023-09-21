function setClock() {
  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = ((seconds / 60) * 360) + 90;
  const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

  // Round the transform values to 6 decimal places
  const roundTo6Decimals = (value) => parseFloat(value.toFixed(6));

  secondHand.style.transform = `rotate(${roundTo6Decimals(secondDegrees)}deg)`;
  minHand.style.transform = `rotate(${roundTo6Decimals(minuteDegrees)}deg)`;
  hourHand.style.transform = `rotate(${roundTo6Decimals(hourDegrees)}deg)`;
}

setInterval(setClock, 1000); // Update every second

setClock(); // Initial call to set the initial position
