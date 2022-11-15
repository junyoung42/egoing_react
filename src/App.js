import logo from './logo.svg';

const Header = ()=>{
 return<header>
  <h1><a href="index.html">WEB</a></h1>
</header>
}
const Nav = () =>{ 
  return <nav>
        <ul>
            <li><a href="">html</a></li>
            <li><a href="">css</a></li>
            <li><a href="">js</a></li>
        </ul>
    </nav>
}
const Article = (props) =>{
  
  return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}
const App = () => {
  return (
    <div className="App">
    <Header></Header>
    <Nav />
    <Article title="어서오세요!" body="웹의 세계로 초대합니다."/>
    
    </div>
  )}


export default App;





