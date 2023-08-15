// What's hard?

// x Everything - how do we separate it out <- The zeroth hard part (I'm zero indexing my count of "hard parts", because I know about arrays :) 
// x Order: complex conditional logic - break down all the ifs <- The first hard part
// x Employee digit numbers - how do we get what we want out of nested data, so we can use it in our ifs
// x Do we need an accumulator?  Temporarily storing data.
// x Understanding the output format, what does it look like: what is all this stuff?  How should it be formatted?  <- The second hard part
//    We call this "Business logic".  If you like this, backend development may be your jam.
// x How do we ask for help?
// x if vs else vs else if

// THE PLAN

// x loop over employees
// x pass each employee into my function, do this inside the loop

// x console log the result of each loop iteration

// make a function that takes in each employee 
// function input
// note to self, employee looks like: 
//  {
//   name: 'Atticus',
//   employeeNumber: '2405',
//   annualSalary: '47000',
//   reviewRating: 3
// }

// x return a new object
// x function output
//  {
//   name: same as name input,
//   bonusPercentage: calculate this, see blow,
//   totalCompensation: base annual + bonus,
//   totalBonus: should be the employee's total bonus rounded to the nearest dollar,
// }



// how to calculate bonusPercentage
// x Those who have a rating of a 2 or below should not receive a bonus.
// x Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// x Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// x Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.


// x If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.

// x However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// x No bonus can be above 13%
// x below 0% total.



// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// console.log('array of employee data: ', employees);


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (let employee of employees) {


  let employeeBonusData = calculateIndividualEmployeeBonus(employee);
  // console.log(`employeeBonusData for ${employee.name}: `, employeeBonusData);

}


// This function will calculate 1 employee's bonus!
//

// function input
//  {
//   name: 'Atticus',
//   employeeNumber: '2405',
//   annualSalary: '47000',
//   reviewRating: 3
// }
function calculateIndividualEmployeeBonus(employee) {

  console.log(employee);

  // goal is turn this:
  // employee = 
  //  {
  //   name: 'Atticus',
  //   employeeNumber: '2465498405',
  //   annualSalary: '47000',
  //   reviewRating: 3
  // }

  // into this
  // bonusData =
  //  {
  //   name: same as name input,
  //   bonusPercentage: calculate this, see blow,
  //   totalCompensation: base annual + bonus,
  //   totalBonus: should be the employee's total bonus rounded to the nearest dollar,
  // }

  // accumulator
  let bonusPercentage = 0;

  // if vs else if vs else

  // Those who have a rating of a 2 or below should not receive a bonus.
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  }
  // Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
  if (employee.reviewRating === 3) {
    bonusPercentage = 0.04;
  }
  // Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
  if (employee.reviewRating === 4) {
    bonusPercentage = 0.06;
  }
  // Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
  if (employee.reviewRating === 5) {
    bonusPercentage = 0.10;
  }


  // If their employee number is 4 digits long and should receive an additional 5%.
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 0.05
  }
  // However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
  if (parseInt(employee.annualSalary) > 6500) {
    bonusPercentage -= 0.01;
  }
  // No bonus can be above 13%
  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  }
  //below 0% total.
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  let bonus = bonusPercentage * parseInt(employee.annualSalary);

  // Note, This is tricky, because we needed to use bonusPercentage to calculate bonus.
  // Then we use bonus to calculate totalCompensation.

  let bonusData = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: parseInt(employee.annualSalary) + bonus,
    totalBonus: bonus,
  };

  return bonusData;
}

let testEmployee = {
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3
};

// console.log(calculateIndividualEmployeeBonus(testEmployee));
