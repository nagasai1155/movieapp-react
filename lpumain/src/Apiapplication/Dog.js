import React from 'react';
import './Demo.css'
function Dog({category,title,image,price}){
    return(
<>
<div className='card'>
<h1>category:{category}</h1>
<h2>title:{title?title.slice(0,20):"nothing is there"}</h2>
<img src={image}/>
<h2>${price}</h2>

</div>



</>
    )
}
export default Dog;