
/// step-1 = add eventlistener in click button\\\
const deposit = document.getElementById('deposit-btn').addEventListener('click', function () {
    const amountInput = document.getElementById('amount-input');
    const amountValue = amountInput.value;
    const newDeposit = parseFloat(amountValue);
    amountInput.value = '';
    /// cheak deposit number valid or not\\\
    if (isNaN(newDeposit)) {
        alert('please provide valid number')
        return;
    }
/// calculate privious deposit balance + new deposit \\\
    const depostiBalance = document.getElementById('deposit');
    const depositTotal = depostiBalance.innerText;
    const totalDepositAmount = parseFloat(depositTotal);

    const tatalDeposit = newDeposit + totalDepositAmount;
    depostiBalance.innerText = tatalDeposit;
/// calculate total deposit + total balance \\\
    const totalBalance = document.getElementById('balance-total');
    const tatalBalanceString = totalBalance.innerText;
    const previousBalanceAmount = parseFloat(tatalBalanceString)
    const totalBalanceAmount = previousBalanceAmount + newDeposit;
    totalBalance.innerText = totalBalanceAmount;


})