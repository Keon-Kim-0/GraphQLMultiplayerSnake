
export default function LoginForm(props) {
    return (
        <form>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="ID"></input>
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"></input>
            <input type="submit" class="fadeIn fourth" value="Log In"></input>
        </form>
    )
}