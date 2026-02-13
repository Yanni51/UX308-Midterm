export function gymCost(cost, friends){
    // processing
    let discount = 0

    if (friends === 1){
        discount = 0.05
    } else if (friends === 2){
        discount = 0.10
    } else if (friends >= 3){
        discount = 0.15
    }

    let total = cost - (cost * discount)

    // output
    return total
}

if (import.meta.main){
    console.log(`gymCost(100,3)= ${gymCost(100,3)}`)
}