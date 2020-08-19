import React from "react";

import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <div>
      <Grid
        container
        lg={12}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <div className="brand">
          <svg
            width="556"
            id="brandlogo"
            height="135"
            viewBox="0 0 556 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="556"
              height="135"
              fill="blue"
            >
              <rect fill="white" width="556" height="135" />
              <path d="M3 3H12.8413V37.3384C15.7205 33.7983 19.1662 31.1315 23.1782 29.3379C27.2375 27.5443 31.7687 26.6475 36.772 26.6475C47.7225 26.6475 55.6994 29.7863 60.7026 36.064C65.7059 42.2944 68.2075 52.4425 68.2075 66.5083V106.086H58.3662V66.3667C58.3662 55.0858 56.667 47.2505 53.2686 42.8608C49.8701 38.424 44.1825 36.2056 36.2056 36.2056C31.6743 36.2056 27.6859 37.126 24.2402 38.9668C20.8418 40.7604 18.1514 43.3564 16.1689 46.7549C14.9417 48.8789 14.0685 51.3097 13.5493 54.0474C13.0773 56.7378 12.8413 61.4578 12.8413 68.2075V106.086H3V3Z" />
              <path d="M151.107 70.2607H80.8016C81.4152 78.7568 84.4832 85.6245 90.0057 90.8638C95.5281 96.103 102.419 98.7227 110.679 98.7227C116.532 98.7227 121.795 97.2122 126.468 94.1914C131.141 91.1234 134.752 86.8753 137.301 81.4473H148.629C145.041 90.085 139.991 96.7166 133.477 101.342C127.011 105.968 119.506 108.281 110.963 108.281C99.6346 108.281 90.0529 104.245 82.2176 96.1738C74.3823 88.1025 70.4646 78.4028 70.4646 67.0747C70.4646 55.2274 74.2879 45.4333 81.9344 37.6924C89.6281 29.9515 99.4458 26.0811 111.387 26.0811C123.093 26.0811 132.628 30.1167 139.991 38.188C147.401 46.2121 151.107 56.667 151.107 69.5527V70.2607ZM140.062 61.8354C138.174 53.1034 134.705 46.5425 129.654 42.1528C124.604 37.716 118.019 35.4976 109.901 35.4976C102.349 35.4976 95.9529 37.8812 90.7137 42.6484C85.4744 47.3685 82.2648 53.7642 81.0848 61.8354H140.062Z" />
              <path d="M142.885 28.2051H154.355L178.427 91.4302L203.632 28.2051H215.244L173.188 131.291H162.497L172.905 105.944L142.885 28.2051Z" />
              <path d="M204.403 80.4561H222.811V80.8809C222.811 84.2793 223.59 86.9225 225.147 88.8105C226.752 90.6514 228.971 91.5718 231.803 91.5718C234.021 91.5718 235.838 90.8874 237.254 89.5186C238.718 88.1025 239.449 86.3325 239.449 84.2085C239.449 82.4621 238.883 80.8809 237.75 79.4648C236.617 78.0016 234.682 76.3968 231.944 74.6504C230.481 73.6592 228.475 72.3848 225.926 70.8271C221.253 67.9007 218.421 65.8711 217.43 64.7383C215.495 62.5671 214.079 60.3722 213.182 58.1538C212.332 55.9354 211.908 53.5518 211.908 51.0029C211.908 44.0645 214.433 38.2588 219.483 33.5859C224.534 28.8659 230.859 26.5059 238.458 26.5059C245.68 26.5059 251.532 28.6535 256.017 32.9487C260.548 37.244 262.813 42.8608 262.813 49.7993V51.0029L244.405 50.9321C244.311 48.0529 243.674 45.8817 242.494 44.4185C241.361 42.908 239.732 42.1528 237.608 42.1528C235.673 42.1528 234.021 42.79 232.652 44.0645C231.283 45.2917 230.599 46.7785 230.599 48.5249C230.599 51.2625 233.643 54.4958 239.732 58.2246C240.724 58.8382 241.526 59.3338 242.14 59.7114C248.276 63.5347 252.547 67.1219 254.954 70.4731C257.409 73.8244 258.636 77.6712 258.636 82.0137C258.636 89.4714 256.064 95.7018 250.919 100.705C245.774 105.661 239.308 108.139 231.519 108.139C223.071 108.139 216.415 105.921 211.554 101.484C206.692 96.9998 204.261 90.8874 204.261 83.1465C204.261 82.9105 204.285 82.4857 204.332 81.8721C204.379 81.2585 204.403 80.7865 204.403 80.4561Z" />
              <path d="M257.212 106.086L277.248 3H295.373L289.284 33.7275C292.069 31.4619 294.972 29.7627 297.993 28.6299C301.061 27.4971 304.294 26.9307 307.693 26.9307C316.802 26.9307 323.717 29.0783 328.437 33.3735C333.157 37.6688 335.517 43.9701 335.517 52.2773C335.517 53.835 335.281 56.2422 334.809 59.499C334.384 62.7087 333.747 66.4375 332.898 70.6855L326.101 106.086H307.409L315.339 64.9507C315.669 63.3459 315.929 61.741 316.118 60.1362C316.307 58.5314 316.401 56.9738 316.401 55.4634C316.401 51.3569 315.363 48.2417 313.286 46.1177C311.209 43.9465 308.188 42.8608 304.223 42.8608C298.512 42.8608 293.934 44.7961 290.488 48.6665C287.042 52.5369 284.517 58.6258 282.912 66.9331L275.337 106.086H257.212Z" />
              <path d="M332.606 106.086L347.687 28.2051H364.254L362.201 38.542C365.505 34.1995 369.304 31.0135 373.6 28.9839C377.942 26.9071 383.04 25.8687 388.893 25.8687H389.459L385.99 44.1353C377.635 44.2769 371.499 45.9761 367.582 49.2329C363.664 52.4425 360.855 58.2954 359.156 66.7915L351.439 106.086H332.606Z" />
              <path d="M437.878 106.086L438.869 100.705C436.179 103.207 433.182 105.071 429.878 106.298C426.574 107.526 422.892 108.139 418.833 108.139C408.071 108.139 399.339 104.623 392.637 97.5898C385.934 90.5098 382.583 81.2585 382.583 69.8359C382.583 65.0215 383.291 60.4194 384.707 56.0298C386.17 51.6401 388.365 47.3921 391.291 43.2856C395.209 37.8576 400.023 33.7039 405.735 30.8247C411.493 27.9455 417.794 26.5059 424.638 26.5059C429.831 26.5059 434.621 27.4971 439.011 29.4795C443.401 31.4619 447.271 34.3883 450.622 38.2588L452.534 28.2051H471.084L455.578 106.086H437.878ZM425.417 42.8608C418.668 42.8608 412.838 45.4805 407.93 50.7197C403.021 55.9118 400.566 62.1895 400.566 69.5527C400.566 76.0192 402.431 81.2349 406.159 85.1997C409.936 89.1646 414.892 91.147 421.028 91.147C427.872 91.147 433.654 88.5509 438.374 83.3589C443.141 78.1196 445.525 71.6768 445.525 64.0303C445.525 57.847 443.613 52.7729 439.79 48.8081C436.014 44.8433 431.223 42.8608 425.417 42.8608Z" />
              <path d="M486.838 106.086L471.758 28.2051H490.166L500.149 83.2881L529.744 28.2051H549.993L507.087 106.086H486.838Z" />
            </mask>
            <path
              d="M3 3H12.8413V37.3384C15.7205 33.7983 19.1662 31.1315 23.1782 29.3379C27.2375 27.5443 31.7687 26.6475 36.772 26.6475C47.7225 26.6475 55.6994 29.7863 60.7026 36.064C65.7059 42.2944 68.2075 52.4425 68.2075 66.5083V106.086H58.3662V66.3667C58.3662 55.0858 56.667 47.2505 53.2686 42.8608C49.8701 38.424 44.1825 36.2056 36.2056 36.2056C31.6743 36.2056 27.6859 37.126 24.2402 38.9668C20.8418 40.7604 18.1514 43.3564 16.1689 46.7549C14.9417 48.8789 14.0685 51.3097 13.5493 54.0474C13.0773 56.7378 12.8413 61.4578 12.8413 68.2075V106.086H3V3Z"
              stroke="#1D1D1D"
              stroke-width="6"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M151.107 70.2607H80.8016C81.4152 78.7568 84.4832 85.6245 90.0057 90.8638C95.5281 96.103 102.419 98.7227 110.679 98.7227C116.532 98.7227 121.795 97.2122 126.468 94.1914C131.141 91.1234 134.752 86.8753 137.301 81.4473H148.629C145.041 90.085 139.991 96.7166 133.477 101.342C127.011 105.968 119.506 108.281 110.963 108.281C99.6346 108.281 90.0529 104.245 82.2176 96.1738C74.3823 88.1025 70.4646 78.4028 70.4646 67.0747C70.4646 55.2274 74.2879 45.4333 81.9344 37.6924C89.6281 29.9515 99.4458 26.0811 111.387 26.0811C123.093 26.0811 132.628 30.1167 139.991 38.188C147.401 46.2121 151.107 56.667 151.107 69.5527V70.2607ZM140.062 61.8354C138.174 53.1034 134.705 46.5425 129.654 42.1528C124.604 37.716 118.019 35.4976 109.901 35.4976C102.349 35.4976 95.9529 37.8812 90.7137 42.6484C85.4744 47.3685 82.2648 53.7642 81.0848 61.8354H140.062Z"
              stroke="#1D1D1D"
              stroke-width="6"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M142.885 28.2051H154.355L178.427 91.4302L203.632 28.2051H215.244L173.188 131.291H162.497L172.905 105.944L142.885 28.2051Z"
              stroke="#1D1D1D"
              stroke-width="6"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M204.403 80.4561H222.811V80.8809C222.811 84.2793 223.59 86.9225 225.147 88.8105C226.752 90.6514 228.971 91.5718 231.803 91.5718C234.021 91.5718 235.838 90.8874 237.254 89.5186C238.718 88.1025 239.449 86.3325 239.449 84.2085C239.449 82.4621 238.883 80.8809 237.75 79.4648C236.617 78.0016 234.682 76.3968 231.944 74.6504C230.481 73.6592 228.475 72.3848 225.926 70.8271C221.253 67.9007 218.421 65.8711 217.43 64.7383C215.495 62.5671 214.079 60.3722 213.182 58.1538C212.332 55.9354 211.908 53.5518 211.908 51.0029C211.908 44.0645 214.433 38.2588 219.483 33.5859C224.534 28.8659 230.859 26.5059 238.458 26.5059C245.68 26.5059 251.532 28.6535 256.017 32.9487C260.548 37.244 262.813 42.8608 262.813 49.7993V51.0029L244.405 50.9321C244.311 48.0529 243.674 45.8817 242.494 44.4185C241.361 42.908 239.732 42.1528 237.608 42.1528C235.673 42.1528 234.021 42.79 232.652 44.0645C231.283 45.2917 230.599 46.7785 230.599 48.5249C230.599 51.2625 233.643 54.4958 239.732 58.2246C240.724 58.8382 241.526 59.3338 242.14 59.7114C248.276 63.5347 252.547 67.1219 254.954 70.4731C257.409 73.8244 258.636 77.6712 258.636 82.0137C258.636 89.4714 256.064 95.7018 250.919 100.705C245.774 105.661 239.308 108.139 231.519 108.139C223.071 108.139 216.415 105.921 211.554 101.484C206.692 96.9998 204.261 90.8874 204.261 83.1465C204.261 82.9105 204.285 82.4857 204.332 81.8721C204.379 81.2585 204.403 80.7865 204.403 80.4561Z"
              stroke="#1D1D1D"
              stroke-width="6"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M257.212 106.086L277.248 3H295.373L289.284 33.7275C292.069 31.4619 294.972 29.7627 297.993 28.6299C301.061 27.4971 304.294 26.9307 307.693 26.9307C316.802 26.9307 323.717 29.0783 328.437 33.3735C333.157 37.6688 335.517 43.9701 335.517 52.2773C335.517 53.835 335.281 56.2422 334.809 59.499C334.384 62.7087 333.747 66.4375 332.898 70.6855L326.101 106.086H307.409L315.339 64.9507C315.669 63.3459 315.929 61.741 316.118 60.1362C316.307 58.5314 316.401 56.9738 316.401 55.4634C316.401 51.3569 315.363 48.2417 313.286 46.1177C311.209 43.9465 308.188 42.8608 304.223 42.8608C298.512 42.8608 293.934 44.7961 290.488 48.6665C287.042 52.5369 284.517 58.6258 282.912 66.9331L275.337 106.086H257.212Z"
              stroke="#1D1D1D"
              stroke-width="6"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M332.606 106.086L347.687 28.2051H364.254L362.201 38.542C365.505 34.1995 369.304 31.0135 373.6 28.9839C377.942 26.9071 383.04 25.8687 388.893 25.8687H389.459L385.99 44.1353C377.635 44.2769 371.499 45.9761 367.582 49.2329C363.664 52.4425 360.855 58.2954 359.156 66.7915L351.439 106.086H332.606Z"
              stroke="#1D1D1D"
              stroke-width="6"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M437.878 106.086L438.869 100.705C436.179 103.207 433.182 105.071 429.878 106.298C426.574 107.526 422.892 108.139 418.833 108.139C408.071 108.139 399.339 104.623 392.637 97.5898C385.934 90.5098 382.583 81.2585 382.583 69.8359C382.583 65.0215 383.291 60.4194 384.707 56.0298C386.17 51.6401 388.365 47.3921 391.291 43.2856C395.209 37.8576 400.023 33.7039 405.735 30.8247C411.493 27.9455 417.794 26.5059 424.638 26.5059C429.831 26.5059 434.621 27.4971 439.011 29.4795C443.401 31.4619 447.271 34.3883 450.622 38.2588L452.534 28.2051H471.084L455.578 106.086H437.878ZM425.417 42.8608C418.668 42.8608 412.838 45.4805 407.93 50.7197C403.021 55.9118 400.566 62.1895 400.566 69.5527C400.566 76.0192 402.431 81.2349 406.159 85.1997C409.936 89.1646 414.892 91.147 421.028 91.147C427.872 91.147 433.654 88.5509 438.374 83.3589C443.141 78.1196 445.525 71.6768 445.525 64.0303C445.525 57.847 443.613 52.7729 439.79 48.8081C436.014 44.8433 431.223 42.8608 425.417 42.8608Z"
              stroke="#1D1D1D"
              stroke-width="6"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M486.838 106.086L471.758 28.2051H490.166L500.149 83.2881L529.744 28.2051H549.993L507.087 106.086H486.838Z"
              stroke="#1D1D1D"
              stroke-width="6"
              mask="url(#path-1-outside-1)"
            />
          </svg>
        </div>
        <div className="note">
          <p>
            Hold on! The site is <del>almost</del> <ins>lol</ins> finished..
            <hr />{" "}
          </p>
        </div>
        <section className="maincontent">
          <h1> But yeah..we can definitely talk, right?</h1>
          <br />{" "}
          <div className="linkbox">
            <span className="mailbox">
              <a href="mailto:reach@heyshrav.me">Write me a mail!</a>
            </span>
            <ul className="links">
              <h4>Important links</h4>
              <li>
                <a href="https://behance.net/heyshrav">Behance</a>
              </li>
              <li>
                <a href="https://dribbble.com/heyshrav">Dribbble</a>
              </li>
              <li>
                <a href="https://instagram.com/heyshrav">Instagram</a>
              </li>
              <li>
                <a href="https://heyshrav.me/assets/BS Shravan - minimalResume.pdf">
                  Minimal Resume Design
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Grid>
    </div>
  );
}

export default Home;
