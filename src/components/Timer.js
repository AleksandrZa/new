import { useEffect, useState } from 'react';

function Timer() {
  const [sec, setSec] = useState(59);
  const [min, setMin] = useState(1);

  useEffect(() => {
    if (sec > 0) {
      setTimeout(() => setSec(sec - 1), 1000);
    } else if (sec === 0 && min > 0) {
      setMin(min - 1);
      setSec(59);
    }
  }, [sec]);

  return (
    <>
      {sec < 10 ? (
        <span>
          00:0{min}:0{sec}
        </span>
      ) : (
        <span>
          00:0{min}:{sec}
        </span>
      )}
    </>
  );
}

export default Timer;
