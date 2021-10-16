import { request, gql } from 'graphql-request'

let powerData = [];
let voltageData = [];
let currentData = [];

const query = gql`
  {
    samples(userID: "r6pPcyHAzJkFvPzqdlMC") {
        created
        peakVoltage
        RMSCurrent
        avgPower
    }
  }
`

function updateData() {
    return request('http://localhost:4000/graphql', query).then((data) => {
        console.log(data)
    }, reason => {
        console.error(reason)
    })
}

setInterval(updateData, 1000);

export { powerData, voltageData, currentData };