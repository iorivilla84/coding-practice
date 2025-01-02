const formatNumber = (number) => {
    // Convert to string if it's a number
    // if (typeof number === 'number') {
    //   number = number.toString();
    // }
  
    // // Check if the input is a valid string
    // if (typeof number !== 'string') {
    //   throw new Error('Invalid input: input must be a number or a string');
    // }
  
    // let formattedNum = '';
    // if (number.length > 0) {
    //   formattedNum = number.substring(0, 2);
    // }
    // if (number.length > 3) {
    //   formattedNum += ',' + number.substring(3, 6);
    // }
    // if (number.length > 5) {
    //   formattedNum += ',' + number.substring(6, 9);
    // }
  
    // return formattedNum;
  
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  export { formatNumber };
  