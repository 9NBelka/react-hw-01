import css from './TransactionsHistory.module.css';
import clsx from "clsx" 
// let changeColor = css.whiteline;
let count = 0;

const TransactionsHistory = ({items:{type,amount,currency}}) => {
  
  
  count++;


  console.log(count)
  const tableColor = clsx(css.tableStyle, count / 2 ? css.greyLine : css.whiteline)
  return( 
        <tr className={tableColor}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
  )
}

export default TransactionsHistory