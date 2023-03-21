import home from './home.png'
function HomePage() {
    return (
        <div>
            <h1>Welcome to my website!</h1>
            <p>A home page (or homepage) is the main web page of a website. The term may also refer to the start page shown in a web browser when the application first opens.
                Usually, the home page is located at the root of the website's domain or subdomain. For example, if the domain is example.com,
                the home page is likely located at www.example.com/.</p>
                <img src={home} alt="home" width={500}/>
        </div>
    );
}
export default HomePage