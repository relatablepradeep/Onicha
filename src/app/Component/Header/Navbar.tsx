import Link from "next/link";



export default function  NavBar(){

  return(

    <>

    <nav className="flex justify-center pt-9   ">

    <div className="space-x-24 text-2xl">

      <Link href='/' >


      Docs
      
      </Link>

       <Link href='/' >


      Notes
      
      </Link>

       <Link href='/' >


      Projects
      
      </Link>

       <Link href='/' >


      Course
      
      </Link>

       


    
    
    
    </div>
    
    
    </nav>
    
    
    
    </>
  )
}