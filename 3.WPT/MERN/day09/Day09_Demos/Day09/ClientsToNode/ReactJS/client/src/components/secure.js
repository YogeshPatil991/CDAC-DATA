import { useState } from "react";

function Secure()
{
    const [books, setBooks] = useState([]);
    const [searchKeyword, setsearchKeyword] = useState("");
    const HandleChange = (args)=>{
        setsearchKeyword(args.target.value);
    }

    const Search = ()=>{
    fetch("https://www.googleapis.com/books/v1/volumes?q=" +searchKeyword )
    .then((response)=>{return response.json();})
    .then((result)=>{
            debugger;
            setBooks(result.items);
        })
    }

    return (<center>
                    <div>
                            <input type="text"
                                        value={searchKeyword}
                                        onChange={HandleChange}/>
                            <button onClick={Search}>Search</button>
                            <hr></hr>
                            {
                                books.map((book)=>{
                                return( <div>       
                                                                
                                                                        {book.volumeInfo.title}                                             
                                        </div>)
                                        
                                })
                            }
                        </div>
                </center>)
}

export default Secure;