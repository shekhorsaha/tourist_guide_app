let makeWithdraw = (balance) => {
  return init(balance);
};

// let makeWithdraw = function (copyBalance) {
// let makeWithdraw = (copyBalance) => { //?
// function withdraw(copyBalance) {

function init(copyBalance) {
  let balance = copyBalance; // This variable is private

  let doBadThings = function () {
    console.log("Account opening with initial balance =", balance);
    balance += balance * 0.05;
  };

  doBadThings();

  return {
    withdraw: function (amount) {
      if (balance >= amount) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient money, balance =" + balance;
      }
    },

    getBalance: function () {
      return balance;
    },

    receiveMoney: function (amount) {
      balance += amount;
      return balance;
    },
  };
}

const card = makeWithdraw(100);

console.log("Balance =", card.getBalance()); // 105

console.log("After withdraw, balance =", card.withdraw(70)); // 35

console.log("Balance =", card.getBalance()); // 35;

console.log("After receive, balance =", card.receiveMoney(50)); // 85

console.log("Balance =", card.getBalance()); //85

console.log("After withdraw, balance =", card.withdraw(100)); // Insuff

console.log("Balance =", card.getBalance()); // 85

console.log("After withdraw, balance =", card.withdraw(80)); // 5

console.log("Balance =", card.getBalance()); // 5

const card2 = makeWithdraw(500);

console.log("Another card2 balance =", card2.getBalance());

console.log("After withdraw, balance2 =", card2.withdraw(80)); // 445

console.log("Another card2 balance =", card2.getBalance());

console.log("Another card1 balance =", card.getBalance());

console.log("withdraw =", makeWithdraw, "| card1 =", card, "| card2 =", card2);
