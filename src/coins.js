export function coinTotal(nickels, dimes, quarters, loonies, toonies){
    // processing
    let total =
        (nickels * 0.05) +
        (dimes * 0.10) +
        (quarters * 0.25) +
        (loonies * 1.00) +
        (toonies * 2.00)

    // output
    return total
}

// dev test
if (import.meta.main){
    console.log(`coinTotal(1,1,1,1,1)= ${coinTotal(1,1,1,1,1)}`)
}
