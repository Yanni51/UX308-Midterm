export function fahrenheitToCelsius(f){
    // processing
    let c = (f - 32) * 5/9

    // output
    return c
}

if (import.meta.main){
    console.log(`fahrenheitToCelsius(212)= ${fahrenheitToCelsius(212)}`)
}