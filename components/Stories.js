import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";
import Story from "./Story";

console.log(faker)

function Stories() {

  const [suggestions, setSuggestions] = useState([])
  
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      id: i,
    }));
    setSuggestions(suggestions);
  }, [])


  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black' >
      {suggestions.map(profile => (
        <Story 
          key={faker.string.uuid()} 
          img={faker.image.avatar()} 
          username={faker.internet.userName()} />
      ))}
    </div>
  )

}

export default Stories