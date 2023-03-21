import about from './about.jpg'
function AboutPage() {
    return (
        <div>
            <h1>About Us</h1>
            <p>The about us page is often a reflection of the purpose and personality of the business and its owners or top employees. Finally, the page can also incorporate contact or locational information. One way to view the about us concept is as a text self-portrait or short autobiography created by a business.</p>
            <img src={about} alt="about" width={500}/>
        </div>
    );
}
export default AboutPage