const events = [
    {
        name: "Tournament 1",
        image: "/resources/hero-egame.jpg",
        price: "$10",
        schedule: "May 10, 2024",
        mode: "Single Elimination",
        status: "Coming soon"
    },
    {
        name: "Tournament 2",
        image: "/resources/hero-egame.jpg",
        price: "$20",
        schedule: "June 5, 2024",
        mode: "Round Robin",
        status: "Live"
    },
    {
        name: "Tournament 3",
        image: "/resources/hero-egame.jpg",
        price: "Free",
        schedule: "July 20, 2024",
        mode: "Double Elimination",
        status: "Coming soon"
    }
];

const templates = [
    {
        name: "Homepage",
        card: `<div class="scr-img">
            <img src="" alt="">
          </div>
          <h2></h2>
          <ul>
            <li><i class="fas fa-ticket-alt"></i> <span id="price"></span></li>
            <li><i class="fas fa-calendar"></i><span id="schedule"></span></li>
            <li><i class="fas fa-map-marker-alt"></i><span id="mode"></span></li>
          </ul>
          <div class="scr-btn">
            <button class="scr-join">Join now</button>
            <button class="save"><i class="fas fa-bookmark"></i></button>
          </div>
          <div class="tag"></div>`
    }
];

// Export the data array
export { events, templates };
