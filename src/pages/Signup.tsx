import { Signup } from "ui";
import axios from "axios";

export default function SigninPage(){
    return <div>
        hit from signup
        <Signup onClick={async(username, password)=> {
            const response = await axios.post("/api/signup", {
                username,
                password
            })
            localStorage.setItem("token", response.data.token)
        }}/>
    </div>
}