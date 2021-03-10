const jsonObj = [
  {
    id: 1,
    timestamp: "2020-12-23T21:00:00Z",
    type: "L",
    entered: 23548,
    exited: 26442,
    pnl: 12.29,
    started: "2020-12-23T21:00:00Z",
    ended: "2020-12-26T22:00:00Z",
    duration: 262800000000000,
    drawdown: -4.0661627314421604,
    highestlowest: "26880 / 22590",
    leverage: 6.11,
    stoploss: -8.183306055646481,
    stoppedout: false,
    stopouts: 4,
    balance: 123601888.93941973,
    sumprofits: 953626970.2612967,
    sumlosses: 816664299.9761546,
    sumdelta: 136962670.28514218,
    sumperformance: 338.76,
  },
];

function TableRow({info}) {
  return (
    <tr>
      <th scope="row">{info.id}</th>
      <td>{info.timestamp}</td>
      <td>{info.type}</td>
      <td>{info.entered}</td>
      <td>{info.exited}</td>
      <td>{info.pnl}</td>
      <td>{info.started}</td>
      <td>{info.ended}</td>
      <td>{info.duration}</td>
      <td>{info.drawdown}</td>
      <td>{info.highestlowest}</td>
      <td>{info.leverage}</td>
      <td>{info.stoploss}</td>
      <td>{info.stopouts}</td>
      <td>{info.balance}</td>
      <td>{info.sumprofits}</td>
      <td>{info.sumlosses}</td>
      <td>{info.sumdelta}</td>
      <td>{info.sumperformance}</td>
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
              <th scope="col">id</th>
              <th scope="col">timestamp</th>
              <th scope="col">type</th>
              <th scope="col">entered</th>
              <th scope="col">exited</th>
              <th scope="col">pnl</th>
              <th scope="col">started</th>
              <th scope="col">ended</th>
              <th scope="col">duration</th>
              <th scope="col">drawdown</th>
              <th scope="col">higheslowest</th>
              <th scope="col">leverage</th>
              <th scope="col">stoploss</th>
              <th scope="col">stopouts</th>
              <th scope="col">balance</th>
              <th scope="col">sumprofits</th>
              <th scope="col">sumlosses</th>
              <th scope="col">sumdelta</th>
              <th scope="col">sumperformance</th>
            </tr>
          </thead>
          <tbody>
            {jsonObj.map((obj, i) => (
              <TableRow info={obj} key={i} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
