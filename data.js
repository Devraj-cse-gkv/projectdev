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
        name: "card",
        code: `<div class="scr-img">
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
    },
    {
        name:"nav",
        code:`<div class="nav-left" id="nav-left">
        <a id="toggleNav" onclick="toggleNav()" href="#"><img style="border-radius: 0;" src="/resources/icons8-hamburger-menu-48.png"
            alt=""></a>
        <a href="#">
          <img id="logo" src="/resources/logo.png" alt="">
        </a>
        <a href="#">My tournament</a>
      </div>
      <div class="nav-right" id="nav-right">
        <div class="nav-link" id="nav-link">
          <a href="#">Home</a>
          <a href="#">Tournament</a>
          <a href="#">Blogs</a>
          <a href="#">Login</a>
        </div>
        <div class="user" id="user">
          <a href="#" onclick="toggleUser()"><img id="userImg" src="/resources/icons8-user-64.png" alt="user icon">
            <img id="togimg2" src="/resources/icons8-dropdown-50.png" alt=""></a>
          <!-- <input type="search" class="search-input" id="searchInput" placeholder="Search..."> -->
          <div class="user-opt" id="userOpt">
            <ul>
              <li><a href="">My profile</a></li>
              <li><a href="">Dashboard</a></li>
              <li><a href="">leaderboards</a></li>
              <li><a href="">Notices</a></li>
            </ul>
          </div>
        </div>
      </div>`,
        navlink:[
            {
                name:"Home",
                link:"homepage"
            },
            {
                name:"Tournament",
                link:"tournament.html"
            },
            {
                name:"Blogs",
                link:"blogs.html"
            },
            {
                name:"Login",
                link:"login.html"
            }
        ]
    },{
        name:"sidebar",
        code:`<div class="side-close">
        <a id="togglesidebar" onclick="toggleNav()" href="#"><img src="/resources/icons8-cross-50.png" alt=""></a>
      </div>
      <div class="sidebar-content">
        <div class="logo">
          <img src="/resources/logo.png" alt="">
        </div>
        <hr>
        <h2>Welcome,sub1</h2>
        <hr>
        <div class="side-links">
          <ul>
            <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="#"><i class="fas fa-trophy"></i> Tournament</a></li>
            <li><a href="#"><i class="fas fa-blog"></i> Blogs</a></li>
            <li><a href="#"><i class="fas fa-envelope"></i> Contact Us</a></li>
            <li><a href="#"><i class="fas fa-info-circle"></i> About Us</a></li>
          </ul>
        </div>
        <hr>
        <div class="side-main">
          <ul>
            <li><a href="">Link1</a></li>
            <li><a href="">Link2</a></li>
            <li class="dropdown" id="dropdown">
              <a href="#" onclick="togSide()">Link3
                <img id="tog-img" src="/resources/icons8-dropdown-50.png" alt="">
              </a>
              <ul class="dropdown-menu" id="dropdown-menu">
                <li><a href="">submenu</a></li>
                <li><a href="">submenu</a></li>
                <li><a href="">submenu</a></li>
                <li><a href="">submenu</a></li>
                <li><a href="">submenu</a></li>
              </ul>
            </li>
            <li><a href="">Link4</a></li>
            <li><a href="">Link5</a></li>
          </ul>
        </div>
        <hr>
        <div class="side-footer">
          <div class="side-socials">
            <h3>Social contacts</h3>
            <div class="card">
              <span>Click here</span>
              <a class="social-link" href="#">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 461.001 461.001" xml:space="preserve"
                  fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path style="fill:#F61C0D;"
                        d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z">
                      </path>
                    </g>
                  </g>
                </svg>
              </a>
              <a class="social-link" href="#">
                <svg fill="#000000" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z">
                    </path>
                  </g>
                </svg>
              </a>
              <a class="social-link" href="#">
                <svg viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                        fill="#5865F2" fill-rule="nonzero"> </path>
                    </g>
                  </g>
                </svg>
              </a>
              <a class="social-link" href="#">
                <svg fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z">
                    </path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <hr>
          <div class="side-profile">
            <a href="#"><img src="/resources/icons8-dashboard-48.png" alt="">Go to dashboard ></a>
            <a href="#"><img src="/resources/icons8-trophy-32.png" alt="">Go to leaderboard ></a>
          </div>
          <hr>
          <div class="side-copy">
            <h5>&copy; 2024 Devraj. All rights reserved. Made with &hearts; by Devraj.</h5>
          </div>
        </div>
      </div>`
    }
];

// Export the data array
export { events, templates };
