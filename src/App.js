import logo from './logo.svg';
import ReactPlayer from 'react-player'

const Header = ({title})=>{
 return<header>
  <h1><a href="index.html">{title}</a></h1>
</header>
}
const Nav = ({topics}) =>{ 
  // const liTag = [];
  // for(let i=0; i<topics.length; i++){
  //   liTag.push(<li key={topics[i].id}><a href={"/read/"+topics[i].id}>{topics[i].title}</a></li>)
  // }

  const liTag = topics.map((t) => <li key={t.id}><a href={"/read/" + t.id}> {t.title} </a></li>);

  
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
const App = () => {
 const topics = [ 
  {id:1, title:'html', body:'html is ...'},
  {id:2, title:'css', body:'css is ...'},
  {id:3, title:'js', body:'js is ...'}, 
]
  return (
    <div className="App">
    <Header title="웹" />
    <Nav topics={topics} />
    <Article title="어서오세요!" body="웹의 세계로 초대합니다." />

{/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}

    
    </div>
  )}


export default App;





