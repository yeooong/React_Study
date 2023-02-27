const User = ({ item, clickRemoveButtonHandler }) => {
    return (
  
      <div key={item.id} className='component-style'>
        {item.age} - {item.name}
        <button onClick={() => clickRemoveButtonHandler(item.id)}>x</button>
      </div>
    )
  
  
  };

export default User;