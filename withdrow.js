/// add enventlistener in withdrow button \\\
document.getElementById('withdrow-btn').addEventListener('click', function () {
    const withdrow = document.getElementById('withdrow-input');
    const withdrowString = withdrow.value;
    const withdrowAmount = parseFloat(withdrowString);
    withdrow.value = '';
    // cheak new withdrow amount valid or not \\\\
    if (isNaN(withdrowAmount)) {
        alert('please provide valid number')
        return;
    }
    /// calculate previous withdrow balance + new withdrow balance \\\ 
    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowString = withdrowTotal.innerText;
    const withdrowTotalAmount = parseFloat(previousWithdrowString);

    const totalBalance = document.getElementById('balance-total');
    const totalBalanceString = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceString);
    /// cheak withdrow amount === tatal balance  \\\
    if (withdrowAmount > totalBalanceAmount) {
        alert('Tera bap ka bank mye paisa nehi he')
        return;
    }
    const currentWithdroewTotal = withdrowTotalAmount + withdrowAmount;
    withdrowTotal.innerText = currentWithdroewTotal;
    /// calculate total balance - new withdrow amount
    const newBalanceTotal = totalBalanceAmount - withdrowAmount;
    totalBalance.innerText = newBalanceTotal;
})