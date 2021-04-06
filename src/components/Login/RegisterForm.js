
export default function RegisterForm(props) {
    return (
        <form>
            <input type="text" id="name" class="fadeIn second" name="login" placeholder="Nickname"></input>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="ID"></input>
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"></input>
            <input type="submit" class="fadeIn fourth" value="Register!"></input>
        </form>
    )
}