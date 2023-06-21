export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "bfdfecf180msh24cf045f1e0ec18p1ef882jsn03d4a9ff2909",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
  };
  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers, 
  });
  const result = await response.json(); 
  return result; 
}; 

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50; // base rental price per day USD
  const mileageFactor = 0.25; // additional rate per mile driven
  const ageFactor = 0.05; // additional rate per year of vehicle age

  // calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor; 
  const ageRate = (new Date().getFullYear() - year) * ageFactor; 

  // calculate total rental per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate; 
  
  return rentalRatePerDay.toFixed(0); 
}; 