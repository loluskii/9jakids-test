const GamesList = ({ games }) => {
  return (
    games.map((game, index) => {
      // const cleanedDate = new Date(book.released).toDateString();
      // const authors = book.authors.join(', ');

      return (
          <div className="col-md-4" key={index}>
            <div className="shadow card mb-4" style={{width: "18rem"}} id={game.Group}>
              <img src={game.GameImage} className="card-img-top" alt={game.GameTitle} />
              <div className="card-body" id={game.Topic}>
                  <h5 className="card-title">{game.GameTitle}</h5>
                  <p className="card-text">{game.GameDescription}</p>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
          </div>
          </div>
      );
    })
  );
}
 
export default GamesList;