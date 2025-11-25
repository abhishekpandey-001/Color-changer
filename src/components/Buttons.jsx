const Buttons = (props) => {

    function changeColor(){
        props.func(props.colors)
    }



  return (
    <div className='flex p-3'>
      <button style={{
        backgroundColor: `${props.colors}`,
        color: 'black'
      }} onClick={changeColor}>{props.colors}</button>
    </div>
  )
}

export default Buttons
