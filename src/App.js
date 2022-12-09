import { useEffect, useState } from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  const [activeUser, setActiveUser] = useState(0);
  const users = ['AAA', 'BBB', 'XXX', 'FFF', 'SSS'];
  let id;

  const timerId = () => {
    id = setInterval(() => {
      setActiveUser((activeUser) => activeUser + 1);
    }, 120000);

    if (activeUser > users.length - 1) {
      setActiveUser(0);
    }
  };

  useEffect(() => {
    timerId();
    return () => clearInterval(id);
  }, [activeUser]);

  return (
    <div className="App">
      <div className="wrapper">
        {users.map((item, i) => (
          <div key={item} className="content">
            {activeUser === i ? (
              <div className="timer">
                <Timer />
                <img src="https://cdn-icons-png.flaticon.com/128/483/483610.png" alt="time" />
              </div>
            ) : (
              ''
            )}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
