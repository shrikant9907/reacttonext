import './App.css' 
import Card from './components/Card';
import cardImageSrc from "./assets/image/card-image.jpg";

function App() {
 
  return (
    <>
    <Card 
      heading={"Heading for the card"}
      buttonLabel={"Okay"}
      buttonLink={"#"}
      imgSrc={cardImageSrc}
    >
      <h4 className='mb-4 text-red-500'>This is a sub heading.</h4>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius rerum vero assumenda? Odio blanditiis deserunt alias, quo error unde quae quibusdam illum deleniti quidem, ad quod minima itaque eius.
    </Card>
    </>
  )
}

export default App
