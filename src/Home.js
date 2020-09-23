import React from "react";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import bsshravan from "./shravanbhat.jpg";
import Resume from "./BS_Shravan_Resume.pdf";
function Home() {
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item sm={9} xs={12} className="logo">
          <svg
            width="75"
            height="128"
            viewBox="0 0 135 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M54 0.373836C23.4694 4.53295 0 29.5393 0 59.7662C0 92.9033 28.2061 119.766 63 119.766C97.7939 119.766 126 92.9033 126 59.7662C126 28.4264 100.771 2.69862 68.5998 0V59.7662H54V0.373836Z"
              fill="black"
            />
            <path
              d="M28.518 64.4902C28.518 62.7982 30.022 61.8582 32.466 61.8582C35.568 61.8582 37.448 63.5502 38.764 65.9942L50.796 59.5082C46.848 52.8342 40.08 49.4502 32.466 49.4502C22.69 49.4502 14.042 54.6202 14.042 64.8662C14.042 81.1282 37.166 78.4022 37.166 83.5722C37.166 85.4522 35.474 86.4862 32.09 86.4862C27.954 86.4862 25.322 84.5122 24.1 80.9402L11.88 87.8962C15.546 95.5102 22.69 99.0822 32.09 99.0822C42.242 99.0822 51.642 94.4762 51.642 83.6662C51.642 66.2762 28.518 69.8482 28.518 64.4902ZM82.0877 49.4502C75.7897 49.4502 71.1837 51.6122 68.0817 55.1842V31.9662H53.9817V97.7662H68.0817V93.3482C71.1837 96.9202 75.7897 99.0822 82.0877 99.0822C94.4017 99.0822 104.554 88.2722 104.554 74.2662C104.554 60.2602 94.4017 49.4502 82.0877 49.4502ZM79.2677 85.7342C72.7817 85.7342 68.0817 81.3162 68.0817 74.2662C68.0817 67.2162 72.7817 62.7982 79.2677 62.7982C85.7537 62.7982 90.4537 67.2162 90.4537 74.2662C90.4537 81.3162 85.7537 85.7342 79.2677 85.7342Z"
              fill="white"
            />
            <path
              d="M115.838 99.0822C120.726 99.0822 124.768 95.0402 124.768 90.1522C124.768 85.2642 120.726 81.2222 115.838 81.2222C110.95 81.2222 106.908 85.2642 106.908 90.1522C106.908 95.0402 110.95 99.0822 115.838 99.0822Z"
              fill="#FF3131"
            />
          </svg>
        </Grid>
        <Grid item className="navLink" justify="center">
          <Link href="/about">About</Link>
          <Link href={Resume}>Resume</Link>
        </Grid>
      </Grid>

      <Grid
        container
        justify="space-evenly"
        direction="column"
        alignItems="center"
        className="heroComponent"
      >
        <Grid item xs={12}>
          <h3 class="wordCarousel">
            <div>
              <ul class="flip3">
                <li>hello</li>
                <li>नमस्ते</li>
                <li>نمستے</li>
              </ul>
            </div>
          </h3>
        </Grid>

        <br />
        {/* 2 sections of hero goes below */}
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          alignContent="center"
          xs={12}
          className="heroSection1"
        >
          <Grid item sm={7}>
            <h1>
              I'm <span>Shravan Bhat.</span>
            </h1>
            <h2>UI Designer, Web Developer.</h2>
            <br />
            <p>
              A 20 years old <b>Senior Undergrad Engineering Student</b> and{" "}
              <b>Microsoft Student Ambassador</b> currently living in Bangalore.
              Highly Passionate about creating meaningful and useful{" "}
              <b>
                design experiences.
                <br />
              </b>{" "}
              My interest in <b>Web Development</b> allows me to stay connected
              with the practicalities of design when working on front-end Web
              Projects. You will find me clicking pictures or singing at my
              highest note in my free time.
              <i>&nbsp;Wait are you even reading this? -_-</i>
            </p>

            <Grid item className="navLink">
              {" "}
              <br />
              <h5>
                <i class="fas fa-map-marker"></i> 12.9075723° N , 77.5201119° E
              </h5>
              <br />
              <Link href="https://www.linkedin.com/in/heyshrav">LinkedIn</Link>
              <Link href="https://www.be.net/heyshrav">Behance</Link>
              <Link href="https://www.instagram.com/heyshrav">
                Instagram
              </Link>{" "}
              <br />
            </Grid>
          </Grid>
          <Grid item>
            <img className="imgResponsive" src={bsshravan} alt="heyshrav" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justify="space-around"
        className="portfolioSec"
        alignItems="center"
      >
        <Grid item>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 539.658 806.889"
            x="0px"
            y="0px"
            width="240px"
            height="407px"
            version="1.1"
          >
            <g id="b29c6eed-8ab2-4e2c-b0d2-3911a1e1c2fa" data-name="Layer 2">
              <g
                id="a0f46901-0c8f-417c-ae6a-a9abadedc8d5"
                data-name="it_developer"
              >
                <path
                  d="M345.5,311.889a252.17,252.17,0,0,1,36,1s1.5-11.5-7.5-9.5S345.5,311.889,345.5,311.889Z"
                  fill="#fece2f"
                />
                <path
                  d="M372,287.389c-42.037-5.733-100-28-132-38s-46-7-46-7c17-4,36-26,72-74,39.477-52.636,13-130-35-130-41.049,0-130,37-177,114-59.186,96.964-49.5,170.5-24.5,240.5,0,0,66-53,183-72,2-3-7.126-15.427-8-17,60,4,94,0,114,1,7.84.392,27.5,11.5,36.5,5.5,8.362-5.575,24-9,25-4,2.386,11.929,4,15,10,15C393,314.389,394,290.389,372,287.389Z"
                  fill="#fece2f"
                />
                <path
                  d="M382.4,291.2c13.6,4.188,20.6,8.188,23.6,13.188,2.121,3.535,8.743,19.419,4,21-3,1-7-3-7-3"
                  fill="#fece2f"
                />
                <path
                  d="M408.979,327.048c-3.332,0-6.625-3.184-7.04-3.6a1.5,1.5,0,0,1,2.122-2.121c1.094,1.089,3.873,3.178,5.464,2.638.089-.029.274-.091.435-.528,1.261-3.407-3.03-14.585-5.246-18.278-2.809-4.681-9.826-8.545-22.753-12.526a1.5,1.5,0,0,1,.883-2.867c13.871,4.272,21.181,8.415,24.442,13.85,1.443,2.4,7.471,15.5,5.488,20.861a3.658,3.658,0,0,1-2.3,2.334A4.723,4.723,0,0,1,408.979,327.048Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M381.013,290.369C398,298.389,404,314.389,403,321.389s-10.9-5.143-11.4-10"
                  fill="#fece2f"
                />
                <path
                  d="M401.3,325.012h-.062c-4.2-.083-10.706-9.3-11.134-13.469a1.5,1.5,0,0,1,2.985-.306c.252,2.461,3.678,7.634,6.544,9.884a3.344,3.344,0,0,0,1.668.891,4,4,0,0,0,.211-.834c.881-6.161-4.565-21.625-21.142-29.452a1.5,1.5,0,0,1,1.281-2.713c18.2,8.592,23.849,25.465,22.831,32.589C404.049,324.654,402.16,325.012,401.3,325.012Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M135.037,201.306c-4.537,31.583-14.812,88.606,20.326,98.594,0,0-44.53-2.218-39.7-29.615S117.574,247.723,135.037,201.306Z"
                  fill="#fff"
                />
                <path
                  d="M223.232,261.525S282,281.389,306,282.389s23.372-2.846,44.686,1.077c-41.372-11.154-115.941-36.875-129.314-38.976C222.628,251.288,224.464,253.661,223.232,261.525Z"
                  fill="#fff"
                />
                <path
                  d="M29.994,392.844C64.5,362.889,179.779,320.156,235,319.389c72-1,149,9,171,24,53.194,36.268-57,220-116,268-16-10-61-43-61-43s76-97,91-148c0,0-16-1.324-49.752,10.088S194.546,453.1,112.5,451.889C44.5,450.889,53.5,436.889,29.994,392.844Z"
                  fill="#fff"
                />
                <path
                  d="M391.676,54.359c0-21-12.248-56.866-66.489-52.492s-64.74,30.62-63.805,48.04l22.6,78.011s27.248,15.117,57.157.413l0,0c8.953,3.111,13.793,4.762,18.168,1.262s0-7,2.143-15.752l-.017.011C381.9,94.25,391.676,67.122,391.676,54.359Z"
                  fill="#fece2f"
                />
                <path
                  d="M151.121,64.389s57.879-16,86.879-4,39,25,45,34c-7-22-7.482-43.538-43.759-55.214C213.5,30.889,151.121,64.389,151.121,64.389Z"
                  fill="#fff"
                />
                <path
                  d="M177.349,329.524C197.5,339.889,208.5,348.889,235.5,339.889s46-15,69-8,23,11,37,8,76.577-1.131,75.789,60.934c0,0,11.729-41.318-9.53-56.126s-84-21.237-117.631-24.022S212.2,317.159,177.349,329.524Z"
                  fill="#fece2f"
                />
                <path
                  d="M291,710.389c-4.472-4.472-20-24-25-54-1.264-7.582-2.4-13.5-3.392-18.119a30.043,30.043,0,0,1,8.974-28.412l6.743-6.223-33.752-23.923L230,599.389s-24,9-37,27c-7.242,10.027-8,25,0,33s29,14,40,24,38,52,53,48S296,715.389,291,710.389Z"
                  fill="#fece2f"
                />
                <path
                  d="M135.083,453.064c-5.883,0-11.31-.071-16.115-.175-4.566-.1-8.8-.128-12.9-.155-39.93-.268-56.458-.379-79.48-64.84C.422,314.63-5.147,246.411,52.72,151.608c26.7-43.735,64.368-71.123,91.271-86.4C174.758,47.74,208.1,36.889,231,36.889c19.1,0,35.985,11.846,46.313,32.5,12.9,25.809,14.782,66.709-10.113,99.9-30.454,40.606-48.809,62.765-64.355,71.22,7.5.292,19.783,1.88,37.6,7.448,7.634,2.386,16.91,5.525,26.733,8.849,32.583,11.025,73.133,24.748,105.023,29.1,7.94,1.083,13.769,4.816,17.325,11.1,4.875,8.611,3.987,20,1.851,24.98a1.5,1.5,0,0,1-1.379.909c-7.485,0-9.168-4.691-11.471-16.206-.04-.2-.342-.434-.809-.627-4.506-1.869-19.716.8-26.888,5.581-6.531,4.354-14.977,1.043-22.426-1.878-3.6-1.414-7.008-2.748-9.481-2.872-6.73-.337-16.674-.216-29.265-.065-24.913.3-59.035.711-98.76-1.936-59.946-4-72-10.96-76.334-25.056-2.123-6.9,1.633-37.369,16.674-73.517,13.135-31.569,38.358-75.614,83.925-106.17a1.5,1.5,0,0,1,1.67,2.492c-44.945,30.14-69.849,73.644-82.825,104.83-14.558,34.988-18.53,65.134-16.576,71.482,3.837,12.475,15.84,19.09,73.666,22.945,39.608,2.641,73.661,2.23,98.524,1.93,12.643-.152,22.627-.273,29.451.069,2.963.147,6.588,1.569,10.427,3.075,6.767,2.652,14.436,5.658,19.666,2.175,7.537-5.024,23.911-8.249,29.7-5.857a3.89,3.89,0,0,1,2.6,2.811c2.243,11.217,3.68,13.475,7.5,13.76,1.435-4.408,2.147-13.955-2.054-21.376-3.071-5.423-8.158-8.655-15.121-9.6-32.173-4.387-72.875-18.161-105.579-29.227-9.805-3.319-19.066-6.452-26.665-8.827-31.108-9.72-45.1-6.993-45.242-6.964a1.5,1.5,0,0,1-.655-2.928c16.587-3.9,36.157-26.791,71.144-73.44,24.126-32.167,22.321-71.775,9.829-96.759-9.8-19.6-25.7-30.841-43.629-30.841-22.413,0-55.186,10.7-85.527,27.93-26.6,15.1-63.831,42.165-90.193,85.351C-1.967,246.959,3.536,314.431,29.413,386.884c22.316,62.485,37.117,62.584,76.674,62.85,4.109.027,8.358.055,12.945.155,31.581.685,90.129-.079,127.481-12.919l5.331-1.838c29.889-10.327,60.793-21,91.387-16.226a1.5,1.5,0,0,1-.462,2.965c-29.858-4.667-60.4,5.889-89.946,16.1l-5.336,1.841C215.411,450.833,168.092,453.064,135.083,453.064Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M290,612.889a1.494,1.494,0,0,1-.8-.228c-15.864-9.915-60.642-42.732-61.092-43.062a1.5,1.5,0,0,1-.294-2.135c.758-.968,75.994-97.358,90.742-147.5a1.5,1.5,0,1,1,2.878.846c-14,47.587-81.469,135.845-90.308,147.278,7.22,5.277,43.831,31.97,58.754,41.453C339.5,568.467,421.236,437.558,418.541,373.824c-.58-13.712-5.084-23.535-13.386-29.2-21.039-14.345-95.767-24.784-170.134-23.739-55.62.772-164.326,39.715-204.062,73.1a1.5,1.5,0,0,1-1.93-2.3c19.518-16.4,55.1-34.488,97.634-49.625,41.513-14.777,82.005-23.817,108.316-24.182,74.907-1.047,150.388,9.616,171.866,24.261,9.128,6.223,14.071,16.837,14.693,31.547,2.743,64.851-80.638,198.215-130.592,238.855A1.489,1.489,0,0,1,290,612.889Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M283.92,733.154c-11.5,0-26.942-18.952-39.518-34.387-5.032-6.177-9.378-11.511-12.411-14.268-5.51-5.01-13.624-9-21.471-12.855-7.47-3.672-14.526-7.14-18.581-11.2-8.128-8.128-8.2-23.8-.155-34.938,12.323-17.064,33.887-26.034,37.27-27.364l14.313-19.327a1.5,1.5,0,1,1,2.41,1.785l-14.572,19.676a1.489,1.489,0,0,1-.678.512c-.236.089-23.737,9.064-36.311,26.474-7.218,9.995-7.288,23.929-.155,31.061,3.7,3.7,10.542,7.065,17.783,10.623,8.034,3.95,16.342,8.034,22.165,13.328,3.2,2.909,7.611,8.323,12.719,14.593,11.576,14.21,29.077,35.684,38.885,33.068,4.889-1.3,7.793-3.548,8.632-6.669,1.093-4.071-1.466-8.982-4.306-11.822-.195-.195-19.607-19.943-25.418-54.813-1.149-6.891-2.286-12.963-3.379-18.051a31.686,31.686,0,0,1,9.421-29.83l6.745-6.222a1.5,1.5,0,0,1,2.035,2.206L272.6,610.96a28.671,28.671,0,0,0-8.524,26.994c1.1,5.133,2.248,11.253,3.4,18.188,5.656,33.933,24.393,53,24.582,53.186,3.544,3.545,6.491,9.472,5.081,14.721-.782,2.909-3.282,6.8-10.755,8.789A9.543,9.543,0,0,1,283.92,733.154Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M313.608,136.2a68.992,68.992,0,0,1-30.349-6.971,1.5,1.5,0,0,1,1.454-2.624c.291.161,29.483,15.9,59.84-1.8,30.378-17.72,45.624-54.713,45.624-70.443,0-7.064-1.515-24.891-15.543-37.833C363.3,6.066,346.706,1.637,325.307,3.363c-58.342,4.705-63.093,34.061-62.427,46.464a1.5,1.5,0,1,1-3,.161,39.125,39.125,0,0,1,11.649-30.053c11.006-11,29.017-17.586,53.533-19.563,22.255-1.793,39.624,2.9,51.6,13.949,14.9,13.746,16.509,32.579,16.509,40.038,0,15.387-14.227,53.851-47.113,73.035A63.655,63.655,0,0,1,313.608,136.2Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M300.689,81.23a1.491,1.491,0,0,1-.855-.269c-6.068-4.222-8.21-10.462-5.729-16.694,2.624-6.586,9.657-11.192,15.65-10.3,3.579.542,9.742,3.456,10.8,16.9a1.5,1.5,0,0,1-1.377,1.613,1.518,1.518,0,0,1-1.614-1.377c-.666-8.43-3.6-13.46-8.26-14.165-4.635-.714-10.314,3.165-12.414,8.442-1.152,2.891-2.078,8.439,4.654,13.121a1.5,1.5,0,0,1-.858,2.732Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M379.146,81.709c-4.884,0-7-3.944-9.058-7.8-2.316-4.324-4.709-8.8-11.107-10.217-15.131-3.359-39.471,5.746-39.714,5.838a1.5,1.5,0,0,1-1.063-2.8c1.031-.391,25.433-9.519,41.428-5.961,7.741,1.72,10.713,7.269,13.1,11.728,2.879,5.376,4.464,8.333,12.262,4.465a1.5,1.5,0,1,1,1.334,2.688A16.543,16.543,0,0,1,379.146,81.709Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M353.182,93.728c-6.576-6.576-10.5-7-12.248-5.249s0,8.748,4.375,14,7,7.874,11.373,7S356.682,97.227,353.182,93.728Z"
                  fill="#fff"
                />
                <path
                  d="M295.443,76.856a1.145,1.145,0,0,1-.117,0c-11.817-.909-19.715-9.19-20.045-9.542a1.5,1.5,0,0,1,2.187-2.055h0c.073.078,7.461,7.788,18.089,8.607a1.5,1.5,0,0,1-.114,2.995Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M355.063,111.146c-4.148,0-7-3.023-10.907-7.709-4.267-5.121-7.067-13.234-4.282-16.019,1.7-1.7,5.833-3.286,14.369,5.249h0c3.036,3.036,6.791,11.429,5.515,15.645a3.59,3.59,0,0,1-2.782,2.635A9.819,9.819,0,0,1,355.063,111.146ZM343.241,89.1a1.7,1.7,0,0,0-1.246.44c-.741.76.03,6.655,4.466,11.978,4.54,5.448,6.6,7.151,9.927,6.488.155-.031.349-.07.5-.562.832-2.749-2.22-10.109-4.765-12.655h0C348.063,90.729,345,89.1,343.241,89.1Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M349.39,106.967s.669-8.687,8.355-4.839C358.244,107.2,358.721,112.332,349.39,106.967Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M332.779,133.231a1.507,1.507,0,0,1-.547-.1,7.264,7.264,0,0,1-4.558-4.341c-1.213-3.513.94-7.23,1.033-7.386a1.5,1.5,0,0,1,2.586,1.52c-.036.063-1.54,2.719-.779,4.9a4.374,4.374,0,0,0,2.812,2.516,1.5,1.5,0,0,1-.547,2.9Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M353.7,133.064c-3.521,0-7.649-1.435-13.053-3.313a1.5,1.5,0,0,1,.985-2.834c9.236,3.21,13.129,4.4,16.738,1.509,1.665-1.332,1.626-2.4,1.268-5.287a24.656,24.656,0,0,1,.355-9.65,1.5,1.5,0,1,1,2.914.712,21.752,21.752,0,0,0-.292,8.569c.354,2.855.689,5.552-2.37,8A9.982,9.982,0,0,1,353.7,133.064Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M369.805,88.479c-1.75-1.75-4.812-3.937-8.311-2.188s4.374,7.874,6.124,7.874S373.742,92.416,369.805,88.479Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M381.2,314.889c-.052,0-.1,0-.156-.008-9.513-.98-37.762-.992-38.046-.992a1.5,1.5,0,0,1,0-3c1.167,0,28.688.012,38.354,1.008a1.5,1.5,0,0,1-.152,2.992Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M435,340.389l-129.208-21.3a6.039,6.039,0,0,1-5.032-6.484h0a6.039,6.039,0,0,1,7.084-5.418L437,330.389"
                  fill="#fece2f"
                />
                <path
                  d="M435,341.889a1.589,1.589,0,0,1-.246-.02l-129.208-21.3a7.54,7.54,0,1,1,2.561-14.86l129.157,23.2a1.5,1.5,0,1,1-.532,2.953l-129.156-23.2a4.541,4.541,0,0,0-5.324,4.074,4.562,4.562,0,0,0,3.782,4.873l129.208,21.3a1.5,1.5,0,0,1-.242,2.981Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M444.1,328.837l83.353-101.124a6.04,6.04,0,0,1,8.132-1.116h0a6.039,6.039,0,0,1,1.15,8.844L452,335.389"
                  fill="#fece2f"
                />
                <path
                  d="M452,336.889a1.5,1.5,0,0,1-1.144-2.47l84.733-99.948a4.538,4.538,0,0,0-.865-6.646,4.56,4.56,0,0,0-6.112.839L445.255,329.791a1.5,1.5,0,0,1-2.315-1.908l83.354-101.124a7.538,7.538,0,1,1,11.584,9.649l-84.733,99.951A1.5,1.5,0,0,1,452,336.889Z"
                  fill="#1a1a1a"
                />
                <circle cx="443" cy="337.389" r="9" fill="#fece2f" />
                <path
                  d="M443,347.889a10.5,10.5,0,1,1,10.5-10.5A10.512,10.512,0,0,1,443,347.889Zm0-18a7.5,7.5,0,1,0,7.5,7.5A7.508,7.508,0,0,0,443,329.889Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M302.343,71.689a1.5,1.5,0,0,1-1.482-1.276,6.105,6.105,0,0,1,3.21-6.473,7.923,7.923,0,0,1,8.962,1.067,1.5,1.5,0,1,1-1.967,2.266,4.9,4.9,0,0,0-5.548-.7,3.144,3.144,0,0,0-1.69,3.395,1.5,1.5,0,0,1-1.259,1.708A1.574,1.574,0,0,1,302.343,71.689Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M177.35,303.855a1.5,1.5,0,0,1-.482-2.921c2.28-.773,55.712-19.351,43.669-55.85a1.5,1.5,0,0,1,2.85-.939c10.351,31.374-23.765,52.244-45.556,59.631A1.524,1.524,0,0,1,177.35,303.855Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M204,277.889a1.5,1.5,0,0,1-.855-2.733c12.1-8.377,9.008-31.621,8.976-31.855a1.5,1.5,0,0,1,2.971-.414c.143,1.029,3.364,25.317-10.239,34.735A1.488,1.488,0,0,1,204,277.889Z"
                  fill="#1a1a1a"
                />
                <polyline
                  points="144 492.389 144 582.389 165 582.389 165 492.389"
                  fill="#fece2f"
                />
                <path
                  d="M165,583.889H144a1.5,1.5,0,0,1-1.5-1.5v-90a1.5,1.5,0,0,1,3,0v88.5h18v-88.5a1.5,1.5,0,0,1,3,0v90A1.5,1.5,0,0,1,165,583.889Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M159,301.889a1.5,1.5,0,0,1-.292-2.971c.2-.039,19.812-4.043,31.394-12.729a1.5,1.5,0,1,1,1.8,2.4c-12.132,9.1-31.776,13.105-32.606,13.271A1.571,1.571,0,0,1,159,301.889Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M94,477.389c24,5,26.863,19,60,19s36-14,60-19"
                  fill="#fece2f"
                />
                <path
                  d="M154,497.889c-20.195,0-29.592-5.228-38.679-10.282-6-3.336-12.195-6.785-21.627-8.749a1.5,1.5,0,1,1,.612-2.938c9.879,2.059,16.282,5.62,22.473,9.065,9.157,5.093,17.8,9.9,37.221,9.9s28.064-4.811,37.221-9.9c6.191-3.445,12.594-7.006,22.473-9.065a1.5,1.5,0,0,1,.612,2.938c-9.432,1.964-15.631,5.413-21.627,8.749C183.592,492.661,174.2,497.889,154,497.889Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M264.194,647.669a1.475,1.475,0,0,1-.364-.045c-17.9-4.463-22.858-19.67-26.842-31.889-2.233-6.852-4.163-12.77-7.794-15.08a1.5,1.5,0,0,1,1.612-2.532c4.539,2.889,6.622,9.281,9.035,16.682,3.949,12.115,8.427,25.848,24.716,29.909a1.5,1.5,0,0,1-.363,2.955Z"
                  fill="#1a1a1a"
                />
                <rect
                  x="28"
                  y="451.389"
                  width="252"
                  height="26"
                  rx="13"
                  fill="#1a1a1a"
                />
                <path
                  d="M267,478.889H41a14.5,14.5,0,0,1,0-29H267a14.5,14.5,0,0,1,0,29Zm-226-26a11.5,11.5,0,0,0,0,23H267a11.5,11.5,0,0,0,0-23Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M385.661,78.306c-16.514,8.2-10.607-12.574-26.354-16.073s-40.572,5.9-40.572,5.9S315,48.763,301.281,57.685s-3.215,18.546-3.215,18.546-18.468-1.2-25.544-12.851-11.2-14.27-11.2-14.27-1.773-32.511,37.17-42.5,64.424-4.168,77.929,9.544S397.143,50.637,385.661,78.306Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M212.194,322.827a1.513,1.513,0,0,1-.221-.016,1.5,1.5,0,0,1-1.264-1.7c1.063-7.2-7.666-15.791-7.755-15.877a1.5,1.5,0,0,1,2.091-2.152c.405.394,9.92,9.747,8.631,18.468A1.5,1.5,0,0,1,212.194,322.827Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M343.5,418.889c13.865,1.891,1.761,15.695-19,24-10,4-23.477,21.446-26,26,0,0,21-42,22-50Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M216.5,87.889c-14-5-29,9-30,18s-9.5,12.5-17.5,19.5-2,14-8,20c-26.618,26.618-30.5,49.5-38.5,87.5,4-17,28-63,28-63l31-41,35-26C220.5,99.889,230.5,92.889,216.5,87.889Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M293.541,131.731s.978-7.1-10.986-46.393a75.572,75.572,0,0,1,1.293,43.128C290.412,130.728,293.541,131.731,293.541,131.731Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M232.9,208.762c-19.989,20.127-61.9,22.627-61.9,34.627s20.5-2.5,40.5.5"
                  fill="#1a1a1a"
                />
                <path
                  d="M291,710.389c-4.472-4.472-20-24-25-54-1.264-7.582-.508-4.884-1.5-9.5-22-3-26-39-34.5-47.5-11.5,3.5-24,9-37,27-7.242,10.027-8,25,0,33s29,14,40,24,38,52,53,48S296,715.389,291,710.389Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M284.672,676.138c-4.08,0-7.311-5.089-10.705-10.438-3.269-5.147-6.973-10.983-11.261-11.84l.588-2.942c5.546,1.11,9.615,7.52,13.205,13.175,3.225,5.078,6.26,9.879,8.987,8.887,6.269-2.287,5.578-7.092,4.61-9.752-3.12-8.567-16.457-17.247-31.083-11.929l-1.026-2.82c16.38-5.948,31.38,3.979,34.928,13.722,2.233,6.131-.22,11.341-6.4,13.6A5.336,5.336,0,0,1,284.672,676.138Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M284.566,687.916c-4.669,0-8.078-6.707-12-14.423-3.517-6.92-7.5-14.762-11.859-15.633l.588-2.942c5.781,1.156,9.932,9.321,13.946,17.216,3.128,6.153,6.7,13.114,9.573,12.767.149-.019.4-.05.608-.661,1.279-3.694-2.863-15.529-10.384-23.138-4.006-4.053-10.394-8.351-18.062-5.79l-.95-2.846c7.234-2.414,14.543-.152,21.146,6.527,8.273,8.371,12.829,21.194,11.085,26.23a3.683,3.683,0,0,1-3.069,2.654A4.85,4.85,0,0,1,284.566,687.916Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M281.5,567.389a1.5,1.5,0,0,1-1.118-2.5c1.089-1.22,108.8-122.555,99.582-166.909a17.005,17.005,0,0,0-10.092-12.73c-26.5-12.235-71.425-4.748-114.864,2.489-41.145,6.857-80.006,13.334-101.653,3a1.5,1.5,0,1,1,1.292-2.707c20.79,9.921,59.2,3.523,99.868-3.254,43.888-7.313,89.272-14.875,116.615-2.254A20.074,20.074,0,0,1,382.9,397.37c9.523,45.826-95.793,164.489-100.281,169.518A1.5,1.5,0,0,1,281.5,567.389Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M237.062,589.854S269,600.389,278,604.389c-13-11-34-24-34-24Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M209.5,322.889c-33.854,3.061-148.5,59.5-171.5,88.5l-8-19S99.354,341.828,209.5,322.889Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M302.5,805.389h-13a4,4,0,0,1-4-4V774.772a29.471,29.471,0,0,0-11.21-23.208l-96.7-76.743a50.662,50.662,0,0,1-19.077-36.85l20.966-1.164a29.654,29.654,0,0,0,11.165,21.564l96.7,76.743A50.358,50.358,0,0,1,306.5,774.772v26.617A4,4,0,0,1,302.5,805.389Z"
                  fill="#fece2f"
                />
                <path
                  d="M5.5,805.389h13a4,4,0,0,0,4-4V774.772a29.471,29.471,0,0,1,11.21-23.208l96.7-76.743a50.662,50.662,0,0,0,19.077-36.85l-20.966-1.164a29.654,29.654,0,0,1-11.165,21.564l-96.7,76.743A50.358,50.358,0,0,0,1.5,774.772v26.617A4,4,0,0,0,5.5,805.389Z"
                  fill="#fece2f"
                />
                <path
                  d="M1.5,793.889h21a0,0,0,0,1,0,0v8a4,4,0,0,1-4,4H5.5a4,4,0,0,1-4-4v-8A0,0,0,0,1,1.5,793.889Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M302.5,806.889h-13a5.507,5.507,0,0,1-5.5-5.5V774.772a27.979,27.979,0,0,0-10.643-22.033L176.661,676a52.169,52.169,0,0,1-19.642-37.941,1.5,1.5,0,0,1,1.415-1.581l20.966-1.164a1.488,1.488,0,0,1,1.581,1.415,28.159,28.159,0,0,0,10.6,20.473l96.7,76.743A51.847,51.847,0,0,1,308,774.772v26.617A5.507,5.507,0,0,1,302.5,806.889Zm-142.38-167.5a49.168,49.168,0,0,0,18.406,34.262l96.7,76.743A30.965,30.965,0,0,1,287,774.772v26.617a2.5,2.5,0,0,0,2.5,2.5h13a2.5,2.5,0,0,0,2.5-2.5V774.772a48.868,48.868,0,0,0-18.588-38.483l-96.7-76.743a31.155,31.155,0,0,1-11.611-21.16Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M18.5,806.889H5.5a5.507,5.507,0,0,1-5.5-5.5V774.772A51.847,51.847,0,0,1,19.723,733.94l96.7-76.743a28.159,28.159,0,0,0,10.6-20.473,1.491,1.491,0,0,1,1.581-1.415l20.966,1.164a1.5,1.5,0,0,1,1.415,1.581A52.169,52.169,0,0,1,131.339,676l-96.7,76.744A27.979,27.979,0,0,0,24,774.772v26.617A5.507,5.507,0,0,1,18.5,806.889Zm111.4-168.5a31.155,31.155,0,0,1-11.611,21.16l-96.7,76.743A48.868,48.868,0,0,0,3,774.772v26.617a2.5,2.5,0,0,0,2.5,2.5h13a2.5,2.5,0,0,0,2.5-2.5V774.772a30.965,30.965,0,0,1,11.777-24.383l96.7-76.743a49.168,49.168,0,0,0,18.406-34.262Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M144,616.389v185a4,4,0,0,0,4,4h13a4,4,0,0,0,4-4v-185"
                  fill="#fece2f"
                />
                <path
                  d="M195.467,294S277.5,305.889,314.5,303.889c-63,2-120.79.932-141.4-1.534C182.9,301.423,195.467,294,195.467,294Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M144,793.889h21a0,0,0,0,1,0,0v8a4,4,0,0,1-4,4H148a4,4,0,0,1-4-4v-8A0,0,0,0,1,144,793.889Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M161,806.889H148a5.506,5.506,0,0,1-5.5-5.5v-185a1.5,1.5,0,0,1,3,0v185a2.5,2.5,0,0,0,2.5,2.5h13a2.5,2.5,0,0,0,2.5-2.5v-185a1.5,1.5,0,0,1,3,0v185A5.506,5.506,0,0,1,161,806.889Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M268.5,594.889c14,1,10.665,6.691,31-15,15-16,24-13,39-32s35.113-44.5,35.113-44.5-57.113,89.5-84.113,107.5A182.968,182.968,0,0,1,268.5,594.889Z"
                  fill="#1a1a1a"
                />
                <rect
                  x="128"
                  y="582.389"
                  width="52"
                  height="66"
                  rx="3"
                  fill="#fece2f"
                />
                <path
                  d="M177,649.889H131a4.505,4.505,0,0,1-4.5-4.5v-60a4.5,4.5,0,0,1,4.5-4.5h46a4.5,4.5,0,0,1,4.5,4.5v60A4.505,4.505,0,0,1,177,649.889Zm-46-66a1.5,1.5,0,0,0-1.5,1.5v60a1.5,1.5,0,0,0,1.5,1.5h46a1.5,1.5,0,0,0,1.5-1.5v-60a1.5,1.5,0,0,0-1.5-1.5Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M356.837,126.364a3.194,3.194,0,0,1-2.556-1.029c-.818-.941-1.337-2.8.839-6.31a36.908,36.908,0,0,1,14.219-12.344c3.782-1.66,5.548-.885,6.366.057h0c.818.942,1.337,2.8-.839,6.311a36.888,36.888,0,0,1-14.219,12.344A9.693,9.693,0,0,1,356.837,126.364Zm-.272-3.011c.854.249,4.784-.926,10.026-5.476s6.959-8.273,6.83-9.156c-.858-.263-4.783.925-10.025,5.476S356.437,122.47,356.565,123.353Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M372.5,115.345a1.5,1.5,0,0,1-1.154-.541c-.3-.356-29.845-35.688-52.846-45.059a1.5,1.5,0,0,1,1.133-2.777c23.7,9.654,52.793,44.442,54.019,45.918a1.5,1.5,0,0,1-1.152,2.459Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M144,510.065s13-8.558,21-2.117V495.79s-15,1.624-21,.111Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M144,511.566a1.5,1.5,0,0,1-1.5-1.5V495.9a1.5,1.5,0,0,1,1.866-1.455c5.671,1.429,20.325-.132,20.474-.148a1.5,1.5,0,0,1,1.661,1.491v12.157a1.5,1.5,0,0,1-2.44,1.168c-7.069-5.69-19.115,2.124-19.236,2.2A1.5,1.5,0,0,1,144,511.566Zm1.5-13.861v9.767c3.824-2,11.624-5.212,18-2.219v-7.808C159.823,497.782,150.961,498.456,145.5,497.705Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M128,593.359s28.5-6.411,52-.941c0-6.059,2.618-9.529-5.441-10.029s-42,0-42,0-6.059-.5-5.059,5.5S128,593.359,128,593.359Z"
                  fill="#fff"
                />
                <path
                  d="M177,649.889H131a4.505,4.505,0,0,1-4.5-4.5v-60a4.5,4.5,0,0,1,4.5-4.5h46a4.5,4.5,0,0,1,4.5,4.5v60A4.505,4.505,0,0,1,177,649.889Zm-46-66a1.5,1.5,0,0,0-1.5,1.5v60a1.5,1.5,0,0,0,1.5,1.5h46a1.5,1.5,0,0,0,1.5-1.5v-60a1.5,1.5,0,0,0-1.5-1.5Z"
                  fill="#1a1a1a"
                />
                <path
                  d="M46.506,331.892a11,11,0,0,1-10.047-6.511c-18.656-41.7-.981-88.485-.22-90.457a11,11,0,0,1,20.53,7.909h0c-.153.4-15.088,40.348-.228,73.564a11.006,11.006,0,0,1-10.035,15.5Z"
                  fill="#fff"
                />
                <path
                  d="M61.5,211.892a11.007,11.007,0,0,1-10.1-15.336c2.533-5.912,8.963-19.386,15.159-28.061a11,11,0,0,1,17.9,12.787c-4.19,5.868-9.743,16.713-12.841,23.94A11,11,0,0,1,61.5,211.892Z"
                  fill="#fff"
                />
                <path
                  d="M285.5,793.889h21a0,0,0,0,1,0,0v8a4,4,0,0,1-4,4h-13a4,4,0,0,1-4-4v-8A0,0,0,0,1,285.5,793.889Z"
                  fill="#1a1a1a"
                />
              </g>
            </g>
          </svg>
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>
            Scrubbing the portfolio a little!
            <br />I will update this soon! (hopefully)
          </h2>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
