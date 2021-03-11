import json from "./stats_2019"
// const jsonObj = [
//   {
//     id: 1,
//     timestamp: "2020-12-23T21:00:00Z",
//     type: "L",
//     entered: 23548,
//     exited: 26442,
//     pnl: 12.29,
//     started: "2020-12-23T21:00:00Z",
//     ended: "2020-12-26T22:00:00Z",
//     duration: 262800000000000,
//     drawdown: -4.0661627314421604,
//     highestlowest: "26880 / 22590",
//     leverage: 6.11,
//     stoploss: -8.183306055646481,
//     stoppedout: false,
//     stopouts: 4,
//     balance: 123601888.93941973,
//     sumprofits: 953626970.2612967,
//     sumlosses: 816664299.9761546,
//     sumdelta: 136962670.28514218,
//     sumperformance: 338.76,
//   },
// ];

const TableRow = ({ info }) => {
  function dateString(filler, timestamp) {
    return new Date(timestamp).toLocaleDateString()
  }

  function duration(filler, timestamp) {
    var date = new Date(timestamp)
    var hours = date.getHours()
    return hours + 'h'

  }
  function round(filler, float) {
    return float.toFixed(2)
  }

  return (
    <tr>
      <th scope="row">{info.id}</th>
      <td>{dateString`${info.timestamp}`}</td>
      <td>{info.type}</td>
      <td>{info.entered}</td>
      <td>{info.exited}</td>
      <td>{info.pnl}</td>
      <td>{dateString`${info.started}`}</td>
      <td>{dateString`${info.ended}`}</td>
      <td>{duration`${info.duration}`}</td>
      <td>{round`${info.drawdown}`}</td>
      <td>{info.highestlowest}</td>
      <td>{info.leverage}</td>
      <td>{round`${info.stoploss}`}</td>
      <td>{info.stopouts}</td>
      <td>{round`${info.balance}`}</td>
      <td>{round`${info.sumprofits}`}</td>
      <td>{round`${info.sumlosses}`}</td>
      <td>{round`${info.sumdelta}`}</td>
      <td>{round`${info.sumperformance}`}</td>
    </tr>
  );
}

function App() {
  return (
    <div>
      <header>Table</header>
      <main>
        <h2>Table</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Timestamp</th>
              <th scope="col">Type</th>
              <th scope="col">Entered</th>
              <th scope="col">Exited</th>
              <th scope="col">PNL</th>
              <th scope="col">Started</th>
              <th scope="col">Ended</th>
              <th scope="col">Duration</th>
              <th scope="col">Drawdown</th>
              <th scope="col">Highest/Lowest</th>
              <th scope="col">Leverage</th>
              <th scope="col">StopLoss</th>
              <th scope="col">StopOuts</th>
              <th scope="col">Balance</th>
              <th scope="col">SumProfits</th>
              <th scope="col">SumLosses</th>
              <th scope="col">SumDelta</th>
              <th scope="col">SumPerformance</th>
            </tr>
          </thead>
          <tbody>
            {json.map((obj, i) => (
              <TableRow info={obj} key={i} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
