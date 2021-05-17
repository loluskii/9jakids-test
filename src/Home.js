import GamesList from "./GamesList";
import useFetch from "./useFetch";
import Navbar from './Navbar';


const Home = () => {
  const { error, setData, isPending, levels, data: games } = useFetch('http://bit.ly/TeaserTask');
  // const [globalGames, setGlobalGames ] = useState
  // console.log(games)
  // console.log(levels, typeof(uniqueSet, 'levels');
  return (
    <div className="home container">
      <Navbar games={games} setData={setData} levels={levels} />
      <div className="row">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { games && <GamesList games={games} setData={setData} /> }
      </div>
    </div>
  );
}
 
export default Home;
