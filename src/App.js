import './App.css';


const Header =({title}) =>{
  return <header>
      <h1><a href ="index.html">{title}</a></h1>
        </header>
}
const Nav = ({topics}) =>{
  

  const liTag  = topics.map((topics)=>
      <li key={topics.id}><a href={"/read/"+ topics.id}>{topics.id}.{topics.title}</a> <br />{topics.body}</li>
  )
  
  return <nav>
  <ul>
    {liTag}
  </ul>
  </nav>  
}
  const Article = ({title, body}) =>{
   
    
      return <article>
      <h2>{title}</h2>
      {body}
    </article>
  }

function App() {
  const topics = [
    {id:1, title:'html', body:"html is ..."},
    {id:2, title:'css', body:"css is ..."},
    {id:3, title:'js', body:"js is ..."},
    

  ]


  return (
    <div className = "App">
          <Header title="웹zz" />
          <Nav topics = {topics} />
          <Article title="어서오세요" body = "웹의세계로 초대" />
       


    </div>


  );


}

export default App;