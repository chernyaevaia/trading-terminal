import styles from './BidList.module.css'



export function BidList() {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableHeader}>
          <th>ID</th>
          <th>Creation Time</th>
          <th>Change Time</th>
          <th>Status</th>
          <th>Side</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tbody>
            <tr>
              <td>1</td>
              <td>22.02.2023</td>
              <td>22.02.2023</td>
              <td>Active</td>
              <td>Buy</td>
              <td>33.89</td>
              <td>10 000</td>
              <td>USD/RUB</td>
            </tr>
      </tbody>
    </table>
  );
}
