import React from 'react'

function Home() {
  return (<>
            <div>

              <form>

                <input type='text' placeholder='username'/>
                <input type='password' placeholder='password'/>
                <button onClick={()=>{
                  alert("submited successfully");
                }}>submit</button>
              </form>
            </div>








    </>
  )
}

export default Home