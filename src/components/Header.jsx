function Header(props){
    return(
        <>
        <h1 className="text-3xl font-medium m-2">Hello {props.name}!</h1>
        <p className="text-xl m-2">I help you to manage your activities🙂 </p>
        </>
    )
}
export default Header;