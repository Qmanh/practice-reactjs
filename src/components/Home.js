import logoHome from "../assets/images/homee.jpg";
const Home = ()=>{

    return (
        <>
            <div className="home-container">
                <img
                src={logoHome}
                // width="1000"
                // height="1000"
                className="d-inline-block align-center"
                alt="React Bootstrap logo"/>

            </div>
        </>
    )
}
export default Home;