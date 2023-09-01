import { Signup } from "ui";

export default function SigninPage(){
    return  <div>
        <Signup onClick={async(username, password)=> {
            
            // const response = await axios.post("/api/signup", {
            //     username,
            //     password
            // })
        }}/>
    </div>
}