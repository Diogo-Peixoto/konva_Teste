import { Container, BordContainer, ImageComment } from "./styled";

const IconComment = () => {
  return (
    <Container>
      <BordContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <defs>
            <clipPath id="border-comment">
              <path
                d="M21.9063 43.4106C26.5658 43.4099 31.0927 41.8596 34.7744 39.0038C38.456 36.148 41.0834 32.1488 42.2427 27.6359C43.4021 23.1229 43.0276 18.3526 41.1783 14.0759C39.329 9.7991 36.1099 6.25885 32.0277 4.01244C27.9455 1.76603 23.2321 0.941056 18.6296 1.6674C14.0271 2.39373 9.79689 4.63013 6.6049 8.02451C3.41292 11.4189 1.44047 15.7785 0.998086 20.4169C0.555705 25.0553 1.66852 29.7091 4.16133 33.6456L0.906331 43.4106L10.6713 40.1556C14.0302 42.2878 17.9279 43.417 21.9063 43.4106Z"
                fill="#24958E"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </clipPath>
          </defs>
        </svg>
        <ImageComment>
          <img
            src="https://d3li9lpic85oot.cloudfront.net/180333eb09bc24e1d6d5-filename.png"
            alt=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <defs>
              <clipPath id="image-comment">
                <path
                  d="M20.9062 41.4106C25.3437 41.41 29.6551 39.9335 33.1614 37.2136C36.6678 34.4938 39.17 30.685 40.2742 26.387C41.3783 22.089 41.0217 17.5458 39.2604 13.4727C37.4992 9.39965 34.4333 6.02798 30.5455 3.88854C26.6577 1.74911 22.1688 0.963417 17.7855 1.65517C13.4022 2.34692 9.37338 4.47682 6.33339 7.70956C3.29341 10.9423 1.41488 15.0943 0.993568 19.5118C0.572252 23.9293 1.63207 28.3615 4.00618 32.1106L0.906182 41.4106L10.2062 38.3106C13.4051 40.3412 17.1172 41.4167 20.9062 41.4106Z"
                  fill="#24958E"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </clipPath>
            </defs>
          </svg>
        </ImageComment>
      </BordContainer>
    </Container>
  );
};

export default IconComment;
