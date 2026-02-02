


import { FriendList } from './component/Friend/FriendList';
import { StatisticsFn } from './component/Statistics/Statistics';
import data from './data.json'
import friends from './friends.json'
const App = () => {
return(
  <div className='main'>
    <StatisticsFn data = {data}/>
    <FriendList friends={friends} />
  </div>
)
};

export default App;
