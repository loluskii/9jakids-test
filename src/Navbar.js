import { useState } from 'react';

const Navbar = ({games, setData, levels}) => {
  const [search, setSearch] = useState('');

  

  const handleChange = (e) => {
      filterTopics();
      setSearch(e.target.value)
      filterTopics();
    
  }

  const filterTopics = () => {
  
  if(!search || games.length === 0){ setData(

    [
      {
        "GameTitle": "Before and After",
        "GameDescription": "Before and After Yr 2 (prefix and suffix)",
        "Topic": "Word Works and Spelling",
        "Group": "Academic",
        "Level": "Key Stage 1",
        "Subject": "English",
        "GameImage": "https:partners.9ijakids.com index.php thumbnail?game=Before and After"
      },
      {
        "GameTitle": "Communication",
        "GameDescription": "Communication Yr 2 (different ways we can communicate)",
        "Topic": "Social Studies",
        "Group": "Academic",
        "Level": "Key Stage 1",
        "Subject": "Social Studies",
        "GameImage": "https: partners.9ijakids.com index.php thumbnail?game=Communication"
      },
      {
        "GameTitle": "Kiddiepreneur 101",
        "GameDescription": "Kiddiepreneur 101 (Intro to Earning and Spending)",
        "Topic": "Financial Literacy",
        "Group": "Financial Literacy",
        "Level": "Financial Literacy",
        "Subject": "Financial Literacy",
        "GameImage": "https:  partners.9ijakids.com index.php thumbnail?game=Kiddiepreneur 101"
      },
      {
        "GameTitle": "Money Matters",
        "GameDescription": "Money Matters (Intro to Key Financial Terms)",
        "Topic": "Financial Literacy",
        "Group": "Financial Literacy",
        "Level": "Financial Literacy",
        "Subject": "Financial Literacy",
        "GameImage": "https:  partners.9ijakids.com index.php thumbnail?game=Money Matters"
      },
      {
        "GameTitle": "Maths Pop",
        "GameDescription": "Maths Pop (writing numbers in word, sequencing & ordinal numbers)",
        "Topic": "Number Sense",
        "Group": "Academic",
        "Level": "Key Stage 1",
        "Subject": "Mathematics",
        "GameImage": "https:  partners.9ijakids.com index.php thumbnail?game=Maths Pop"
      },
      {
        "GameTitle": "Exploring Life",
        "GameDescription": "Exploring Life KS",
        "Topic": "Living Things & Non-Living Things",
        "Group": "Academic",
        "Level": "Key Stage 1",
        "Subject": "Science",
        "GameImage": "https:  partners.9ijakids.com index.php thumbnail?game=Exploring Life"
      },
      {
        "GameTitle": "Mathsmania City - Decimals",
        "GameDescription": "Mathsmania City - Decimal",
        "Topic": "Decimals, Fractions & Percentage",
        "Group": "Academic",
        "Level": "Key Stage 2",
        "Subject": "Mathematics",
        "GameImage": "https:  partners.9ijakids.com index.php thumbnail?game=Mathsmania City - Decimals"
      }
    ]
  )
}
  else setData(games.filter((_, i, arr) => arr[i].Topic.toLowerCase().includes(search))); 
  
}

  

  return (
    <nav className="navbar">
      <h1>9JAKIDS </h1>
      <div className="links">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" onChange={(e) => handleChange(e)} type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>

      <select>
        {
          levels?.map((level, i)=> <option key={i} value={level}>{ level }</option>)
        }
      </select>

    </nav>
  );
}
 
export default Navbar;