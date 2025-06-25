import { useEffect, useState } from 'react';
import ThemeSelector from '../components/ThemeSelector';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(null);

  useEffect(() => {
    fetch('./questions.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setThemes([]);
        let t = [];
        data.forEach(q => {
          if (!t.includes(q.theme)) {
            t.push(q.theme);
          }
        });
        t.sort();
        setThemes(t);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ThemeSelector themes={themes} />
    </>
  );
}

export default HomePage;