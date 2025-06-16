import { useEffect, useState } from 'react';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
    </>
  );
}

export default HomePage;