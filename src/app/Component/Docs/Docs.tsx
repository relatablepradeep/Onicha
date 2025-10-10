import Card, { CardItem } from "../../Animation/Card";

const sampleCards: CardItem[] = [
  {
    id: 1,
    title: "Alejandro Escamilla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/id/21/200/300",
  },
  {
    id: 2,
    title: "Shyamanta Baruah",
    description: "Provident rerum quae nemo eligendi fugiat!",
    image: "https://picsum.photos/id/30/200/300",
  },
  {
    id: 3,
    title: "Luke Chesser",
    description: "Natus maiores accusantium cumque atque voluptatem.",
    image: "https://picsum.photos/id/39/200/300",
  },
];



export default function Docs(){

    return(

        <div className=" w-1/2 h-1/2  ">

            <div className="bg-white   h-[71vh] w-[189vh]  top-24 left-42  fixed  ">

                
              <main className=" flex items-center justify-center  p-28">
      <Card items={sampleCards} autoPlay interval={1000} />
    </main>




            </div>

        </div>
    )
}