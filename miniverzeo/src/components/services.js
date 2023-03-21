import services from './service.png'
function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Search Engine Optimization</li>
      </ul>
      <img src={services} alt="services" width={500}/>
    </div>
  );
}
export default ServicesPage