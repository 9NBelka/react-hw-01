// import { useReducer } from "react";
import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendList/FriendList.jsx";
import TransactionsHistory from "../TransactionsHistory/TransactionsHistory.jsx";
import css from "./App.module.css";
import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

const App = () => {
   return (
    <>
      <ul className={css.app}>{userData.map((info) =>(
        <li key={info.id}>
          <Profile userInfo={info}/>
        </li>
))}
      </ul>
      <div className={css.friends}>{friends.map((friends) =>(
        <div key={friends.id}>
          <FriendList friends={friends}/>
        </div>
))}
      </div>
      <table>
        
          <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
          {transactions.map((transactions) =>(
        <tbody key={transactions.id}>
          <TransactionsHistory items={transactions}/>
        </tbody>
))}
      </table>
      
    </>
  )
}

export default App
