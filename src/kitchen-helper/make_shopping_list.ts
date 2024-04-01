// see README

// TODO: nested map
const INVENTORY = new Map()

INVENTORY.set('apples', { "qty": 5 })
INVENTORY.set('beef', { "amount": 470, "unit": "g" })
INVENTORY.set('tea', { "amount": 30, "unit": "g" })

// To verify if a key exists.
// Outputs: true
console.log(INVENTORY.has('apples'))
console.log(`Number of apples: ${INVENTORY.get('apples')}`)

// const INVENTORY = {
//     "apples": { "qty": 5 },
//     "beef": { "amount": 470, "unit": "g" },
//     "tea": { "amount": 30, "unit": "g" },
// }

// const PEOPLE = 4
// const RECIPE = "tacos"
