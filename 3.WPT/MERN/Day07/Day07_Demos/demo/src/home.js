import axios from "axios";

function Home()
{

    var CallMe = ()=>{

        // // // var helper = new XMLHttpRequest();
        // // // helper.send(dataHere)

        // fetch("https://reqres.in/api/users")
        // .then((response)=>{return response.json()})
        // .then((data)=>{
        //    console.log(data)
        // })
        // .catch((error)=>{
        //     debugger;
        // });

        var dataToBeSent = {
                                "name": "morpheus",
                                "job": "leader"
                           };
        //Refer details from:
        //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        
        debugger;
        fetch("https://reqres.in/api/users",
              {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(dataToBeSent) 
              })
         .then((response)=>{
                                debugger;
                                return response.json()
                            })
         .then((data)=>{
                        debugger;
                        console.log(data)
                        })
          .catch((error)=>{
            debugger;
          });

        // axios.get("https://reqres.in/api/users")
        // .then(function (response) {
        //     // handle success
        //     console.log(response.data);
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })
    }
    return <div>
                <button onClick={CallMe}>Click Me</button>
            </div>;
}

export default Home;