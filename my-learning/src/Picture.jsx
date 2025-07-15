function profilepicture(){
    const imageurl="C:\Users\mahek\OneDrive\Desktop\website\my-learning\src\images2.jpeg";
    const handleClick=(e)=>e.target.style.display="none";
    return (<img  onClick={handleClick} src={imageurl}></img>)
}
export default profilepicture