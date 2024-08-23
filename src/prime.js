export const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  export const generateRound = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const question = number.toString();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  
  export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  