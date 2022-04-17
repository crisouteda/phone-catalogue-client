export function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16pt"
      height="16pt"
      viewBox="0 0 311 311.077"
    >
      <path
        fill="currentColor"
        d="M16.035 311.078c-4.097 0-8.195-1.558-11.308-4.695-6.25-6.25-6.25-16.383 0-22.633L283.789 4.687c6.25-6.25 16.383-6.25 22.633 0s6.25 16.383 0 22.637L27.363 306.383a16.045 16.045 0 01-11.328 4.695zm0 0"
      />
      <path
        fill="currentColor"
        d="M295.117 311.078a15.879 15.879 0 01-11.308-4.695L4.727 27.324c-6.25-6.254-6.25-16.386 0-22.636s16.382-6.25 22.636 0L306.422 283.75c6.25 6.25 6.25 16.383 0 22.633-3.137 3.117-7.23 4.695-11.305 4.695zm0 0"
      />
    </svg>
  );
}

export function LoadingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto" }}
      width="28"
      height="28"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke="#fff"
        strokeDasharray="160.22122533307947 55.40707511102649"
        strokeWidth="7"
      >
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
}

export const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 24"
  >
    <path
      fill="currentColor"
      strokeMiterlimit="10"
      strokeWidth="0"
      d="M18.855 18.777H1.145c-.399 0-.758-.207-.961-.554-.2-.348-.2-.762 0-1.11L9.039 1.777c.2-.347.559-.554.961-.554.402 0 .762.207.96.554l8.856 15.336c.2.348.2.762 0 1.11a1.104 1.104 0 01-.96.554zM10 1.88a.448.448 0 00-.39.226L.753 17.441a.448.448 0 000 .454c.082.14.226.226.39.226h17.711a.448.448 0 00.391-.226.448.448 0 000-.454L10.391 2.105A.448.448 0 0010 1.88zm0 14.762a1.63 1.63 0 010-3.262 1.63 1.63 0 010 3.262zm0-2.602a.973.973 0 100 1.946.973.973 0 000-1.946zm0-1.379a1.509 1.509 0 01-1.508-1.508V7.617a1.509 1.509 0 013.016 0v3.535c0 .832-.676 1.508-1.508 1.508zm0-5.894a.854.854 0 00-.852.851v3.535c0 .47.383.852.852.852a.854.854 0 00.852-.852V7.617A.854.854 0 0010 6.766zm0 0"
    ></path>
  </svg>
);
