import './App.css' 
import Card from './components/Card'

function App() {
 
  return (
    <>
      <div className='flex justify-start items-start gap-4 p-4' >
      <Card 
      heading={"This is the card heading"}
      buttonLabel={"View More"}
      imgSrc={"https://reacttonext.com/wp-content/uploads/2024/07/build-search-auto-complete-react-js-and-tailwind-css-768x432.png"}
      buttonLink={"https://www.reacttonext.com"}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore velit esse officiis, quibusdam eligendi aperiam aliquid unde necessitatibus alias veritatis ut ipsam numquam placeat, ipsum beatae blanditiis, consequatur accusamus?
    </Card>

    <Card 
      heading={"This is the card heading"}
      buttonLabel={"View More"}
      imgSrc={"https://reacttonext.com/wp-content/uploads/2024/07/build-search-auto-complete-react-js-and-tailwind-css-768x432.png"}
      buttonLink={"https://www.reacttonext.com"}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore velit esse officiis, quibusdam eligendi aperiam aliquid unde necessitatibus alias veritatis ut ipsam numquam placeat, ipsum beatae blanditiis, consequatur accusamus?
    </Card>
    <Card 
      heading={"This is the card heading"}
      buttonLabel={"View More"}
      imgSrc={"https://reacttonext.com/wp-content/uploads/2024/07/build-search-auto-complete-react-js-and-tailwind-css-768x432.png"}
      buttonLink={"https://www.reacttonext.com"}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore velit esse officiis, quibusdam eligendi aperiam aliquid unde necessitatibus alias veritatis ut ipsam numquam placeat, ipsum beatae blanditiis, consequatur accusamus?
    </Card>
    <Card 
      heading={"This is the card heading"}
      buttonLabel={"View More"}
      imgSrc={"https://reacttonext.com/wp-content/uploads/2024/07/build-search-auto-complete-react-js-and-tailwind-css-768x432.png"}
      buttonLink={"https://www.reacttonext.com"}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore velit esse officiis, quibusdam eligendi aperiam aliquid unde necessitatibus alias veritatis ut ipsam numquam placeat, ipsum beatae blanditiis, consequatur accusamus?
    </Card>
      </div>
    </>
  )
}

export default App
