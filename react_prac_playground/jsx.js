// // html
// <p style="color: orange; font-size: 20pxs">orange</p>

// jsx
<p style={{color:'orange', fontSize: '20px'}}>orange</p> // object로 값을 전달하고, 그것을 중괄호로 감싸서 전달한다.

function App() {
  // JSON 형식으로 값을 준다
  const style = {
    color: 'orange', 
    fontSize: '20px',
  };

  return (
    <div className='App'>
      <p style={style}>oranges</p>
    </div>
  )
}