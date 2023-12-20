function Navbar(props) {
  return (
    <nav class="navbar">
      <div class="logos">
        <img class="logo" src="https://flowbite.com/docs/images/logo.svg" />
        <span class="GeekFoods">GeekFoods</span>
      </div>

      {/* lists */}
      <ul>
        <li>Home</li>
        <li>Quote</li>
        <li>Resturants</li>
        <li>Foods</li>
        <li>Contact</li>
      </ul>
      <div class="btn">
        <button class="getStarted">Get Started</button>
      </div>
    </nav>
  );
}
export default Navbar;
