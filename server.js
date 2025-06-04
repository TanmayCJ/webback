const express_server = require('express');
const app = express_server();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to access the server`);
});
 
app.get('/', (req, res) => {
  const student = {
    name: 'Anakin Skywalker',
    age: 22,   
    course: 'Jedi Training',
    skills: ['Lightsaber Combat', 'Force Powers', 'Piloting'],
    trainer: 'Jedi Master',
    mentor: 'Obi-Wan Kenobi',
    lore: 'Anakin Skywalker, once a promising Jedi Knight, fell to the dark side and became Darth Vader. His journey is a tragic tale of heroism, betrayal, and redemption. Anakin was known for his exceptional piloting skills and strong connection to the Force. Despite his fall, he remains a pivotal figure in the Star Wars saga, symbolizing the struggle between good and evil.',
    achievements: 'eradicated the Sith, restored balance to the Force, and redeemed himself through acts of bravery and sacrifice.',
    story: 'Anakin Skywalker was discovered as a slave on the desert planet of Tatooine. He was trained as a Jedi by Obi-Wan Kenobi and became a hero of the Clone Wars. However, his fear of losing loved ones led him to make tragic choices, ultimately becoming Darth Vader. His story is one of tragedy, redemption, and the enduring power of hope.',
    image: 'https://example.com/anakin-skywalker.jpg',
  }

     
  res.json(student);
});
    
 